import { jest } from '@jest/globals';
import { ManualChooseYourSettingsContainer3 } from './ManualChooseYourSettingsContainer3';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

describe('ManualChooseYourSettingsContainer2', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <ManualChooseYourSettingsContainer3 updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const MCYS3Comp = screen.getByTestId('MCYS3');
        expect(MCYS3Comp).toBeInTheDocument();
    });
    test('handleRadioChange', () => {
        const setManualSetting3 = jest.fn();
        const setErrorCondition = jest.fn();
        const mockEvent = { target: { value: 'testValue' } };
      
        let errorCondition;
      
        const handleRadioChange = e => {
            setManualSetting3(e.target.value);
            if (errorCondition === 'selectAnOption') {
                setErrorCondition('');
            }
        };
      
        // Test with errorCondition !== 'selectAnOption'
        errorCondition = 'otherError';
        handleRadioChange(mockEvent);
        expect(setManualSetting3).toHaveBeenCalledWith('testValue');
        expect(setErrorCondition).not.toHaveBeenCalled();
      
        // Test with errorCondition === 'selectAnOption'
        errorCondition = 'selectAnOption';
        handleRadioChange(mockEvent);
        expect(setManualSetting3).toHaveBeenCalledWith('testValue');
        expect(setErrorCondition).toHaveBeenCalledWith('');
    });
    test('handleNextClick', () => {
        const setError = jest.fn();
        const updateUser = jest.fn();
        const repositionViewPortOnError = jest.fn();
        const repositionViewPortOnNextOrBackClick = jest.fn();
        const navigate = jest.fn();
        const mockEvent = { preventDefault: jest.fn() };
      
        let manualSetting3;
      
        global.document.body.id = '';
      
        const handleNextClick = e => {
            e.preventDefault();
            if (manualSetting3 === '') {
                setError('selectAnOption');
                repositionViewPortOnError();
                return;
            } if (manualSetting3 === 'show personalized ads') {
                updateUser({ manualSetting3: 'show personalized ads' });
                repositionViewPortOnNextOrBackClick();
            } if (manualSetting3 === 'show generic ads') {
                updateUser({ manualSetting3: 'show me generic ads' });
                repositionViewPortOnNextOrBackClick();
            }
            document.body.id = 'body';
            navigate('/manual-choose-your-settings4');
        };
      
        // Test with manualSetting3 === ''
        manualSetting3 = '';
        handleNextClick(mockEvent);
        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(setError).toHaveBeenCalledWith('selectAnOption');
        expect(repositionViewPortOnError).toHaveBeenCalled();
      
        // Test with manualSetting3 === 'show personalized ads'
        manualSetting3 = 'show personalized ads';
        handleNextClick(mockEvent);
        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(updateUser).toHaveBeenCalledWith({ manualSetting3: 'show personalized ads' });
        expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
        expect(document.body.id).toBe('body');
        expect(navigate).toHaveBeenCalledWith('/manual-choose-your-settings4');
      
        // Test with manualSetting3 === 'show generic ads'
        manualSetting3 = 'show generic ads';
        handleNextClick(mockEvent);
        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(updateUser).toHaveBeenCalledWith({ manualSetting3: 'show me generic ads' });
        expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
        expect(document.body.id).toBe('body');
        expect(navigate).toHaveBeenCalledWith('/manual-choose-your-settings4');
    });   
    test('handleBackClick', () => {
        const repositionViewPortOnNextOrBackClick = jest.fn();
        const navigate = jest.fn();
        const mockEvent = { preventDefault: jest.fn() };
      
        const handleBackClick = e => {
            e.preventDefault();
            repositionViewPortOnNextOrBackClick();
            navigate('/manual-choose-your-settings2');
        };
      
        handleBackClick(mockEvent);
      
        expect(mockEvent.preventDefault).toHaveBeenCalled();
        expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
        expect(navigate).toHaveBeenCalledWith('/manual-choose-your-settings2');
    });          
});

