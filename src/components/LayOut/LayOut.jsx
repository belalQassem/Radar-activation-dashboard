
import { Outlet } from "react-router-dom";
import Sidebar from "./SidBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { CssBaseline } from "@mui/material";


const Layout = ({ children }) => {
  return (
    <>
    <ProSidebarProvider>
      <CssBaseline />
      <Sidebar />
      <Outlet />
    </ProSidebarProvider>
    </>
  );
};
export default Layout;  