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
import { updateUser,deleteUser } from "../../services/Api";
import { toast } from "react-toastify";


const ManageTeam = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const token = localStorage.getItem("token");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  const fetchUsers = async (token, setUsers) => {
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
    }
  };
  useEffect(() => {
    fetchUsers(token, setUsers);
  }, [token]);
    
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
    { field: "action", headerName: "Action", flex: 1 , renderCell: (params) => (
      <div>
        <UpdateIcon style={{ color:"#8e8e8e" }} onClick={() => handleExpand(params.row.uid)} />
        <DeleteIcon style={{ color:"#8e8e8e" }} onClick={() => handleDeleteClick(params.row.uid)} />
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


