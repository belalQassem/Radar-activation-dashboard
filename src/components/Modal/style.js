import styled from "styled-components";
import { MdCloseFullscreen } from "react-icons/md";


export const StyledDiv = styled.div`
  height: 70%;
  width:70%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  display: grid;
  grid-template-rows: 2rem 4fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
`;
export const StyledHeader = styled.div`
  width: 100%;
  height: 100%;
  grid-area: header;
  background-color: #fff;
`;
export const FullScreenExit = styled(MdCloseFullscreen)`
  height: 1.5rem;
  width: 1.5rem;
  color: #616161;
  position: absolute;
  top: 8px;
  left: 12px;
  display: block;
  cursor: pointer;
  &:active{
    background-color:#084F5F;
    color: #fff;
}
`;
export const StyledMain = styled.div`
  width: 100%;
  height: 100%;
  background-color: #8e8e8e;
  grid-area: main;
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 4fr 2rem;
  grid-template-areas: "empty sidbar ";
`;
