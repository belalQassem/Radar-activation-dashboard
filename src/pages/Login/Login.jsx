// import * as React from 'react';
// import useAuth from '../../hooks/useAuth';

// import Button from '../../components/Button/Button';
// import Input from '../../components/Input/Input';
// import { StyledDiv, StyledForm, Styledh1 } from './style';
// import Logo from "../../assets/yas.e0fc35a71a3d4396609e.png"



// function Login() {
//   const { username, password, setUsername, setPassword, Errors, setErrors } = useAuth();
//   const submit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <StyledDiv>

//       <StyledForm onSubmit={submit}>
//         <Styledh1>
//           <h1>Login</h1>


//         </Styledh1>
//         {/* <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//             <path
//                 fill-rule="evenodd"
//                 d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8
//                 1zm0 1a6 6 0 1 1 0 12A6 6 0 0 1
//                 8 2zm0 7c2.5 0 4.5.5 4.5
//                 2.25V11H3v-.75C3 9.5 5 9
//                 8 9zm-4.5-1A3.5 3.5 0 0 1 8
//                 4.5 3.5 3.5 0 0 1 11.5
//                 8 3.5 3.5 0 0 1 8 11.5
//                 3.5 3.5 0 0 1 4.5

//                 8z"
//             />  
//         </svg> */}

//         <Input ClassName="Email" Type="Email" Label="Email" Id="Email" Text="Username" Placeholder="Enter User Name" />
//         <Input ClassName="password" Type="password" Label="password" Id="password" Text="Password" Placeholder="Enter Password" />
//         <Button ClassName="button" Type="button" Text="Login" />
//       </StyledForm>
//     </StyledDiv>
//   );
// }
// export default Login;

// const Validation = () => {
//   const submit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <div>
//       <StyledDiv>
//         <StyledForm onSubmit={submit}>
//           <Styledh1>
//             <h1>Verification</h1>
//           </Styledh1>
//           <Input ClassName="Email" Type="Email" Label="Email" Id="Email" Text="Enter your Email" Placeholder="Type Here" />
//           <Button ClassName="button" Type="button" Text="Send" />
//         </StyledForm>
//       </StyledDiv>
//     </div>
//   );
// };
// export { Validation }
// const CodeMatching = () => {
//   const submit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <div>
//       <StyledDiv>
//         <StyledForm onSubmit={submit}>
//           <Styledh1>
//             <h1>Authorization</h1>
//           </Styledh1>
//           <Input ClassName="code" Type="code" Label="code" Id="code" Text="Enter your code" Placeholder="Type Here" />
//           <Button ClassName="button" Type="button" Text="Verify" />
//         </StyledForm>
//       </StyledDiv>
//     </div>
//   );
// };
// export { CodeMatching }

// code 2

// import React, { useState } from "react";
// import axios from "axios";
// import passwordshow from "../../assets/eye.png";
// import  {useAuthContext} from "../../context/AuthContext";
// import {
//   StyledDiv,
//   ErrorMessage,
//   InputWrapper,
//   Register,
//   ShowPassword,
//   StyledForm,
//   SubmitButton,
// } from "./style";
// import { schema } from "./validation";
// import Input from "../../components/Input/Input";
// import { redirect, useNavigate } from "react-router-dom";

// const Login = () => {
//   const { errors, setErrors, setToken,Token } = useAuthContext();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordType, setPasswordType] = useState("password");

//   const handlePasswordShow = (e) => {
//     e.preventDefault();
//     setPasswordType(passwordType === "password" ? "text" : "password");
//   };

//   const handleChangeInput = (e) => {
//     const { value, id } = e.target;
//     if (id === "username") setUsername(value);
//     if (id === "password") setPassword(value);
//   };
//   const navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     schema
//       .validateAsync(
//         {
//           username,
//           password,
//         },
//         { abortEarly: false }
//       )
//       .then(async () => {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/users?username=${username}&password=${password}`);

//         if (res.data.length > 0) {
//           console.log(res.data);
//           const user = res.data[0];
//           localStorage.setItem("token", user.token);
//           setToken(user.token);
//           const b = Token;
//           localStorage.setItem("sana",b)
//           localStorage.setItem("name", user.name);
//           setErrors([]);
//           redirect("/login");
//           navigate("/dashboard");
//         } else {
//           setErrors({ login: "username or password not correct" });

//         }
//       }).catch((e) => {
//         const errors = e.inner.reduce((acc, error) => {
//           acc[error.path] = error.message;
//           return acc;
//         }, {});
//         setErrors(errors);
//       });

//   };

//   return (
//     <StyledDiv>
      
//       <StyledForm onSubmit={handleSubmit}>
//         <Register>Log in</Register>
//         <Input Label="username" Text="Username" Type="name" Id="username" Placeholder="User name" OnChange={handleChangeInput} Value={username || ''} />
//         {errors && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
//         <InputWrapper>
//           <label htmlFor="password">Password</label>
//           <input
//             type={passwordType}
//             id="password"
//             onChange={handleChangeInput}
//             value={password || ''}
//             placeholder="Type Here"
//           />

//           {errors && errors.password && (
//             <ErrorMessage>{errors.password}</ErrorMessage>
//           )}
//           <ShowPassword
//             src={passwordshow}
//             alt="passwordshow"
//             className="passwordshow"
//             onClick={handlePasswordShow}
//           />
//         </InputWrapper>

//         <SubmitButton type="submit">
//           Log In
//         </SubmitButton>
//       </StyledForm>
//     </StyledDiv>
//   );
// }

