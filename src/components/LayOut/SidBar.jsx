import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

 import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
 import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
 import KeyIcon from '@mui/icons-material/Key';
 import PendingIcon from '@mui/icons-material/Pending';
 import KeyOffIcon from '@mui/icons-material/KeyOff';
 import PersonAddIcon from '@mui/icons-material/PersonAdd';
 import LogoutIcon from '@mui/icons-material/Logout';
 import  MenuIcon  from '@mui/icons-material/Menu';
import { useState } from "react";
import { tokens } from "../../utils/theme";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const { setisAuthorized } = useAuthContext();
  const name = sessionStorage.getItem("name");
  const role = sessionStorage.getItem("role")
  const { logout } = useAuth();

  
  const handleLogout = () => {
      logout();
      setisAuthorized(false);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  const [selected, setSelected] = useState("Dashboard");

  const Item = ({ icon: Icon, title, to }) => {
    return (
      <MenuItem
        active={selected === title}
        icon={Icon ? <Icon /> : null}
        component={<Link to={to} />}
        onClick={() => {
          setSelected(title);
        }}
      >
        {title}
      </MenuItem>
    );
  };

  return (
    <Box display="flex">
      <ProSidebar
        rootStyles={{
          height: "100%",
          borderColor: 'transparent',
          ".ps-sidebar-container": {
            background: colors.primary[400],
          },
        }}
        breakPoint="lg"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={collapsed ? "center" : "space-between"}
          p={2}
        >
          {!collapsed ? ( 
            <IconButton
              aria-label="Toggle Menu"
              onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
            >
              <MenuIcon />
            </IconButton>
          ) : <IconButton
          aria-label="Toggle Menu"
          onClick={() => (broken ? toggleSidebar() : collapseSidebar())}
        >
          <MenuIcon />
        </IconButton>}
        </Box>
        <Box mb="30px">
          {!collapsed && (
            <Box textAlign="center">
              <Typography variant="h5" color={colors.greenAccent[500]}>
               {name}
              </Typography>
            </Box>
          )}
        </Box>

        <Menu
          menuItemStyles={{
            button: ({ active }) => ({
              color: active ? "#868dfb" : undefined,
              transition: "color .3s",
              background: "transparent",
              "&:hover": {
                color: "#868dfb",
                background: "transparent",
              },
              
            }),
          }}
        >
          <Item to="/dashboard/Statistics" icon={HomeOutlinedIcon} title="dashboard" />
          <Typography variant="h6" color={colors.grey[300]} sx={{ margin: "15px 0 5px 20px" }}>Radars</Typography>
          {/* <Item to="/dashboard" icon={DashboardIcon} title="Dashboardd" /> */}
          <Item to="/dashboard/Motherboards/" icon={KeyIcon} title="All" />
          <Item to="/dashboard/Motherboards/Active" icon={KeyOffIcon} title="Active" />
          
         
          {role === "admin" ? (
            <>
               <Item to="/dashboard/Motherboards/InActive" icon={PendingIcon} title="InActive" />
               <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Data</Typography>
              <Item to="/dashboard/data/usermangment" icon={PeopleOutlinedIcon} title="Manage Team" />
              <Item to="/dashboard/data/create" icon={PersonAddIcon} title="Add" />
            </>
            ) : null}
          <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Logout</Typography>
        </Menu>
          <LogoutIcon style={{ cursor:"pointer",width:"20px",marginLeft:"30px"}} onClick={handleLogout}/>
      </ProSidebar>
    </Box>
  );
};
export default Sidebar;

