import styled from "styled-components";
import {BiEdit}from 'react-icons/bi'
import {RiDeleteBin2Line}from 'react-icons/ri'

export const StyledButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow-x: scroll;

  &:hover {
    background-color: #ff3333;
  }
`;
export const UpdateIcon = styled(BiEdit)`
  color: #fff;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;
export const DeleteIcon = styled(RiDeleteBin2Line)`
  color: #fff;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`