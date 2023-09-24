// import * as React from "react";
// import Modal from "@mui/material/Modal";
// import { Formik } from "formik";
// import * as yup from "yup";
// import { Box, Button, TextField } from "@mui/material";
// import { StyledDiv, StyledHeader, FullScreenExit, StyledMain } from "./style";
// import useMediaQuery from "@mui/material/useMediaQuery";






// const ModalComponent = ({ isOpen, onClose, isUpdate, updateUser, selectedUser,Open,Close, createMotherboard,isCreate }) => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");
//   const initialValues = {
//     _username: selectedUser ? selectedUser.username : "",
//     _fullname: selectedUser ? selectedUser.fullname : "",
//     _email: selectedUser ? selectedUser.email : "",
//     _role: selectedUser ? selectedUser.role : "",

//   };
//   const initialValues2 = {
//     operator_id: "",
//     location_id: "",
//     street_name: "",
//     system_key: "",
//   };

//   const checkoutSchema2 = yup.object().shape({
//     operator_id: yup.number().required("required"),
//     location_id: yup.number().required("required"),
//     street_name: yup.number().required("required"),
//     system_key: yup.number().required("required"),
//   });

//   const checkoutSchema = yup.object().shape({
//     _username: yup.number().required("Username is required"),
//     _fullname: yup.number().required("Full Name is required"),
//     _email: yup.number().email("Invalid email").required("Email is required"),
//     _role: yup.number().required("Role is required"),
//   });

//   const handleFormSubmit = async (values) => {
//     try {
//       if (isUpdate) {
//         const updatedUser = { ...selectedUser, ...values };
//         await updateUser(updatedUser);
//         onClose();
//       } else if (isCreate) {
//         await createMotherboard(values);
//         Close();
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <Modal
//       sx={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(0,0,30,0.4)" }}
//       open={isUpdate ? isOpen : Open}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <StyledDiv>
//         <StyledHeader>
//           {isUpdate ? <FullScreenExit onClick={onClose} />:<FullScreenExit onClick={Close} />  }
//         </StyledHeader>

//         <StyledMain>
//           <Formik
//             onSubmit={handleFormSubmit}
//             initialValues={isUpdate ? initialValues : initialValues2}
//             validationSchema={isUpdate ? checkoutSchema : checkoutSchema2}
//           >
//             {({
//               values,
//               errors,
//               touched,
//               handleBlur,
//               handleChange,
//               handleSubmit,
//             }) => (
//               <form onSubmit={handleSubmit}>
//                 <Box   sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },display:"grid", gap:"30px", gridTemplateColumns:"1fr", gridTemplateRows:"1fr 1fr 1fr 1fr" }}
//                 >
//                 {isUpdate && (
//                   <>
//                   <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="Username"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values._username}
//                   name="_username"
//                   error={!!touched._username && !!errors._username}
//                   helperText={touched._username && errors._username}
//                   autoComplete="username"
//                 />

              
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="Full Name"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values._fullname}
//                   name="_fullname"
//                   error={!!touched._fullname && !!errors._fullname}
//                   helperText={touched._fullname && errors._fullname}
//                   autoComplete="fullname"
//                 />

                
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="Email"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values._email}
//                   name="_email"
//                   error={!!touched._email && !!errors._email}
//                   helperText={touched._email && errors._email}
//                   autoComplete="email"
//                 />
//                 <TextField
//                   fullWidth
//                   variant="filled"
//                   type="text"
//                   label="Role"
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values._role}
//                   name="_role"
//                   error={!!touched._role && !!errors._role}
//                   helperText={touched._role && errors._role}
//                   autoComplete="role"
//                 />
//                   </>)}
                
//                   {isCreate && (
//                     <> 
//                       <TextField
//                         fullWidth
//                         variant="filled"
//                         type="text"
//                         label="System Key"
//                         onBlur={handleBlur}
//                         onChange={handleChange}
//                         value={values.system_key}
//                         name="system_key"
//                         error={touched.system_key && errors.system_key}
//                         helperText={touched.system_key && errors.system_key}
//                       />
//                       <TextField
//                         fullWidth
//                         variant="filled"
//                         type="text"
//                         label="Operator ID"
//                         onBlur={handleBlur}
//                         onChange={handleChange}
//                         value={values.operator_id}
//                         name="operator_id"
//                         error={touched.operator_id && errors.operator_id}
//                         helperText={touched.operator_id && errors.operator_id}
//                       />

//                       <TextField
//                         fullWidth
//                         variant="filled"
//                         type="text"
//                         label="Location ID"
//                         onBlur={handleBlur}
//                         onChange={handleChange}
//                         value={values.location_id}
//                         name="location_id"
//                         error={touched.location_id && errors.location_id}
//                         helperText={touched.location_id && errors.location_id}
//                       />

