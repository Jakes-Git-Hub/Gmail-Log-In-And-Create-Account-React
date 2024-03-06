import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInFrontPageComponent } from '../components/SignInFrontPageComponent';
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";

export const SignInFrontPageContainer = ({ users, handleLogin, translationLoading, userData, updateUser}) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailPlaceholder, setEmailPlaceholder] = useState("Email...");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password...");
    const [emailIsEmpty, setEmailIsEmpty] = useState(false);
    const [passwordIsEmpty, setPasswordIsEmpty] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

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

// Email

    const handleEmailClick = () => {
        setEmailPlaceholder("");
    };
    
    const handleEmailBlur = () => {
        if (email === "") {
            setEmailPlaceholder("Email...");
        }
    };

    const emailEmptyError = () => setEmailIsEmpty(true);

// Password

    const handlePasswordClick = () => {
        setPasswordPlaceholder("");
    };

    
    const handlePasswordBlur = () => {
        if (password === "") {
            setPasswordPlaceholder("Password...");
        }
    };

    const passwordEmptyError = () => setPasswordIsEmpty(true);

// Create Account Button

    const handleCreateAccountClick = () => {
        navigate('/create-account');
    };

// Handle Submit

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '') {
            emailEmptyError();
            const emailInput = document.getElementById('emailInput');
            emailInput.focus();
        } else if (password === '') {
            passwordEmptyError();
            const passwordInput = document.getElementById('passwordInput');
            passwordInput.focus();
        } else if (email !== '' && password !== '') {
            handleLogin(email, password);
            const correctLoginCredentials = users.find(
                (user) => user.email === email && user.password === password
            );
            if (correctLoginCredentials) {
                navigate('/mockmail'); // Use Navigate.push to navigate
            }
        }
    };

    return(
        <>
            <SignInFrontPageComponent
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                handlePasswordClick={handlePasswordClick}
                handleEmailClick={handleEmailClick}
                emailPlaceholder={emailPlaceholder}
                passwordPlaceholder={passwordPlaceholder}
                handleEmailBlur={handleEmailBlur}
                handlePasswordBlur={handlePasswordBlur}
                handleCreateAccountClick={handleCreateAccountClick}
                emailIsEmpty={emailIsEmpty}
                passwordIsEmpty={passwordIsEmpty}
                isImagePreloaded={isImagePreloaded}
                translationLoading={translationLoading}
                userData={userData}
                handleLanguageSelection={handleLanguageSelection}
                isImageLoaded={isImageLoaded}
            />
        </>
    );
};