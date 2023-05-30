import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

const Login = lazy(() => import("./pages/Login/Login"));

function App() {
  const { isAuthorized } = useAuthContext();
  const location = useLocation();

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        
        <Routes location={location} key={location.pathname}>
        <Route index element={<Navigate to="/Login" />} />
                <Route
                  path="/Login"
                  element={isAuthorized ? <Navigate to="/Validation" /> : <Login />}
                />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
