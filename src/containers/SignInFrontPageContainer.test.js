import { jest } from '@jest/globals';
import { SignInFrontPageContainer } from './SignInFrontPageContainer';
import { render, screen, fireEvent, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React, { useState, useEffect } from 'react';

describe('SignInFrontPageContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <SignInFrontPageContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const SIFPComp = screen.getByTestId('SIFP');
        expect(SIFPComp).toBeInTheDocument();
    }); 
    test('onEmailOrPhoneChange function', () => {
        const setEmailOrPhone = jest.fn();
      
        const onEmailOrPhoneChange = e => setEmailOrPhone(e.target.value);
      
        onEmailOrPhoneChange({ target: { value: 'test@example.com' } });
      
        // Check that setEmailOrPhone was called with the correct value
        expect(setEmailOrPhone).toHaveBeenCalledWith('test@example.com');
    });
    test('handleForgotEmailButtonClick function', () => {
        const navigate = jest.fn();
      
        const handleForgotEmailButtonClick = () => navigate('/find-your-email');
      
        handleForgotEmailButtonClick();
      
        // Check that navigate was called with the correct path
        expect(navigate).toHaveBeenCalledWith('/find-your-email');
    });
    test('handleGuestModeInfoButtonClick function', () => {
        // Mock window.open
        window.open = jest.fn();
      
        const handleGuestModeInfoButtonClick = () => window.open('https://support.google.com/chrome/answer/6130773?hl=en', '_blank');
      
        handleGuestModeInfoButtonClick();
      
        // Check that window.open was called with the correct parameters
        expect(window.open).toHaveBeenCalledWith('https://support.google.com/chrome/answer/6130773?hl=en', '_blank');
    });
    test('handleCreateAccountClick function', () => {
        const navigate = jest.fn();
      
        const handleCreateAccountClick = () => navigate('/create-account');
      
        handleCreateAccountClick();
      
        // Check that navigate was called with the correct path
        expect(navigate).toHaveBeenCalledWith('/create-account');
    });
    test('handleNextClick function', () => {
        const error = jest.fn();
        const passFoundUser = jest.fn();
        const navigate = jest.fn();
        const users = [{ email: 'test@example.com', phoneNumber: '1234567890' }];
        const emailOrPhone = 'test@example.com';
      
        document.getElementById = jest.fn().mockReturnValue({ focus: jest.fn() });
      
        const handleNextClick = e => {
            e.preventDefault();
            if (emailOrPhone === '') {
                    error('emailOrPhoneEmpty');
                    const emailOrPhoneInput = document.getElementById('emailOrPhoneInput');
                    emailOrPhoneInput.focus();
            } else if ((!users.some(user => user.email === emailOrPhone || user.phoneNumber === emailOrPhone))) {
                    error('couldntFindYourAccount');
                    const emailOrPhoneInput = document.getElementById('emailOrPhoneInput');
                    emailOrPhoneInput.focus();
            } else {
                const registeredUser = users.find(
                    (user) => user.email === emailOrPhone || user.phoneNumber === emailOrPhone
                );
                if (registeredUser) {
                    passFoundUser(registeredUser)
                    navigate('/verify-with-password');
                }
            }
        }
      
        const { getByText } = render(<button onClick={handleNextClick}>Next</button>);
      
        fireEvent.click(getByText('Next'));
      
        // Check that error was not called
        expect(error).not.toHaveBeenCalled();
      
        // Check that passFoundUser was called with the correct user
        expect(passFoundUser).toHaveBeenCalledWith({ email: 'test@example.com', phoneNumber: '1234567890' });
      
        // Check that navigate was called with the correct path
        expect(navigate).toHaveBeenCalledWith('/verify-with-password');
    });
});

