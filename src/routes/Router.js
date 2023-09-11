import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LazyLogin from "../pages/Login/Login";
import LazyTOwFactorAuthintication from "../components/TwoFactorAuth/TwoFactorAuth";
import LazyDashboard from "../components/LayOut/LayOut";
import LazyMotherboards from "../pages/Motherboards/Motherboards";
import LazyActiveMotherboards from "../pages/Motherboards/Active";
import LazypendingdKeys from "../pages/Motherboards/Inactive";
import LazyMangeTeam from "../pages/MangeTeam/MangeTeam";
import LazyCreateUser from "../pages/CreateUser/CreateUser";

const RedirectToLogin = () => {
  return <Navigate to="/Login" />;
}

const ProtectedRoute = ({ isAuthorized, children }) =>  {
  return isAuthorized ? children : <RedirectToLogin />;
}

const Router = ({ isAuthorized }) => {
  return (
    <Routes>
      <Route index element={<RedirectToLogin />} />
      <Route path="/login" element={isAuthorized ? <Navigate to="/dashboard" />: <LazyLogin/>}/>
      <Route path="/towFactorAuthintication" element={isAuthorized ? <Navigate to="/dashboard" />: <LazyTOwFactorAuthintication/>}/>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthorized={isAuthorized}>
            <LazyDashboard />
          </ProtectedRoute>
        }
      >
        <Route path="Motherboards" element={isAuthorized ? <LazyMotherboards />:<RedirectToLogin /> } />
        <Route path="Motherboards/Active" element={isAuthorized ? <LazyActiveMotherboards />:<RedirectToLogin />} />
        <Route path="Motherboards/InActive" element={isAuthorized ? <LazypendingdKeys />: <RedirectToLogin /> } />
        <Route path="data/usermangment" element={isAuthorized ? <LazyMangeTeam /> :<RedirectToLogin /> } />
        <Route path="data/create" element={isAuthorized ? <LazyCreateUser />:<RedirectToLogin />} />
      </Route>
    </Routes>
  );
}

export default Router;


