import { jest } from '@jest/globals';
import { ConfirmYourSettingsContainer } from './ConfirmYourSettingsContainer';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('ConfirmYourSettingsContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <ConfirmYourSettingsContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const CYSComp = screen.getByTestId('CYS');
        expect(CYSComp).toBeInTheDocument();
    });
    describe('handleLanguageSelection', () => {
        it('calls scrollTo and updateUser with correct arguments', () => {
            window.scrollTo = jest.fn();
            const updateUser = jest.fn();

            const handleLanguageSelection = jest.fn(chosenLanguage => {
                window.scrollTo({
                    top: 0, // Scroll to the top of the viewport
                    behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
                });
                updateUser({ language: chosenLanguage });
            });
            
            const chosenLanguage = 'English';
            handleLanguageSelection(chosenLanguage, updateUser);
        
            expect(window.scrollTo).toHaveBeenCalledWith({
                top: 0,
                behavior: 'auto'
            });
        
            expect(updateUser).toHaveBeenCalledWith({ language: chosenLanguage });
        });
    });
    describe('handleNextClick', () => {
        it('calls preventDefault, repositionViewPortOnNextOrBackClick, and navigate', () => {
            const mockEvent = {
            preventDefault: jest.fn(),
            };
        
            const repositionViewPortOnNextOrBackClick = jest.fn();
            const navigate = jest.fn();

            const handleNextClick = jest.fn(e => {
                e.preventDefault();
                repositionViewPortOnNextOrBackClick();
                navigate('/privacy-and-terms')
            });
        
            handleNextClick(mockEvent, repositionViewPortOnNextOrBackClick, navigate);
        
            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith('/privacy-and-terms');
        });
    });
    describe('handleNextClick', () => {
        it('calls preventDefault, repositionViewPortOnNextOrBackClick, and navigate', () => {
            const mockEvent = {
            preventDefault: jest.fn(),
            };
        
            const repositionViewPortOnNextOrBackClick = jest.fn();
            const navigate = jest.fn();

            const handleBackClick = jest.fn(e => {
                e.preventDefault();
                repositionViewPortOnNextOrBackClick();
                navigate('/manual-choose-your-settings')
            });
        
            handleBackClick(mockEvent, repositionViewPortOnNextOrBackClick, navigate);
        
            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith('/manual-choose-your-settings');
        });
    });
    describe('repositionViewPortOnNextOrBackClick', () => {
        it('calls scrollTo with correct arguments', () => {
            window.scrollTo = jest.fn();

            const repositionViewPortOnNextOrBackClick = jest.fn(() => {
                window.scrollTo({
                    top: 0, // Scroll to the top of the viewport
                    behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
                });
            });
        
            repositionViewPortOnNextOrBackClick();
        
            expect(window.scrollTo).toHaveBeenCalledWith({
                top: 0,
                behavior: 'auto'
            });
        });
    });
});


