import React, { useState, useEffect, useMemo } from "react";
import Content from "../../components/ContentPage/Content";
import { StyledDiv } from "./style";
import axios from "axios";

import { Box, Button, useTheme} from "@mui/material";
import { DataGrid, GridToolbar, GridPagination  } from '@mui/x-data-grid';
import { tokens } from "../../utils/theme";
import NavBar from "../../components/NavBar/NavBar";
import { toast } from "react-toastify";
import ModalComponent from "../../components/Modal/Modal";
import { ActiveMotherboard, AddMotherboard, InActiveMotherboard } from "../../services/Motherbords";
import MotherboardsActions from '../../components/MotherboardsActions/MotherboardsActions'
import dayjs from "dayjs";
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styled from "styled-components";
import { useCallback } from "react";

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

const Motherboards = () => {
  const [radars, setRadars] = useState([]);
  const [isCreate, setIsisCreate] = useState(false);
  const token = localStorage.getItem("token");
  const theme = useTheme();
  const [queryParameters, setQueryParameters] = useState({
    filter: "null",
    page: 1,
    limit: 25, 
  });
 
  
  const [totalPages,setTotalPage] = useState(0);
  const [totalCount,setTotalCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowId, setRowId] = useState(null);
  const role = localStorage.getItem("role");

  const colors = useMemo(() => tokens(theme.palette.mode), [theme.palette.mode]);
 
  
  const handlePageChange = (event, newPage) => {
    setQueryParameters({
      ...queryParameters,
      page:newPage,
    });
  };
  
  
    const handleData = async (motherboard) => {
      try {
        const response = await AddMotherboard(motherboard);
        if (response.data.message === "invalid") {
          toast.success("Motherboard added successfully");
          handleCloseModal();
        }
      }catch (error) {
        console.error("Error deleting user:", error);
      }
    }
    useEffect(() => {
      const motherboardsData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/motherboards/${queryParameters.filter}/${queryParameters.page}/${queryParameters.limit}`,
            {
              headers: {
                Authorization: `token ${token}`,
              },
            }
          );
          if (response.data.data.status === 200) {
            setRadars(response.data.data.motherboards);
            setTotalPage(response.data.data.totalPages);
            setTotalCount(response.data.data.totalCount);
           
          } else {
            toast.error(response.data.data.message);
          }
        } catch (error) {
          toast.error(error.message);
        }
      };
        motherboardsData();
    }, [queryParameters.filter, queryParameters.page, queryParameters.limit, token]);
  
  

 
 

  const handleCloseModal = () => { 
    setIsisCreate(false);
    setIsModalOpen(false);
  };
  const handleExpand = () => {
    setIsisCreate(true);
    setIsModalOpen(true);
  };
  const ActiveRadar = useCallback(async (id) => {
    try {
      const response = await ActiveMotherboard(id, token);
      if (response) {
        toast.success('Motherboard activated successfully');
      } else {
        toast.error('Motherboard activation failed');
      }
    } catch (error) {
      console.error('Error activating motherboard:', error);
      toast.error(error.message);
    }
  }, [token]);
  
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
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID",flex: 1, cellClassName: "name-column--cell" },
      { field: "key", headerName: "key", flex: 1, cellClassName: "name-column--cell",editable: true, },
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
        cellClassName: "name-column--cell",
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
      {
        field: "actions",
        headerName: "Actions",
        flex: 1,
        cellClassName: "name-column--cell",
        renderCell: (params) => (
          <MotherboardsActions{...{params,rowId,setRowId}} />
        )
      },
      {
        field: "activation",
        headerName: "Activation",
        flex: 1,
        cellClassName: "name-column--cell",
        renderCell: (params) => {

              if (params.row.status === "active") {
                return (
                    <Button
                      sx={{ height:"30px",width:"80px",backgroundColor: colors.redAccent[400] ,padding:"10px" }}
                      onClick={() => InActiveMotherboard(params.id,token)}
                      className="inactive-button"
                      disabled={role === "user" ? true : false}
                    >
                      Inactive
                    </Button>
                
                );
              } 
                else if (params.row.status === "inactive"){
                  return (
                    
                      <Button
                      sx={{ height:"30px",width:"80px",backgroundColor: colors.greenAccent[400] ,padding:"10px" }}
                        onClick={() => ActiveRadar(params.id,token)}
                        className="active-button"
                      >
                        Active
                      </Button>
                   
                  );
                }
                else {
                  return (
                    <Button
                    sx={{ height:"30px",width:"80px",backgroundColor: colors.greenAccent[400] ,padding:"10px" }}
                      onClick={() => ActiveRadar(params.id,token)}
                      className="active-button"
                    >
                      Active
                    </Button>

                  );
                }
            },
      },
    ],
    [rowId,token,colors.greenAccent,colors.redAccent,role,ActiveRadar]
  );

  
  return (
    <StyledDiv>
      <Content>
        <Box sx={{ padding:"20px" }}>
          <Box sx={{ display:"flex" ,justifyContent:"space-between", alignItems:"center"  }} >
            <NavBar title="Radars" subtitle="All Radars" />
            <Box sx={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"row-reverse" }} >
                  <Button
                    sx={{
                      backgroundColor: colors.blueAccent[700],
                      color: colors.grey[100],
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "14px 20px",
                      margin:"0px 10px"
                    }}
                    variant="contained"
                    onClick={() => {
                      handleExpand();
                    }}
                  >
                    + Add Radar
                  </Button>
            </Box>

          </Box>
          <Box
            sx={{
              height:"72vh",
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
            <DataGrid
              rows={radars}
              columns={columns}
              getRowId={(row) => row.id}
              disableRowSelectionOnClick
              pagination
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
              slots={{ toolbar: GridToolbar,pagination: CustomPagination}}
              {...radars}
                initialState={{
                  ...radars.initialState,
                  pagination: { paginationModel: { pageSize:25,page:0}}
                }}
                paginationMode="server"
                rowCount={totalCount}
                onPaginationModelChange={(newPageSize) => {
                  setQueryParameters({
                    ...queryParameters,
                    filter:null,
                    page:newPageSize.page+1,
                    limit: newPageSize.pageSize,
                  });
                }}
              onCellEditStart={params => {setRowId(params.id)}}
            />
          </Box>
          {isModalOpen && (
        <ModalComponent Open={isModalOpen}  Close={handleCloseModal}  createMotherboard={handleData} isCreate={isCreate} />
      )}
        </Box>
      </Content>
    </StyledDiv>
  );
};

export default Motherboards;


