import React from "react";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const StaticElementComponent = ({children, isImageLoaded}) => {
  return (
    <div>
      <div id='google-container'>
        <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : "empty-blue-snake-loader"}>
          <div className="blue-snake-loader"></div>
        </div>
        <img src={googleWritingSvg} alt="Google Writing" id="google-writing"/>
        {children}
      </div>
    </div>
  );
};
