import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  TwoFactorAuthContainer,
  TwoFactorAuthModal,
  Heading3,
  Heading4,
  OrderedList,
  ButtonGroup,
  ButtonGrey,
  ButtonBlue,
} from "./style";
import {
  Field,
  InputField,
  PasswordIcon,
  ErrorMessage,
  ICONShow,
  ICONHide,
} from "../../pages/Login/style";
import { useAuthContext } from "../../context/AuthContext";

const validationSchema = Yup.object().shape({
  new_password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  otp: Yup.string().required("OTP is required"),
});

const TwoFactorAuth = () => {
  const { setisAuthorized,qrCode,setToken} = useAuthContext();
  const [passwordType, setPasswordType] = useState("password");
  const [passwordShow, setPasswordShow] = useState(true);
  const [new_password, setNew_password] = useState("");
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token") ;
  const handlePasswordShow = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
    setPasswordShow(!passwordShow);
  };

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "new_password") setNew_password(value);
    if (id === "otp") setOtp(value);
    if (id === "token") setToken(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await validationSchema.validate(
        {
          new_password,
          otp,
          token,
        },
        { abortEarly: false }
      );

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/enabledTwoFactor`,
        {otp,
        token,
        new_password},{headers: {
          'Authorization': `Bearer ${token}`
        }
      }
      );

      if (response.data.data.status === 200) {
        localStorage.setItem("name", response.data.data.username);
        localStorage.setItem("role", response.data.data.role);
        setErrors({});
        setisAuthorized(true);
        setIsLoading(false);
        navigate("/dashboard");
      } else {
        setErrors({ login: "Email or password is incorrect." });
        setIsLoading(false);
      }
    } catch (error) {
      if (error.inner) {
        const validationErrors = error.inner.reduce((acc, err) => {
          acc[err.path] = err.message;
          return acc;
        }, {});
        setErrors(validationErrors);
      } else {
        setErrors({ login: error.message });
      }
      setIsLoading(false);
    }
  };

  return (
    <TwoFactorAuthContainer>
      <TwoFactorAuthModal>
        <Heading3>Two-Factor Authentication (2FA)</Heading3>
        <div>
          <div>
            <Heading4>Configuring Google Authenticator or Authy</Heading4>
            <OrderedList>
              <li>Install Google Authenticator (IOS - Android) or Authy (IOS - Android).</li>
              <li>In the authenticator app, select "+" icon.</li>
              <li>Select "Scan a barcode (or QR code)" and use the phone's camera to scan this barcode.</li>
            </OrderedList>
          </div>
          <div>
            <Heading4>Scan QR Code</Heading4>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ width: "12rem", height: "12rem", objectFit: "contain" }}
                src={qrCode}
                alt="QR Code"
              />
            </div>
          </div>
          <div>
            <Heading4>Verify Code</Heading4>
            <p style={{ fontSize: "0.875rem" }}>
              For changing the setting, please verify the authentication code:
            </p>
          </div>
          <form style={{ display:"flex", flexDirection:"column",gap:"1rem"  }} onSubmit={handleSubmit}>
            {/* ... Other form fields ... */}
            <Field style={{ background: "#fff" }}>
              <PasswordIcon />
              <InputField
                
                type={passwordType}
                id="new_password"
                name="new_password"
                onChange={handleChangeInput}
                value={new_password}
                placeholder="Password"
                autoComplete="off"
              />
              {passwordShow ? (
                <ICONShow onClick={handlePasswordShow} />
              ) : (
                <ICONHide onClick={handlePasswordShow} />
              )}
            </Field>
            {errors && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            <Field style={{ background: "#fff" }}>
              <PasswordIcon />
              <InputField
                name="otp"
                type="text"
                id="otp"
                placeholder="otp"
                onChange={handleChangeInput}
                value={otp}
                autoComplete="off"
              />
              </Field>
            <ButtonGroup>
              <ButtonGrey type="button">Close</ButtonGrey>
              <ButtonBlue type="submit">
                {isLoading ? "Loading ..." : "Verify & Activate"}
              </ButtonBlue>
            </ButtonGroup>
          </form>
        </div>
      </TwoFactorAuthModal>
    </TwoFactorAuthContainer>
  );
};

export default TwoFactorAuth;
