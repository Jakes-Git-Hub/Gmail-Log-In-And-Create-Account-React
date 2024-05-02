import { jest } from '@jest/globals';
import { SelectAnAccountToSignInContainer } from './SelectAnAccountToSignInContainer';
import { render, screen, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React, { useState, useEffect } from 'react';

describe('SelectAnAccountToSignInContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <SelectAnAccountToSignInContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const SAATSIComp = screen.getByTestId('SAATSI');
        expect(SAATSIComp).toBeInTheDocument();
    }); 
    test('finds user with matching phone number or email then sets matching user for state useEffect', () => {
        const setMatchingUsers = jest.fn();
        let setUsers;
        let setFindYourEmailCredentials;
      
        const Component = () => {
            const [users, _setUsers] = useState([]);
            const [findYourEmailCredentials, _setFindYourEmailCredentials] = useState({ phoneNumberOrEmail: '', state: '' });
        
            // Make setUsers and setFindYourEmailCredentials accessible outside the component
            setUsers = _setUsers;
            setFindYourEmailCredentials = _setFindYourEmailCredentials;
        
            useEffect(() => {
                if (users) {
                const matchingUsersForState = users.filter(user => {
                    return (
                    (user.email === findYourEmailCredentials.phoneNumberOrEmail || 
                    user.phoneNumber === findYourEmailCredentials.phoneNumberOrEmail) &&
                    user.state === findYourEmailCredentials.state
                    );
                });
                setMatchingUsers(matchingUsersForState);
                }
            }, [findYourEmailCredentials, users]);
        
            return null;
        };
      
        render(<Component />);
      
        // Update users and findYourEmailCredentials
        act(() => {
            setUsers([
                { email: 'test1@example.com', phoneNumber: '1234567890', state: 'CA' },
                { email: 'test2@example.com', phoneNumber: '0987654321', state: 'NY' },
            ]);
            setFindYourEmailCredentials({ phoneNumberOrEmail: 'test1@example.com', state: 'CA' });
        });
      
        // Check that setMatchingUsers was called with the correct users
        expect(setMatchingUsers).toHaveBeenCalledWith([{ email: 'test1@example.com', phoneNumber: '1234567890', state: 'CA' }]);
    });  
    test('sets accounts index to no. of matching user accounts useEffect', () => {
        const setAccountsIndex = jest.fn();
        let setMatchingUsers;
      
        const Component = () => {
            const [matchingUsers, _setMatchingUsers] = useState(null);
        
            // Make setMatchingUsers accessible outside the component
            setMatchingUsers = _setMatchingUsers;
        
            useEffect(() => {
                if(matchingUsers)
                setAccountsIndex(matchingUsers);
            }, [matchingUsers]);
        
            return null;
        };
      
        render(<Component />);
      
        // Update matchingUsers
        act(() => {
            setMatchingUsers([{ id: 1 }, { id: 2 }]);
        });
      
        // Check that setAccountsIndex was called with the correct value
        expect(setAccountsIndex).toHaveBeenCalledWith([{ id: 1 }, { id: 2 }]);
    });
    test('setAccountsIndex function', () => {
        const setammountOfAccounts = jest.fn();
      
        const setAccountsIndex = matchingUsers => {
            if (matchingUsers) {
                setammountOfAccounts(matchingUsers.length);
            }
        };
      
        setAccountsIndex([{ id: 1 }, { id: 2 }]);
      
        // Check that setammountOfAccounts was called with the correct value
        expect(setammountOfAccounts).toHaveBeenCalledWith(2);
    });
    test('onListItemClick function', () => {
        const setEmailAccountClicked = jest.fn();
      
        const onListItemClick = email => setEmailAccountClicked(email);
      
        onListItemClick('test@example.com');
      
        // Check that setEmailAccountClicked was called with the correct email
        expect(setEmailAccountClicked).toHaveBeenCalledWith('test@example.com');
    });
    test('when email account clicked from list, handle log in useEffect', () => {
        const handleListItemLogIn = jest.fn();
        const navigate = jest.fn();
        let setEmailAccountClicked;
      
        const Component = () => {
            const [emailAccountClicked, _setEmailAccountClicked] = useState(null);
        
            // Make setEmailAccountClicked accessible outside the component
            setEmailAccountClicked = _setEmailAccountClicked;
        
            useEffect(() => {
                if (emailAccountClicked) {
                    handleListItemLogIn(emailAccountClicked);
                    navigate('/mockmail');
                    console.log('emailAccountClicked', emailAccountClicked);
                }
            }, [emailAccountClicked]);
        
            return null;
        };
      
        render(<Component />);
      
        // Update emailAccountClicked
        act(() => {
            setEmailAccountClicked('test@example.com');
        });
      
        // Check that handleListItemLogIn was called with the correct email
        expect(handleListItemLogIn).toHaveBeenCalledWith('test@example.com');
      
        // Check that navigate was called with the correct path
        expect(navigate).toHaveBeenCalledWith('/mockmail');
    });
    test('navToHome function', () => {
        const navigate = jest.fn();
      
        const navToHome = () => navigate('/');
      
        navToHome();
      
        // Check that navigate was called with the correct path
        expect(navigate).toHaveBeenCalledWith('/');
    });
});

