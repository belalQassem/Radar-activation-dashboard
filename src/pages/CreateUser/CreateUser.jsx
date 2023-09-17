
import React from "react";
import Content from "../../components/ContentPage/Content";
import { Formik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";

import NavBar from "../../components/NavBar/NavBar";
import { addUser } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledDiv } from "./style";

// Validation schema using yup
const checkoutSchema = yup.object().shape({
  _username: yup.string().required("Username is required"),
  _fullname: yup.string().required("Fullname is required"),
  _email:yup.string()
  .required('email is required')
  .min(3, 'email must be at least 3 characters long'),
  _role: yup.string().required("Role is required"),
});

// Initial form values
const initialValues = {
  _username: "",
  _fullname: "",
  _email: "",
  _role: "",
};

// Form component
function UserForm({handleSubmit }) {
  return (
    <Formik
      onSubmit={handleSubmit}
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
          <Box sx={{
            display: "grid", gap: "30px", gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            "& > div": { gridColumn: "span 4" },
          }}
          >
            <TextField fullWidth variant="filled" type="text" label="Username" onBlur={handleBlur} onChange={handleChange} value={values._username} name="_username" id="_username" error={!!touched._username && !!errors._username} helperText={touched._username && errors._username} autoComplete="on" sx={{ gridColumn: "span 4" }} />
            <TextField fullWidth variant="filled" type="text" label="Fullname" onBlur={handleBlur} onChange={handleChange} value={values._fullname} name="_fullname" id="_fullname" error={!!touched._fullname && !!errors._fullname} helperText={touched._fullname && errors._fullname} autoComplete="on" sx={{ gridColumn: "span 4" }}
            />
            <TextField fullWidth variant="filled" type="text" label="Email" onBlur={handleBlur} onChange={handleChange} value={values._email} name="_email"  id="_email" error={!!touched._email && !!errors._email} helperText={touched._email && errors._email} autoComplete="on" sx={{ gridColumn: "span 4" }}
            />
            <TextField fullWidth variant="filled" type="text" label="Role" onBlur={handleBlur} onChange={handleChange} value={values._role} name="_role" id="_role" error={!!touched._role && !!errors._role} helperText={touched._role && errors._role} autoComplete="on" sx={{ gridColumn: "span 4" }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end", marginTop: "20px" }}>
            <Button type="submit" color="secondary" variant="contained">
              Create New User
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
}

// CreateUser component
function CreateUser() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();


  const handleFormSubmit = async (values) => {
    try {
      const res = await addUser(values, token);
      if (res.data.status === 200) {
        toast.success(res.data.message);
        navigate("/dashboard/data/usermangment");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error(error.message);
      console.log(error.message);
    }
  };

  return (
    <StyledDiv>
      <Content>
        <Box sx={{ margin: "20px" }}>
          <NavBar title="CREATE USER" subtitle="Create a New User Profile" />
          <UserForm handleSubmit={handleFormSubmit} />
        </Box>
      </Content>
    </StyledDiv>
  );
}

export default CreateUser;



