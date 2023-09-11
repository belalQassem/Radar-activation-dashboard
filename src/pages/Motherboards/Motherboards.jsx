import React, { useState, useEffect, useMemo } from "react";
import Content from "../../components/ContentPage/Content";
import { StyledDiv } from "./style";
import axios from "axios";

import { Box, Button, useTheme, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from "../../utils/theme";
import NavBar from "../../components/NavBar/NavBar";
import { toast } from "react-toastify";
import Radio from "@mui/material/Radio";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ModalComponent from "../../components/Modal/Modal";
import { ActiveMotherboard, AddMotherboard, InActiveMotherboard } from "../../services/Motherbords";
import MotherboardsActions from '../../components/MotherboardsActions/MotherboardsActions'
import dayjs from "dayjs";
const Motherboards = () => {
  const [users, setUsers] = useState([]);
  const [isCreate, setIsisCreate] = useState(false);
  const token = localStorage.getItem("token");
  const theme = useTheme();
  const [queryParameters, setQueryParameters] = useState({
    filter: "",
    page: "", 
    limit: 10, 
  });
 
  const [Page, setPageValue] = useState(queryParameters.page);
  const [filterValue, setFilterValue] = useState(queryParameters.filter);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowId, setRowId] = useState(null);

  const colors = useMemo(() => tokens(theme.palette.mode), [theme.palette.mode]);
    useEffect(() => {
      const motherboardsData = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/motherboards/${queryParameters.filter}/${queryParameters.page}?/${queryParameters.limit}?`,
            {
              headers: {
                Authorization: `token ${token}`,
              },
            }
          );
          if (response.data.data.status === 200) {
            setUsers(response.data.data.motherboards);
          
          } else {
            toast.error(response.data.data.message);
          }
        } catch (error) {
          toast.error(error.message);
        }
      };
      motherboardsData();
    }, [queryParameters,token]);
    

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

  
  const applyPage = () => {
    setQueryParameters({
      ...queryParameters,
      filter: filterValue !== "" ? filterValue : null,
      page: Page
    });
  };

  const applyFilter = () => {
    setQueryParameters({ ...queryParameters, filter: filterValue,page:null });
  };
 

  const handleCloseModal = () => { 
    setIsisCreate(false);
    setIsModalOpen(false);
  };
  const handleExpand = () => {
    setIsisCreate(true);
    setIsModalOpen(true);
  };
  
 
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
        type: 'singleSelect',
        valueOptions: ["active", "inactive", "Appending"],
        editable: true,
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
        renderCell: (params) => (
          <Box>
              <Button
              sx={{ backgroundColor: colors.greenAccent[400] , margin:"0 10px" }}
                onClick={() => ActiveMotherboard(params.id,token)}
                className="active-button"
              >
                Active
              </Button>
          
              <Button
              sx={{ backgroundColor: colors.redAccent[400] }}
                onClick={() => InActiveMotherboard(params.id,token)}
                className="inactive-button"
              >
                Inactive
              </Button>
          
          </Box>
        ),
      }
    ],
    [rowId,token,colors.greenAccent,colors.redAccent]
  );

  
  return (
    <StyledDiv>
      <Content>
        <Box sx={{ margin:"20px" }}>
          <Box sx={{ display:"flex" ,justifyContent:"space-between", alignItems:"center"  }} >
            <NavBar title="Motherboards" />
            <Box sx={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexDirection:"row-reverse" }} >
              <RadioGroup
                  sx={{ background: colors.greenAccent[500], borderRadius: "5px", display:"flex", flexDirection:"column",color:"#fff", fontSize: "14px", fontWeight: "bold", padding: "14px 20px" }}
                  name="filter"
                  value={filterValue}
                  onChange={(e) => {
                    setFilterValue(e.target.value);
                  }}
                >
                  <FormControlLabel
                    value="active"
                    control={<Radio />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="inactive"
                    control={<Radio />}
                    label="Inactive"
                  />
                  <FormControlLabel
                    value="Appending"
                    control={<Radio />}
                    label="Appending"
                  />
                  </RadioGroup>
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
                  </Box>
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
                      applyFilter();
                      applyPage();
                    }}
                  >
                    Apply Filter
                  </Button>
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
                    +Add Motherboard
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
              rows={users}
              columns={columns}
              getRowId={(row) => row.id}
              slots={{ toolbar: GridToolbar }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                },
              }}
              pagination
              initialState={{
                ...users.initialState,
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[10,20,30]}
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


