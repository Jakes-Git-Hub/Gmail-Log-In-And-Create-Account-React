import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetAVerificationCodeEmailComponent } from '../components/GetAVerificationCodeEmailComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';
import axios from 'axios';
import { APIEndPointLimiter } from '../utils/APIEndPointLimiter';

export const GetAVerificationCodeEmailContainer = ({ updateUser, 
    text,  
    userData, 
    findYourEmailCredentials, 
    updateFindYourEmailCredentials, 
    handleGetAVerificationEmailAPILimit, 
    resetGetAVerificationEmailAPILimit, 
    getAVerificationEMailAPILimit,
}) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [errorCondition, setErrorCondition] = useState(false);
    
    const navigate = useNavigate();

// Handle Slow Svg Load

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

    useEffect(() => {
        console.log('findYourEmailCredentials.phoneNumberOrEmail', findYourEmailCredentials.phoneNumberOrEmail);
    }, []);

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage })

// Send Verification Email

    const sendVerificationEmail = async () => {
        console.log('findYourEmailCredentials.phoneNumberOrEmail', findYourEmailCredentials.phoneNumberOrEmail);
        const container2Limiter = APIEndPointLimiter(5, 30 * 60 * 1000);
        try {
            const response = await container2Limiter.post('http://localhost:3001/send-verification-email', {
                phoneNumberOrEmail: findYourEmailCredentials.phoneNumberOrEmail,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = response.data;

            if (data.verificationCode) {
                // Extract the verification code from the Twilio response
                const verificationCode = data.verificationCode.toString();
                console.log('Verification code:', verificationCode);
                updateFindYourEmailCredentials({ verificationCode: verificationCode });
                navigate('/enter-the-find-code');    
            } else {
                if (data.error) {
                    console.error('Error sending verification code:', data.error);
                } else {
                    console.error('Unknown error sending verification code');
                }
            }
        } catch (error) {
            console.error('Error sending verification code:', error);
            if (error.response.status === 429) {
                setErrorCondition('apiLimitReached');
            }
        }
    } 

// Handle Send Click

    const handleSendClick = () => sendVerificationEmail();

    return(
        <>
            <GetAVerificationCodeEmailComponent
                handleSendClick={handleSendClick}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                isImageLoaded={isImageLoaded}
                userData={userData}
                findYourEmailCredentials={findYourEmailCredentials}
                updateFindYourEmailCredentials={updateFindYourEmailCredentials}
                errorCondition={errorCondition}
            />
        </>
    );
}