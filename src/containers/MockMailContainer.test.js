import { MockMailContainer } from './MockMailContainer';
import { render, screen, cleanup, } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import React, {useEffect} from 'react';

describe('ManualChooseYourSettingsContainer2', () => {
    const mockcurrentLoggedInUser = { id: 0, email: 'jacmatthews7@gmail.com', password: '1234', firstName: 'Jacob', lastName: 'Matthews', phoneNumber: '07720761143', profileCircleColor: 'blue', day: '28', month: 'April', year:'1993', gender: 'Male', country: 'England', };
    const loggedIn = true;
    it('renders without crashing', () => {
        render(
            <Router>
                <MockMailContainer currentLoggedInUser={mockcurrentLoggedInUser} loggedIn={loggedIn}></MockMailContainer>
            </Router>
        );
        const MMComp = screen.getByTestId('MM');
        expect(MMComp).toBeInTheDocument();
    });
    test('useEffect hook - changes body id', () => {
        const Component = () => {
            useEffect(() => {
                document.body.id = 'body-mock-mail';
                return () => {
                document.body.id = 'body';
                };
            }, []);
        
            return null;
        };
      
        const { unmount } = render(<Component />);
      
        // Check that document.body.id is 'body-mock-mail'
        expect(document.body.id).toBe('body-mock-mail');
      
        // Unmount the component
        unmount();
      
        // Check that document.body.id is 'body'
        expect(document.body.id).toBe('body');
    });
      
      // Call cleanup after each test
      afterEach(cleanup);     
});

