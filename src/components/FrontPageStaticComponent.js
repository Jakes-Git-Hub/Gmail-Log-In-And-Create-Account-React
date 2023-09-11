import React from "react";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const FrontPageStaticComponent = ({children}) => {
    return (
      <div>
        <div className='center-container-front-page'>
          <div id='google-container-front-page'>
              <img src={googleWritingSvg} alt="Google Writing" id="google-writing-front-page"/>
              {children}
          </div>
        </div>
      </div>
    );
  };
