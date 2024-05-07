import { jest } from '@jest/globals';
import { ConfirmYoureNotARobotContainer } from './ConfirmYoureNotARobotContainer';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { APIEndPointLimiter } from '../utils/APIEndPointLimiter';
import axios from 'axios';

jest.mock('axios');
jest.mock('../utils/APIEndPointLimiter');

describe('ConfirmYoureNotARobotContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    const setFilteredCountries = jest.fn();
    jest.mock('../images/flags/us.svg', () => 'us.svg', { virtual: true });
    it('renders without crashing', () => {
        render(
            <Router>
                <ConfirmYoureNotARobotContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const CYNARComp = screen.getByTestId('CYNAR');
        expect(CYNARComp).toBeInTheDocument();
    });
    describe('ChosenCountryFlagImage', () => {
        const SingleValue = ({ children }) => <div>{children}</div>;
    
        const components = { SingleValue };
    
        const ChosenCountryFlagImage = ({ children, ...props }) => {
            return (
                <components.SingleValue {...props}>
                    {props.data && props.data.value ? (
                        <img
                            src={require(`../images/flags/${props.data.value.svg || 'gb2.svg'}`)}
                            className='flag-image'
                            alt={`${props.data.value.name} flag3`}
                            style={{ 
                                marginLeft: '14px',
                                marginBottom: '2px',
                            }}
                        />
                    ) : null}
                </components.SingleValue>
            );
        };
    
        test('renders the flag image when data is provided', () => {
            const mockData = {
                value: {
                    svg: 'us.svg',
                    name: 'United States'
                }
            };
    
            const { getByAltText } = render(<ChosenCountryFlagImage data={mockData} />);
    
            const imgElement = getByAltText('United States flag3');
            expect(imgElement).toBeInTheDocument();
        });
    });
    describe('handleCountrySelect', () => {
        it('sets the selected option and sets actual selected option to true', () => {
            const setSelectedOption = jest.fn();
            const setActualSelectedOption = jest.fn();
    
            const handleCountrySelect = (selectedOption) => {
                setSelectedOption(selectedOption);
                console.log('selectedOption:', selectedOption);
                setActualSelectedOption(true);
            };
    
            const mockSelectedOption = { value: 'us', label: 'United States' };
    
            act(() => {
                handleCountrySelect(mockSelectedOption);
            });
    
            expect(setSelectedOption).toHaveBeenCalledWith(mockSelectedOption);
            expect(setActualSelectedOption).toHaveBeenCalledWith(true);
        });
    });
    describe('handleNextClick', () => {
        const PhoneNumberFormat = {
            NATIONAL: 'NATIONAL',
            // Add other formats if needed
        };
        const setError = jest.fn();
        const setFormattedPhoneNumber = jest.fn();
        const updateUser = jest.fn();
        const handleCYNARCountrySelect = jest.fn();
        const convertPhoneNumber = jest.fn().mockReturnValue('1234567890');
        const generateSequences = jest.fn().mockReturnValue(['123', '456', '7890']);

        const phoneNumber = '1234567890';
        const selectedOption = { value: { dialingCode: '+1', name: 'United States', abbreviation: 'US' } };
        const users = [];
        const unitedKingdom = { dialingCode: '+44', name: 'United Kingdom' };

        document.getElementById = jest.fn().mockReturnValue({ focus: jest.fn() });
        it('handles next click correctly when actualSelectedOption is false', () => {
            const actualSelectedOption = false;
            const handleNextClick = () => {
                const phoneNumberInput = document.getElementById('phoneNumberInput');
                if (phoneNumber === '') {
                    setError('phoneNumberEmpty');
                    phoneNumberInput.focus();
                } else if (!/^\+?[0-9]+$/.test(phoneNumber)) {
                    setError('incorrectFormat');
                    phoneNumberInput.focus();
                } else {
                    if (actualSelectedOption) {
                        const convertedLocalNumber = convertPhoneNumber(phoneNumber, selectedOption.value.abbreviation, PhoneNumberFormat.NATIONAL);
                        console.log('convertedLocalNumber:', convertedLocalNumber);
                        const isLocalNumberAlreadyRegistered = users.some(user => user.phoneNumber.includes(convertedLocalNumber));
                        if (isLocalNumberAlreadyRegistered) {
                            setError('alreadyRegistered'); 
                            return;
                        }
                    } else {
                        const sequences = generateSequences(phoneNumber);
                        const isPhoneNumberAlreadyRegistered = users.some(user => 
                            sequences.some(sequence => user.phoneNumber.includes(sequence))
                        );
                        if (isPhoneNumberAlreadyRegistered) {
                            setError('alreadyRegistered'); 
                            return;
                        }
                    }
                    if (actualSelectedOption) {
                        setFormattedPhoneNumber(selectedOption.value.dialingCode + phoneNumber);
                        updateUser({ phoneNumber: selectedOption.value.dialingCode + phoneNumber, countryDetails: selectedOption.value });
                        handleCYNARCountrySelect();
                        setError(null);                    
                    } else {
                        setFormattedPhoneNumber(phoneNumber);
                        updateUser({ phoneNumber: phoneNumber, countryDetails: unitedKingdom });
                        handleCYNARCountrySelect();
                        setError(null);
                    }
                }
            }
    
            act(() => {
                handleNextClick();
            });
    
            expect(setError).toHaveBeenCalledWith(null);
            expect(setFormattedPhoneNumber).toHaveBeenCalledWith(phoneNumber);
            expect(updateUser).toHaveBeenCalledWith({ phoneNumber: phoneNumber, countryDetails: unitedKingdom });
            expect(handleCYNARCountrySelect).toHaveBeenCalled();
            expect(convertPhoneNumber).not.toHaveBeenCalled();
            expect(generateSequences).toHaveBeenCalledWith(phoneNumber);
        });
        it('handles next click correctly when actualSelectedOption is true', () => {
            const actualSelectedOption = true;
            const handleNextClick = () => {
                const phoneNumberInput = document.getElementById('phoneNumberInput');
                if (phoneNumber === '') {
                    setError('phoneNumberEmpty');
                    phoneNumberInput.focus();
                } else if (!/^\+?[0-9]+$/.test(phoneNumber)) {
                    setError('incorrectFormat');
                    phoneNumberInput.focus();
                } else {
                    if (actualSelectedOption) {
                        const convertedLocalNumber = convertPhoneNumber(phoneNumber, selectedOption.value.abbreviation, PhoneNumberFormat.NATIONAL);
                        console.log('convertedLocalNumber:', convertedLocalNumber);
                        const isLocalNumberAlreadyRegistered = users.some(user => user.phoneNumber.includes(convertedLocalNumber));
                        if (isLocalNumberAlreadyRegistered) {
                            setError('alreadyRegistered'); 
                            return;
                        }
                    } else {
                        const sequences = generateSequences(phoneNumber);
                        const isPhoneNumberAlreadyRegistered = users.some(user => 
                            sequences.some(sequence => user.phoneNumber.includes(sequence))
                        );
                        if (isPhoneNumberAlreadyRegistered) {
                            setError('alreadyRegistered'); 
                            return;
                        }
                    }
                    if (actualSelectedOption) {
                        setFormattedPhoneNumber(selectedOption.value.dialingCode + phoneNumber);
                        updateUser({ phoneNumber: selectedOption.value.dialingCode + phoneNumber, countryDetails: selectedOption.value });
                        handleCYNARCountrySelect();
                        setError(null);                    
                    } else {
                        setFormattedPhoneNumber(phoneNumber);
                        updateUser({ phoneNumber: phoneNumber, countryDetails: unitedKingdom });
                        handleCYNARCountrySelect();
                        setError(null);
                    }
                }
            }
        
            act(() => {
                handleNextClick();
            });
        
            expect(setError).toHaveBeenCalledWith(null);
            expect(setFormattedPhoneNumber).toHaveBeenCalledWith(selectedOption.value.dialingCode + phoneNumber); // Corrected expectation
            expect(updateUser).toHaveBeenCalledWith({ phoneNumber: selectedOption.value.dialingCode + phoneNumber, countryDetails: selectedOption.value });
            expect(handleCYNARCountrySelect).toHaveBeenCalled();
            expect(convertPhoneNumber).toHaveBeenCalledWith(phoneNumber, selectedOption.value.abbreviation, PhoneNumberFormat.NATIONAL); // Corrected expectation
            expect(generateSequences).not.toHaveBeenCalledWith(phoneNumber);
        });
    });
    describe('sendVerificationCode', () => {
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
    
        it('handles verification code sending correctly', async () => {
            const setLoading = jest.fn();
            const updateUser = jest.fn();
            const navigate = jest.fn();
            const setError = jest.fn();
            const formattedPhoneNumber = '1234567890';
            const actualSelectedOption = true;
            let confirmYoureNotARobotPhoneAPILimit = 4; // Set this to a value less than 5
            const handleConfirmYoureNotARobotPhoneAPILimit = jest.fn(() => confirmYoureNotARobotPhoneAPILimit++);
            const resetCYNARPhoneAPILimit = jest.fn(() => confirmYoureNotARobotPhoneAPILimit = 0);
    
            mockPost.mockResolvedValue({
                data: {
                    verificationCode: '123456',
                },
            });
    
            const sendVerificationCode = async () => {
                setLoading(true);
                const container1Limiter = APIEndPointLimiter(5, 30 * 60 * 1000);
                if (confirmYoureNotARobotPhoneAPILimit < 5) {
                  try {
                    const response = await container1Limiter.post('/send-verification-code', {
                        formattedPhoneNumber: formattedPhoneNumber,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
        
                    const data = response.data;
        
                    if (data.verificationCode) {
                        // Extract the verification code from the Twilio response
                        const verificationCode = data.verificationCode.toString();
                        updateUser({ verificationCode: verificationCode });
                        console.log('actualSelectedOption:', actualSelectedOption);
                        handleConfirmYoureNotARobotPhoneAPILimit();
                        navigate('/enter-the-verification-code');    
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
                            setError('apiLimitReached');
                        } else {
                            setError('incorrectNumber');
                        }
                    }  
                } else {
                    setError('apiLimitReached');
                    setLoading(false);
                    resetCYNARPhoneAPILimit();
                }
            } 
    
            await sendVerificationCode();
    
            expect(setLoading).toHaveBeenCalledWith(true);
            expect(mockPost).toHaveBeenCalledWith('/send-verification-code', {
                formattedPhoneNumber: formattedPhoneNumber,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            expect(updateUser).toHaveBeenCalledWith({ verificationCode: '123456' });
            expect(navigate).toHaveBeenCalledWith('/enter-the-verification-code');
        });
    });
    describe('convertPhoneNumber', () => {
        const phoneUtil = {
            parseAndKeepRawInput: jest.fn().mockReturnValue({}),
            isValidNumber: jest.fn().mockReturnValue(true),
            format: jest.fn().mockReturnValue('123 456 7890'),
        };
          
        it('should return a phone number without spaces', () => {
            const phoneNumber = '1234567890';
            const region = 'US';
            const format = 'NATIONAL';
          
            // Mock the phoneUtil functions to return the expected values
            phoneUtil.parseAndKeepRawInput.mockReturnValue({});
            phoneUtil.isValidNumber.mockReturnValue(true);
            phoneUtil.format.mockReturnValue('123 456 7890');

            function convertPhoneNumber(phoneNumber, region, format) {
                try {
                    const number = phoneUtil.parseAndKeepRawInput(phoneNumber, region);
                    if (!phoneUtil.isValidNumber(number)) {
                        throw new Error("Invalid phone number provided.");
                    }
                    const formattedNumber = phoneUtil.format(number, format);
                    const numberWithoutSpaces = formattedNumber.replace(/\s/g, '');
                    return numberWithoutSpaces;
                } catch (error) {
                    console.error("Error converting phone number:", error.message);
                    return null;
                }
            }
          
            const result = convertPhoneNumber(phoneNumber, region, format);
          
            expect(result).toBe('1234567890');
        });
      
        it('should return null if the phone number is invalid', () => {
            const phoneNumber = 'invalid';
            const region = 'US';
            const format = 'NATIONAL';
        
            phoneUtil.isValidNumber.mockReturnValue(false);

            function convertPhoneNumber(phoneNumber, region, format) {
                try {
                    const number = phoneUtil.parseAndKeepRawInput(phoneNumber, region);
                    if (!phoneUtil.isValidNumber(number)) {
                        throw new Error("Invalid phone number provided.");
                    }
                    const formattedNumber = phoneUtil.format(number, format);
                    const numberWithoutSpaces = formattedNumber.replace(/\s/g, '');
                    return numberWithoutSpaces;
                } catch (error) {
                    console.error("Error converting phone number:", error.message);
                    return null;
                }
            }
        
            const result = convertPhoneNumber(phoneNumber, region, format);
        
            expect(result).toBeNull();
        });
    });
});
