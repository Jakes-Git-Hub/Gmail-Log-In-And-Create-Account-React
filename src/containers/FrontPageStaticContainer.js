import React, { useState, useEffect } from "react";
import { FrontPageStaticComponent } from "../components/FrontPageStaticComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const FrontPageStaticContainer = ({ children }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = googleWritingSvg;
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  return (
    <FrontPageStaticComponent
      isImageLoaded={isImageLoaded}
    >
        {children}
    </FrontPageStaticComponent>
  );
};
