import React from 'react'
import { StyledButton,StyledDiv } from './style'

const Button = ({Text,Type}) => {
  return (
    <StyledDiv>
        <StyledButton type={Type}>{Text}</StyledButton>
    </StyledDiv>
  )
}
export default Button