import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateAccountComponent } from '../components/CreateAccountComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';

interface CreateAccountContainerProps {
  updateUser: (user: { language: string; firstName?: string; lastName?: string }) => void;
  text: any;
  userData: any;
}

export const CreateAccountContainer: React.FC<CreateAccountContainerProps> = ({ updateUser, text, userData }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [errorCondition, setErrorCondition] = useState<string | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const navigate = useNavigate();

  // Handle Slow Svg Load
  useEffect(() => {
    const image = new Image();
    image.src = googleWritingSvg;
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  // Change Language
  const handleLanguageSelection = (chosenLanguage: string) => updateUser({ language: chosenLanguage });

  // First Name
  // Allow Only String Values to be Inputted
  const isLetters = (str: string) => /^[A-Za-z]+$/.test(str);

  const onFirstNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (isLetters(value)) {
      setFirstName(value);
    }
  };

  // Errors
  const setError = (error: string) => setErrorCondition(error);

  // Last Name - Allow Only Letters
  const onLastNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isLetters(e.target.value)) {
      setLastName(e.target.value);
    }
  };

  // Handle Next
  const handleNextClick = () => {
    const firstNameInput = document.getElementById('firstNameInput') as HTMLInputElement;

    if (firstName !== '' && firstName.length > 2) {
      setErrorCondition(null);
      updateUser({ language: userData.language, firstName: firstName, lastName: lastName });
      navigate('/basic-information');
      console.log(firstName);
    }

    if (firstName.length > 0 && firstName.length <= 2) {
      setError('areYouSureCorrect');
      if (firstNameInput) {
        firstNameInput.focus();
      }
    }
    if (firstName === '') {
      setError('firstNameEmpty');
      if (firstNameInput) {
        firstNameInput.focus();
      }
    }
  };

  return (
    <>
      <CreateAccountComponent
        firstName={firstName}
        lastName={lastName}
        handleNextClick={handleNextClick}
        onFirstNameInputChange={onFirstNameInputChange}
        onLastNameInputChange={onLastNameInputChange}
        errorCondition={errorCondition}
        handleLanguageSelection={handleLanguageSelection}
        text={text}
        isImageLoaded={isImageLoaded}
        userData={userData}
      />
    </>
  );
};