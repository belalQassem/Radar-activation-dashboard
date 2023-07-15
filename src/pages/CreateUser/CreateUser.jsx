import React from "react";
import Content from '../../components/ContentPage/Content'

import { Formik } from "formik";
import * as yup from "yup";
import { StyledDiv, } from "./style";
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";



import NavBar from "../../components/NavBar/NavBar";
const initialValues = {
  Name: "",
  email: "",
  password: "",
  role: "",
};
const checkoutSchema = yup.object().shape({
  Name: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  role: yup.string().required("required"),
});
const CreateUser = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <StyledDiv>
      <Content>
        <Box m="20px">
          <NavBar title="CREATE USER" subtitle="Create a New User Profile" />

          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))"sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 4" },}}
                >
                  <TextField fullWidth variant="filled" type="text" label="Name" onBlur={handleBlur} onChange={handleChange} value={values.firstName} name="firstName" error={!!touched.firstName && !!errors.firstName} helperText={touched.firstName && errors.firstName} autoComplete="username"sx={{ gridColumn: "span 4" }}/>

                  <TextField fullWidth variant="filled" type="text" label="Email" onBlur={handleBlur} onChange={handleChange} value={values.email} name="email" error={!!touched.email && !!errors.email} helperText={touched.email && errors.email} autoComplete="email" sx={{ gridColumn: "span 4" }}
                  />
                  <TextField fullWidth variant="filled" type="password" label="Password" onBlur={handleBlur} onChange={handleChange} value={values.password} name="password" error={!!touched.password && !!errors.password} helperText={touched.password && errors.password} autoComplete="current-password" sx={{ gridColumn: "span 4" }}
                  />
      
                 
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New User
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Content>
    </StyledDiv>
  );
};

export default CreateUser;



