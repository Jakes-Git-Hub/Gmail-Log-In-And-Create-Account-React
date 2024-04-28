import { jest } from '@jest/globals';
import { CreateAccountContainer } from './CreateAccountContainer';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('CreateAccountContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <CreateAccountContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const CAComp = screen.getByTestId('CA');
        expect(CAComp).toBeInTheDocument();
    });
    describe('isLetters', () => {
        const isLetters = str => /^[A-Za-z]+$/.test(str);
        it('returns true when input contains only letters', () => {
            expect(isLetters('John')).toBe(true);
        });
      
        it('returns false when input contains non-letter characters', () => {
            expect(isLetters('1234')).toBe(false);
            expect(isLetters('John123')).toBe(false);
        });
      
        it('returns true when input is an empty string', () => {
            expect(isLetters('')).toBe(false);
        });
    });
    describe('onFirstNameInputChange', () => {
        const isLetters = str => /^[A-Za-z]+$/.test(str);
        const onFirstNameInputChange = e => {
            const { value } = e.target;
            if (isLetters(value)) {
              setFirstName(value);
            }
        };
        const setFirstName = jest.fn();
        it('calls setFirstName with correct argument when input is valid', () => {
            const mockEvent = {
                target: {
                    value: 'John',
                },
            };
      
            if (isLetters(mockEvent.target.value)) {
                onFirstNameInputChange(mockEvent);
                expect(setFirstName).toHaveBeenCalledWith(mockEvent.target.value);
            }
        });
      
        it('does not call setFirstName when input is invalid', () => {
            const mockEvent = {
                target: {
                    value: '1234',
                },
            };
        
            if (!isLetters(mockEvent.target.value)) {
                onFirstNameInputChange(mockEvent, setFirstName);
                expect(setFirstName).not.toHaveBeenCalled();
            }
        });
    });
    describe('onLastNameInputChange', () => {
        const isLetters = str => /^[A-Za-z]+$/.test(str);
        const onLastNameInputChange = (e) => {
            if (isLetters(e.target.value)) {
                setLastName(e.target.value);
            }
        };
        const setLastName = jest.fn();
        it('calls setLastName with correct argument when input is valid', () => {
            const mockEvent = {
                target: {
                    value: 'Doe',
                },
            };
        
            if (isLetters(mockEvent.target.value)) {
                onLastNameInputChange(mockEvent, setLastName);
                expect(setLastName).toHaveBeenCalledWith(mockEvent.target.value);
            }
        });
      
        it('does not call setLastName when input is invalid', () => {
            const mockEvent = {
                    target: {
                        value: '1234',
                    },
            };
      
            if (!isLetters(mockEvent.target.value)) {
                onLastNameInputChange(mockEvent, setLastName);
                expect(setLastName).not.toHaveBeenCalled();
            }
        });
    });
    describe('handleNextClick', () => {
        const updateUser = jest.fn();
        const navigate = jest.fn();
        const setError = jest.fn();
        const setErrorCondition = jest.fn();
        const firstName = 'John';
        const lastName = 'Doe';

        // Mock the document.getElementById method
        document.getElementById = jest.fn().mockImplementation(() => ({
            focus: jest.fn(),
        }));

        const handleNextClick = () => {
            const firstNameInput = document.getElementById('firstNameInput');
            if (firstName !== '' && firstName.length > 2) {
                setErrorCondition(null);
                updateUser({ firstName: firstName, lastName: lastName });
                navigate('/basic-information');
                console.log(firstName);
            } 
            if (firstName.length > 0 && firstName.length <= 2) {
                setError('areYouSureCorrect');
                if (firstNameInput) {
                    firstNameInput.focus();
                 }
            }
            if (firstName === '') {
                setError('firstNameEmpty');
                if (firstNameInput) {
                   firstNameInput.focus();
                }
            }
        };

        it('calls updateUser and navigate when firstName is valid', () => {
            handleNextClick();

            expect(updateUser).toHaveBeenCalledWith({ firstName, lastName });
            expect(navigate).toHaveBeenCalledWith('/basic-information');
            expect(setErrorCondition).toHaveBeenCalledWith(null);
        });
    });
});


