import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ChooseYourSettingsComponent } from "../components/ChooseYourSettingsComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const ChooseYourSettingsContainer = ({ updateUser }) => {

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

// Assign Users Profile Circle Color

    const profileCircleColor = () => {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        setUsersProfileCircleColor(randomColor);
    }

    useEffect(() => {
        profileCircleColor();
        updateUser({ profileCircleColor: usersProfileCircleColor });
    }, []);

    useEffect(() => {
        console.log(`usersProfileCircleColor:`, usersProfileCircleColor);
    }, [usersProfileCircleColor]);

// Handle Next Click

    const handleNextClick = (e) => {
        e.preventDefault();
        navigate('/add-phone-number'); 
    };

 return(
    <>
        <ChooseYourSettingsComponent
            handleNextClick={handleNextClick}
            isImageLoaded={isImageLoaded}
        />
    </>
 );
};
