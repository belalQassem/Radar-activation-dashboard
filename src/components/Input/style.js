import styled from 'styled-components';
export const StyledDiv = styled.div`
   margin: 0px auto;
   align-items: center;
`;
export const StyledInput = styled.input`
   width: 90%;
   height: 50px;
   border: 1px solid #ccc;
   border-radius: 5px;
   padding: 0 10px;
   margin: 10px auto;
   font-size: 16px;
   &:focus {
       outline: none;
       border: 1px solid #000;
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
export const Styledlabel = styled.label`

    width: 50%;
    padding: 0 10px;
    font-size: 16px;
    
    @media (max-width: 768px) {
        width: 50%;
    }
    `;

