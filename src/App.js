import {React,Suspense} from "react";
import { BrowserRouter } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./utils/theme";
import Loading from "./components/Loading";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './routes/Router'; 

const App=() => {
  const { isAuthorized } = useAuthContext();
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Suspense fallback={<Loading />}>
          <BrowserRouter>
            <Router isAuthorized={isAuthorized} />
          </BrowserRouter>
          </Suspense>  
        </div>
        <ToastContainer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;

