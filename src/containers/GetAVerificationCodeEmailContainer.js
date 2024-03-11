import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GetAVerificationCodeEmailComponent } from "../components/GetAVerificationCodeEmailComponent";
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";

export const GetAVerificationCodeEmailContainer = ({ updateUser, text,  userData, findWith}) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const navigate = useNavigate();

// Handle Slow Svg Load

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

    const isImagePreloaded = useImagePreload(errorImage);

// Change Language

    const handleLanguageSelection = (chosenLanguage) => {
        updateUser({ language: chosenLanguage })
    };

// Handle Send Click

    const handleSendClick = () => {

    };

    return(
        <>
            <GetAVerificationCodeEmailComponent
                handleSendClick={handleSendClick}
                isImagePreloaded={isImagePreloaded}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                isImageLoaded={isImageLoaded}
                userData={userData}
                findWith={findWith}
            />
        </>
    );
}