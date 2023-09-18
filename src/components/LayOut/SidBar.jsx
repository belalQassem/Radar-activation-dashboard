// import { useState } from "react";
// import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Box, Typography, useTheme } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
// import { tokens } from "../../utils/theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import KeyIcon from '@mui/icons-material/Key';
// import PendingIcon from '@mui/icons-material/Pending';
// import KeyOffIcon from '@mui/icons-material/KeyOff';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import LogoutIcon from '@mui/icons-material/Logout';
// import useAuth from "../../hooks/useAuth";
// import { useAuthContext } from "../../context/AuthContext";


// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//         margin: "5px 0",
//         backgroundColor: selected === title ? colors.primary[500] : undefined,
//         borderRadius: "10px 0 0 10px",
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

// const Sidebar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [isCollapsed] = useState(false);
//   const { setisAuthorized } = useAuthContext();
//   const [selected, setSelected] = useState("Dashboard");
//   const name = localStorage.getItem("name");
//   const { logout } = useAuth();
//   const navigate = useNavigate();
  
//   const handleLogout = () => {
//       logout();
//       navigate('/login');
//       setisAuthorized(false);
//   };
//   return (
//     <Box
//     sx={{
//       "& .pro-sidebar": {
//         background: `${colors.primary[400]} !important`,
//         color: colors.grey[100],
//         width: isCollapsed ? "80px !important" : "250px !important",
//         height: "100vh",
//         position: "fixed",
//         zIndex: 1000,
//         '@media (max-width: 1200px)': {
//           visibility: 'hidden',
//         },
//         '@media (max-width: 1919px)': {
//           width: '270px !important',
//         },
//         '@media (min-width: 1920px)': {
//           width:"380px !important"
//         }
//       },
//       "& .pro-sidebar-inner": {
//         background: `${colors.primary[400]} !important`,
        
//       },
//       "& .pro-inner-item:hover": {
//         color: "#868dfb !important",
//         backgroundColor: `${colors.primary[500]} !important`,
//       },
//       "& .pro-menu-item.active > .pro-inner-item > .pro-icon-wrapper": {
//         backgroundColor: "#6870fa !important",
//       },
//       "& .pro-menu-item.active > .pro-inner-item > .pro-icon-wrapper > .pro-icon": {
//         color: "#fff !important",
//       },
//       "& .pro-menu-item > .pro-inner-item > .pro-icon-wrapper": {
//         backgroundColor: "transparent !important",
//       }
//     }}
//     >
//       <ProSidebar collapsed={isCollapsed}>
//         <Menu iconShape="square">
//           {/* LOGO AND MENU ICON */}
//           {/* <MenuItem
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//             style={{
//               backgroundColor:"white",
//               color: colors.grey[100],
//             }}
//           >
//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 ml="15px"
//               >
              
//                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                   <MenuOutlinedIcon />
//                 </IconButton>
//               </Box>
//             )}
//           </MenuItem> */}

//           {!isCollapsed && (
//             <Box sx={{ marginBottom:'25px' }}>
             
//               <Box textAlign="center">
                
//                 <Typography variant="h4" color={colors.greenAccent[500]}>
//                   {name}
//                 </Typography>
//               </Box>
//             </Box>
//           )}

//           <Box paddingLeft={isCollapsed ? undefined : "10%"}>
//             <Item
//               title="Dashboard"
//               to="/"
//               icon={<HomeOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ margin: "15px 0 5px 20px" }}
//             >
//               Radars
//             </Typography>
//             <Item
//               title="All"
//               to="/dashboard/Motherboards/"
//               icon={<KeyIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
            
//             <Item
//               title="Active"
//               to="/dashboard/Motherboards/Active"
//               icon={<KeyOffIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="InActive"
//               to="/dashboard/Motherboards/InActive"
//               icon={<PendingIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />

//             <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Data
//             </Typography>
//             <Item
//               title="Manage Team"
//               to="/dashboard/data/usermangment"
//               icon={<PeopleOutlinedIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Item
//               title="Add"
//               to="/dashboard/data/create"
//               icon={<PersonAddIcon />}
//               selected={selected}
//               setSelected={setSelected}
//             />
//             <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Logout
//             </Typography>
//             <Item
//               title="Logout"
//               to="/login"
//               icon={<LogoutIcon />}
//               selected={selected}
//               setSelected={handleLogout}
//             />

//           </Box>
//         </Menu>
//       </ProSidebar>
//     </Box>
//   );
// };

// export default Sidebar;



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
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role")
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
          <Item to="/dashboard/statistics" icon={HomeOutlinedIcon} title="dashboard" />
          <Typography variant="h6" color={colors.grey[300]} sx={{ margin: "15px 0 5px 20px" }}>Radars</Typography>
          {/* <Item to="/dashboard" icon={DashboardIcon} title="Dashboardd" /> */}
          <Item to="/dashboard/Motherboards/" icon={KeyIcon} title="All" />
          <Item to="/dashboard/Motherboards/Active" icon={KeyOffIcon} title="Active" />
          <Item to="/dashboard/Motherboards/InActive" icon={PendingIcon} title="InActive" />
         
          {role === "admin" ? (
            <>
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
