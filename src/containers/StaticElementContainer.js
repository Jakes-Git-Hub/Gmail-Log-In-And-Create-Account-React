import React, { useState, useEffect } from "react";
import { StaticElementComponent } from "../components/StaticElementComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const StaticElementContainer = ({ children }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = googleWritingSvg;
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  // Render the StaticElementComponent with the children once the image is loaded
  return (
    <StaticElementComponent
      isImageLoaded={isImageLoaded}
    >
      {children}
    </StaticElementComponent>
  );
};