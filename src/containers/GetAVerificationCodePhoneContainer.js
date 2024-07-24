import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetAVerificationCodePhoneComponent } from '../components/GetAVerificationCodePhoneComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';
import axios from 'axios';
import { APIEndPointLimiter } from '../utils/APIEndPointLimiter';

export const GetAVerificationCodePhoneContainer = ({ 
    updateUser, 
    text,  
    userData, 
    findYourEmailCredentials, 
    updateFindYourEmailCredentials,
    getAVerificationPhoneAPILimit,
    handleGetAVerificationPhoneAPILimit,
    resetGetAVerificationPhoneAPILimit,
}) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [errorCondition, setErrorCondition] = useState(false);
    const [loading, setLoading] = useState(false);

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

// Send Verification Text
    
    const sendVerificationSMS = async () => {
        setLoading(true);
        const container3Limiter = APIEndPointLimiter(5, 30 * 60 * 1000);
        if (getAVerificationPhoneAPILimit < 5) { 
            try {
                const response = await container3Limiter.post('https://GmailCloneTrimmedPackagejson-env.eba-6bumpt24.eu-west-2.elasticbeanstalk.com/send-verification-code', {
                    formattedPhoneNumber: findYourEmailCredentials.phoneNumberOrEmail,
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
                    handleGetAVerificationPhoneAPILimit();
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
        } else {
            setErrorCondition('apiLimitReached');
            setLoading(false);
            resetGetAVerificationPhoneAPILimit();
        }
    } 

// Handle Send Click

    const handleSendClick = () => sendVerificationSMS();

    return(
        <>
            <GetAVerificationCodePhoneComponent
                handleSendClick={handleSendClick}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                isImageLoaded={isImageLoaded}
                userData={userData}
                findYourEmailCredentials={findYourEmailCredentials}
                updateFindYourEmailCredentials={updateFindYourEmailCredentials}
                errorCondition={errorCondition}
                loading={loading}
            />
        </>
    );
}