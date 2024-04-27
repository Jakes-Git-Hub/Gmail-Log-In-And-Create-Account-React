import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChooseYourGmailAddressComponent } from '../components/ChooseYourGmailAddressComponent';

import googleWritingSvg from '../images/google-writing-svg.svg';

export const ChooseYourGmailAddressContainer = ({ updateUser, users, text,  userData, }) => {

  const [email, setEmail] = useState('');
  const [errorCondition, setErrorCondition] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false); 

  const navigate = useNavigate();

  useEffect(() => {
    const image = new Image();
    image.src = googleWritingSvg;
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

// Change Language

  const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage});

// Email

  const handleSelectEmail = e => setEmail(e.target.value);

// Errors

  const error = error => setErrorCondition(error);

// Validate Email Address

  const validateEmail = () => {
    setEmail(email)
    const usernameInput = document.getElementById('usernameInput');
    if (email === '') {
      error('usernameEmpty');
      usernameInput.focus();
    } else if (!/^[a-zA-Z0-9.]+$/.test(email)) {
      error('usesUnallowedChars');
      usernameInput.focus();
    } else if (email.length < 6 || email.length > 30) {
      error('isIncorrectLength');
      usernameInput.focus();
    } else if (users.find(user => user.email === email + '@gmail.com')) {
      error('usernameIsAlreadyTaken');
      usernameInput.focus();
    } else {
      updateUser({ email: email + '@gmail.com' })
      navigate('/create-password')
    }
  };

// Handle Next Click

  const handleNextClick = () => validateEmail();

    return (
        <>
            <ChooseYourGmailAddressComponent
                email={email}
                setEmail={setEmail}
                handleNextClick={handleNextClick}
                errorCondition={errorCondition}
                handleSelectEmail={handleSelectEmail}
                text={text}
                handleLanguageSelection={handleLanguageSelection}
                isImageLoaded={isImageLoaded}
                userData={userData}
            />
        </>
    )
}