import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInFrontPageComponent } from '../components/SignInFrontPageComponent';
import useImagePreload from '../hooks/useIsImagePreloadedHook';
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from '../images/google-writing-svg.svg';

export const SignInFrontPageContainer = ({ users, userData, updateUser, text, }) => {

    const navigate = useNavigate();

    const [emailOrPhone, setEmailOrPhone] = useState('');
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

    const handleForgotEmailButtonClick = () => {
        navigate('/find-your-email');
    }

// Guest Mode Info Click

    const handleGuestModeInfoButtonClick = () => {
        window.open('https://support.google.com/chrome/answer/6130773?hl=en', '_blank');
    }

// Create Account Click

    const handleCreateAccountClick = () => {
        navigate('/create-account');
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
        } else if ((!users) || (!users.some(user => user.email === emailOrPhone || user.phoneNumber === emailOrPhone))) {
            error('couldntFindYourAccount');
            const emailOrPhoneInput = document.getElementById('emailOrPhoneInput');
            emailOrPhoneInput.focus();
        } else {
            const registeredEmailOrPhone = users.find(
                (user) => user.email === emailOrPhone || user.phoneNumber === emailOrPhone
            );
            if (registeredEmailOrPhone) {
                navigate('/verify-with-password');
            }
        }
    };

    return(
        <>
            <SignInFrontPageComponent
                isImagePreloaded={isImagePreloaded}
                userData={userData}
                handleLanguageSelection={handleLanguageSelection}
                isImageLoaded={isImageLoaded}
                errorCondition={errorCondition}
                emailOrPhone={emailOrPhone}
                onEmailOrPhoneChange={onEmailOrPhoneChange}
                handleForgotEmailButtonClick={handleForgotEmailButtonClick}
                handleGuestModeInfoButtonClick={handleGuestModeInfoButtonClick}
                handleCreateAccountClick={handleCreateAccountClick}
                handleNextClick={handleNextClick}
                text={text}
            />
        </>
    );
};