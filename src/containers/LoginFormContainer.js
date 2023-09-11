import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';

export const LoginFormContainer = ({ users, handleLogin }) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailPlaceholder, setEmailPlaceholder] = useState("Email...");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password...");
    const [emailIsEmpty, setEmailIsEmpty] = useState(false);
    const [passwordIsEmpty, setPasswordIsEmpty] = useState(false);

    const isImagePreloaded = useImagePreload(errorImage);



// Email

    const handleEmailClick = () => {
        setEmailPlaceholder("");
    };
    
    const handleEmailBlur = () => {
        if (email === "") {
            setEmailPlaceholder("Email...");
        }
    };

    const emailEmptyError = () => setEmailIsEmpty(true);

// Password

    const handlePasswordClick = () => {
        setPasswordPlaceholder("");
    };

    
    const handlePasswordBlur = () => {
        if (password === "") {
            setPasswordPlaceholder("Password...");
        }
    };

    const passwordEmptyError = () => setPasswordIsEmpty(true);

// Create Account Button

    const handleCreateAccountClick = () => {
        navigate('/create-account');
    };

// Handle Submit

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '') {
            emailEmptyError();
            const emailInput = document.getElementById('emailInput');
            emailInput.focus();
        } else if (password === '') {
            passwordEmptyError();
            const passwordInput = document.getElementById('passwordInput');
            passwordInput.focus();
        } else if (email !== '' && password !== '') {
            handleLogin(email, password);
            const correctLoginCredentials = users.find(
                (user) => user.email === email && user.password === password
            );
            if (correctLoginCredentials) {
                navigate('/mockmail'); // Use Navigate.push to navigate
            }
        }
    };

    return(
        <>
            <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                handlePasswordClick={handlePasswordClick}
                handleEmailClick={handleEmailClick}
                emailPlaceholder={emailPlaceholder}
                passwordPlaceholder={passwordPlaceholder}
                handleEmailBlur={handleEmailBlur}
                handlePasswordBlur={handlePasswordBlur}
                handleCreateAccountClick={handleCreateAccountClick}
                emailIsEmpty={emailIsEmpty}
                passwordIsEmpty={passwordIsEmpty}
                isImagePreloaded={isImagePreloaded}
            />
        </>
    );
};