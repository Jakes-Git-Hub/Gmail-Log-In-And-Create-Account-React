import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConfirmYoureNotARobotComponent } from '../components/ConfirmYoureNotARobotComponent';
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';

export const ConfirmYoureNotARobotContainer = ({ updateUser, users }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberPlaceholder, setPhoneNumberPlaceholder] = useState("Phone Number");
    const [isPhoneNumberEmpty, setIsPhoneNumberEmpty] = useState(false);
    const [isIncorrectFormat, setIsIncorrectFormat] = useState(false);
    const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
    const navigate = useNavigate();

    const isImagePreloaded = useImagePreload(errorImage);

// phoneNumber

    const handlePhoneNumberClick = () => {
        setPhoneNumberPlaceholder("");
    };

    const handlePhoneNumberBlur = () => {
        if (phoneNumber === "") {
            setPhoneNumberPlaceholder("Phone Number");
        }
    };

// Error Messages

    const phoneNumberEmpty = () => setIsPhoneNumberEmpty(true);

    const incorrectFormat = () => setIsIncorrectFormat(true);

    const alreadyRegistered = () => setIsAlreadyRegistered(true);

// Handle Next Click

const handleNextClick = () => {
    setIsPhoneNumberEmpty(false);
    setIsIncorrectFormat(false);
    setIsAlreadyRegistered(false);
    if (phoneNumber === '') {
      const phoneNumberInput = document.getElementById('phoneNumberInput');
      phoneNumberEmpty();
      phoneNumberInput.focus();
    } else if (!/^[a-zA-Z0-9.]+$/.test(phoneNumber)) {
      // Check if the phoneNumber contains unallowed characters
      incorrectFormat();
      console.log('correct regex')
    } else {
            const isPhoneNumberAlreadyRegistered = users.some(user => user.phoneNumber === phoneNumber);
            if(isPhoneNumberAlreadyRegistered) {
                alreadyRegistered();    
            } else {
        updateUser({ phoneNumber: phoneNumber })
        setPhoneNumber('');
        navigate('/next')
        }
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
                isIncorrectFormat={isIncorrectFormat}
                isAlreadyRegistered={isAlreadyRegistered}
            />
        </>
    )
    
}