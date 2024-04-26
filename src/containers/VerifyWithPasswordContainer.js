import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VerifyWithPasswordComponent } from '../components/VerifyWithPasswordComponent';


import googleWritingSvg from '../images/google-writing-svg.svg';

export const VerifyWithPasswordContainer = ({ updateUser, text,  userData,  handleLogin, userToVerifyWithPassword }) => {

    const [password, setPassword] =useState('');
    const [showPassword, setShowPassword] = useState(false);
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

    useEffect(() => {
        console.log('userToVerifyWithPassword:', userToVerifyWithPassword.password)
    }, []);

    

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage})
    
// Password

    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

// Error messages
    
    const passwordEmpty = () => setErrorCondition('passwordEmpty');


    const wrongPassword = () => setErrorCondition('wrongPassword');

// Handle Input

    const validatePassword = () => {
        const passwordInput = document.getElementById('passwordInput');
        if (password === '') {
            passwordEmpty();
            passwordInput.focus();
        }
        if (password !== userToVerifyWithPassword.password) {
            wrongPassword();
            passwordInput.focus();
        }
        else {
            handleLogin(userToVerifyWithPassword.email, userToVerifyWithPassword.password);
            navigate('/mockmail');
        } 
    }


// Handle Next

    const handleNextClick = () => {
        validatePassword();
    }

 return(
    <>
        <VerifyWithPasswordComponent
            password={password}
            setPassword={setPassword}
            handleNextClick={handleNextClick}
            showPassword={showPassword}
            handlePasswordInput={handlePasswordInput}
            setShowPassword={setShowPassword}
            handleTogglePassword={handleTogglePassword}
            errorCondition={errorCondition}
            text={text}
            handleLanguageSelection={handleLanguageSelection}
            isImageLoaded={isImageLoaded}
            userData={userData}
            
        />
    </>
 );
};
