// import styled from 'styled-components';
// export const Styledh1 = styled.h1`
//   font-size: 30px;
//   color: #000;
//   margin: 0px auto;
//   text-align: center;
//   padding: 0 10px;
//   margin: 10px 10px;
//   font-size: 16px;

//   &:focus {
//     outline: none;
//     border: 1px solid #000;
//   }

//   @media (min-width: 768px) {
//     width: 50%;
//   }

//   @media (max-width: 768px) {
//     width: 90%;
//   }
// `;

// export const StyledDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   width: 100vw;
//   background-color: #f5f5f5;
// `;

// export const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 15px;
//   height: 60vh;
//   width: 40vw;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

//   @media (max-width: 768px) {
//     width: 80vw;
//     height: 70vh;
//   }

//   @media (min-width: 769px) and (max-width: 1900px) {
//     width: 40vw;
//   }
// `;

import styled from "styled-components";

import { AiOutlineEye, AiOutlineEyeInvisible,AiOutlineUser,AiOutlineLock } from 'react-icons/ai';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 1px solid #999;
  box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
  border-radius: 10px;
  width: 400px;
  margin: 3rem auto;
  padding: 0.7rem;
  background-color: rgba(255, 255, 255, 0.6);
  position: fixed;
  z-index: 9999;
  @media (min-width: 300px) and (max-width: 1200px) {
    width: 340px;
    padding: 10px;
  }
`;

export const Register = styled.h3`
  font-size: 1.5em;
  letter-spacing: 0.1rem;
  color: #000000;
  font-family: "Arial";
  font-weight: 600;

  @media (min-width: 300px) and (max-width: 1200px) {
    font-size: 0.9em;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;

  & label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 6px;
    letter-spacing: 0.1rem;
    font-family: "Arial";
  }
  & input {
    width: 20rem;
    padding: 0.8rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
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
  }
  @media (min-width: 300px) and (max-width: 1200px) {
    & input {
      width: 15rem;
    }
  }
`;

export const ShowPassword = styled.img`
  position: absolute;
  width: 1.3rem;
  height: 1.3rem;
  top: 50px;
  left: 300px;
  cursor: pointer;

  @media (min-width: 300px) and (max-width: 1200px) {
    left: 220px;
  }
`;

export const SubmitButton = styled.button`
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

export const ErrorMessage = styled.span`
  color: red;
  font-size: 16px;
  font-family: "Arial";
  margin: 10px;
`;


// styled video background 
export const StyledVideo = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

 export const Card = styled.div`
        background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
        border-radius: 22px;
        transition: all 0.3s ease-in-out;
        &:hover {
          box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
      }
        `;

export  const Card2 = styled.div`
        border-radius: 20px;
        transition: all .2s;
        &:hover {
          transform: scale(0.98);
        border-radius: 20px;
  }
        `;

 export const Form = styled.form`
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-left: 2em;
        padding-right: 2em;
        padding-bottom: 0.4em;
        background-color: #171717;
        border-radius: 20px;
        `;

 export const Heading = styled.p`
        text-align: center;
        margin: 1.5em;
        color: rgb(0, 255, 200);
        font-size: 1.5em;
        letter-spacing: 0.1em;
        `;

 export const Field = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        border-radius: 25px;
        padding: 0.6em;
        border: none;
        outline: none;
        color: white;
        background-color: #171717;
        box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
        `;

  export const UserIcon = styled(AiOutlineUser)`
        height: 1.3em;
        width: 1.3em;
        fill: rgb(0, 255, 200);
        `;
 export const PasswordIcon = styled(AiOutlineLock)`
        height: 1.3em;
        width: 1.3em;
        fill: rgb(0, 255, 200);
        `
export  const ICONShow = styled(AiOutlineEye)`
        height: 1.3em;
        width: 1.3em;
        fill: rgb(0, 255, 200);
        `
export const ICONHide = styled(AiOutlineEyeInvisible)`
        height: 1.3em;
        width: 1.3em;
        fill: rgb(0, 255, 200);
        `

export  const InputField = styled.input`
        background: none;
        border: none;
        outline: none;
        width: 100%;
        color: rgb(0, 255, 200);
        `;

export const Button = styled.button`
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin-top: 2em;
        `;

export const Button1 = styled(Button)`
        padding: 0.5em;
        border-radius: 5px;
        transition: .4s ease-in-out;
        border: none;
        outline: none;
        transition: .4s ease-in-out;
        background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
        color: rgb(0, 0, 0);
        &:hover{
          background-image: linear-gradient(163deg, #00642f 0%, #13034b 100%);
        color: rgb(0, 255, 200);
  }
        `;
 export const Button3 = styled(Button)`
        margin-top: 0.2em;
        margin-bottom: 3em;
        padding: 0.5em;
        border-radius: 5px;
        border: none;
        outline: none;
        transition: .4s ease-in-out;
        background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
        color: rgb(0, 0, 0);
        &:hover {
          background-image: linear-gradient(163deg, #a00000fa 0%, #d10050 100%);
        color: rgb(255, 255, 255);
  }
        `;