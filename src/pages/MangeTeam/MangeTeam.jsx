import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import NavBar from "../../components/NavBar/NavBar";
import { StyledDiv } from "../CreateUser/style";
import Content from "../../components/ContentPage/Content";
import ModalComponent from '../../components/Modal/Modal';
import { tokens } from "../../utils/theme";
import {UpdateIcon,DeleteIcon} from './style'
import { updateUser,deleteUser, resend } from "../../services/Api";
import { toast } from "react-toastify";
import { useCallback } from "react";


const ManageTeam = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const token = localStorage.getItem("token");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  const fetchUsers = useCallback( async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      if (response.data.data.status === 200) {
        setUsers(response.data.data.users);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error(error.message);
    }
  },[token]);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  const resendpassword = async (uid) => {
    try {
      const response = await resend(uid,token);
      if (response.data.status === 200) {
        toast.success(response.data.message);
      }
    }catch (error) {
      console.error("Error deleting user:", error);
      toast.error(error.response.data.message);
    }
  };
    const handleExpand = (userUid) => {
      const selected = users.find((user) => user.uid === userUid);
      setSelectedUser(selected);
      setIsUpdate(true);
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setSelectedUser(null);
      setIsUpdate(false); 
      setIsModalOpen(false);
    };
  

  const columns = [
    { field: "uid", headerName: "ID",flex: 1 },
    { field: "username", headerName: "Username", flex: 1,cellClassName: "name-column--cell" },
    { field: "fullname", headerName: "Full Name", flex: 1,cellClassName: "name-column--cell" },
    { field: "email", headerName: "Email", flex: 1,cellClassName: "name-column--cell" },
    { field: "role", headerName: "Role", flex: 1,cellClassName: "name-column--cell" },
    { field: "verified", headerName: "Verified", flex: 1,cellClassName: "name-column--cell" },
    { field: "resend-email", headerName: "Resend-email", flex: 1,cellClassName: "password-column--cell",renderCell: (params) => (
      <span style={{ color:colors.greenAccent[500],cursor:"pointer" }} onClick={() => resendpassword(params.row.uid,token)}>Resend</span>)},
    { field: "action", headerName: "Action", flex: 1 , renderCell: (params) => (
      <div>
        <UpdateIcon style={{ color:colors.greenAccent[500] }} onClick={() => handleExpand(params.row.uid)} />
        <DeleteIcon style={{ color:colors.redAccent[500] }} onClick={() => handleDeleteClick(params.row.uid)} />
      </div>
    ), },
  ];
  const handleUpdateClick = async (user) => {
    try {
      const response = await updateUser(user.uid,user,token);
      if (response.data.status === 200) {
        toast.success(response.data.message);
        fetchUsers();
        handleCloseModal();
      }
    }catch (error) {
      console.error("Error deleting user:", error);
      toast.error(error.response.data.message);
    }
  };

  const handleDeleteClick = async (uid) => {
    try {
      const response = await deleteUser(uid,token);
      if (response.data.status === 200) {
        toast.success(response.data.message);
        fetchUsers();
      }
    }
    catch (error) {
      console.error("Error deleting user:", error);
      toast.error(error.response.data.message);
    }

  };
  return (
    <StyledDiv>
      <Content>
        <Box sx={{ margin:"20px" }}>
          <Box
            sx={{ display:"flex" ,justifyContent:"space-between", alignItems:"center"  }}
          >
            <NavBar title="TEAM" subtitle="Managing the Team Members" />
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              Download Reports
            </Button>
          </Box>
          <Box
            sx={{
              height:"75vh",
              margin:"40px 0 0 0",
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .password-column--cell": {
                color: colors.greenAccent[500],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
            }}
          >
            <DataGrid
              rows={users}
              columns={columns}
              getRowId={(row) => row.uid}
              disableRowSelectionOnClick
              initialState={{
                ...users.initialState,
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[5, 10, 25]}
            />
          </Box>
        </Box>
        {isModalOpen && (
        <ModalComponent isOpen={isModalOpen}  onClose={handleCloseModal}  isUpdate={isUpdate} updateUser={handleUpdateClick} selectedUser={selectedUser} />
      )}
      </Content>
    </StyledDiv>
  );
};

export default ManageTeam;


