import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AddRecoveryEmailComponent } from "../components/AddRecoveryEmailComponent";
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';

export const AddRecoveryEmailContainer = ({ updateUser }) => {

    const [recoveryEmail, setRecoveryEmail] = useState("");
    const [recoveryEmailPlaceholder, setRecoveryEmailPlaceholder] = useState("Recovery email address");
    const [errorCondition, setErrorCondition] = useState(null);

    const navigate = useNavigate();

    const isImagePreloaded = useImagePreload(errorImage);
    
// Recovery Email

    const handleRecoveryEmailClick = () => {
        setRecoveryEmailPlaceholder("");
    };

    const handleRecoveryEmailBlur = () => {
        if (recoveryEmail === "") {
            setRecoveryEmailPlaceholder("Recovery email address"); 
        }
    };

// Handle Next

    const handleNextClick = (e) => {
        e.preventDefault();
        const isEmailValid = input => {
            const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            return emailPattern.test(input);
        };

        const isAtSymbolThere = input => {
            return /^[A-Za-z0-9._%+-]+@$/g.test(input);
        }

        const isEmailInvalid = input => {
            return /^[A-Za-z0-9._%+-]+@+[A-Za-z0-9._%+-]+$/g.test(input);
        };

        const isDomainNameNotThere = input => {
            return /^[A-Za-z0-9._%+-]+@$/g.test(input);
        }
    
        if (isEmailValid(recoveryEmail)) {
            updateUser({ recoveryEmail: recoveryEmail });
            setRecoveryEmail('');
            setErrorCondition(null);
            navigate('/confirm-youre-not-a-robot');
        } else if (recoveryEmail === '' || isEmailInvalid(recoveryEmail)) {
            setErrorCondition('enterValidEmail');
            const recoveryEmailInput = document.getElementById('recoveryEmailInput');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }    
        } else if (!isAtSymbolThere(recoveryEmail)) {
            setErrorCondition('dontForgetAtSymbol');
            const recoveryEmailInput = document.getElementById('recoveryEmailInput');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }   
        } else if (isDomainNameNotThere(recoveryEmail) && !isEmailInvalid(recoveryEmail)) {
            setErrorCondition('enterADomainName');
            const recoveryEmailInput = document.getElementById('recoveryEmailInput');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }   
        } 
    };

    // Handle Skip

    const handleSkip = () => {
        setRecoveryEmail('');
        setErrorCondition(null);
        navigate('/confirm-youre-not-a-robot');
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
            recoveryEmailPlaceholder={recoveryEmailPlaceholder}
            handleRecoveryEmailClick={handleRecoveryEmailClick}
            handleRecoveryEmailBlur={handleRecoveryEmailBlur}
            handleNextClick={handleNextClick}
            isImagePreloaded={isImagePreloaded}
            errorCondition={errorCondition}
            handleSkip={handleSkip}
            handleSubmit={handleSubmit}
        />
    </>
 );
};
