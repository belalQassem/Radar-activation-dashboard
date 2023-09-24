import { useState } from "react";
import { toast } from "react-toastify";
import { Logout } from "../services/Auth";


const useAuth = (url) => {
 
  const token = sessionStorage.getItem("token");

  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setisAuthorized] = useState(token ? true : false);
  const [Errors, setErrors] = useState([]);
  const [Token, setToken] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [qrCode , setQrCode] = useState(null);
  
  const logout = async () => {
  const res = await Logout(token);
  if (res.data.data.status === 200) {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("role");
    setToken("");
    setisAuthorized(false);
    toast.success("You are now logged out.");
  } else {
    toast.error(res.data.message);
  }
  };




 

  return {
    isAuthorized,
    setisAuthorized,
    isLoading,
    setIsLoading,
    Errors,
    setErrors,
    Token,
    setToken,
    username,
    setusername,
    logout,
    password,
    setpassword,
    qrCode,
    setQrCode
  };
};

export default useAuth;