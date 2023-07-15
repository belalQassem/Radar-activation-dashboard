// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// export const StyledDiv = styled.div`
//   position: fixed;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   height: 90vh;
//   width: 20vw;
//   border-radius: 0 5px 5px 0;
//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const StyledUl = styled.ul`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 100%;
//   height: 100%;
//   gap: 5vh;
//   background-color: rgba(255, 255, 255, 0.5);
//   align-items: center;
//   list-style: none;
//   margin: 0;
// `;

// export const StyledLi = styled.li`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   list-style: none;
//   width: 100%;
//   height: 10vh;
//   margin: 0;
//   cursor: pointer;
//   color: #000;
//   font-size: larger;
//   font-weight: bold;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.9);
//     color: #fff;
//   }

//   a {
//     text-decoration: none;
//     color: inherit;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;

// export const StyledLink = styled(Link)`
//   font-size: 16px;
//   margin: 0 10px;
//   &:hover {
//     color: #000;
//   }
// `;
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import  {HiUserGroup} from 'react-icons/hi'
import {BiSolidLogOutCircle} from 'react-icons/bi'
export const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 20vw;
  border-radius: 0 5px 5px 0;
  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: rgba(22, 22, 60);
  align-items: center;
  list-style: none;
  margin: 0;
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 10vh;
  margin: 0;
  cursor: pointer;
  color: #000;
  font-size: larger;
  font-weight: bold;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  margin: 0 10px;
  &:hover {
    color: #000;
  }
`;
export const IconDashboard = styled(MdSpaceDashboard)`
display: block;
color: #fff;
height: 25px;
width: 25px;

`
export const IconUserMangament = styled(HiUserGroup)`
display: block;
color: #fff;
height: 25px;
width: 25px;

`
// export const IconLogOut = styled(BiSolidLogOutCircle)`
// display: block;
// color: #fff;
// height: 25px;
// width: 25px;
// `



//  styled Footer component in src\components\Footer\style.js

//  import styled from 'styled-components';
//  export const StyledDiv = styled.div`
//      display: flex;
//      justify-content: center;
//      align-items: center;
//      height: 60px;
//      width: 100%;
//      background-color: #fff;
//      box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
//     `;
//     export const StyledP = styled.p`
//         font-size: 16px;
//         color: #000;
//         margin: 0px auto;
//     `;
//     export const StyledLink = styled.a`
//         text-decoration: none;
//         color: #000;
//         font-size: 16px;
//         margin: 0 10px;
//         &:hover {
//             color: #000;
//         }
//     `;
//     export const StyledUl = styled.ul`
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         list-style: none;
//         padding: 0 10px;
//         margin: 0;
//         @media (max-width: 768px) {
//             display: none;



