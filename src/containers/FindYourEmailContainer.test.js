import { jest } from '@jest/globals';
import { FindYourEmailContainer } from './FindYourEmailContainer';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { act } from 'react-dom/test-utils';

describe('FindYourEmailContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    const navigate = jest.fn();
    const mockFindYourEmailCredentials = { verificationCode: '1234' };
    it('renders without crashing', () => {
        render(
            <Router>
                <FindYourEmailContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData} findYourEmailCredentials={mockFindYourEmailCredentials}/>
            </Router>
        );
        const FYEComp = screen.getByTestId('FYE');
        expect(FYEComp).toBeInTheDocument();
    });
    describe('onPhoneNumberOrEmailInputChange', () => {
        const setPhoneNumberOrEmail = jest.fn();

        test('onPhoneNumberOrEmailInputChange calls setPhoneNumberOrEmail with the correct argument', () => {
            const mockEvent = { target: { value: 'test@example.com' } };

            const onPhoneNumberOrEmailInputChange = e => setPhoneNumberOrEmail(e.target.value);

            onPhoneNumberOrEmailInputChange(mockEvent);

            expect(setPhoneNumberOrEmail).toHaveBeenCalledWith('test@example.com');
        });
    });
    describe('handleNextClick', () => {
        test('handleNextClick', () => {
            const error = jest.fn();
            const updateFindYourEmailCredentials = jest.fn();
            const navigate = jest.fn();
            const phoneNumberOrEmailInput = { focus: jest.fn() };
          
            const handleNextClick = () => {
                if (phoneNumberOrEmail === '') {
                    error('phoneNumberOrEmailEmpty');
                    if (phoneNumberOrEmailInput) {
                        phoneNumberOrEmailInput.focus();
                    }
                }
                if (phoneNumberOrEmail !== '') {
                    error(null);
                    updateFindYourEmailCredentials({ phoneNumberOrEmail: phoneNumberOrEmail });
                    navigate('/whats-your-name');
                }        
            };
          
            // Test with phoneNumberOrEmail set to an empty string
            let phoneNumberOrEmail = '';
            act(() => {
                handleNextClick();
            });
            expect(error).toHaveBeenCalledWith('phoneNumberOrEmailEmpty');
            expect(phoneNumberOrEmailInput.focus).toHaveBeenCalled();
          
            // Test with phoneNumberOrEmail set to a non-empty string
            phoneNumberOrEmail = 'test@example.com';
            act(() => {
                handleNextClick();
            });
            expect(error).toHaveBeenCalledWith(null);
            expect(updateFindYourEmailCredentials).toHaveBeenCalledWith({ phoneNumberOrEmail: phoneNumberOrEmail });
            expect(navigate).toHaveBeenCalledWith('/whats-your-name');
        });
    });
});

