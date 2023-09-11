import React, { useState, useEffect,useMemo } from "react";
import Content from "../../components/ContentPage/Content";
import { StyledDiv } from "./style"
import axios from "axios";


import { Box, Button,TextField,useTheme } from "@mui/material";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../utils/theme";
import NavBar from "../../components/NavBar/NavBar";
import { toast } from "react-toastify";

const Active = () => {
  const [users, setUsers] = useState([]);
  const [queryParameters, setQueryParameters] = useState({
    filter: "active",
    page: 1,
    limit: 10,
  });

  const [Page, setPageValue] = useState(queryParameters.page);
  const token = localStorage.getItem("token");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/motherboards/${queryParameters.filter}/${queryParameters.page}/${queryParameters.limit}`, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        if (response.data.data.status === 200) {
        setUsers(response.data.data.motherboards);
      }else{
        
        toast.error(response.data.data.message);
      }
      } catch (error) {
       
        toast.error(error.message);
      }
    };
    fetchUsers();
  }, [queryParameters,token]);
  
  const applyPage = () => {
    setQueryParameters({
      ...queryParameters,
      page: Page
    });
  };
  const columns = useMemo( () => [
    { field: "id", headerName: "ID",flex: 1, cellClassName: "name-column--cell" },
      { field: "key", headerName: "key", flex: 1, cellClassName: "name-column--cell" },
      {
        field: "valid",
        headerName: "Valid",
        flex: 1,
        cellClassName: "name-column--cell"
      },
      {
        field: "location_id",
        headerName: "Location id",
        flex: 1,
        editable: true,
        cellClassName: "name-column--cell"
      },
      {
        field: "operator_id",
        headerName: "Operator id",
        flex: 1,
        editable: true,
        cellClassName: "name-column--cell"
      },
      {
        field: "street_name",
        headerName: "Street name",
        flex: 1,
        editable: true,
        cellClassName: "name-column--cell"
      },
      {
        field: "status",
        headerName: "Status",
        flex: 1,
        editable: true,
        cellClassName: "name-column--cell"
      },
      {
        field: "approved_by",
        headerName: "Approved by",
        flex: 1,
        editable: true,
        cellClassName: "name-column--cell"
      }
      , {
        field: "approved_time",
        headerName: "Approved time",
        flex: 1,
        cellClassName: "name-column--cell"
      },
  ]
  ,[]);
  
  return (
    <StyledDiv>
      <Content>
        <Box sx={{ margin:"20px" }}>
          <Box sx={{ display:"flex" ,justifyContent:"space-between", alignItems:"center"  }}>
            <NavBar title="Motherboards" subtitle="Activated Motherboards" />
            <Box>
              <TextField
                    sx={{
                      backgroundColor:colors.primary[400],
                      color: colors.grey[100],
                      fontSize: "14px",
                      fontWeight: "bold",
                      margin:"0px 10px"
                    }}
                    label="Page"
                    name="page"
                    value={Page}
                    onChange={(e) => {
                      setPageValue(e.target.value);
                    }}
                  />
                  <Button
                    sx={{
                      backgroundColor: colors.blueAccent[700],
                      color: colors.grey[100],
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "14px 20px",
                    }}
                    variant="contained"
                    onClick={() => {
                      applyPage();
                    }}
                  >
                    Select Page
                  </Button>
            </Box>
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
              }, "& .MuiDataGrid-toolbarContainer ":{
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiDataGrid-toolbarContainer .MuiToolbar-root":{
                backgroundColor: colors.blueAccent[300],
              },

            }}
          >
            <DataGrid checkboxSelection rows={users} columns={columns}  slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}  getRowId={(row) => row.id} pagination
              initialState={{
                ...users.initialState,
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[10,20,30]}
              disableRowSelectionOnClick/>
          </Box>
        </Box>
      </Content>
    </StyledDiv>
  );
};

export default Active;