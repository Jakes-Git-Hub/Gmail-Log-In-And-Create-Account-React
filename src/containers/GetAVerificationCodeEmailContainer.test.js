import { jest } from '@jest/globals';
import { GetAVerificationCodeEmailContainer } from './GetAVerificationCodeEmailContainer';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { APIEndPointLimiter } from '../utils/APIEndPointLimiter';

jest.mock('axios');
jest.mock('../utils/APIEndPointLimiter');

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
        let mockPost;
    
        beforeEach(() => {
            mockPost = jest.fn();
            APIEndPointLimiter.mockReturnValue({
                post: mockPost,
            });
        });
    
        afterEach(() => {
            jest.clearAllMocks();
        });
    
        it('handles verification email sending correctly', async () => {
            const setLoading = jest.fn();
            const updateFindYourEmailCredentials = jest.fn();
            const navigate = jest.fn();
            const setErrorCondition = jest.fn();
            const phoneNumberOrEmail = 'test@example.com';
            let getAVerificationEMailAPILimit = 4; // Set this to a value less than 5
            const handleGetAVerificationEmailAPILimit = jest.fn(() => getAVerificationEMailAPILimit++);
            const resetGetAVerificationEmailAPILimit = jest.fn(() => getAVerificationEMailAPILimit = 0);
    
            mockPost.mockResolvedValue({
                data: {
                    verificationCode: '123456',
                },
            });
    
            const sendVerificationEmail = async () => {
                setLoading(true);
                const container2Limiter = APIEndPointLimiter(5, 30 * 60 * 1000);
                if (getAVerificationEMailAPILimit < 5) {
                    try {
                        const response = await container2Limiter.post('/send-verification-email', {
                            phoneNumberOrEmail: phoneNumberOrEmail,
                        }, {
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        });
    
                        const data = response.data;
    
                        if (data.verificationCode) {
                            // Extract the verification code from the Twilio response
                            const verificationCode = data.verificationCode.toString();
                            updateFindYourEmailCredentials({ verificationCode: verificationCode });
                            handleGetAVerificationEmailAPILimit();
                            navigate('/enter-the-find-code');    
                        } else {
                            setLoading(false);
                            if (data.error) {
                                console.error('Error sending verification code:', data.error);
                            } else {
                                console.error('Unknown error sending verification code');
                            }
                        }
                    } catch (error) {
                        console.error('Error sending verification code:', error);
                        setLoading(false);
                        if (error.response.status === 429) {
                            setErrorCondition('apiLimitReached');
                        }
                    }
                } else {
                    setErrorCondition('apiLimitReached');
                    setLoading(false);
                    resetGetAVerificationEmailAPILimit();
                }
            }
    
            await sendVerificationEmail();
    
            expect(setLoading).toHaveBeenCalledWith(true);
            expect(mockPost).toHaveBeenCalledWith('/send-verification-email', {
                phoneNumberOrEmail: phoneNumberOrEmail,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            expect(updateFindYourEmailCredentials).toHaveBeenCalledWith({ verificationCode: '123456' });
            expect(navigate).toHaveBeenCalledWith('/enter-the-find-code');
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