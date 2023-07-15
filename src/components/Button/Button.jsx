import React from 'react'
import { StyledButton,StyledDiv } from './style'

const Button = ({Text,Type}) => {
  return (
    <div>
        <StyledButton type={Type}>{Text}</StyledButton>
    </div>
  )
}
export default Button