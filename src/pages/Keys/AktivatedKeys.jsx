import React, { useState, useEffect, useMemo } from "react";
import Content from "../../components/ContentPage/Content";
import { StyledDiv } from "./style";
import axios from "axios";

import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../utils/theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import NavBar from "../../components/NavBar/NavBar";

const AktivatedKeys = () => {

  const [users, setUsers] = useState([]);
  const theme = useTheme();
  const colors = useMemo(() => tokens(theme.palette.mode), [theme.palette.mode]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/keys`);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID" },
      {
        field: "key",
        headerName: "productKey",
        flex: 1,
        cellClassName: "name-column--cell"
      },
      {
        field: "created_at",
        headerName: "created_at",
        flex: 1,
        cellClassName: "name-column--cell"
      },
      {
        field: "valid",
        headerName: "valid",
        flex: 1,
        cellClassName: "name-column--cell"
      },
      {
        field: "locationId",
        headerName: "locationId",
        flex: 1,
        cellClassName: "name-column--cell"
      },
      {
        field: "approvededBy",
        headerName: "approvededBy",
        flex: 1,
        cellClassName: "name-column--cell"
      },
    ],
    []
  );

  return (
    <StyledDiv>
      <Content>
        <Box m="20px">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <NavBar title="Keys" subtitle="Activated Keys" />
            <Box>
              <Button
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                <DownloadOutlinedIcon />
                Download Reports
              </Button>
            </Box>
          </Box>
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
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
            <DataGrid checkboxSelection rows={users} columns={columns} />
          </Box>
        </Box>
      </Content>
    </StyledDiv>
  );
};

export default AktivatedKeys;

