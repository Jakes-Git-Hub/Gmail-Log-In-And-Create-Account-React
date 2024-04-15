import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnterTheFindCodeComponent } from '../components/EnterTheFindCodeComponent';
import useImagePreload from '../hooks/useIsImagePreloadedHook';
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from '../images/google-writing-svg.svg';
import { createTheme } from '@mui/material/styles';

export const EnterTheFindCodeContainer = ({ updateUser, userData, text, findYourEmailCredentials }) => {

    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false); 
    const [usersVerificationCodeInput, setUsersVerificationCodeInput] = useState('');
    const [verificationCode, setVerificationCode] = useState(findYourEmailCredentials.verificationCode);
    const [isFocused, setIsFocused] = useState(false);

    const navigate = useNavigate();

    const isImagePreloaded = useImagePreload(errorImage);

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

// Change Language

    const handleLanguageSelection = (chosenLanguage) => {
        updateUser({ language: chosenLanguage })
    };

// Verification Code

    const handleUserVerificationCodeInput = (e) => {
        setUsersVerificationCodeInput(e.target.value);
    }

// Errors

const setError = errorType => setErrorCondition(errorType);

// isFocused?

    const toggleFocus = () => {
        setIsFocused(!isFocused);
    }

// Handle Next Click

    const handleNextClick = () => {
        const emptyInput = '';
        const hasLetters = /[a-zA-Z]/.test(usersVerificationCodeInput);
        const sixDigits = /^\d{6}$/;
        if (usersVerificationCodeInput === emptyInput) {
            setError('inputEmpty');
        }
        if (hasLetters) {
            setError('hasLetters');
        } 
        if ((usersVerificationCodeInput !== emptyInput) && (!hasLetters && !sixDigits.test(usersVerificationCodeInput))) {
            setError('wrongNumberOfDigits');
        } 
        if (sixDigits.test(usersVerificationCodeInput) && (usersVerificationCodeInput !== verificationCode)) {
            setError('wrongCode');
        } 
        if (usersVerificationCodeInput === verificationCode) {
            navigate('/select-an-account-to-sign-in');
        }
    };

// Custom MUI TextField

    const theme = createTheme({
        components: {
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        paddingLeft: usersVerificationCodeInput || isFocused ? '14%' : '10.5%',
                        '&.Mui-focused': {
                            paddingLeft: '14%',
                        },
                    },
            },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        paddingLeft:'12.4%',
                    },
                    input: {
                        paddingLeft: '7.5%',
                    },
                },
            },
        },
    })

    return (
        <EnterTheFindCodeComponent
            handleNextClick={handleNextClick}
            isImagePreloaded={isImagePreloaded}
            errorCondition={errorCondition}
            isImageLoaded={isImageLoaded}
            handleUserVerificationCodeInput={handleUserVerificationCodeInput}
            usersVerificationCodeInput={usersVerificationCodeInput}
            theme={theme}
            text={text}
            handleLanguageSelection={handleLanguageSelection}
            toggleFocus={toggleFocus}
            userData={userData}
            isFocused={isFocused}
        />
    );
};
