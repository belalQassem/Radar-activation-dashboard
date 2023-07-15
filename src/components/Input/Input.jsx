import React from 'react'
import { InputWrapper } from './style'

const Input = ({ClassName,Type,Text,Label,Id,Placeholder,Value,OnChange}) => {
  return (
    <InputWrapper>
      <label htmlFor={Label}>{Text}</label>
      <input id={Id} className={ClassName} type={Type} placeholder={Placeholder} value={Value} onChange={OnChange}></input>
    </InputWrapper>
  )
}
export default Input;