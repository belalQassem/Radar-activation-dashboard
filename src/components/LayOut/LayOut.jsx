
import { Outlet } from "react-router-dom";
import Sidebar from "../SidBar/SidBar";


const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
export default Layout;  