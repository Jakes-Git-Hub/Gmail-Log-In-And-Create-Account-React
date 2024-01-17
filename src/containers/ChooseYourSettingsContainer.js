import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ChooseYourSettingsComponent } from "../components/ChooseYourSettingsComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const ChooseYourSettingsContainer = ({ userData, updateUser }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false); 

    const navigate = useNavigate();

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

// Handle Next Click

    const handleNextClick = (e) => {
        e.preventDefault();
        navigate('/choose-your-settings'); 
    };

    return(
        <>
            <ChooseYourSettingsComponent
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
            />
        </>
    );
};
