import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LazyLogin from "../pages/Login/Login";
import LazyTOwFactorAuthintication from "../components/TwoFactorAuth/TwoFactorAuth";
import LazyLayOut from "../components/LayOut/LayOut";
import LazyMotherboards from "../pages/Motherboards/Motherboards";
import LazyActiveMotherboards from "../pages/Motherboards/Active";
import LazypendingdKeys from "../pages/Motherboards/Inactive";
import LazyMangeTeam from "../pages/MangeTeam/MangeTeam";
import LazyCreateUser from "../pages/CreateUser/CreateUser";
import LazyStatistics from "../pages/Dashboard/Dashboard";

const RedirectToLogin = () => {
  return <Navigate to="/Login" />;
}

const ProtectedRoute = ({ isAuthorized, children }) =>  {
  return isAuthorized ? children : <RedirectToLogin />;
}

const Router = ({ isAuthorized }) => {
  const role = sessionStorage.getItem("role");
  return (
    <Routes>
      <Route index element={<RedirectToLogin/>} />
      <Route path="/login" element={isAuthorized ? <Navigate to="/dashboard" />: <LazyLogin/>}/>
      <Route path="/TwoFactorAuth" element={isAuthorized ? <Navigate to="/dashboard" />: <LazyTOwFactorAuthintication/>}/>
      <Route
        path="/dashboard"
        element={<ProtectedRoute isAuthorized={isAuthorized}><LazyLayOut/></ProtectedRoute>}>
      <Route path="Statistics" element={isAuthorized ? <LazyStatistics/>:<RedirectToLogin />} />
      <Route path="Motherboards" element={isAuthorized ? <LazyMotherboards />:<RedirectToLogin /> } />
      <Route path="Motherboards/Active" element={isAuthorized ? <LazyActiveMotherboards />:<RedirectToLogin />} />
      <Route path="Motherboards/InActive" element={isAuthorized ? <LazypendingdKeys />: <RedirectToLogin /> } />
      <Route path="data/usermangment" element={isAuthorized &&role==="admin" ? <LazyMangeTeam /> :<RedirectToLogin /> } />
      <Route path="data/create" element={isAuthorized &&role==="admin" ? <LazyCreateUser />:<RedirectToLogin />} />
      </Route>
    </Routes>
  );
}

export default Router;


