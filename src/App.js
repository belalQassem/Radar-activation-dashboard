// import React, { lazy, Suspense } from "react";
// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   Navigate,
//   Outlet,
// } from "react-router-dom";
// import { useAuthContext } from "./context/AuthContext";
// import Header from "./components/Header/Header";
// import SidBar from "./components/SidBar/SidBar";
// import Loading from "./components/Loading";

// // Lazy-loaded pages
// const LazyLogin = lazy(() => import("./pages/Login/Login"));
// const LazyDashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
// const LazyCreateUser = lazy(() => import("./pages/CreateUser/CreateUser"));
// const LazyUpdateUser = lazy(() => import("./pages/UpdateUser/UpdateUser"));

// const Layout = () => {
//   return (
//     <>
//       <Header />
//       <SidBar />
//       <Outlet />

//     </>
//   );
// };

// function App() {
//   const { isAuthorized } = useAuthContext();

//   return (
//     <div className="App">
//       <Suspense fallback={<Loading/>}>
//         <BrowserRouter>
//           <Routes>
//             <Route
//               path="/"
//               element={!isAuthorized ? <Layout /> : <Navigate to="/login" />}
//             >
//               <Route path="/dashboard" element={<LazyDashboard />} />
//               <Route path="/dashboard/create" element={<LazyCreateUser />} />
//               <Route path="/dashboard/update" element={<LazyUpdateUser />} />
//             </Route>
//             <Route path="/login" element={<LazyLogin />} />
//           </Routes>
//         </BrowserRouter>
//       </Suspense>
//     </div>
//   );
// }

// export default App;

import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./utils/theme";
import Layout from "./components/LayOut/LayOut";
import Loading from "./components/Loading";


// Lazy-loaded pages
const LazyLogin = lazy(() => import("./pages/Login/Login"));
const LazyDashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const LazyActivatedKeys = lazy(() => import("./pages/Keys/AktivatedKeys"));
const LazypendingdKeys = lazy(() => import("./pages/Keys/PendingKeys"));

const LazyMangeTeam= lazy(() => import("./pages/MangeTeam/MangeTeam"));
const LazyCreateUser = lazy(() => import("./pages/CreateUser/CreateUser"));
const LazyUpdateUser = lazy(() => import("./pages/UpdateUser/UpdateUser"));




function App() {
  const { isAuthorized } = useAuthContext();
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={isAuthorized === true ? <Layout/> : <Navigate to="/login" />}
            >
              <Route path="/" element={<LazyDashboard />} />
              <Route path="/dashboard/Keys/activated" element={<LazyActivatedKeys />} />
              <Route path="/dashboard/Keys/pending" element={<LazypendingdKeys />} />
              <Route path="/dashboard/data/usermangment" element={<LazyMangeTeam />} />
              <Route path="/dashboard/data/create" element={<LazyCreateUser />} />
              <Route path="/dashboard/update" element={<LazyUpdateUser />} />
            </Route>
            <Route path="/login" element={<LazyLogin />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
