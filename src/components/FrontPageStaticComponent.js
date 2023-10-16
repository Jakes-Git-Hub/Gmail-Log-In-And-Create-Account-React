import React from "react";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const FrontPageStaticComponent = ({children, isImageLoaded}) => {
    return (
      <div>
        {isImageLoaded ? 
          (<div>
            <div id='google-container-front-page'>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-front-page"/>
                {children}
            </div>
          </div>) : 
          (<div class='loader-container'>
            <div class='ellipsis-container'>
                <div class='ellipsis' id='ellipsis-div-1'></div>
                <div class='ellipsis' id='ellipsis-div-2'></div>
                <div class='ellipsis' id='ellipsis-div-3'></div>
                <div class='ellipsis' id='ellipsis-div-4'></div>
            </div>
          </div>)
        }
      </div>
    );
  };
