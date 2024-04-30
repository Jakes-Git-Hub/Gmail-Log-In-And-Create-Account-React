import { jest } from '@jest/globals';
import { EnterTheFindCodeContainer } from './EnterTheFindCodeContainer';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('EnterTheFindCodeContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    const navigate = jest.fn();
    const setUsersVerificationCodeInput = jest.fn();
    const mockFindYourEmailCredentials = { verificationCode: '1234' };
    it('renders without crashing', () => {
        render(
            <Router>
                <EnterTheFindCodeContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData} findYourEmailCredentials={mockFindYourEmailCredentials}/>
            </Router>
        );
        const ETFCComp = screen.getByTestId('ETFC');
        expect(ETFCComp).toBeInTheDocument();
    });
    describe('handleUserVerificationCodeInput', () => {
        it('updates usersVerificationCodeInput when input changes', () => {
            const handleUserVerificationCodeInput = e => setUsersVerificationCodeInput(e.target.value);

            const e = {
                target: {
                    value: '1234'
                }
            }

            handleUserVerificationCodeInput(e);

            expect(setUsersVerificationCodeInput).toHaveBeenCalledWith('1234');

        });
    });
    describe('handleNextClick', () => {
        const setError = jest.fn();
        const navigate = jest.fn();
        let usersVerificationCodeInput;
        let verificationCode;

        beforeEach(() => {
            setError.mockClear();
            navigate.mockClear();
        });

        const handleNextClick = () => {
            const emptyInput = '';
            const hasLetters = /[a-zA-Z]/.test(usersVerificationCodeInput);
            const sixDigits = /^\d{6}$/;
            if (usersVerificationCodeInput === emptyInput) {
                setError('inputEmpty');
            }
            if (hasLetters) {
                setError('hasLetters');
            } 
            if ((usersVerificationCodeInput !== emptyInput) && (!hasLetters && !sixDigits.test(usersVerificationCodeInput))) {
                setError('wrongNumberOfDigits');
            } 
            if (sixDigits.test(usersVerificationCodeInput) && (usersVerificationCodeInput !== verificationCode)) {
                setError('wrongCode');
            } 
            if (usersVerificationCodeInput === verificationCode) {
                navigate('/select-an-account-to-sign-in');
            }
        };    

        test('handleNextClick sets error to "inputEmpty" when input is empty', () => {
            usersVerificationCodeInput = '';
            handleNextClick();
            expect(setError).toHaveBeenCalledWith('inputEmpty');
        });

        test('handleNextClick sets error to "hasLetters" when input has letters', () => {
            usersVerificationCodeInput = 'abc123';
            handleNextClick();
            expect(setError).toHaveBeenCalledWith('hasLetters');
        });

        test('handleNextClick sets error to "wrongNumberOfDigits" when input is not empty, has no letters but is not exactly 6 digits', () => {
            usersVerificationCodeInput = '123';
            handleNextClick();
            expect(setError).toHaveBeenCalledWith('wrongNumberOfDigits');
        });

        test('handleNextClick sets error to "wrongCode" when input is exactly 6 digits but not equal to verificationCode', () => {
            usersVerificationCodeInput = '123456';
            verificationCode = '654321';
            handleNextClick();
            expect(setError).toHaveBeenCalledWith('wrongCode');
        });

        test('handleNextClick navigates to "/select-an-account-to-sign-in" when input is exactly equal to verificationCode', () => {
            usersVerificationCodeInput = '123456';
            verificationCode = '123456';
            handleNextClick();
            expect(navigate).toHaveBeenCalledWith('/select-an-account-to-sign-in');
        });
    });
});

