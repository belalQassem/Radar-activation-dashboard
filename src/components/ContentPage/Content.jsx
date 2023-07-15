import React from 'react'
import { StyledDiv } from './style'
import Header from '../Header/Header';

const Content = ({ children }) => {
    return (
        <StyledDiv>
            <Header />
            {children}
        </StyledDiv>
    )
}

export default Content;