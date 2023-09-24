import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import * as yup from "yup";
import axios from "axios";
import {
  StyledDiv,
  ErrorMessage,
  Card, Card2, Form, Heading, Field, UserIcon, InputField, PasswordIcon, ICONShow, ICONHide, Button1, Button3

} from "./style";

import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const validationSchema = yup.object().shape({
  email:  yup.string().email('Email must be a valid email').required('Email is required').min(3, 'Email must be at least 3 characters long'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long').max(15, 'Password must be at most 15 characters long'),
  otp: yup.string()
});


const Login = () => {
  const { setToken, setisAuthorized, isLoading, setIsLoading,setQrCode } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordShow, setPasswordShow] = useState(true);
  const [errors, setErrors] = useState({});
  const [valid ,setValid] = useState(false);
  const navigate = useNavigate();
  
  const handlePasswordShow = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
    setPasswordShow(!passwordShow);
  };


  useEffect(() => {
    setErrors({});
  }, []);
  
  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    } else if (id === "otp") {
      setOtp(value);
    }
  };


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await validationSchema.validate(
        {
          email,
          password,
          otp
        },
        { abortEarly: false }
      );

      const userData = await axios.post(
        `${process.env.REACT_APP_API_URL}/login`,
        { email, password,otp }
      );
      
      if (userData.data.data.status === 200) {
        sessionStorage.setItem("token", userData.data.data.token);
        setToken(userData.data.data.token);
        sessionStorage.setItem("name", userData.data.data.username);
        sessionStorage.setItem("role", userData.data.data.role);
        setErrors([]);
        setIsLoading(false);
        setisAuthorized(true);
        toast.success("Login Successfully");
        navigate('/dashboard/Statistics')
      }
      else {
        setErrors({ login: "email or password is incorrect." });
        setIsLoading(false);
      }
    } catch (error) {
      toast.error(error.response.data.data.message);
      if (error.response.data.data.status === 428) {
        setQrCode(error.response.data.data.qrCodeDataURL);
        setToken(error.response.data.data.token);
        setIsLoading(false);
        sessionStorage.setItem("token",error.response.data.data.token);
        sessionStorage.setItem("qrCode",error.response.data.data.qrCodeDataURL);
        toast.error("Please scan QR code");
        navigate('/TwoFactorAuth')
      }
      else if (error.response.data.data.message === 'Some thing error') {
        toast.error("Please enter OTP");
        setIsLoading(false);
        setValid(true);
      }
      else if (error) {
        toast.error(error);
        setIsLoading(false);
      } else {
        toast.error(error.message);
        setErrors({ login: error.message });
        setIsLoading(false);
      }
    }
  };

  return (
    <StyledDiv>
      <Card>
        <Card2>
          <Form onSubmit={handleSubmit}>
            <Heading>Login</Heading>
            <Field>
              <UserIcon />
              <InputField
                type="email"
                id="email"
                placeholder="email"
                autoComplete="on"
                onChange={handleChangeInput}
                value={email}
              />
            </Field>
            {errors && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

            <Field>
              <PasswordIcon />
              <InputField
                type={passwordType}
                id="password"
                onChange={handleChangeInput}
                value={password}
                placeholder="password"
                autoComplete="on"
              />
              {passwordShow ? (
                <ICONShow onClick={handlePasswordShow} />
              ) : (
                <ICONHide onClick={handlePasswordShow} />

              )}
            </Field>
            {errors && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            {valid && (
              <Field>
                <PasswordIcon />
                <InputField
                  type="text"
                  id="otp"
                  placeholder="otp"
                  onChange={handleChangeInput}
                  value={otp}
                  autoComplete="on"
                />
              </Field>
            )}
            {errors && errors.otp && <ErrorMessage>{errors.otp}</ErrorMessage>}
            <Button1 type="submit">{isLoading ? "Loading ... " : "LOG IN"}</Button1>
            <Button3>Forgot Password</Button3>
          </Form>
        </Card2>
      </Card>
    </StyledDiv>
  );
};

export default Login;