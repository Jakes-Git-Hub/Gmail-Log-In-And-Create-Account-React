import React, { useState } from 'react';
import { LoginForm } from '../components/LoginForm';

export const LoginFormContainer = ({ users, handleLogin }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernamePlaceholder, setUsernamePlaceholder] = useState("Username...");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password...");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(username, password);
      };

    const handleUsernameClick = () => {
        setUsernamePlaceholder("");
    };

    const handlePasswordClick = () => {
        setPasswordPlaceholder("");
    };

    const handleUsernameBlur = () => {
        if (username === "") {
            setUsernamePlaceholder("Username...");
        }
    };

    const handlePasswordBlur = () => {
        if (password === "") {
            setPasswordPlaceholder("Password...");
        }
    };

    return(
        <>
            <LoginForm
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                handlePasswordClick={handlePasswordClick}
                handleUsernameClick={handleUsernameClick}
                usernamePlaceholder={usernamePlaceholder}
                passwordPlaceholder={passwordPlaceholder}
                handleUsernameBlur={handleUsernameBlur}
                handlePasswordBlur={handlePasswordBlur}
            />
        </>
    );
};