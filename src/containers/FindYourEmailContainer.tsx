import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FindYourEmailComponent } from '../components/FindYourEmailComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';

interface FindYourEmailContainerProps {
    updateUser: (user: { language: string }) => void;
    text: any;
    userData: {
        language: string;
        id: number;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        profileCircleColor: string;
        day: string;
        month: string;
        year: string;
        gender: string;
        countryDetails: {
            name: string;
            abbreviation: string;
            dialingCode: string;
            svg: string;
        };
    };
    updateFindYourEmailCredentials: (credentials: { phoneNumberOrEmail: string }) => void;
    isWrongCredentials: boolean;
}

export const FindYourEmailContainer: React.FC<FindYourEmailContainerProps> = ({ updateUser, text,  userData, updateFindYourEmailCredentials, isWrongCredentials }) => {

    const [phoneNumberOrEmail, setPhoneNumberOrEmail] = useState('');
    const [errorCondition, setErrorCondition] = useState<string | null>(null);
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

    const handleLanguageSelection = (chosenLanguage: string) => updateUser({ language: chosenLanguage })

// Email or Phone Number

    const onPhoneNumberOrEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumberOrEmail(e.target.value);

// Errors

    const error = (error: string | null) => setErrorCondition(error);

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