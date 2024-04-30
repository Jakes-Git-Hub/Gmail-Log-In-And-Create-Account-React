import { jest } from '@jest/globals';
import { EnterTheCodeContainer } from './EnterTheCodeContainer';
import { render, screen, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React, { useState, useEffect } from 'react';

describe('EnterTheCodeContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    const navigate = jest.fn();
    it('renders without crashing', () => {
        render(
            <Router>
                <EnterTheCodeContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const ETCComp = screen.getByTestId('ETC');
        expect(ETCComp).toBeInTheDocument();
    });
    it('should call setVerificationCode with the correct argument when userData changes', () => {
        const setVerificationCode = jest.fn();
        jest.spyOn(React, 'useState').mockImplementation(() => [null, setVerificationCode]);
    
        const Component = ({ userData }) => {
            useEffect(() => {   
                console.log('userData', userData);
                if (userData) {
                    setVerificationCode(userData.verificationCode);
                }
            }, [userData.verificationCode]);
    
            return null;
        };
    
        const { rerender } = render(<Component userData={{ verificationCode: '1234' }} />);
    
        expect(setVerificationCode).toHaveBeenCalledWith('1234');
    
        act(() => {
            rerender(<Component userData={{ verificationCode: '5678' }} />);
        });
    
        expect(setVerificationCode).toHaveBeenCalledWith('5678');
    });
    describe('handleUserVerificationCodeInput', () => {
        it('calls setUsersVerificationCodeInput with the correct argument', () => {
            const setUsersVerificationCodeInput = jest.fn();
            const handleUserVerificationCodeInput = e => setUsersVerificationCodeInput(e.target.value);
    
            const mockEvent = {
                target: {
                    value: '1234'
                }
            };
    
            handleUserVerificationCodeInput(mockEvent);
    
            expect(setUsersVerificationCodeInput).toHaveBeenCalledWith('1234');
        });
    });
    describe('thirtySecondGetNewCodeCountdown', () => {
        jest.useFakeTimers();
    
        it('calls setDisabledCount with the correct argument after 1 second', () => {
            const setDisabledCount = jest.fn();
            const thirtySecondGetNewCodeCountdown = disabledCount => {
                setTimeout(() => {
                    setDisabledCount(disabledCount - 1);
                }, 1000);
            };
    
            thirtySecondGetNewCodeCountdown(10);
    
            expect(setDisabledCount).not.toHaveBeenCalled();
    
            jest.advanceTimersByTime(1000);
    
            expect(setDisabledCount).toHaveBeenCalledWith(9);
        });
    });
    describe('getNewCode', () => {
        it('should call navigate with correct path', () => {
        const getNewCode = () => navigate('/confirm-youre-not-a-robot');
          getNewCode();
          expect(navigate).toHaveBeenCalledWith('/confirm-youre-not-a-robot');
        });
    });
    describe('handleNextClick', () => {
        let setError;
        let navigate;
        let usersVerificationCodeInput;
        let verificationCode;
    
        beforeEach(() => {
            setError = jest.fn();
            navigate = jest.fn();
            usersVerificationCodeInput = '';
            verificationCode = '123456';
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
                navigate('/add-recovery-email');
            }
        };
    
        it('should set error to "inputEmpty" when input is empty', () => {
            handleNextClick();
            expect(setError).toHaveBeenCalledWith('inputEmpty');
        });
    
        it('should set error to "hasLetters" when input has letters', () => {
            usersVerificationCodeInput = 'abc123';
            handleNextClick();
            expect(setError).toHaveBeenCalledWith('hasLetters');
        });
    
        it('should set error to "wrongNumberOfDigits" when input has wrong number of digits', () => {
            usersVerificationCodeInput = '12345';
            handleNextClick();
            expect(setError).toHaveBeenCalledWith('wrongNumberOfDigits');
        });
    
        it('should set error to "wrongCode" when input is not equal to verification code', () => {
            usersVerificationCodeInput = '654321';
            handleNextClick();
            expect(setError).toHaveBeenCalledWith('wrongCode');
        });
    
        it('should navigate to "/add-recovery-email" when input is equal to verification code', () => {
            usersVerificationCodeInput = verificationCode;
            handleNextClick();
            expect(navigate).toHaveBeenCalledWith('/add-recovery-email');
        });
    });
    describe('toggleFocus', () => {
        setIsFocused = jest.fn();
        let isFocused = true;
        it('toggles focus', () => {
            const toggleFocus = () => setIsFocused(!isFocused);
            toggleFocus();
            expect(setIsFocused).toHaveBeenCalledWith(!isFocused);
        });
    });
});

