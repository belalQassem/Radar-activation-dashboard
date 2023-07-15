import { MenuItem, Typography, useTheme } from '@mui/material';
import React from 'react'
import { tokens } from '../../utils/theme';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
          margin: "5px 0",
          backgroundColor: selected === title ? colors.primary[500] : undefined,
          borderRadius: "10px 0 0 10px",
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };
  export default Item;