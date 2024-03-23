import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EnterTheFindCodeComponent } from '../components/EnterTheFindCodeComponent';
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";
import { createTheme } from '@mui/material/styles';

export const EnterTheFindCodeContainer = ({ updateUser, userData, text, findYourEmailCredentials }) => {

    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false); 
    const [usersVerificationCodeInput, setUsersVerificationCodeInput] = useState('');
    const [verificationCode, setVerificationCode] = useState(findYourEmailCredentials.verificationCode);

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

// Handle Next Click

    const handleNextClick = () => {
        const emptyInput = "";
        const hasLetters = /[a-zA-Z]/.test(usersVerificationCodeInput);
        const sixDigits = /^\d{6}$/;
        if (usersVerificationCodeInput === emptyInput) {
            setError("inputEmpty");
        }
        if (hasLetters) {
            setError("hasLetters");
        } 
        if ((usersVerificationCodeInput !== emptyInput) && (!hasLetters && !sixDigits.test(usersVerificationCodeInput))) {
            setError("wrongNumberOfDigits");
        } 
        if (usersVerificationCodeInput === verificationCode) {
            navigate("/create-your-profile");
        } 
        if (sixDigits.test(usersVerificationCodeInput) && (usersVerificationCodeInput !== verificationCode)) {
            setError("wrongCode");
        } 
        if (usersVerificationCodeInput === verificationCode) {
            navigate("/add-recovery-email");
        }
    };

// Custom MUI TextField

    const theme = createTheme({
        components: {
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        paddingLeft: usersVerificationCodeInput ? "52px" : '38px',
                        '&.Mui-focused': {
                            paddingLeft: '52px',
                        },
                    },
            },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        paddingLeft:'46px',
                    },
                    input: {
                        paddingLeft: '51px',
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
            
            userData={userData}
            
        />
    );
};
