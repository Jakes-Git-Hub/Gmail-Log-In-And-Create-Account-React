import { jest } from '@jest/globals';
import { BirthdayAndGenderContainer } from './BirthdayAndGenderContainer';
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';

describe('BirthdayAndGenderContainer', () => {
    it('renders without crashing', () => {
        const mockUpdateUser = jest.fn();
        const mockUserData = {};
        render(
            <Router>
                <BirthdayAndGenderContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const BAGComp = screen.getByTestId('BAGComp');
        expect(BAGComp).toBeInTheDocument();
    });
    
});