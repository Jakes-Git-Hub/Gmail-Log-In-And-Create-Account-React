import { jest } from '@jest/globals';
import { ConfirmYoureNotARobotContainer } from './ConfirmYoureNotARobotContainer';
import { render, screen, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';

describe('ConfirmYoureNotARobotContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <ConfirmYoureNotARobotContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const CYNARComp = screen.getByTestId('CYNAR');
        expect(CYNARComp).toBeInTheDocument();
    });
    it('sets filteredCountries with translatedCountries', () => {
        render(
            <Router>
                <ConfirmYoureNotARobotContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );

        expect(setFilteredCountries).toHaveBeenCalledWith(translatedCountries);
    });
});
