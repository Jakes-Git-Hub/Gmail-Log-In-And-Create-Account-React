import React from "react";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const CreatePasswordStaticElementComponent = ({children}) => {
    return (
      <div>
        <div className='center-container'>
          <div id='google-container-create-password'>
              <img src={googleWritingSvg} alt="Google Writing" id="google-writing-create-password"/>
              {children}
          </div>
        </div>
      </div>
    );
  };
