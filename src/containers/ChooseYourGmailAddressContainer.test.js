import { jest } from '@jest/globals';
import { ChooseYourGmailAddressContainer } from './ChooseYourGmailAddressContainer';
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';

describe('ChooseYourGmailAddressContainer', () => {
    const setErrorCondition = jest.fn();
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    const setEmail = jest.fn();
    const error = jest.fn();
    updateUser = jest.fn();
    const navigate = jest.fn();
    const users = [{email: 'existing@gmail.com'}];
    document.getElementById = jest.fn().mockReturnValue({
        focus: jest.fn(),
    });
    const focus = jest.fn();
    const email = 'testemail';
    const validateEmail = jest.fn();
    it('renders without crashing', () => {
        render(
            <Router>
                <ChooseYourGmailAddressContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const CYGAComp = screen.getByTestId('CYGAComp');
        expect(CYGAComp).toBeInTheDocument();
    });
    describe('handleSelectEmail', () => {
        it('sets email', () => {
            const handleSelectEmail = jest.fn(e => setEmail(e.target.value));

            const e = {
                target: {
                    value: 'test@gmail.com'
                }
            };
            
            handleSelectEmail(e);

            expect(handleSelectEmail).toHaveBeenCalledWith(e);
            expect(setEmail).toHaveBeenCalledWith(e.target.value);
        });
    });
    describe('error', () => {
        it('sets error', () => {
            const error = jest.fn(error => setErrorCondition(error));
            
            error('usernameEmpty');

            expect(error).toHaveBeenCalledWith('usernameEmpty');
            expect(setErrorCondition).toHaveBeenCalledWith('usernameEmpty');
        });
    });
    describe('validateEmail', () => {
        it('validates email or throws an error', () => {
            const validateEmail = jest.fn(() => {
                setEmail(email)
                const usernameInput = document.getElementById('usernameInput');
                if (email === '') {
                  error('usernameEmpty');
                  usernameInput.focus();
                } else if (!/^[a-zA-Z0-9.]+$/.test(email)) {
                  error('usesUnallowedChars');
                  usernameInput.focus();
                } else if (email.length < 6 || email.length > 30) {
                  error('isIncorrectLength');
                  usernameInput.focus();
                } else if (users.find(user => user.email === email + '@gmail.com')) {
                  error('usernameIsAlreadyTaken');
                  usernameInput.focus();
                } else {
                  updateUser({ email: email + '@gmail.com' })
                  navigate('/create-password')
                }
            });
            
            validateEmail();

            expect(setEmail).toHaveBeenCalledWith(email);
            expect(error).not.toHaveBeenCalled();
            expect(focus).not.toHaveBeenCalled();
            expect(updateUser).toHaveBeenCalledWith({ email: email + '@gmail.com' });
            expect(navigate).toHaveBeenCalledWith('/create-password');
        });
    });
    describe('handleNextClick', () => {
        it('handles next click', () => {
            const handleNextClick = jest.fn(() => validateEmail());
            
            handleNextClick();

            expect(validateEmail).toHaveBeenCalled();
        });
    });
});

