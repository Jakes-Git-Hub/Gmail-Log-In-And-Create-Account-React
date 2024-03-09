import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FindYourEmailComponent } from "../components/FindYourEmailComponent";
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";

export const FindYourEmailContainer = ({ updateUser, text,  userData, updateFindYourEmailCredentials }) => {

    const [phoneNumberOrEmail, setPhoneNumberOrEmail] = useState("");
    const [errorCondition, setErrorCondition] = useState(null);
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

// First Name

    const onPhoneNumberOrEmailInputChange = (e) => {
        const { value } = e.target;
        setPhoneNumberOrEmail(value);
    };

// Errors

    const error = error => {
        setErrorCondition(error);
    };

// Handle Next

    const handleNextClick = () => {
        const phoneNumberOrEmailInput = document.getElementById('firstNameInput');

        if (phoneNumberOrEmail === '') {
            error('phoneNumberOrEmailEmpty');
            if (phoneNumberOrEmailInput) {
               phoneNumberOrEmailInput.focus();
            }
        }

        if (phoneNumberOrEmail !== '') {
            error(null);
            updateFindYourEmailCredentials({ phoneNumberOrEmail: phoneNumberOrEmail });
            navigate('/whats-your-name');
        } 
        
    };

    return(
        <>
            <FindYourEmailComponent
                handleNextClick={handleNextClick}
                isImagePreloaded={isImagePreloaded}
                errorCondition={errorCondition}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                isImageLoaded={isImageLoaded}
                onPhoneNumberOrEmailInputChange={onPhoneNumberOrEmailInputChange}
                userData={userData}
                phoneNumberOrEmail={phoneNumberOrEmail}
            />
        </>
    );
}