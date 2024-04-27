import { jest } from '@jest/globals';
import { ChooseYourSettingsContainer } from './ChooseYourSettingsContainer';
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';

describe('ChooseYourSettingsContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    const setSetting = jest.fn();
    const setErrorCondition = jest.fn();
    let errorCondition;
    let error;
    const setError = jest.fn();
    const e = {
        target: {
            value: 'express',
        },
        preventDefault: jest.fn(),
    };
    const updateUser = jest.fn();
    const setting = 'express';
    const navigate = jest.fn();
    it('renders without crashing', () => {
        render(
            <Router>
                <ChooseYourSettingsContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const CYGAComp = screen.getByTestId('CYS');
        expect(CYGAComp).toBeInTheDocument();
    });
    describe('handleRadioChange', () => {
        it('sets setting choice and turns off error', () => {
            const handleRadioChange = jest.fn(e => {
                setSetting(e.target.value);
                if (errorCondition === 'selectAnOption') {
                    setErrorCondition('');
                }
            });
            
            handleRadioChange(e);

            expect(handleRadioChange).toHaveBeenCalledWith(e);
            expect(setSetting).toHaveBeenCalledWith(e.target.value);
            expect(setErrorCondition).not.toHaveBeenCalled();
        });
    });
    describe('setError', () => {
        it('sets error', () => {
            const setError = jest.fn(error => setErrorCondition(error));

            setError(error);

            expect(setError).toHaveBeenCalledWith(error);
            expect(setErrorCondition).toHaveBeenCalledWith(error);
        });
    });
    describe('handleNextClick', () => {
        it('saves setting type and navigates onwards or sets error if no selection made', () => {
            const handleNextClick = jest.fn(e => {
                e.preventDefault();
                if (setting === '') {
                    setError('selectAnOption');
                } if (setting === 'express') {
                    updateUser({ settings: 'express' });
                    navigate('/express-choose-your-settings')
                } if (setting === 'manual') {
                    updateUser({ settings: 'manual' });
                    navigate('/manual-choose-your-settings')
                }
            });

            handleNextClick(e);

            expect(handleNextClick).toHaveBeenCalledWith(e);
            expect(e.preventDefault).toHaveBeenCalled();
            expect(setError).not.toHaveBeenCalled();
            expect(updateUser).toHaveBeenCalledWith({ settings: 'express' });
            expect(navigate).toHaveBeenCalledWith('/express-choose-your-settings');
        });
    });
});

