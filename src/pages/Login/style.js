import styled from "styled-components";

import { AiOutlineEye, AiOutlineEyeInvisible,AiOutlineUser,AiOutlineLock } from 'react-icons/ai';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;







export const ErrorMessage = styled.span`
  color: red;
  font-size: 16px;
  font-family: "Arial";
  margin: 10px;
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