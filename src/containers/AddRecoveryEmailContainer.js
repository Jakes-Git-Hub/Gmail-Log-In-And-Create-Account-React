import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { AddRecoveryEmailComponent } from "../components/AddRecoveryEmailComponent";
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";

export const AddRecoveryEmailContainer = ({ updateUser, text }) => {

    const [recoveryEmail, setRecoveryEmail] = useState("");
    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);  

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

    const handleLanguageSelection = async (e) => {
        e.preventDefault();
        const chosenLanguage = e.target.value;
        updateUser({ language: chosenLanguage })
    };

// Handle Next

    const handleNextClick = (e) => {
        e.preventDefault();
        const recoveryEmailInput = document.getElementById('recoveryEmailInput');

        const isEmailValid = recoveryEmail => {
            const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            return emailPattern.test(recoveryEmail);
        };

        const isAtSymbolThere = recoveryEmail => {
            return /^[A-Za-z0-9._%+-]+@$/g.test(recoveryEmail);
        }

        const isEmailInvalid = recoveryEmail => {
            return /^[A-Za-z0-9._%+-]+@+[A-Za-z0-9._%+-]+$/g.test(recoveryEmail);
        };

        const isDomainNameNotThere = recoveryEmail => {
            return /^[A-Za-z0-9._%+-]+@$/g.test(recoveryEmail);
        }

        const isEmailNotValid = recoveryEmail => {
            const invalidEmailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+(\.[A-Za-z]{0,1})?$/;
            return invalidEmailPattern.test(recoveryEmail);
        };
    
        if (isEmailValid(recoveryEmail)) {
            updateUser({ recoveryEmail: recoveryEmail });
            setRecoveryEmail('');
            setErrorCondition(null);
            navigate('/review-account-info');
        } else if (recoveryEmail === '') {
            setErrorCondition('enterValidEmail');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }    
        } else if (isEmailNotValid(recoveryEmail)) {
            setErrorCondition('emailAddressNotValid');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }   
        } else if (!isAtSymbolThere(recoveryEmail)) {
            setErrorCondition('dontForgetAtSymbol');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }   
        } else if (isDomainNameNotThere(recoveryEmail) && !isEmailInvalid(recoveryEmail)) {
            setErrorCondition('enterADomainName');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }   
        } 
    };

    // Handle Skip

    const handleSkip = () => {
        setRecoveryEmail('');
        setErrorCondition(null);
        navigate('/review-account-info');
    }

    // Handle Submit

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        handleNextClick(); // Handle the submission as a Next button click
    }

 return(
    <>
        <AddRecoveryEmailComponent
            recoveryEmail={recoveryEmail}
            setRecoveryEmail={setRecoveryEmail}
            handleNextClick={handleNextClick}
            isImagePreloaded={isImagePreloaded}
            isImageLoaded={isImageLoaded}
            errorCondition={errorCondition}
            handleSkip={handleSkip}
            handleSubmit={handleSubmit}
            handleLanguageSelection={handleLanguageSelection}
            text={text}
        />
    </>
 );
};
