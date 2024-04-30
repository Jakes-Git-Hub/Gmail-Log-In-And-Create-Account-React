import { jest } from '@jest/globals';
import { ConfirmYoureNotARobotContainer } from './ConfirmYoureNotARobotContainer';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

jest.mock('axios');

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
        it('handles next click correctly', () => {
            const setError = jest.fn();
            const setFormattedPhoneNumber = jest.fn();
            const updateUser = jest.fn();
            const handleCYNARCountrySelect = jest.fn();
    
            const phoneNumber = '1234567890';
            const selectedOption = { value: { dialingCode: '+1', name: 'United States' } };
            const actualSelectedOption = true;
            const users = [];
            const unitedKingdom = { dialingCode: '+44', name: 'United Kingdom' };
    
            document.getElementById = jest.fn().mockReturnValue({ focus: jest.fn() });
    
            const handleNextClick = () => {
                const phoneNumberInput = document.getElementById('phoneNumberInput');
                if (phoneNumber === '') {
                    setError('phoneNumberEmpty');
                    phoneNumberInput.focus();
                } else if (/[^0-9]/.test(phoneNumber)) {
                    setError('incorrectFormat');
                    phoneNumberInput.focus();
                } else {
                    const isPhoneNumberAlreadyRegistered = users.some(user => user.phoneNumber === phoneNumber);
                    if (isPhoneNumberAlreadyRegistered) {
                        setError('alreadyRegistered'); 
                    } else {
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
            };
    
            act(() => {
                handleNextClick();
            });
    
            expect(setError).toHaveBeenCalledWith(null);
            expect(setFormattedPhoneNumber).toHaveBeenCalledWith('+11234567890');
            expect(updateUser).toHaveBeenCalledWith({ phoneNumber: '+11234567890', countryDetails: selectedOption.value });
            expect(handleCYNARCountrySelect).toHaveBeenCalled();
        });
    });
    describe('sendVerificationCode', () => {
        it('handles verification code sending correctly', async () => {
            const setLoading = jest.fn();
            const updateUser = jest.fn();
            const navigate = jest.fn();
            const setError = jest.fn();
            const formattedPhoneNumber = '1234567890';
            const actualSelectedOption = true;
    
            axios.post.mockResolvedValue({
                data: {
                    verificationCode: '123456',
                },
            });
    
            const sendVerificationCode = async () => {
                setLoading(true);
                try {
                    const response = await axios.post('http://localhost:3001/send-verification-code', {
                        formattedPhoneNumber: formattedPhoneNumber,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
    
                    const data = response.data;
    
                    if (data.verificationCode) {
                        const verificationCode = data.verificationCode.toString();
                        updateUser({ verificationCode: verificationCode });
                        console.log('actualSelectedOption:', actualSelectedOption);
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
                    setError('incorrectNumber');
                }
            };
    
            await sendVerificationCode();
    
            expect(setLoading).toHaveBeenCalledWith(true);
            expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/send-verification-code', {
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
    //new test
});
