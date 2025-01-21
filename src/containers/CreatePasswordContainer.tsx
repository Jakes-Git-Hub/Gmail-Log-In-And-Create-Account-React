import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreatePasswordComponent } from '../components/CreatePasswordComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';

interface User {
    id: number;
    email: string;
    password: string | null;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    profileCircleColor: string;
    day: string;
    month: string;
    year: string;
    gender: string;
    countryDetails: {
      name: string;
      abbreviation: string;
      dialingCode: string;
      svg: string;
    };
  }

interface Props {
  updateUser: (user: Partial<{ password: string; language?: string }>) => void;
  text: any;
  userData: any;
  users: User[];
}

export const CreatePasswordContainer: React.FC<Props> = ({ updateUser, text, userData }) => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
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

  // Password
  const handleSelectPassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  // Confirm
  const handleSelectConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);

  // Error messages
  const setError = (error: string) => setErrorCondition(error);

  const confirmYourPassword = () => {
    if (password !== '' && confirmPassword === '') {
      setErrorCondition('confirmPasswordEmpty');
    } else {
      setErrorCondition(null);
    }
  };

  const passwordMismatch = () => {
    if (password !== confirmPassword && confirmPassword !== '') {
      setErrorCondition('passwordMismatch');
    } else {
      setErrorCondition(null);
    }
  };

  // Handle Next
  const handleNextClick = () => {
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    const sufficientPasswordStrength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const checkIfPasswordIsStrongEnough = () => {
      const passwordTest = sufficientPasswordStrength.test(password);
      const confirmPasswordTest = sufficientPasswordStrength.test(confirmPassword);
      if (!passwordTest && !confirmPasswordTest) {
        setError('pleaseChooseAStrongerPassword');
        console.log('not fine');
        return false;
      } else {
        console.log('fine');
        return true;
      }
    };
    checkIfPasswordIsStrongEnough();
    if (password === confirmPassword && password !== '' && confirmPassword !== '' && checkIfPasswordIsStrongEnough()) {
      updateUser({ password: password });
      navigate('/confirm-youre-not-a-robot');
    }
    if (password.length >= 8) {
      if (errorCondition === 'passwordEmpty' || errorCondition === 'needs8CharsOrMore') {
        setErrorCondition(null);
      }
    }
    if (password === '') {
      setError('passwordEmpty');
      passwordInput.focus();
    }
    if (password.length < 8 && password !== '') {
      setError('needs8CharsOrMore');
      passwordInput.focus();
    }
    if (password !== '' && password.length >= 8 && confirmPassword === '') {
      confirmYourPassword();
      const confirmPasswordInput = document.getElementById('confirmPasswordInput') as HTMLInputElement;
      confirmPasswordInput.focus();
    }
    if (password !== confirmPassword && password !== '' && confirmPassword !== '') {
      passwordMismatch();
    }
  };

  return (
    <>
      <CreatePasswordComponent
        password={password}
        setPassword={setPassword}
        handleSelectPassword={handleSelectPassword}
        confirmPassword={confirmPassword}
        handleSelectConfirmPassword={handleSelectConfirmPassword}
        setConfirmPassword={setConfirmPassword}
        handleNextClick={handleNextClick}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleTogglePassword={handleTogglePassword}
        confirmYourPassword={confirmYourPassword}
        passwordMismatch={passwordMismatch}
        errorCondition={errorCondition}
        text={text}
        handleLanguageSelection={handleLanguageSelection}
        isImageLoaded={isImageLoaded}
        userData={userData}
      />
    </>
  );
};