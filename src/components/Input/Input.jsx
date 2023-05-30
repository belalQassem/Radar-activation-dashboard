import React from 'react'
import {StyledDiv,StyledInput,Styledlabel } from './style'


const Input = ({ClassName,Type,Text,Label,Id,Placeholder}) => {
  return (
    <StyledDiv>
      
        <Styledlabel htmlFor={Label}>{Text}</Styledlabel>
        <StyledInput id={Id} className={ClassName} type={Type} placeholder={Placeholder}/>
  
    </StyledDiv>
  )
}

export default Input