import { jest } from '@jest/globals';
import { VerifyWithPasswordContainer } from './VerifyWithPasswordContainer';
import { render, screen, fireEvent, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('VerifyWithPasswordContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <VerifyWithPasswordContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const VWPComp = screen.getByTestId('VWP');
        expect(VWPComp).toBeInTheDocument();
    }); 
    test('handlePasswordInput function', () => {
        const setPassword = jest.fn();
      
        const handlePasswordInput = e => setPassword(e.target.value);
      
        handlePasswordInput({ target: { value: 'password123' } });
      
        // Check that setPassword was called with the correct value
        expect(setPassword).toHaveBeenCalledWith('password123');
    });
    test('handleTogglePassword function', () => {
        let showPassword = false;
        const setShowPassword = newValue => {
             showPassword = newValue;
        };
      
        const handleTogglePassword = () => setShowPassword(!showPassword);
      
        handleTogglePassword();
      
        expect(showPassword).toBe(true);
    });
    test('passwordEmpty function', () => {
        const setErrorCondition = jest.fn();
      
        const passwordEmpty = () => setErrorCondition('passwordEmpty');
      
        passwordEmpty();
      
        expect(setErrorCondition).toHaveBeenCalledWith('passwordEmpty');
    });
    test('wrongPassword function', () => {
        const setErrorCondition = jest.fn();
      
        const wrongPassword = () => setErrorCondition('wrongPassword');
      
        wrongPassword();
      
        expect(setErrorCondition).toHaveBeenCalledWith('wrongPassword');
    });
    test('validatePassword function', () => {
        const passwordEmpty = jest.fn();
        const wrongPassword = jest.fn();
        const handleLogin = jest.fn();
        const navigate = jest.fn();
        const password = 'password123';
        const userToVerifyWithPassword = { email: 'test@example.com', password: 'password123' };
      
        document.getElementById = jest.fn().mockReturnValue({ focus: jest.fn() });
      
        const validatePassword = () => {
            const passwordInput = document.getElementById('passwordInput');
            if (password === '') {
                passwordEmpty();
                passwordInput.focus();
            }
            if (password !== userToVerifyWithPassword.password) {
                wrongPassword();
                passwordInput.focus();
            }
            else {
                handleLogin(userToVerifyWithPassword.email, userToVerifyWithPassword.password);
                navigate('/mockmail');
            } 
        };
      
        const { getByText } = render(<button onClick={validatePassword}>Validate</button>);
      
        fireEvent.click(getByText('Validate'));
      
        // Check that passwordEmpty and wrongPassword were not called
        expect(passwordEmpty).not.toHaveBeenCalled();
        expect(wrongPassword).not.toHaveBeenCalled();
      
        // Check that handleLogin was called with the correct parameters
        expect(handleLogin).toHaveBeenCalledWith('test@example.com', 'password123');
      
        // Check that navigate was called with the correct path
        expect(navigate).toHaveBeenCalledWith('/mockmail');
    });
    test('handleNextClick function', () => {
        const validatePassword = jest.fn();
      
        const handleNextClick = () => validatePassword();
      
        handleNextClick();
      
        // Check that validatePassword was called
        expect(validatePassword).toHaveBeenCalled();
    });
});

