import styled from 'styled-components';
export const Styledh1 = styled.h1`
    font-size: 30px;
    color: #000;
    margin: 0px auto;
    text-align: center;
    padding: 0 10px;
    margin: 10px 10px;
    font-size: 16px;
    &:focus {
        outline: none;
        border: 1px solid #000;
    }   
    @media (min-width: 768px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
    `;
    
export const StyledDiv = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
     background-color: #f5f5f5;
`;
export const StyledForm = styled.form`
   display: flex;
    flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 15px;
   height: 60vh;
   width: 40vw;
   background-color: #fff;
   border-radius: 10px;
   box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
   @media (max-width: 768px) {
       width: 80vw;
   }
    @media (min-width: 768px) and (max-width: 1900px) {
         width: 40vw;
    }
`;



