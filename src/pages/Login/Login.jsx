import React from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { StyledDiv, StyledForm, Styledh1 } from './style'

const Login = () => {
  const submit = (e) => { e.preventDefault() }
  return (

    <StyledDiv>
      <StyledForm onSubmit={submit}>
        <Styledh1>
          <h1>Login</h1>
        </Styledh1>
        <Input ClassName="Email" Type="Email" Label="Email" Id="Email" Text="Username" Placeholder="Enter User Name" />
        <Input ClassName="password" Type="password" Label="password" Id="password" Text="Password" Placeholder="Enter Password" />
        <Button ClassName="button" Type="button" Text="Login" />
      </StyledForm>

    </StyledDiv>


  )
}

export default Login