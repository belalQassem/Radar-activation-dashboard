import styled from "styled-components";

// StyledInput search resposive style
export const StyledInput = styled.input`
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 10px;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease-in-out;
    background-color: $th;

    &:focus {
        border-color: #ff0000;
    }

    @media (max-width: 768px) {
        width: 300px;
        
    }
`;

    