import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChooseYourGmailAddressComponent } from '../components/ChooseYourGmailAddressComponent';

export const ChooseYourGmailAddressContainer = ({ updateUser }) => {

    const [email, setEmail] = useState('');
    const [emailPlaceholder, setEmailPlaceholder] = useState("Username")

    const navigate = useNavigate();

// Email

    const handleEmailClick = () => {
        setEmailPlaceholder("");
    };

    const handleEmailBlur = () => {
        if (email === "") {
            setEmailPlaceholder("Month");
        }
    };

// Handle Next Click

const handleNextClick = () => {

    updateUser({ email: email })

    setEmail('');
  
    navigate('/basic-information')
};

    return (
        <>
            <ChooseYourGmailAddressComponent
                email={email}
                setEmail={setEmail}
                handleEmailClick={handleEmailClick}
                handleEmailBlur={handleEmailBlur}
                emailPlaceholder={emailPlaceholder}
                handleNextClick={handleNextClick}
            />
        </>
    )
    
}