import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../utils/theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import KeyIcon from '@mui/icons-material/Key';
import PendingIcon from '@mui/icons-material/Pending';
import KeyOffIcon from '@mui/icons-material/KeyOff';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import YasImg from '../../assets/yas.e0fc35a71a3d4396609e.png'
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from "../../hooks/useAuth";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        margin: "5px 0",
        backgroundColor: selected === title ? colors.primary[500] : undefined,
        borderRadius: "10px 0 0 10px",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
      logout();
      navigate('/login');
  };
  return (
    <Box
    sx={{
      "& .pro-sidebar": {
        background: `${colors.primary[400]} !important`,
        color: colors.grey[100],
        width: isCollapsed ? "80px !important" : "250px !important",
        height: "100vh",
        position: "fixed",
        zIndex: 1000,
        '@media (max-width: 1200px)': {
          visibility: 'hidden',
        },
        '@media (min-width: 1920px)': {
          width:"380px !important"
        }
      },
      "& .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout, & .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout > .pro-sidebar-content": {
        height: "100vh",
      },
      "& .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout > .pro-sidebar-content > .pro-menu > .pro-menu-item": {
        height: "50px !important",
        margin: "5px 0",
        borderRadius: "10px 0 0 10px",
      },
      "& .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout > .pro-sidebar-content > .pro-menu > .pro-menu-item > .pro-inner-item": {
        padding: "5px 35px 5px 20px !important",
      },
     
      "& .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout > .pro-sidebar-content > .pro-menu > .pro-menu-item.active > .pro-inner-item > .pro-icon-wrapper": {
        backgroundColor: "#6870fa !important",
      },
      "& .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout > .pro-sidebar-content > .pro-menu > .pro-menu-item.active > .pro-inner-item > .pro-icon-wrapper > .pro-icon": {
        color: "#fff !important",
      },
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`,
      },
      "& .pro-inner-item:hover": {
        color: "#868dfb !important",
        backgroundColor: `${colors.primary[500]} !important`,
      },
      "& .pro-menu-item.active > .pro-inner-item > .pro-icon-wrapper": {
        backgroundColor: "#6870fa !important",
      },
      "& .pro-menu-item.active > .pro-inner-item > .pro-icon-wrapper > .pro-icon": {
        color: "#fff !important",
      },
      
      "& .pro-menu-item > .pro-inner-item > .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      
    }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Admin
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={YasImg}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {name}
                </Typography>
                <Typography variant="h4" color={colors.greenAccent[500]}>
                  {role}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Keys
            </Typography>
            <Item
              title="Activated"
              to="/dashboard/Keys/activated"
              icon={<KeyIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pending"
              to="/dashboard/Keys/pending"
              icon={<PendingIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Deleted"
              to="/dashboard/list"
              icon={<KeyOffIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/dashboard/data/usermangment"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add"
              to="/dashboard/data/create"
              icon={<PersonAddIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Logout
            </Typography>
            <Item
              title="Logout"
              to="/login"
              icon={<LogoutIcon />}
              selected={selected}
              setSelected={handleLogout}
            />

          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;

