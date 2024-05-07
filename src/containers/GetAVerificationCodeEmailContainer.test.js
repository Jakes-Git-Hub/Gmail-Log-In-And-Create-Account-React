import { jest } from '@jest/globals';
import { GetAVerificationCodeEmailContainer } from './GetAVerificationCodeEmailContainer';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

jest.mock('axios');

describe('GetAVerificationCodeEmailContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    const navigate = jest.fn();
    const mockFindYourEmailCredentials = { verificationCode: '1234' };
    it('renders without crashing', () => {
        render(
            <Router>
                <GetAVerificationCodeEmailContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData} findYourEmailCredentials={mockFindYourEmailCredentials}/>
            </Router>
        );
        const GAVCEComp = screen.getByTestId('GAVCE');
        expect(GAVCEComp).toBeInTheDocument();
    });
    describe('sendVerificationEmail', () => {
        test('either sends verification email successfully, or catches the error', async () => {
            const updateFindYourEmailCredentials = jest.fn();
            const navigate = jest.fn();
            const setErrorCondition = jest.fn();
            const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
            const findYourEmailCredentials = { phoneNumberOrEmail: 'jacmatthews7@gmail.com' };
    
            const sendVerificationEmail = async () => {
                console.log('findYourEmailCredentials.phoneNumberOrEmail', findYourEmailCredentials.phoneNumberOrEmail);
                try {
                    const response = await axios.post('http://localhost:3001/send-verification-email', {
                        phoneNumberOrEmail: findYourEmailCredentials.phoneNumberOrEmail,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
    
                    const data = response.data;
    
                    if (data.verificationCode) {
                        // Extract the verification code from the Twilio response
                        const verificationCode = data.verificationCode.toString();
                        console.log('Verification code:', verificationCode);
                        updateFindYourEmailCredentials({ verificationCode: verificationCode });
                        navigate('/enter-the-find-code');    
                    } else {
                        if (data.error) {
                            console.error('Error sending verification code:', data.error);
                        } else {
                            console.error('Unknown error sending verification code');
                        }
                    }
                } catch (error) {
                    console.error('Error sending verification code:', error);
                    if (error.response && error.response.status === 429) {
                        setErrorCondition('apiLimitReached');
                    }
                }
            } 
    
            // Test with a successful axios post request that returns a verificationCode
            axios.post.mockResolvedValueOnce({ data: { verificationCode: '123456' } });
            await act(async () => {
                await sendVerificationEmail();
            });
            expect(updateFindYourEmailCredentials).toHaveBeenCalledWith({ verificationCode: '123456' });
            expect(navigate).toHaveBeenCalledWith('/enter-the-find-code');
    
            // Test with a successful axios post request that does not return a verificationCode
            axios.post.mockResolvedValueOnce({ data: {} });
            await act(async () => {
                await sendVerificationEmail();
            });
            expect(consoleError).toHaveBeenCalledWith('Unknown error sending verification code');
    
            // Test with a failed axios post request
            axios.post.mockRejectedValueOnce(new Error('Network error'));
            await act(async () => {
                await sendVerificationEmail();
            });
            expect(consoleError).toHaveBeenCalledWith('Error sending verification code:', new Error('Network error'));
    
            // Test with a failed axios post request with status 429
            axios.post.mockRejectedValueOnce({ response: { status: 429 } });
            await act(async () => {
                await sendVerificationEmail();
            });
            expect(setErrorCondition).toHaveBeenCalledWith('apiLimitReached');
    
            consoleError.mockRestore();
        });
    });
    describe('handleSendClick', () => {
        it('calls sendVerificationEmail',() => {
            const sendVerificationEmail = jest.fn();

            const handleSendClick = () => sendVerificationEmail();

            handleSendClick();

            expect(sendVerificationEmail).toHaveBeenCalled();
        });  
    });          
});

