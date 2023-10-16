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
    const [showPassword, setShowPassword] = useState(false);
    const [errorCondition, setErrorCondition] = useState(null);

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
        setErrorCondition("confirmPasswordEmpty");
        } else {
        setErrorCondition(null);
        }
    };
    
    const passwordMismatch = () => {
        if (password !== confirmPassword && confirmPassword !== '') {
        setErrorCondition("passwordMismatch");
        } else {
        setErrorCondition(null);
        }
    };
    
    const bothPasswordAndConfirmEmpty = () => {
        if (password === '' && confirmPassword === '') {
        setErrorCondition("passwordAndConfirmEmpty");
        } else {
        setErrorCondition(null);
        }
    };



// Handle Next

    const handleNextClick = () => {
        if (password === confirmPassword && password !== '' && confirmPassword !== '') {
        updateUser({ password: password });
        setPassword('');
        setConfirmPassword('');
        setErrorCondition(null);
        navigate('/add-recovery-email');
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
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            togglePassword={handleTogglePassword}
            confirmYourPassword={confirmYourPassword}
            passwordMismatch={passwordMismatch}
            isImagePreloaded={isImagePreloaded}
            errorCondition={errorCondition}
        />
    </>
 );
};
