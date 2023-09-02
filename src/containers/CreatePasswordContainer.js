import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CreatePasswordComponent } from "../components/CreatePasswordComponent";

export const CreatePasswordContainer = ({ updateUser }) => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
    const [confirmPlaceholder, setConfirmPlaceholder] = useState("Confirm");
    const [passwordMismatchError, setPasswordMismatchError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

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

// Handle Next

const handleNextClick = () => {
    if (password === confirmPassword) {
        updateUser({ password: password });
        setPassword('');
        setConfirmPassword('');
        setPasswordMismatchError(false);
        navigate('/');
        console.log('error');
    } else {
        setPasswordMismatchError(true);
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
        />
    </>
 );
}