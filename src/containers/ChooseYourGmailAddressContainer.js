import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChooseYourGmailAddressComponent } from '../components/ChooseYourGmailAddressComponent';
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';

export const ChooseYourGmailAddressContainer = ({ updateUser, users }) => {

    const [email, setEmail] = useState('');
    const [emailPlaceholder, setEmailPlaceholder] = useState("Username");
    const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
    const [isIncorrectLength, setIsIncorrectLength] = useState(false);
    const [usesUnallowedChars, setUsesUnallowedChars] = useState(false);
    const navigate = useNavigate();

    const isImagePreloaded = useImagePreload(errorImage);

// Email

    const handleEmailClick = () => {
        setEmailPlaceholder("");
    };

    const handleEmailBlur = () => {
        if (email === "") {
            setEmailPlaceholder("Username");
        }
    };

// Error Messages

    const usernameEmpty = () => setIsUsernameEmpty(true);

    const incorrectLength = () => setIsIncorrectLength(true);

    const unallowedChars = () => setUsesUnallowedChars(true);

// Handle Next Click

const handleNextClick = () => {
    setIsUsernameEmpty(false);
    setIsIncorrectLength(false);
    setUsesUnallowedChars(false);
    if (email === '') {
      const usernameInput = document.getElementById('usernameInput');
      usernameEmpty();
      usernameInput.focus();
    } else if (!/^[a-zA-Z0-9.]+$/.test(email)) {
      // Check if the email contains unallowed characters
      unallowedChars();
      console.log('correct regex')
    } else if (email.length < 6 || email.length > 30) {
      incorrectLength();
    } else {
      updateUser({ email: email })
      setEmail('');
      navigate('/create-password')
    }
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
                isUsernameEmpty={isUsernameEmpty}
                isImagePreloaded={isImagePreloaded}
                isIncorrectLength={isIncorrectLength}
                usesUnallowedChars={usesUnallowedChars}
            />
        </>
    )
    
}