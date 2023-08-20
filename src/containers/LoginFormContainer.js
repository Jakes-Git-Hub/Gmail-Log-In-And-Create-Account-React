import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';

export const LoginFormContainer = ({ users, handleLogin }) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailPlaceholder, setEmailPlaceholder] = useState("Email...");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password...");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        const correctLoginCredentials = users.find(
            (user) => user.email === email && user.password === password
        );
        if (correctLoginCredentials) {
            navigate('/mockmail'); // Use Navigate.push to navigate
        }
    };

    const handleEmailClick = () => {
        setEmailPlaceholder("");
    };

    const handlePasswordClick = () => {
        setPasswordPlaceholder("");
    };

    const handleEmailBlur = () => {
        if (email === "") {
            setEmailPlaceholder("Email...");
        }
    };

    const handlePasswordBlur = () => {
        if (password === "") {
            setPasswordPlaceholder("Password...");
        }
    };

    const handleCreateAccountClick = () => {
        navigate('/create-account');
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
            />
        </>
    );
};