import { jest } from '@jest/globals';
import { ManualChooseYourSettingsContainer2 } from './ManualChooseYourSettingsContainer2';
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
                <ManualChooseYourSettingsContainer2 updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const MCYS2Comp = screen.getByTestId('MCYS2');
        expect(MCYS2Comp).toBeInTheDocument();
    });
    describe('handleRadioChange', () => {
        it('handles setting choice and nulling error',() => {
            const setManualSetting2 = jest.fn();
            const setErrorCondition = jest.fn();
            const mockEvent = { target: { value: 'testValue' } };

            let errorCondition;

            const handleRadioChange = e => {
                setManualSetting2(e.target.value);
                if (errorCondition === 'selectAnOption') {
                setErrorCondition('');
                }
            };

            // Test with errorCondition !== 'selectAnOption'
            errorCondition = 'otherError';
            handleRadioChange(mockEvent);
            expect(setManualSetting2).toHaveBeenCalledWith('testValue');
            expect(setErrorCondition).not.toHaveBeenCalled();

            // Test with errorCondition === 'selectAnOption'
            errorCondition = 'selectAnOption';
            handleRadioChange(mockEvent);
            expect(setManualSetting2).toHaveBeenCalledWith('testValue');
            expect(setErrorCondition).toHaveBeenCalledWith('');
        });  
    });
    describe('handleNextClick', () => {
        it('handles next click correctly',() => {
            const setError = jest.fn();
            const updateUser = jest.fn();
            const repositionViewPortOnError = jest.fn();
            const repositionViewPortOnNextOrBackClick = jest.fn();
            const navigate = jest.fn();
            const mockEvent = { preventDefault: jest.fn() };

            let manualSetting2;

            const handleNextClick = e => {
                e.preventDefault();
                if (manualSetting2 === '') {
                    setError('selectAnOption');
                    repositionViewPortOnError();
                } if (manualSetting2 === 'keep until delete') {
                    updateUser({ manualSetting2: 'keep until delete' });
                    repositionViewPortOnNextOrBackClick();
                    navigate('/manual-choose-your-settings3')
                } if (manualSetting2 === '36 months or delete') {
                    updateUser({ manualSetting2: '36 months or delete' });
                    repositionViewPortOnNextOrBackClick();
                    navigate('/manual-choose-your-settings3')
                } if (manualSetting2 === 'dont save') {
                    updateUser({ manualSetting2: 'dont save' });
                    repositionViewPortOnNextOrBackClick();
                    navigate('/manual-choose-your-settings3')
                }
            };

            // Test with manualSetting2 === ''
            manualSetting2 = '';
            handleNextClick(mockEvent);
            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(setError).toHaveBeenCalledWith('selectAnOption');
            expect(repositionViewPortOnError).toHaveBeenCalled();

            // Test with manualSetting2 === 'keep until delete'
            manualSetting2 = 'keep until delete';
            handleNextClick(mockEvent);
            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(updateUser).toHaveBeenCalledWith({ manualSetting2: 'keep until delete' });
            expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith('/manual-choose-your-settings3');

            // Test with manualSetting2 === '36 months or delete'
            manualSetting2 = '36 months or delete';
            handleNextClick(mockEvent);
            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(updateUser).toHaveBeenCalledWith({ manualSetting2: '36 months or delete' });
            expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith('/manual-choose-your-settings3');

            // Test with manualSetting2 === 'dont save'
            manualSetting2 = 'dont save';
            handleNextClick(mockEvent);
            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(updateUser).toHaveBeenCalledWith({ manualSetting2: 'dont save' });
            expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith('/manual-choose-your-settings3');
        });  
    });   
    describe('handleBackClick', () => {
        it('handles back click correctly',() => {
            const repositionViewPortOnNextOrBackClick = jest.fn();
            const navigate = jest.fn();
            const mockEvent = { preventDefault: jest.fn() };

            const handleBackClick = e => {
                e.preventDefault();
                repositionViewPortOnNextOrBackClick();
                navigate('/manual-choose-your-settings');
            };

            handleBackClick(mockEvent);

            expect(mockEvent.preventDefault).toHaveBeenCalled();
            expect(repositionViewPortOnNextOrBackClick).toHaveBeenCalled();
            expect(navigate).toHaveBeenCalledWith('/manual-choose-your-settings');
        });  
    });                     
});

