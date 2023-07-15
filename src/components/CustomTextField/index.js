import React from 'react';
import TextField from '@mui/material/TextField';

const CustomTextField = ({
  fullWidth = true,
  variant = 'filled',
  type = 'text',
  ...restProps
}) => {
  return <TextField fullWidth={fullWidth} variant={variant} type={type} {...restProps} />;
};

export default CustomTextField;
