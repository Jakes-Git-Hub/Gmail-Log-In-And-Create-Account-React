import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetAVerificationCodePhoneComponent } from '../components/GetAVerificationCodePhoneComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';
import axios from 'axios';

export const GetAVerificationCodePhoneContainer = ({ updateUser, text,  userData, findYourEmailCredentials, updateFindYourEmailCredentials}) => {

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

    useEffect(() => {
        console.log('findYourEmailCredentials.phoneNumberOrEmail', findYourEmailCredentials.phoneNumberOrEmail);
    }, []);

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage })

// Send Verification Text
    
    const sendVerificationSMS = async () => {
        try {
            const response = await axios.post('http://localhost:3001/send-verification-code', {
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
            />
        </>
    );
}