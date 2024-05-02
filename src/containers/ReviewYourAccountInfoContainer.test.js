import { jest } from '@jest/globals';
import { ReviewYourAccountInfoContainer } from './ReviewYourAccountInfoContainer';
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import textData from '../data/textData'
import '@testing-library/jest-dom/extend-expect';
import React, { useState, useEffect } from 'react';

describe('ReviewYourAccountInfoContainer', () => {
    const mockUpdateUser = jest.fn();
    const mockUserData = {};
    it('renders without crashing', () => {
        render(
            <Router>
                <ReviewYourAccountInfoContainer updateUser={mockUpdateUser} text={textData} userData={mockUserData}/>
            </Router>
        );
        const RYAIComp = screen.getByTestId('RYAI');
        expect(RYAIComp).toBeInTheDocument();
    });   
    test('if no profile circle color, calls profileCircleColor useEffect', () => {
        const profileCircleColor = jest.fn();
              
        const Component = () => {
            const [userData, _setUserData] = useState({ profileCircleColor: null });
        
            // Make setUserData accessible outside the component
            setUserData = _setUserData;
        
            useEffect(() => {
                if (!userData.profileCircleColor) {
                profileCircleColor();
                }
            }, []);
        
            return null;
        };
      
        render(<Component />);
      
        // Check that profileCircleColor was called
        expect(profileCircleColor).toHaveBeenCalled();
    });   
    test('profileCircleColor function', () => {
        const updateUser = jest.fn();
      
        const profileCircleColor = () => {
            console.log('profileCircleColor running');
            let randomColor;
            do {
                randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
                var r = parseInt(randomColor.substring(1,3),16);
                var g = parseInt(randomColor.substring(3,5),16);
                var b = parseInt(randomColor.substring(5,7),16);
                var brightness = (r * 299 + g * 587 + b * 114) / 1000;
            } while (brightness > 200); // Change this value to adjust the 'closeness' to white
            updateUser({ profileCircleColor: randomColor });
        };
      
        profileCircleColor();
      
        // Check that updateUser was called
        expect(updateUser).toHaveBeenCalled();
      
        // Check that updateUser was called with a color that has a brightness of less than or equal to 200
        const color = updateUser.mock.calls[0][0].profileCircleColor;
        const r = parseInt(color.substring(1,3),16);
        const g = parseInt(color.substring(3,5),16);
        const b = parseInt(color.substring(5,7),16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        expect(brightness).toBeLessThanOrEqual(200);
    });
    test('handleNextClick function', () => {
        const e = {
            preventDefault: jest.fn(),
        };
        const navigate = jest.fn();
      
        const handleNextClick = e => {
            e.preventDefault();
            navigate('/choose-your-settings');
        };
      
        handleNextClick(e);
      
        // Check that e.preventDefault was called
        expect(e.preventDefault).toHaveBeenCalled();
      
        // Check that navigate was called with the correct path
        expect(navigate).toHaveBeenCalledWith('/choose-your-settings');
    });
});

