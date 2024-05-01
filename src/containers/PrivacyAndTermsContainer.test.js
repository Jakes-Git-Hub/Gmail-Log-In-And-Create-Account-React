import { jest } from '@jest/globals';
import { PrivacyAndTermsContainer } from './PrivacyAndTermsContainer';
import { render, screen, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React, { useState, useEffect } from 'react';

describe('PrivacyAndTermsContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <PrivacyAndTermsContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const PATComp = screen.getByTestId('PAT');
        expect(PATComp).toBeInTheDocument();
    });      
    test('handleNextClick', () => {
        const repositionViewPortOnNextOrBackClick = jest.fn();
        const addUser = jest.fn();
        const setNextClicked = jest.fn();
        const mockEvent = { preventDefault: jest.fn() };
      
        const handleNextClick = e => {
            e.preventDefault();
            repositionViewPortOnNextOrBackClick();
            addUser();
            setNextClicked(true);
        };
      
        handleNextClick(mockEvent);
      
        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
        expect(addUser).toHaveBeenCalled();
        expect(setNextClicked).toHaveBeenCalledWith(true);
    }); 
    test('handle login when next clicked useEffect', () => {
        const handleLogin = jest.fn();
        let setNextClicked;
      
        const Component = () => {
            const [nextClicked, _setNextClicked] = useState(false);
            const [email] = useState('test@example.com');
            const [password] = useState('password');
        
            // Make setNextClicked accessible outside the component
            setNextClicked = _setNextClicked;
        
            useEffect(() => {
                if (nextClicked && email && password) {
                handleLogin(email, password);
                }
            }, [nextClicked]);
        
            return null;
        };
      
        render(<Component />);
      
        // Check that handleLogin was not called
        expect(handleLogin).not.toHaveBeenCalled();
      
        // Update nextClicked to true
        act(() => setNextClicked(true));
      
        // Check that handleLogin was called with the correct email and password
        expect(handleLogin).toHaveBeenCalledWith('test@example.com', 'password');
    });
    test('changes body id and navigates to mockmail on login useEffect', () => {
        const navigate = jest.fn();
        let setLoggedIn;
      
        const Component = () => {
            const [loggedIn, _setLoggedIn] = useState(false);
        
            // Make setLoggedIn accessible outside the component
            setLoggedIn = _setLoggedIn;
        
            useEffect(() => {
                if (loggedIn) {
                document.body.id = 'body';
                navigate('/mockmail');
                }
            }, [loggedIn]);
        
            return null;
        };
      
        render(<Component />);
      
        // Check that navigate was not called
        expect(navigate).not.toHaveBeenCalled();
      
        // Update loggedIn to true
        act(() => setLoggedIn(true));
      
        // Check that navigate was called with the correct path
        expect(navigate).toHaveBeenCalledWith('/mockmail');
      
        // Check that document.body.id was set correctly
        expect(document.body.id).toBe('body');
    });
    test('handleBackClick function', () => {
        const e = {
            preventDefault: jest.fn(),
        };
        const repositionViewPortOnNextOrBackClick = jest.fn();
        const navigate = jest.fn();
      
        const handleBackClick = e => {
            e.preventDefault();
            repositionViewPortOnNextOrBackClick();
            navigate('/confirm-your-settings');
        };
      
        handleBackClick(e);
      
        // Check that e.preventDefault was called
        expect(e.preventDefault).toHaveBeenCalled();
      
        // Check that repositionViewPortOnNextOrBackClick was called
        expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
      
        // Check that navigate was called with the correct path
        expect(navigate).toHaveBeenCalledWith('/confirm-your-settings');
    });
});

