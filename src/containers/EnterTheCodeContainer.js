import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnterTheCodeComponent } from '../components/EnterTheCodeComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';
import { createTheme } from '@mui/material/styles';

export const EnterTheCodeContainer = ({ updateUser, userData, text, }) => {

    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false); 
    const [usersVerificationCodeInput, setUsersVerificationCodeInput] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [getNewCodeButtonDisabled, setGetNewCodeButtonDisabled] = useState(true);
    const [disabledCount, setDisabledCount] = useState(30);
    const [isFocused, setIsFocused] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage })

// Verification Code

    useEffect(() => {   
        console.log('userData', userData);
        if (userData) {
            setVerificationCode(userData.verificationCode);
        }
    }, [userData.verificationCode]);

    const handleUserVerificationCodeInput = e => setUsersVerificationCodeInput(e.target.value);

// Errors

const setError = errorType => setErrorCondition(errorType);

// Get New Code

    const thirtySecondGetNewCodeCountdown = disabledCount => {
        setTimeout(() => {
            setDisabledCount(disabledCount - 1);
        }, 1000);
    }

    useEffect(() => {
        thirtySecondGetNewCodeCountdown(disabledCount);
        if (disabledCount === 0) {
            setDisabledCount(30);
            setGetNewCodeButtonDisabled(false);
        }
    }, [disabledCount]);

    const getNewCode = () => navigate('/confirm-youre-not-a-robot');

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
            navigate('/add-recovery-email');
        }
    };

// isFocused?

const toggleFocus = () => setIsFocused(!isFocused);

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
        <EnterTheCodeComponent
            handleNextClick={handleNextClick}
            errorCondition={errorCondition}
            isImageLoaded={isImageLoaded}
            handleUserVerificationCodeInput={handleUserVerificationCodeInput}
            usersVerificationCodeInput={usersVerificationCodeInput}
            theme={theme}
            getNewCode={getNewCode}
            getNewCodeButtonDisabled={getNewCodeButtonDisabled}
            disabledCount={disabledCount}
            text={text}
            handleLanguageSelection={handleLanguageSelection}
            toggleFocus={toggleFocus}
            isFocused={isFocused}
            userData={userData}
        />
    );
};
