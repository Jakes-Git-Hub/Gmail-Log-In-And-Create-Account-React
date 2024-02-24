import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ReviewYourAccountInfoComponent } from "../components/ReviewYourAccountInfoComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const ReviewYourAccountInfoContainer = ({ userData, updateUser, text, translationLoading }) => {

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
        updateUser({ language: chosenLanguage.value })
    };

// Assign Users Profile Circle Color

    useEffect(() => {
        if (!userData.profileCircleColor) {
            profileCircleColor();
        }
    }, []);

    const profileCircleColor = () => {
        console.log('profileCircleColor running');
        let randomColor;
        do {
            randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
            var r = parseInt(randomColor.substring(1,3),16);
            var g = parseInt(randomColor.substring(3,5),16);
            var b = parseInt(randomColor.substring(5,7),16);
            var brightness = (r * 299 + g * 587 + b * 114) / 1000;
        } while (brightness > 200); // Change this value to adjust the "closeness" to white
        updateUser({ profileCircleColor: randomColor });
    }

// Handle Next Click

    const handleNextClick = (e) => {
        e.preventDefault();
        navigate('/choose-your-settings'); 
    };

    return(
        <>
            <ReviewYourAccountInfoComponent
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                translationLoading={translationLoading}
            />
        </>
    );
};
