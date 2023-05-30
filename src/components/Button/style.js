import styled from "styled-components";
export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledButton = styled.button`
   width: 80%;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding: 0 40px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center; /* Center horizontally */
  font-size: 16px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
  }
    &:hover {
    border: 1px solid #000;
    box-shadow: 0 0 5px #000;
    }
    &:active {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    }
    
    
  
  @media (max-width: 768px) {
    width: 90%;
  }
`;