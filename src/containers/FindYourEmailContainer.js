import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FindYourEmailComponent } from '../components/FindYourEmailComponent';
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";

export const FindYourEmailContainer = ({ users, handleLogin, translationLoading, userData, updateUser}) => {

    const navigate = useNavigate();

    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [errorCondition, setErrorCondition] = useState(null);

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

// Email or Phone

    const onEmailOrPhoneChange = (e) => {
        setEmailOrPhone(e.target.value);
    }

// Forgot Email

    const handleForgotEmailClick = () => {
        navigate('/forgot-email');
    }

// Error

    const error = error => setErrorCondition(error);

// Handle Next

    const handleNextClick = (e) => {
        e.preventDefault();
        if (emailOrPhone === '') {
            error('emailOrPhoneEmpty');
            const emailOrPhoneInput = document.getElementById('emailOrPhoneInput');
            emailOrPhoneInput.focus();
        } else if (users.find(user => user.email !== emailOrPhone && user.phoneNumber !== emailOrPhone)) {
            error('couldntFindYourAccount');
            const emailOrPhoneInput = document.getElementById('emailOrPhoneInput');
            emailOrPhoneInput.focus();
        } else {
            const registeredEmailOrPhone = users.find(
                (user) => user.email === emailOrPhone || user.phoneNumber === emailOrPhone
            );
            if (registeredEmailOrPhone) {
                navigate('/login-with-password'); // Use Navigate.push to navigate
            }
        }
    };

    return(
        <>
            <FindYourEmailComponent
                // handleCreateAccountClick={handleCreateAccountClick}
                isImagePreloaded={isImagePreloaded}
                translationLoading={translationLoading}
                userData={userData}
                handleLanguageSelection={handleLanguageSelection}
                isImageLoaded={isImageLoaded}
                errorCondition={errorCondition}
                emailOrPhone={emailOrPhone}
                onEmailOrPhoneChange={onEmailOrPhoneChange}
            />
        </>
    );
};