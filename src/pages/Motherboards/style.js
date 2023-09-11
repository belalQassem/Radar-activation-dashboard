import styled from 'styled-components';

export const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
`;
export const StyledForm = styled.form`
    display: flex;
    flex-direction:column-reverse;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 100%;
    margin: 0px 20px;
    padding: 0px 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
 & .form-control {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    background-color: transparent;
    }
    & .form-control:focus {
        border: none;
        outline: none;
    }
    & label {
        font-size: 16px;
        font-weight: 500;
        color: #000;
    }
    `;
export const StyledButton = styled.button`
width: 22.5rem;
color: white;
background: #3c8224;
margin: 20px 0;
padding: 1rem;
border: none;
border-radius: 25px;
cursor: pointer;
font-size: 16px;
&[disabled] {
  background-color: grey;
  cursor: not-allowed;
}

&:focus {
  outline: none;
}
&:hover {
  
  box-shadow: 0 0 5px #000;
}
&:active {
  background-color: #fff;
  color: #000;
  
}

@media (min-width: 300px) and (max-width: 1200px) {
  width: 17.5rem;
}
`;



    