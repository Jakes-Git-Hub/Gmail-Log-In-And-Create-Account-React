import React from "react";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const StaticElementComponent = ({children}) => {
    return (
      <div>
        <div id='log-in-container'>
            <img src={googleWritingSvg} alt="Google Writing" id="google-writing"/>
            {children}
        </div>
      </div>
    );
  };
