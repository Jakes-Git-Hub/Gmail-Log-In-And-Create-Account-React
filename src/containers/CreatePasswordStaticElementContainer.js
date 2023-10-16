import React, { useState, useEffect } from "react";
import { CreatePasswordStaticElementComponent } from "../components/CreatePasswordStaticElementComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";
export const CreatePasswordStaticElementContainer = ({ children }) => {
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
    <CreatePasswordStaticElementComponent
    isImageLoaded={isImageLoaded}
    >
        {children}
    </CreatePasswordStaticElementComponent>
  );
};
