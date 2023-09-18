import styled from 'styled-components';
import MuiPagination from '@mui/material/Pagination';
export const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
`;
export const StyledPagination = styled(MuiPagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 40px;
  .MuiPagination-ul {
    list-style: none;
    padding-top:20px; 
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .MuiPaginationItem-root {
    margin: 0 5px;
    font-size: 16px;
   
    color: #000000;
    border: 1px solid #dddddd;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }
    &.Mui-selected {
      background-color: #007bff;
      color: #ffffff;
      border: 1px solid #007bff;
    }
  }
`;



    