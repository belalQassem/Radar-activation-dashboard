import React from "react";
import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../utils/theme";

// Custom Pagination component
function Pagination({ currentpage, onPageChange, totalPage }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handlePageChange = (event, newPage) => {
    // Prevent invalid page changes
    if (newPage >= 0 && newPage < totalPage) {
      onPageChange(newPage);
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Button
        onClick={() => handlePageChange(null, currentpage - 1)}
        disabled={currentpage === 0}
        variant="contained"
        sx={{ backgroundColor: colors.blueAccent[700], color: colors.grey[100] }}
      >
        Previous
      </Button>
      
       <span style={{ margin: "0 10px", width: "auto"  }}> {`Page ${currentpage + 1} of ${totalPage}`}</span> 
  
     
      <Button
        onClick={() => handlePageChange(null, currentpage + 1)}
        disabled={currentpage === totalPage - 1}
        variant="contained"
        sx={{ backgroundColor: colors.blueAccent[700], color: colors.grey[100] }}
      >
        Next
      </Button>
    </Box>
  );
}

export default Pagination;
