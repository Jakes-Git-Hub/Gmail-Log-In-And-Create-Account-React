import React, { useEffect } from 'react';
import { render, act } from '@testing-library/react';
import useCountryOption from './useCountryOption';

describe('useCountryOption', () => {
  // Mock data for testing
  const filteredCountries = [
    { svg: 'svg1', name: 'Country 1' },
    { svg: 'svg2', name: 'Country 2' },
  ];

  it('should return selected option when countryFromAPIOrSelection matches filteredCountries', () => {
    let hookResult;

    const Component = ({ countryFromAPIOrSelection, hasSelectedCYNARCountry }) => {
      hookResult = useCountryOption(filteredCountries, countryFromAPIOrSelection, hasSelectedCYNARCountry);
      return null;
    };

    const countryFromAPIOrSelection = { svg: 'svg1', name: 'Country 1' };
    const hasSelectedCYNARCountry = false;

    render(<Component countryFromAPIOrSelection={countryFromAPIOrSelection} hasSelectedCYNARCountry={hasSelectedCYNARCountry} />);

    expect(hookResult).toEqual({
      value: { svg: 'svg1', name: 'Country 1' },
      label: 'Country 1',
    });
  });

  it('should not set selected option if hasSelectedCYNARCountry is true', () => {
    let hookResult;

    const Component = ({ hasSelectedCYNARCountry }) => {
      hookResult = useCountryOption(filteredCountries, { svg: 'svg1', name: 'Country 1' }, hasSelectedCYNARCountry);
      return null;
    };

    render(<Component hasSelectedCYNARCountry={true} />);

    expect(hookResult).toBeNull();
  });
});