//                       <TextField
//                         fullWidth
//                         variant="filled"
//                         type="text"
//                         label="Street Name"
//                         onBlur={handleBlur}
//                         onChange={handleChange}
//                         value={values.street_name}
//                         name="street_name"
//                         error={touched.street_name && errors.street_name}
//                         helperText={touched.street_name && errors.street_name}
//                       />

                     
//                     </>
//                   )}

//                 <Box display="flex" justifyContent="end" mt="20px">
//                   <Button type="submit" color="secondary" variant="contained">
//                     {isUpdate ? "Update User" : "Create User"}
//                   </Button>
//                 </Box>
//               </Box>
//               </form>
//             )}
//           </Formik>
//         </StyledMain>
//       </StyledDiv>
//     </Modal>
//   );
// };

// export default ModalComponent;
import React from "react";
import Modal from "@mui/material/Modal";
import { Formik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import { StyledDiv, StyledHeader, FullScreenExit, StyledMain } from "./style";

// Validation Schemas
const updateSchema = yup.object().shape({
  _username: yup.string().required("Username is required"),
  _fullname: yup.string().required("Full Name is required"),
  _email: yup.string().email("Invalid email").required("Email is required"),
  _role: yup.string().required("Role is required"),
});

const createSchema = yup.object().shape({
  system_key: yup.string().required("System Key is required"),
  operator_id: yup.string().required("Operator ID is required"),
  location_id: yup.string().required("Location ID is required"),
  street_name: yup.string().required("Street Name is required"),
});

  

const initialValuesCreate = {
  system_key: "",
  operator_id: "",
  location_id: "",
  street_name: "",
};

// UpdateUserForm Component
const UpdateUserForm = ({ initialValues, schema, onSubmit, onClose }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={onSubmit}
  >
    {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Username"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values._username}
          name="_username"
          error={touched._username && errors._username}
          helperText={touched._username && errors._username}
          autoComplete="username"
        />

        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Full Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values._fullname}
          name="_fullname"
          error={touched._fullname && errors._fullname}
          helperText={touched._fullname && errors._fullname}
          autoComplete="fullname"
        />

        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values._email}
          name="_email"
          error={touched._email && errors._email}
          helperText={touched._email && errors._email}
          autoComplete="email"
        />

        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Role"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values._role}
          name="_role"
          error={touched._role && errors._role}
          helperText={touched._role && errors._role}
          autoComplete="role"
        />

        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Update User
          </Button>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
        </Box>
      </form>
    )}
  </Formik>
);

// CreateMotherboardForm Component
const CreateMotherboardForm = ({ initialValues, schema, onSubmit, onClose }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={onSubmit}
  >
    {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="System Key"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.system_key}
          name="system_key"
          error={touched.system_key && errors.system_key}
          helperText={touched.system_key && errors.system_key}
        />

        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Operator ID"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.operator_id}
          name="operator_id"
          error={touched.operator_id && errors.operator_id}
          helperText={touched.operator_id && errors.operator_id}
        />

        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Location ID"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.location_id}
          name="location_id"
          error={touched.location_id && errors.location_id}
          helperText={touched.location_id && errors.location_id}
        />

        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Street Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.street_name}
          name="street_name"
          error={touched.street_name && errors.street_name}
          helperText={touched.street_name && errors.street_name}
        />

        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create Motherboard
          </Button>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
        </Box>
      </form>
    )}
  </Formik>
);

// ModalComponent Component
const ModalComponent = ({
  isOpen,
  onClose,
  isUpdate,
  updateUser,
  selectedUser,
  Open,
  Close,
  createMotherboard,
  isCreate,
}) => {

  const initialValuesUpdate = {
    _username: selectedUser ? selectedUser.username : "",
    _fullname: selectedUser ? selectedUser.fullname : "",
    _email: selectedUser ? selectedUser.email : "",
    _role: selectedUser ? selectedUser.role : "",
  };


  return (
    <Modal
      sx={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(0,0,30,0.4)" }}
      open={isUpdate ? isOpen : Open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledDiv>
        <StyledHeader>
          {isUpdate ? <FullScreenExit onClick={onClose} /> : <FullScreenExit onClick={Close} />}
        </StyledHeader>

        <StyledMain>
          {isUpdate ? (
            <UpdateUserForm
              initialValues={initialValuesUpdate}
              schema={updateSchema}
              onSubmit={(values) => {
                const updatedUser = { ...selectedUser, ...values };
                updateUser(updatedUser);
                onClose();
              }}
              onClose={onClose}
            />
          ) : (
            <CreateMotherboardForm
              initialValues={initialValuesCreate}
              schema={createSchema}
              onSubmit={(values) => {
                createMotherboard(values);
                Close();
              }}
              onClose={Close}
            />
          )}
        </StyledMain>
      </StyledDiv>
    </Modal>
  );
};

export default ModalComponent;

