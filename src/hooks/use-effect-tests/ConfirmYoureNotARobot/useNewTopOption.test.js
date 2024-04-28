import React from 'react';
import { render } from '@testing-library/react';
import useNewTopOption from './useNewTopOption';

describe('useNewTopOption', () => {
  it('should update top option and filtered countries when selectedOption or countryFromAPIOrSelection changes', () => {
    // Mock data and functions
    const filteredCountries = [
      { svg: 'svg1', name: 'Country 1' },
      { svg: 'svg2', name: 'Country 2' },
    ];
    const countryFromAPIOrSelection = { svg: 'svg1', name: 'Country 1' };
    const selectedOption = null;
    const setTopOption = jest.fn();
    const setFilteredCountries = jest.fn();

    // Simulate a component using the hook
    const Component = () => {
      useNewTopOption(filteredCountries, countryFromAPIOrSelection, selectedOption, setTopOption, setFilteredCountries);
      return null;
    };

    // Render the component
    render(<Component />);

    // Verify setTopOption and setFilteredCountries calls
    expect(setTopOption).toHaveBeenCalledWith({ svg: 'svg1', name: 'Country 1' });
    expect(setFilteredCountries).toHaveBeenCalledWith([{ svg: 'svg1', name: 'Country 1' }, { svg: 'svg2', name: 'Country 2' }]);
  });
});
