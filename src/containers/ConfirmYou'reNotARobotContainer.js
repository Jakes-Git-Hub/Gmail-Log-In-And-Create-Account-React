import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfirmYoureNotARobotComponent } from '../components/ConfirmYoureNotARobotComponent';
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';

export const ConfirmYoureNotARobotContainer = ({ updateUser }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberPlaceholder, setPhoneNumberPlaceholder] = useState("PhoneNumber");
    const [isPhoneNumberEmpty, setIsPhoneNumberEmpty] = useState(false);
    const [isIncorrectLength, setIsIncorrectLength] = useState(false);
    const [usesUnallowedChars, setUsesUnallowedChars] = useState(false);
    const navigate = useNavigate();

    const isImagePreloaded = useImagePreload(errorImage);

// phoneNumber

    const handlePhoneNumberClick = () => {
        setPhoneNumberPlaceholder("");
    };

    const handlePhoneNumberBlur = () => {
        if (phoneNumber === "") {
            setPhoneNumberPlaceholder("PhoneNumber");
        }
    };

// Error Messages

    const phoneNumberEmpty = () => setIsPhoneNumberEmpty(true);

    const incorrectLength = () => setIsIncorrectLength(true);

    const unallowedChars = () => setUsesUnallowedChars(true);

// Handle Next Click

const handleNextClick = () => {
    setIsPhoneNumberEmpty(false);
    setIsIncorrectLength(false);
    setUsesUnallowedChars(false);
    if (phoneNumber === '') {
      const phoneNumberInput = document.getElementById('PhoneNumberInput');
      phoneNumberEmpty();
      phoneNumberInput.focus();
    } else if (!/^[a-zA-Z0-9.]+$/.test(phoneNumber)) {
      // Check if the phoneNumber contains unallowed characters
      unallowedChars();
      console.log('correct regex')
    } else if (phoneNumber.length < 6 || phoneNumber.length > 30) {
      incorrectLength();
    } else {
      updateUser({ phoneNumber: phoneNumber })
      setPhoneNumber('');
      navigate('/create-password')
    }
};

    return (
        <>
            <ConfirmYoureNotARobotComponent
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                handlePhoneNumberClick={handlePhoneNumberClick}
                handlePhoneNumberBlur={handlePhoneNumberBlur}
                phoneNumberPlaceholder={phoneNumberPlaceholder}
                handleNextClick={handleNextClick}
                isPhoneNumberEmpty={isPhoneNumberEmpty}
                isImagePreloaded={isImagePreloaded}
                isIncorrectLength={isIncorrectLength}
                usesUnallowedChars={usesUnallowedChars}
            />
        </>
    )
    
}