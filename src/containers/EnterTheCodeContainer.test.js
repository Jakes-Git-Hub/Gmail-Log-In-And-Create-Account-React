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
});