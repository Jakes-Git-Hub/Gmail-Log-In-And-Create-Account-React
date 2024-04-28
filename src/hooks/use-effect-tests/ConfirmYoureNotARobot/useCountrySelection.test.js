import { render, fireEvent, waitFor } from '@testing-library/react';
import React, { useState } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useCountrySelection } from './useCountrySelection';

describe('useCountrySelection', () => {
  let mockAxios;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  it('updates usersCountryFlagSVG and countryFromAPIOrSelection when hasSelectedCYNARCountry changes', async () => {
    const mockFunction = jest.fn();

    const TestComponent = () => {
      const [userIP, setUserIP] = useState('102.217.238.0');
      const [hasSelectedCYNARCountry, setHasSelectedCYNARCountry] = useState(false);
      const [userData, setUserData] = useState({countryDetails: null});
      const [usersCountryFlagSVG, setUsersCountryFlagSVG] = useState(null);
      const [countryFromAPIOrSelection, setCountryFromAPIOrSelection] = useState(null);
      const [actualSelectedOption, setActualSelectedOption] = useState('');
      const [filteredCountries, setFilteredCountries] = useState([{ name: 'countryFromIP', svg: 'svg' }]);
      const apiKey = process.env.REACT_APP_IPGEOLOCATION_API_KEY;

      useCountrySelection(userIP, hasSelectedCYNARCountry, userData, setUsersCountryFlagSVG, setCountryFromAPIOrSelection, actualSelectedOption, filteredCountries, apiKey, mockFunction);

      return (
        <>
          <button onClick={() => setHasSelectedCYNARCountry(prev => !prev)}>Change Country Selection</button>
          <button onClick={() => setActualSelectedOption('Some Option')}>Set Actual Selected Option</button>
          <div data-testid="flag">{usersCountryFlagSVG}</div>
          <div data-testid="country">{JSON.stringify(countryFromAPIOrSelection)}</div>
        </>
      );
    };
  
    const { getByText, getByTestId } = render(<TestComponent />);
  
    mockAxios.onGet(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEOLOCATION_API_KEY}&ip=102.217.238.0`).reply(200, { country_name: 'countryFromIP' });
  
    fireEvent.click(getByText('Set Actual Selected Option'));
  
    fireEvent.click(getByText('Change Country Selection'));
  
    await waitFor(() => expect(mockAxios.history.get.length).toBe(2));
    await waitFor(() => expect(getByTestId('flag').textContent).toBe('svg'));
    await waitFor(() => expect(getByTestId('country').textContent).toBe(JSON.stringify({ name: 'countryFromIP', svg: 'svg' })));
  });
});