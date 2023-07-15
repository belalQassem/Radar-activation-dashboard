
import styled from 'styled-components';
 export const StyledDiv = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0 10px;
     background-color: #fff;
     height: 10vh;
     width: 100%;
     box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
     @media (max-width: 768px) {
         position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 10vh;
            width: 100%;
            z-index: 1;
     }
 `;
 export const StyledUl = styled.ul`
     display: flex;
     justify-content: space-between;
     align-items: center;
     list-style: none;
     padding: 0 10px;
     margin: 0;
     @media (max-width: 768px) {
         display: none;
     }
 `;
 export const StyledLi = styled.li`
     display: flex;
     justify-content: space-between;
     align-items: center;
     list-style: none;
     padding: 0 10px;
     margin: 0;
     @media (max-width: 768px) {
         display: none;
     }
 `;
 export const StyledLink = styled.a`
     text-decoration: none;
     color: #000;
     font-size: 16px;
     margin: 0 10px;
     &:hover {
         color: #000;
     }
 `;




