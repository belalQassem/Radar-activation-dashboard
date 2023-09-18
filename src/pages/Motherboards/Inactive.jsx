import React, { useState, useEffect,useMemo } from "react";
import Content from "../../components/ContentPage/Content";
import { StyledDiv } from "./style"
import axios from "axios";
import MuiPagination from '@mui/material/Pagination';


import { Box,Stack,useTheme } from "@mui/material";
import { DataGrid,GridPagination,GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../utils/theme";
import NavBar from "../../components/NavBar/NavBar";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import styled from "styled-components";
const StyledPagination = styled(MuiPagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 40px;
  

  .MuiPagination-ul {
    list-style: none;
    padding-top:20px; 
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    
  }


  .MuiPaginationItem-root {
    margin: 0 5px;
    font-size: 16px;
   
    color: #000000;
    border: 1px solid #dddddd;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }

    &.Mui-selected {
      background-color: #007bff;
      color: #ffffff;
      border: 1px solid #007bff;
    }
  }
`;

const Inactive = () => {
  const [users, setUsers] = useState([]);
  const [queryParameters, setQueryParameters] = useState({
    filter: "inactive",
    page: 1,
    limit: 25,
  });
  const [totalPages,setTotalPage] = useState(0);
  const [totalCount,setTotalCount] = useState(0);
  const token = localStorage.getItem("token");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handlePageChange = (event, newPage) => {
    setQueryParameters({
      ...queryParameters,
      page:newPage,
    });
  };
  

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
        setTotalPage(response.data.data.totalPages);
        setTotalCount(response.data.data.totalCount);
      }else{
        toast.error(response.data.data.message);
      }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchUsers();
  }, [queryParameters.filter,queryParameters.page,queryParameters.limit,token]);
  function CustomPagination() {
    return <GridPagination ActionsComponent={() => (
      <Stack spacing={2}>
        <StyledPagination
          variant="outlined"
          count={totalPages}
          page={queryParameters.page+0}
          onChange={handlePageChange}
        />
      </Stack>
    )} />;
  }

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
        cellClassName: "name-column--cell",
        type: "date",
        valueFormatter: (params) => {
          return params.value ? dayjs(params.value).format("DD/MM/YYYY  HH:mm:ss") : "";
        }
      },
  ]
  ,[]);
  
  return (
    <StyledDiv>
      <Content>
        <Box sx={{ margin:"20px" }}>
          <Box sx={{ display:"flex" ,justifyContent:"space-between", alignItems:"center"  }}>
            <NavBar title="Motherboards" subtitle="Activated Motherboards" />
          </Box>
          <Box
            sx={{
              height:"72vh",
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
              "& .MuiDataGrid-toolbarContainer ":{
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiDataGrid-toolbarContainer .MuiToolbar-root":{
                backgroundColor: colors.blueAccent[300],
              },
            }}
          >
            <DataGrid rows={users} columns={columns} 
              getRowId={(row) => row.id} 
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
              slots={{ toolbar: GridToolbar,pagination: CustomPagination}}
              pagination
              initialState={{
                ...users.initialState,
                pagination: { paginationModel: { pageSize:25,page:0}}
              }}
              paginationMode="server"
              rowCount={totalCount}
              onPaginationModelChange={(newPageSize) => {
                setQueryParameters({
                  ...queryParameters,
                  page:newPageSize.page+1,
                  limit: newPageSize.pageSize,
                });
              }}
             
              
              disableRowSelectionOnClick/>
          </Box>
        </Box>
      </Content>
    </StyledDiv>
  );
};
export default Inactive;
