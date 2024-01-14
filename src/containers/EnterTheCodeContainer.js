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
    const [isTyping, setIsTyping] = useState(false);
    const [usersVerificationCodeInput, setUsersVerificationCodeInput] = useState('');

    const navigate = useNavigate();

    const isImagePreloaded = useImagePreload(errorImage);

    // Checks if Google SVG is Loaded, to Render all at Once

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

// Users Verification Code Input

    const handleUserVerificationCodeInput = (e) => {
        setUsersVerificationCodeInput(e.target.value);
    }

// Errors

    const error = error => setErrorCondition(error);

// Handle Next Click

    const handleNextClick = () => {
        const emptyInput = "";
        if(usersVerificationCodeInput === emptyInput) {
            error("inputEmpty");
        }
        // navigate('/add-recovery-email')
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
            isTyping={isTyping}
            theme={theme}
        />
    );
};
