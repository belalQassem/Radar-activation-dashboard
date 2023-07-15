import styled from 'styled-components';
// export const StyledInput = styled.input`
//   width: 90%;
//   height: 50px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 0 10px;
//   margin: 10px auto;
//   font-size: 16px;

//   &:focus {
//     outline: none;
//     border: 1px solid #000;
//   }

//   &:hover {
//     border: 1px solid #000;
//     box-shadow: 0 0 5px #000;
//   }

//   &:active {
//     background-color: #fff;
//     color: #000;
//     border: 1px solid #000;
//   }

//   @media (max-width: 768px) {
//     width: 90%;
//   }
// `;

// export const Styledlabel = styled.label`
//   width: 50%;
//   padding: 0 10px;
//   font-size: 16px;

//   @media (max-width: 768px) {
//     width: 50%;
//   }
// `;
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