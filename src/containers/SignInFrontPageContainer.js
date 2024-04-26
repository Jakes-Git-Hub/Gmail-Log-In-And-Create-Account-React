import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInFrontPageComponent } from '../components/SignInFrontPageComponent';


import googleWritingSvg from '../images/google-writing-svg.svg';

export const SignInFrontPageContainer = ({ users, userData, updateUser, text, passFoundUser, }) => {

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

    

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage})

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
        } else if ((!users.some(user => user.email === emailOrPhone || user.phoneNumber === emailOrPhone))) {
            error('couldntFindYourAccount');
            const emailOrPhoneInput = document.getElementById('emailOrPhoneInput');
            emailOrPhoneInput.focus();
        } else {
            const registeredUser = users.find(
                (user) => user.email === emailOrPhone || user.phoneNumber === emailOrPhone
            );
            if (registeredUser) {
                passFoundUser(registeredUser)
                navigate('/verify-with-password');
            }
        }
    };

    return(
        <>
            <SignInFrontPageComponent
                
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