import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ExpressChooseYourSettingsComponent } from "../components/ExpressChooseYourSettingsComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const ExpressChooseYourSettingsContainer = ({ updateUser }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false); 
    const [usersProfileCircleColor, setUsersProfileCircleColor] = useState('');

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
        navigate('/add-phone-number'); 
    };

 return(
    <>
        <ExpressChooseYourSettingsComponent
            handleNextClick={handleNextClick}
            isImageLoaded={isImageLoaded}
        />
    </>
 );
};
