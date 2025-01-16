import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInFrontPageComponent } from '../components/SignInFrontPageComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';

interface User {
    email: string;
    phoneNumber: string;
}

interface SignInFrontPageContainerProps {
    users: User[];
    userData: any;
    updateUser: (data: any) => void;
    text: {
        SignIn: {
            h1: { [key: string]: string };
            h2: { [key: string]: string };
            emailOrPhone: { [key: string]: string };
            enterAnEmail: { [key: string]: string };
            couldntFindYour: { [key: string]: string };
            forgotEmail: { [key: string]: string };
            notYourComputer: { [key: string]: string };
            learnMore: { [key: string]: string };
            createAccount: { [key: string]: string };
        };
        CreateAccount: {
            next: { [key: string]: string };
        };
    };
    passFoundUser: (user: User) => void;
    userIP: string;
}

export const SignInFrontPageContainer: React.FC<SignInFrontPageContainerProps> = ({ users, userData, updateUser, text, passFoundUser }) => {

    const navigate = useNavigate();

    const [emailOrPhone, setEmailOrPhone] = useState<string>('');
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
    const [errorCondition, setErrorCondition] = useState<string | null>(null);

    // Handle Slow Svg Load
    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
            setIsImageLoaded(true);
        };
    }, []);

    // Change Language
    const handleLanguageSelection = (language: string) => updateUser({ language });
    
    // Email or Phone
    const onEmailOrPhoneChange = (e: ChangeEvent<HTMLInputElement>) => setEmailOrPhone(e.target.value);

    // Forgot Email
    const handleForgotEmailButtonClick = () => navigate('/find-your-email');

    // Guest Mode Info Click
    const handleGuestModeInfoButtonClick = () => window.open('https://support.google.com/chrome/answer/6130773?hl=en', '_blank');

    // Create Account Click
    const handleCreateAccountClick = () => navigate('/create-account');

    // Error
    const error = (error: string) => setErrorCondition(error);

    // Handle Next
    const handleNextClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (emailOrPhone === '') {
            error('emailOrPhoneEmpty');
            const emailOrPhoneInput = document.getElementById('emailOrPhoneInput') as HTMLInputElement;
            emailOrPhoneInput.focus();
        } else if (!users.some(user => user.email === emailOrPhone || user.phoneNumber === emailOrPhone)) {
            error('couldntFindYourAccount');
            const emailOrPhoneInput = document.getElementById('emailOrPhoneInput') as HTMLInputElement;
            emailOrPhoneInput.focus();
        } else {
            const registeredUser = users.find(
                (user) => user.email === emailOrPhone || user.phoneNumber === emailOrPhone
            );
            if (registeredUser) {
                passFoundUser(registeredUser);
                navigate('/verify-with-password');
            }
        }
    }

    return (
        <>
            <SignInFrontPageComponent
                userData={userData}
                handleLanguageSelection={handleLanguageSelection}
                isImageLoaded={isImageLoaded}
                errorCondition={errorCondition}
                emailOrPhone={emailOrPhone}
                onEmailOrPhoneChange={onEmailOrPhoneChange}
                handleForgotEmailButtonClick={handleForgotEmailButtonClick}
                handleGuestModeInfoButtonClick={handleGuestModeInfoButtonClick}
                handleCreateAccountClick={handleCreateAccountClick}
                handleNextClick={handleNextClick}
                text={text}
            />
        </>
    );
};