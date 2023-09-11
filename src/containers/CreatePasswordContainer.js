import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CreatePasswordComponent } from "../components/CreatePasswordComponent";
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';


export const CreatePasswordContainer = ({ updateUser }) => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
    const [confirmPlaceholder, setConfirmPlaceholder] = useState("Confirm");
    const [passwordMismatchError, setPasswordMismatchError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPasswordEmpty, setConfirmPasswordEmpty] = useState(false);
    const [passwordAndConfirmEmpty, setPasswordAndConfirmEmpty] = useState(false) 

    const navigate = useNavigate();

    const isImagePreloaded = useImagePreload(errorImage);
    
// Password

    const handlePasswordClick = () => {
        setPasswordPlaceholder("");
    };

    const handlePasswordBlur = () => {
        if (password === "") {
            setPasswordPlaceholder("Password");
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

// Confirm

    const handleConfirmClick = () => {
        setConfirmPlaceholder("");
    };

    const handleConfirmBlur = () => {
        if (confirmPassword === "") {
          setConfirmPlaceholder("Confirm");
        }
    };

// Error messages

    const confirmYourPassword = () => {
        if (password !== '' && confirmPassword === "") {
            setConfirmPasswordEmpty(true);
        }
    };

    const passwordMismatch = () => {
        if (password !== confirmPassword && confirmPassword !== '') {
            setPasswordMismatchError(true);
        }
    };

    const bothPasswordAndConfirmEmpty = () => {
        if (password === '' && confirmPassword === '') {
            setPasswordAndConfirmEmpty(true);
        } 
    };



// Handle Next

    const handleNextClick = () => {
        if (password === confirmPassword && password !== '' && confirmPassword !== '') {
        updateUser({ password: password });
        setPassword('');
        setConfirmPassword('');
        setPasswordMismatchError(false);
        setConfirmPasswordEmpty(false);
        navigate('/next');
        } else if (password === '' && confirmPassword === '') {
            bothPasswordAndConfirmEmpty();
            const passwordInput = document.getElementById('passwordInput');
            if (passwordInput) {
                passwordInput.focus();
            }
        } else if (password !== '' && confirmPassword === "") {
            confirmYourPassword();
            const confirmPasswordInput = document.getElementById('confirmPasswordInput');
            if (confirmPasswordInput) {
                confirmPasswordInput.focus();
            }
        } else if (password !== confirmPassword && password !== "" && confirmPassword !== '') {
            passwordMismatch();
        }
    };

 return(
    <>
        <CreatePasswordComponent
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            passwordPlaceholder={passwordPlaceholder}
            handlePasswordClick={handlePasswordClick}
            handlePasswordBlur={handlePasswordBlur}
            confirmPlaceholder={confirmPlaceholder}
            handleConfirmClick={handleConfirmClick}
            handleConfirmBlur={handleConfirmBlur}
            handleNextClick={handleNextClick}
            passwordMismatchError={passwordMismatchError}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            togglePassword={handleTogglePassword}
            confirmPasswordEmpty={confirmPasswordEmpty}
            confirmYourPassword={confirmYourPassword}
            passwordMismatch={passwordMismatch}
            passwordAndConfirmEmpty={passwordAndConfirmEmpty}
            isImagePreloaded={isImagePreloaded}
        />
    </>
 );
};
