import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreatePasswordComponent } from '../components/CreatePasswordComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';
export const CreatePasswordContainer = ({ updateUser, text, userData }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
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
    const handleLanguageSelection = (chosenLanguage) => updateUser({ language: chosenLanguage });
    // Password
    const handleSelectPassword = (e) => setPassword(e.target.value);
    const handleTogglePassword = () => setShowPassword(!showPassword);
    // Confirm
    const handleSelectConfirmPassword = (e) => setConfirmPassword(e.target.value);
    // Error messages
    const setError = (error) => setErrorCondition(error);
    const confirmYourPassword = () => {
        if (password !== '' && confirmPassword === '') {
            setErrorCondition('confirmPasswordEmpty');
        }
        else {
            setErrorCondition(null);
        }
    };
    const passwordMismatch = () => {
        if (password !== confirmPassword && confirmPassword !== '') {
            setErrorCondition('passwordMismatch');
        }
        else {
            setErrorCondition(null);
        }
    };
    // Handle Next
    const handleNextClick = () => {
        const passwordInput = document.getElementById('passwordInput');
        const sufficientPasswordStrength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const checkIfPasswordIsStrongEnough = () => {
            const passwordTest = sufficientPasswordStrength.test(password);
            const confirmPasswordTest = sufficientPasswordStrength.test(confirmPassword);
            if (!passwordTest && !confirmPasswordTest) {
                setError('pleaseChooseAStrongerPassword');
                console.log('not fine');
                return false;
            }
            else {
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
            const confirmPasswordInput = document.getElementById('confirmPasswordInput');
            confirmPasswordInput.focus();
        }
        if (password !== confirmPassword && password !== '' && confirmPassword !== '') {
            passwordMismatch();
        }
    };
    return (_jsx(_Fragment, { children: _jsx(CreatePasswordComponent, { password: password, setPassword: setPassword, handleSelectPassword: handleSelectPassword, confirmPassword: confirmPassword, handleSelectConfirmPassword: handleSelectConfirmPassword, setConfirmPassword: setConfirmPassword, handleNextClick: handleNextClick, showPassword: showPassword, setShowPassword: setShowPassword, handleTogglePassword: handleTogglePassword, confirmYourPassword: confirmYourPassword, passwordMismatch: passwordMismatch, errorCondition: errorCondition, text: text, handleLanguageSelection: handleLanguageSelection, isImageLoaded: isImageLoaded, userData: userData }) }));
};
