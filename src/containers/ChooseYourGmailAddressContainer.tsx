import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChooseYourGmailAddressComponent } from '../components/ChooseYourGmailAddressComponent';

import googleWritingSvg from '../images/google-writing-svg.svg';

interface User {
  email: string;
  language?: string;
}

interface Props {
  updateUser: (user: Partial<User>) => void;
  users: User[];
  text: any;
  userData: any;
}

export const ChooseYourGmailAddressContainer: React.FC<Props> = ({ updateUser, users, text, userData }) => {
  const [email, setEmail] = useState<string>('');
  const [errorCondition, setErrorCondition] = useState<string | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    const image = new Image();
    image.src = googleWritingSvg;
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  // Change Language
  const handleLanguageSelection = (chosenLanguage: string) => updateUser({ language: chosenLanguage });

  // Email
  const handleSelectEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  // Errors
  const error = (error: string) => setErrorCondition(error);

  // Validate Email Address
  const validateEmail = () => {
    setEmail(email);
    const usernameInput = document.getElementById('usernameInput') as HTMLInputElement;
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
      updateUser({ email: email + '@gmail.com' });
      navigate('/create-password');
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
  );
};