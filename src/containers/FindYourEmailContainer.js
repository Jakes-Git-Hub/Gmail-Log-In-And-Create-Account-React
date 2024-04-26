import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FindYourEmailComponent } from '../components/FindYourEmailComponent';


import googleWritingSvg from '../images/google-writing-svg.svg';

export const FindYourEmailContainer = ({ updateUser, text,  userData, updateFindYourEmailCredentials, isWrongCredentials }) => {

    const [phoneNumberOrEmail, setPhoneNumberOrEmail] = useState('');
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

    

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage})

// Email or Phone Number

    const onPhoneNumberOrEmailInputChange = (e) => {
        const { value } = e.target;
        setPhoneNumberOrEmail(value);
    };

// Errors

    const error = error => {
        setErrorCondition(error);
    };

    const phoneNumberOrEmailInput = document.getElementById('phoneNumberOrEmailInput');

    useEffect(() => {
        
        if (isWrongCredentials) {
            error('wrongCredentials');
            if (phoneNumberOrEmailInput) {
                phoneNumberOrEmailInput.focus();
            }
        }
    }, [isWrongCredentials, phoneNumberOrEmailInput]);

// Handle Next

    const handleNextClick = () => {
        if (phoneNumberOrEmail === '') {
            error('phoneNumberOrEmailEmpty');
            if (phoneNumberOrEmailInput) {
               phoneNumberOrEmailInput.focus();
            }
        }
        if (phoneNumberOrEmail !== '') {
            error(null);
            updateFindYourEmailCredentials({ phoneNumberOrEmail: phoneNumberOrEmail });
            navigate('/whats-your-name');
        }        
    };

    return(
        <>
            <FindYourEmailComponent
                handleNextClick={handleNextClick}
                
                errorCondition={errorCondition}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                isImageLoaded={isImageLoaded}
                onPhoneNumberOrEmailInputChange={onPhoneNumberOrEmailInputChange}
                userData={userData}
                phoneNumberOrEmail={phoneNumberOrEmail}
            />
        </>
    );
}