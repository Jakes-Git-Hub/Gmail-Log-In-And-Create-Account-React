import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ReviewYourAccountInfoComponent } from "../components/ReviewYourAccountInfoComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const ReviewYourAccountInfoContainer = ({ userData, updateUser }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false); 

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

    useEffect(() => {
        if (userData.profileCircleColor === "") {
            profileCircleColor();
        }
    }, []);

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
            />
        </>
    );
};
