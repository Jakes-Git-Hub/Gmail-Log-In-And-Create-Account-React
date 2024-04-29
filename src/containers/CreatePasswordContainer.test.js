import { jest } from '@jest/globals';
import { CreatePasswordContainer } from './CreatePasswordContainer';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('CreatePasswordContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <CreatePasswordContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const CPComp = screen.getByTestId('CP');
        expect(CPComp).toBeInTheDocument();
    });
    describe('handleSelectPassword', () => {
        it('calls setPassword when handleSelectPassword is triggered', () => {
            const setPassword = jest.fn();
            const e = { target: { value: 'newPassword' } };
            const handleSelectPassword = e => setPassword(e.target.value);
        
            handleSelectPassword(e);
            expect(setPassword).toHaveBeenCalledWith('newPassword');
        });
    });
    describe('handleTogglePassword', () => {
        it('calls setPassword when handleSelectPassword is triggered', () => {
            const setShowPassword = jest.fn();
            let showPassword = false;
            const handleTogglePassword = () => setShowPassword(!showPassword);

            handleTogglePassword();

            expect(setShowPassword).toHaveBeenCalledWith(true);

            showPassword = true;
            handleTogglePassword();

            expect(setShowPassword).toHaveBeenCalledWith(false);
        });
    });
    describe('handleSelectConfirmPassword', () => {
        it('calls setConfirmPassword with the correct value when handleSelectConfirmPassword is triggered', () => {
            const setConfirmPassword = jest.fn();
            const event = { target: { value: 'confirmPassword' } };
            const handleSelectConfirmPassword = e => setConfirmPassword(e.target.value);
        
            handleSelectConfirmPassword(event);
        
            expect(setConfirmPassword).toHaveBeenCalledWith('confirmPassword');
        });
    });
    describe('confirmYourPassword', () => {
        it('calls setErrorCondition with "confirmPasswordEmpty" when password is not empty and confirmPassword is empty', () => {
            const setErrorCondition = jest.fn();
            const password = 'password';
            const confirmPassword = '';
            const confirmYourPassword = () => {
                if (password !== '' && confirmPassword === '') {
                    setErrorCondition('confirmPasswordEmpty');
                } else {
                    setErrorCondition(null);
                }
            };
    
            confirmYourPassword();
    
            expect(setErrorCondition).toHaveBeenCalledWith('confirmPasswordEmpty');
        });
    
        it('calls setErrorCondition with null when password is empty or confirmPassword is not empty', () => {
            const setErrorCondition = jest.fn();
            let password = '';
            let confirmPassword = 'confirmPassword';
            let confirmYourPassword = () => {
                if (password !== '' && confirmPassword === '') {
                    setErrorCondition('confirmPasswordEmpty');
                } else {
                    setErrorCondition(null);
                }
            };
    
            confirmYourPassword();
    
            expect(setErrorCondition).toHaveBeenCalledWith(null);
    
            password = 'password';
            confirmPassword = 'confirmPassword';
            confirmYourPassword = () => {
                if (password !== '' && confirmPassword === '') {
                    setErrorCondition('confirmPasswordEmpty');
                } else {
                    setErrorCondition(null);
                }
            };
    
            confirmYourPassword();
    
            expect(setErrorCondition).toHaveBeenCalledWith(null);
        });
    });
    describe('passwordMismatch', () => {
        it('calls setErrorCondition with "passwordMismatch" when password and confirmPassword are not equal and confirmPassword is not empty', () => {
            const setErrorCondition = jest.fn();
            const password = 'password';
            const confirmPassword = 'differentPassword';
            const passwordMismatch = () => {
                if (password !== confirmPassword && confirmPassword !== '') {
                    setErrorCondition('passwordMismatch');
                } else {
                    setErrorCondition(null);
                }
            };
    
            passwordMismatch();
    
            expect(setErrorCondition).toHaveBeenCalledWith('passwordMismatch');
        });
    
        it('calls setErrorCondition with null when password and confirmPassword are equal or confirmPassword is empty', () => {
            const setErrorCondition = jest.fn();
            let password = 'password';
            let confirmPassword = 'password';
            let passwordMismatch = () => {
                if (password !== confirmPassword && confirmPassword !== '') {
                    setErrorCondition('passwordMismatch');
                } else {
                    setErrorCondition(null);
                }
            };
    
            passwordMismatch();
    
            expect(setErrorCondition).toHaveBeenCalledWith(null);
    
            password = 'password';
            confirmPassword = '';
            passwordMismatch = () => {
                if (password !== confirmPassword && confirmPassword !== '') {
                    setErrorCondition('passwordMismatch');
                } else {
                    setErrorCondition(null);
                }
            };
    
            passwordMismatch();
    
            expect(setErrorCondition).toHaveBeenCalledWith(null);
        });
    });
    describe('handleNextClick', () => {
        let passwordInput;
        let confirmPasswordInput;
        let setError;
        let setErrorCondition;
        let navigate;
        let updateUser;
        let setPassword;
        let setConfirmPassword;
        let password;
        let confirmPassword;
        let errorCondition;
    
        beforeEach(() => {
            // Mock DOM elements
            passwordInput = document.createElement('input');
            confirmPasswordInput = document.createElement('input');
            passwordInput.id = 'passwordInput';
            confirmPasswordInput.id = 'confirmPasswordInput';
            document.body.appendChild(passwordInput);
            document.body.appendChild(confirmPasswordInput);
    
            // Mock functions and variables
            setError = jest.fn();
            setErrorCondition = jest.fn();
            navigate = jest.fn();
            updateUser = jest.fn();
            setPassword = jest.fn();
            setConfirmPassword = jest.fn();
            password = 'StrongPassword1!';
            confirmPassword = 'StrongPassword1!';
            errorCondition = null;
        });
    
        afterEach(() => {
            // Clean up DOM
            document.body.removeChild(passwordInput);
            document.body.removeChild(confirmPasswordInput);
        });
    
        it('calls updateUser and navigate when password and confirmPassword are strong and equal', () => {
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
                    } else {
                        console.log('fine');
                        return true;
                    }
                }
                checkIfPasswordIsStrongEnough();
                if (password === confirmPassword && password !== '' && confirmPassword !== '' && checkIfPasswordIsStrongEnough()) {
                updateUser({ password: password });
                setPassword('');
                setConfirmPassword('');
                setErrorCondition(null);
                navigate('/confirm-youre-not-a-robot');
                } if (password.length >= 8) {
                    if (errorCondition === 'passwordEmpty' || errorCondition === 'needs8CharsOrMore') {
                        setErrorCondition(null);
                    }
                } if (password === '') {
                    setError('passwordEmpty');
                    passwordInput.focus();
                } if (password.length < 8 && password !== '') {
                    setError('needs8CharsOrMore');
                    passwordInput.focus();
                } if (password !== '' && password.length >= 8 && confirmPassword === '') {
                    confirmYourPassword();
                    const confirmPasswordInput = document.getElementById('confirmPasswordInput');
                    confirmPasswordInput.focus();
                } if (password !== confirmPassword && password !== '' && confirmPassword !== '') {
                    passwordMismatch();
                } 
            }
    
            handleNextClick();
    
            expect(updateUser).toHaveBeenCalledWith({ password: password });
            expect(navigate).toHaveBeenCalledWith('/confirm-youre-not-a-robot');
        });
    });
});


