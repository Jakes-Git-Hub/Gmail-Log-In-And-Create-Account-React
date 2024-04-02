import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { SelectAnAccountToSignInComponent } from "../components/SelectAnAccountToSignInComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const SelectAnAccountToSignInContainer = ({ userData, updateUser, text }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false); 

    const navigate = useNavigate();

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

// Change Language

    const handleLanguageSelection = (chosenLanguage) => {
        window.scrollTo({
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
        updateUser({ language: chosenLanguage })
    };

// Handle Next Click

    const handleNextClick = (e) => {
        e.preventDefault();
        navigate('/choose-your-settings'); 
    };

    return(
        <>
            <SelectAnAccountToSignInComponent
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
            />
        </>
    );
};
