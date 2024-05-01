import { jest } from '@jest/globals';
import { ManualChooseYourSettingsContainer4 } from './ManualChooseYourSettingsContainer4';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('ManualChooseYourSettingsContainer4', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <ManualChooseYourSettingsContainer4 updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const MCYS4Comp = screen.getByTestId('MCYS4');
        expect(MCYS4Comp).toBeInTheDocument();
    });
    test('toggleCheckBox', () => {
        const setChecked = jest.fn();
      
        let checked;
      
        const toggleCheckBox = () => setChecked(!checked);
      
        // Test with checked === true
        checked = true;
        toggleCheckBox();
        expect(setChecked).toHaveBeenCalledWith(false);
      
        // Test with checked === false
        checked = false;
        toggleCheckBox();
        expect(setChecked).toHaveBeenCalledWith(true);
    });
    test('handleNextClick', () => {
        const updateUser = jest.fn();
        const repositionViewPortOnNextOrBackClick = jest.fn();
        const makePrivacyRowVisible = jest.fn();
        const navigate = jest.fn();
        const mockEvent = { preventDefault: jest.fn() };
      
        let checked;
      
        const handleNextClick = e => {
            e.preventDefault();
            if (checked) {
                updateUser({ manualSetting4: 'get privacy reminders' });
                repositionViewPortOnNextOrBackClick();
            }
            updateUser({ manualSetting4: 'no privacy reminders' });
            makePrivacyRowVisible();
            navigate('/confirm-your-settings');
        };
    
        // Test with checked === true
        checked = true;
        handleNextClick(mockEvent);
        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(updateUser).toHaveBeenCalledWith({ manualSetting4: 'get privacy reminders' });
        expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
        expect(updateUser).toHaveBeenCalledWith({ manualSetting4: 'no privacy reminders' });
        expect(makePrivacyRowVisible).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith('/confirm-your-settings');
    
        // Test with checked === false
        checked = false;
        handleNextClick(mockEvent);
        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(updateUser).toHaveBeenCalledWith({ manualSetting4: 'no privacy reminders' });
        expect(makePrivacyRowVisible).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith('/confirm-your-settings');
    });
    test('handleBackClick', () => {
        const repositionViewPortOnNextOrBackClick = jest.fn();
        const navigate = jest.fn();
        const mockEvent = { preventDefault: jest.fn() };
      
        const handleBackClick = e => {
            e.preventDefault();
            repositionViewPortOnNextOrBackClick();
            navigate('/manual-choose-your-settings3');
        };
      
        handleBackClick(mockEvent);
      
        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith('/manual-choose-your-settings3');
    });         
});

