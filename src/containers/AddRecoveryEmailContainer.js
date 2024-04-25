import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddRecoveryEmailComponent } from '../components/AddRecoveryEmailComponent';
import useImagePreload from '../hooks/useIsImagePreloadedHook';
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from '../images/google-writing-svg.svg';

export const AddRecoveryEmailContainer = ({ updateUser, text,  userData,  }) => {

    const [recoveryEmail, setRecoveryEmail] = useState('');
    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);  

    useEffect(() => {
        console.log('errorCondition', errorCondition)
    }, [errorCondition]);

    const navigate = useNavigate();

    const isImagePreloaded = useImagePreload(errorImage);

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        }
    }, []);

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage})

// Handle Next

    const recoveryEmailInput = document.getElementById('recoveryEmailInput');

    const isEmailValid = recoveryEmail => {
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailPattern.test(recoveryEmail);
    }

    const isStringAndAtSymbolThere = recoveryEmail => {
        return /^[A-Za-z0-9._%+-]+@.*$/g.test(recoveryEmail);
    }

    const isEmailInvalid = recoveryEmail => {
        return /^[A-Za-z0-9._%+-]+@+[A-Za-z0-9._%+-]+$/g.test(recoveryEmail);
    }

    const isDomainNameNotThere = recoveryEmail => {
        return /^[A-Za-z0-9._%+-]+@$/g.test(recoveryEmail);
    }

    const isEmailNotValid = recoveryEmail => {
        const invalidEmailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const multipleAtSymbolPattern = /@.*@/;
        return invalidEmailPattern.test(recoveryEmail) || multipleAtSymbolPattern.test(recoveryEmail);
    }

    const handleEmailValidation = (recoveryEmail) => {
        if (isEmailValid(recoveryEmail)) {
            updateUser({ recoveryEmail: recoveryEmail });
            setRecoveryEmail('');
            setErrorCondition(null);
            navigate('/review-account-info');
        } if (recoveryEmail === '') {
            setErrorCondition('enterValidEmail');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }    
        } if (isEmailNotValid(recoveryEmail)) {
            setErrorCondition('emailAddressNotValid');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }   
        } 
        if (recoveryEmail !== '' && !isStringAndAtSymbolThere(recoveryEmail)) {
            setErrorCondition('dontForgetAtSymbol');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }   
        } 
        if (isDomainNameNotThere(recoveryEmail) && !isEmailInvalid(recoveryEmail)) {
            setErrorCondition('enterADomainName');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }   
        } 
    }

    const handleNextClick = e => {
        e.preventDefault();
        handleEmailValidation(recoveryEmail);
    }

    // Handle Skip

    const handleSkip = () => {
        setRecoveryEmail('');
        setErrorCondition(null);
        navigate('/review-account-info');
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
            handleLanguageSelection={handleLanguageSelection}
            text={text}
            userData={userData}
        />
    </>
 );
}
