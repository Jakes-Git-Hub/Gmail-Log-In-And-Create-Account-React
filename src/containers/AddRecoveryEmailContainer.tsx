import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddRecoveryEmailComponent } from '../components/AddRecoveryEmailComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';

interface LanguageStrings {
    [key: string]: string;
}

interface NestedTextObject {
    [key: string]: LanguageStrings;
}

interface TextData {
    [key: string]: NestedTextObject;
}

interface AddRecoveryEmailContainerProps {
    updateUser: (user: any) => void;
    text: TextData;
    userData: any;
}

export const AddRecoveryEmailContainer: React.FC<AddRecoveryEmailContainerProps> = ({ updateUser, text, userData }) => {

    const [recoveryEmail, setRecoveryEmail] = useState<string>('');
    const [errorCondition, setErrorCondition] = useState<string | null>(null);
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);  

    const navigate = useNavigate();

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        }
    }, []);

    // Change Language
    const handleLanguageSelection = (chosenLanguage: string) => updateUser({ language: chosenLanguage });

    // Handle Next
    const recoveryEmailInput = document.getElementById('recoveryEmailInput') as HTMLInputElement | null;

    const isEmailValid = (recoveryEmail: string) => {
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailPattern.test(recoveryEmail);
    }

    const isStringAndAtSymbolThere = (recoveryEmail: string) => {
        return /^[A-Za-z0-9._%+-]+@.*$/g.test(recoveryEmail);
    }

    const isEmailInvalid = (recoveryEmail: string) => {
        return /^[A-Za-z0-9._%+-]+@+[A-Za-z0-9._%+-]+$/g.test(recoveryEmail);
    }

    const isDomainNameNotThere = (recoveryEmail: string) => {
        return /^[A-Za-z0-9._%+-]+@$/g.test(recoveryEmail);
    }

    const isEmailNotValid = (recoveryEmail: string) => {
        const invalidEmailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const multipleAtSymbolPattern = /@.*@/;
        return invalidEmailPattern.test(recoveryEmail) || multipleAtSymbolPattern.test(recoveryEmail);
    }

    const handleEmailValidation = (recoveryEmail: string) => {
        if (isEmailValid(recoveryEmail)) {
            updateUser({ recoveryEmail: recoveryEmail });
            setRecoveryEmail('');
            setErrorCondition(null);
            navigate('/review-account-info');
        } 
        if (recoveryEmail === '') {
            setErrorCondition('enterValidEmail');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }    
        } 
        if (isEmailNotValid(recoveryEmail)) {
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

    const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