// export default Login;


// code 3
// import React, { useState } from "react";
// import axios from "axios";
// import passwordshow from "../../assets/eye.png";
// import { useAuthContext } from "../../context/AuthContext";
// import {
//   StyledDiv,
//   ErrorMessage,
//   InputWrapper,
//   Register,
//   ShowPassword,
//   StyledForm,
//   SubmitButton,
// } from "./style";
// import { schema } from "./validation";
// import Input from "../../components/Input/Input";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { setErrors,Eroors, setToken } = useAuthContext();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleChangeInput = (e) => {
//     const { value, id } = e.target;
//     if (id === "username") setUsername(value);
//     if (id === "password") setPassword(value);
//   };

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await schema.validate(
//         {
//           username,
//           password,
//         },
//         { abortEarly: false }
//       );

//       const res = await axios.get(
//         `${process.env.REACT_APP_API_URL}/users?username=${username}&password=${password}`
//       );

//       if (res.data.length > 0) {
//         const user = res.data[0];
//         localStorage.setItem("token", user.token);
//         setToken(user.token);
//         localStorage.setItem("name", user.name);
//         setErrors([]);
//         navigate("/dashboard");
//       } else {
//         setErrors({ login: "Username or password is incorrect." });
//       }
//     } catch (error) {
//       const errors = error.inner.reduce((acc, validationError) => {
//         acc[validationError.path] = validationError.message;
//         return acc;
//       }, {});
//       setErrors(errors);
//     }
//   };

//   return (
//     <StyledDiv>
//       <StyledForm onSubmit={handleSubmit}>
//         <Register>Log in</Register>
//         <Input
//           Label="Username"
//           Text="Username"
//           Type="text"
//           Id="username"
//           Placeholder="Username"
//           onChange={handleChangeInput}
//           value={username}
//         />
//         {errors && errors.email && (
//           <ErrorMessage>{errors.email}</ErrorMessage>
//         )}
//         <InputWrapper>
//           <label htmlFor="password">Password</label>
//           <input
//             type={passwordVisible ? "text" : "password"}
//             id="password"
//             onChange={handleChangeInput}
//             value={password}
//             placeholder="Type Here"
//           />
//           {errors && errors.password && (
//             <ErrorMessage>{errors.password}</ErrorMessage>
//           )}
//           <ShowPassword
//             src={passwordshow}
//             alt="passwordshow"
//             className="passwordshow"
//             onClick={togglePasswordVisibility}
//           />
//         </InputWrapper>
//         <SubmitButton type="submit">Log In</SubmitButton>
//       </StyledForm>
//     </StyledDiv>
//   );
// };

// export default Login;



import React, { useEffect, useState } from "react";
import axios from "axios";
import passwordshow from "../../assets/eye.png";
import { useAuthContext } from "../../context/AuthContext";
import * as Yup from "yup";
import {
  StyledDiv,
  ErrorMessage,
  InputWrapper,
  Register,
  ShowPassword,
  StyledForm,
  SubmitButton,
} from "./style";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
});

const Login = () => {
  const { Errors, setErrors, setToken,setisAuthorized, isLoading, setIsLoading } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const handlePasswordShow = (e) => {
    e.preventDefault();
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  useEffect(() => {
    return () => setErrors([]);
  }, [setErrors]); 

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "username") setUsername(value);
    if (id === "password") setPassword(value);
  };

  const navigate = useNavigate();

  const loginUser = async (username, password) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/users?username=${username}&password=${password}`
      );
      return res.data;
    } catch (error) {
      if (error.response) {
        throw new Error("An error occurred. Please try again later.");
      } else if (error.request) {
        throw new Error("Network error. Please check your internet connection.");
      } else {
        throw new Error("Something went wrong. Please try again later.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await validationSchema.validate(
        {
          username,
          password,
        },
        { abortEarly: false }
      );

      const userData = await loginUser(username, password);
      console.log(userData);

      if (userData.length > 0) {
        const user = userData[0];
        localStorage.setItem("token", user.token);
        setToken(user.token);
        localStorage.setItem("name", user.name);
        localStorage.setItem("role", user.role);
        setErrors([]);
        setIsLoading(false);
        setisAuthorized(true);
        navigate("/");
      } else {
        setErrors({ login: "Username or password is incorrect." });
        setIsLoading(false);
      }
    } catch (error) {
      if (error.inner) {
        const errors = error.inner.reduce((acc, err) => {
          acc[err.path] = err.message;
          return acc;
        }, {});
        setErrors(errors);
        setIsLoading(false);
      } else {
        setErrors({ login: error.message });
        setIsLoading(false);
      }
    }
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSubmit}>
        <Register>Log in</Register>
        <Input
          Label="username"
          Text="Username"
          Type="name"
          Id="username"
          Placeholder="User name"
          OnChange={handleChangeInput}
          Value={username}
        />
        {Errors && Errors.username && <ErrorMessage>{Errors.username}</ErrorMessage>}
        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            type={passwordType}
            id="password"
            onChange={handleChangeInput}
            value={password}
            placeholder="Type Here"
          />

          {Errors && Errors.password && (
            <ErrorMessage>{Errors.password}</ErrorMessage>
          )}
          <ShowPassword
            src={passwordshow}
            alt="passwordshow"
            className="passwordshow"
            onClick={handlePasswordShow}
          />
        </InputWrapper>

        <SubmitButton type="submit">{isLoading ? "Loading ... " : "LOG IN"}</SubmitButton>
      </StyledForm>
    </StyledDiv>
  );
};

export default Login;
