
import React from "react";
import { LoadingStyled } from "./style";
// import Logo from "../../assets/logo-without-background-final-100x100-1.png"

const Loading = () => {
    return (
        <>
            {/* <img src={Logo} alt="logo" /> */}
            <LoadingStyled>

                <div className="loading-spinner"></div>
                <p className="loading-message">Loading...</p>
            </LoadingStyled>
        </>

    );
};

export default Loading;