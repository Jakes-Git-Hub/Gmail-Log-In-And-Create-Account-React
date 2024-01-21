import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EnterTheCodeComponent } from '../components/EnterTheCodeComponent';
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";
import { createTheme } from '@mui/material/styles';

export const EnterTheCodeContainer = ({ updateUser, userData }) => {

    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false); 
    const [usersVerificationCodeInput, setUsersVerificationCodeInput] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [getNewCodeButtonDisabled, setGetNewCodeButtonDisabled] = useState(true);
    const [disabledCount, setDisabledCount] = useState(30);

    const navigate = useNavigate();

    const isImagePreloaded = useImagePreload(errorImage);

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

    useEffect(() => {   
        console.log("userData", userData);
        if (userData) {
            setVerificationCode(userData.verificationCode);
        }
    }, [userData.verificationCode]);

// Users Verification Code Input

    const handleUserVerificationCodeInput = (e) => {
        setUsersVerificationCodeInput(e.target.value);
    }

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

    const getNewCode = () => {
        navigate("/confirm-youre-not-a-robot");
    }

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
            updateUser("verificationCode", usersVerificationCodeInput);
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
        <EnterTheCodeComponent
            handleNextClick={handleNextClick}
            isImagePreloaded={isImagePreloaded}
            errorCondition={errorCondition}
            isImageLoaded={isImageLoaded}
            handleUserVerificationCodeInput={handleUserVerificationCodeInput}
            usersVerificationCodeInput={usersVerificationCodeInput}
            theme={theme}
            getNewCode={getNewCode}
            getNewCodeButtonDisabled={getNewCodeButtonDisabled}
            disabledCount={disabledCount}
        />
    );
};
