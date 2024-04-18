import React from 'react';
import { render } from '@testing-library/react';
import { AddRecoveryEmailContainer } from './AddRecoveryEmailContainer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('AddRecoveryEmailContainer', () => {
  const mockUpdateUser = jest.fn();
  const mockText = new Proxy({}, {
    get: () => new Proxy({}, {
      get: () => ({ "en-GB": 'Test String' }),
    }),
  });
  const mockUserData = {
    language: 'en-GB',
  };

  it('renders without crashing', () => {
    render(
      <Router>
        <AddRecoveryEmailContainer updateUser={mockUpdateUser} text={mockText} userData={mockUserData} />
      </Router>
    );
  });

  
});