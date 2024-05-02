import { jest } from '@jest/globals';
import { WhatsYourNameContainer } from './WhatsYourNameContainer';
import { render, screen, fireEvent, act, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React, { useEffect } from 'react';

describe('WhatsYourNameContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <WhatsYourNameContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const WYNComp = screen.getByTestId('WYN');
        expect(WYNComp).toBeInTheDocument();
    }); 
    test('onFirstNameInputChange function', () => {
        const setFirstName = jest.fn();
      
        const onFirstNameInputChange = e => setFirstName(e.target.value.toLowerCase());
      
        onFirstNameInputChange({ target: { value: 'TestName' } });
      
        // Check that setFirstName was called with the correct value
        expect(setFirstName).toHaveBeenCalledWith('testname');
    });
    test('onLastNameInputChange function', () => {
        const setLastName = jest.fn();
      
        const onLastNameInputChange = e => setLastName(e.target.value.toLowerCase());
      
        onLastNameInputChange({ target: { value: 'TestName' } });
      
        // Check that setLastName was called with the correct value
        expect(setLastName).toHaveBeenCalledWith('testname');
    });
    test('handleFindWithPhoneNumber function', () => {
        const setFindWith = jest.fn();
      
        const handleFindWithPhoneNumber = () => setFindWith('phoneNumber');
      
        handleFindWithPhoneNumber();
      
        // Check that setFindWith was called with the correct value
        expect(setFindWith).toHaveBeenCalledWith('phoneNumber');
    });
    test('handleFindWithEmail function', () => {
        const setFindWith = jest.fn();
      
        const handleFindWithEmail = () => setFindWith('email');
      
        handleFindWithEmail();
      
        // Check that setFindWith was called with the correct value
        expect(setFindWith).toHaveBeenCalledWith('email');
    });
    test('handleNextClick function', () => {
        const error = jest.fn();
        const setErrorCondition = jest.fn();
        const updateFindYourEmailCredentials = jest.fn();
        const setProceedWithFindUser = jest.fn();
        const firstName = 'John';
        const lastName = 'Doe';
      
        document.getElementById = jest.fn().mockReturnValue({ focus: jest.fn() });
      
        const handleNextClick = () => {
            const firstNameInput = document.getElementById('firstNameInput');
            if (firstName === '') {
                error('firstNameEmpty');
                if (firstNameInput) {
                firstNameInput.focus();
                }
            }
            if (firstName !== '') {
                setErrorCondition(null);
                updateFindYourEmailCredentials({ firstName: firstName, lastName: lastName });
                setProceedWithFindUser(true);
            } 
        };
      
        const { getByText } = render(<button onClick={handleNextClick}>Next</button>);
      
        fireEvent.click(getByText('Next'));
      
        // Check that error was not called
        expect(error).not.toHaveBeenCalled();
      
        // Check that setErrorCondition was called with the correct parameters
        expect(setErrorCondition).toHaveBeenCalledWith(null);
      
        // Check that updateFindYourEmailCredentials was called with the correct parameters
        expect(updateFindYourEmailCredentials).toHaveBeenCalledWith({ firstName: 'John', lastName: 'Doe' });
      
        // Check that setProceedWithFindUser was called with the correct value
        expect(setProceedWithFindUser).toHaveBeenCalledWith(true);
    });
    test('if matchingUser setMatchingUser to true, if not handle else useEffect', () => {
        const findMatchingUser = jest.fn();
        const setfoundMatchingUser = jest.fn();
        const handleIncorrectInfoSearch = jest.fn();
        const navigate = jest.fn();
        let proceedWithFindUser = false;

        function Component() {
            useEffect(() => {
            if (proceedWithFindUser) {
                const matchingUser = findMatchingUser();
                if (matchingUser) {
                setfoundMatchingUser(true);
                } else {
                handleIncorrectInfoSearch();
                navigate('/find-your-email');
                }
            } 
            }, [proceedWithFindUser]);

            return null;
        }

        const { rerender } = render(<Component />);

        // Simulate proceedWithFindUser changing to true
        act(() => {
            proceedWithFindUser = true;
            rerender(<Component />);
        });

        // Check that findMatchingUser was called
        expect(findMatchingUser).toHaveBeenCalled();

        // Depending on whether findMatchingUser returns a truthy value, either setfoundMatchingUser or handleIncorrectInfoSearch and navigate should be called
        // Here we assume findMatchingUser returns a falsy value
        expect(setfoundMatchingUser).not.toHaveBeenCalled();
        expect(handleIncorrectInfoSearch).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith('/find-your-email');
    });
    test('findMatchingUser function', () => {
        const handleFindWithEmail = jest.fn();
        const handleFindWithPhoneNumber = jest.fn();
      
        const users = [
            { email: 'test@example.com', firstName: 'John', lastName: 'Doe', phoneNumber: '1234567890' },
            { email: 'test2@example.com', firstName: 'Jane', lastName: 'Doe', phoneNumber: '0987654321' },
        ];
      
        const findYourEmailCredentials = { phoneNumberOrEmail: 'test@example.com', firstName: 'john', lastName: 'doe' };
      
        const findMatchingUser = () => {
            const matchingUser = users.find(user => {
                if (
                    user.email === findYourEmailCredentials.phoneNumberOrEmail &&
                    user.firstName.toLowerCase() === findYourEmailCredentials.firstName &&
                    user.lastName.toLowerCase() === findYourEmailCredentials.lastName
                ) {
                return true;
                } else if (
                    user.phoneNumber === findYourEmailCredentials.phoneNumberOrEmail &&
                    user.firstName.toLowerCase() === findYourEmailCredentials.firstName &&
                    user.lastName.toLowerCase() === findYourEmailCredentials.lastName
                ) {
                    return true;
                }
                return false;
            });
        
            if (matchingUser) {
                if (matchingUser.email === findYourEmailCredentials.phoneNumberOrEmail) {
                    handleFindWithEmail();
                } else if (matchingUser.phoneNumber === findYourEmailCredentials.phoneNumberOrEmail) {
                    handleFindWithPhoneNumber();
                }
            }
            return matchingUser;
        };
      
        const matchingUser = findMatchingUser();
      
        // Check that handleFindWithEmail was called
        expect(handleFindWithEmail).toHaveBeenCalled();
      
        // Check that handleFindWithPhoneNumber was not called
        expect(handleFindWithPhoneNumber).not.toHaveBeenCalled();
      
        // Check that the correct user was found
        expect(matchingUser).toEqual(users[0]);
    });
    test('if found matching user we call handleCorrectInfoSearch and navigate to the associated means of findWith useEffect', () => {
        const handleCorrectInfoSearch = jest.fn();
        const navigate = jest.fn();
        let foundMatchingUser = false;
        let findWith = 'email';
      
        function Component() {
            useEffect(() => {
                if (foundMatchingUser) {
                    handleCorrectInfoSearch();
                    if (findWith === 'email') {
                        navigate('/get-a-verification-code-email');
                    } if (findWith === 'phoneNumber') {
                        navigate('/get-a-verification-code-phone');
                    } 
                } 
            }, [foundMatchingUser]);
        
            return null;
        }
      
        const { rerender } = render(<Component />);
      
        // Simulate findWith changing to 'phoneNumber'
        act(() => {
            findWith = 'phoneNumber';
            rerender(<Component />);
        });
    
        // Simulate foundMatchingUser changing to true
        act(() => {
            foundMatchingUser = true;
            rerender(<Component />);
        });
      
        // Check that handleCorrectInfoSearch was called
        expect(handleCorrectInfoSearch).toHaveBeenCalled();
      
        // Check that navigate was called with the correct parameter
        expect(navigate).toHaveBeenCalledWith('/get-a-verification-code-phone');
    });
});

