import { render, fireEvent } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { useSetFilteredCountries } from './useSetFilteredCountries';

// Create a test component that uses the custom hook
function TestComponent() {
  const [translatedCountries, setTranslatedCountries] = useState(['Country1', 'Country2']);
  const [filteredCountries, setFilteredCountries] = useState([]);
  useSetFilteredCountries(setFilteredCountries, translatedCountries);

  // Log filteredCountries whenever they change
  useEffect(() => {
    console.log(filteredCountries);
  }, [filteredCountries]);

  return (
    <button onClick={() => setTranslatedCountries(['Country3', 'Country4'])}>Change Countries</button>
  );
}

describe('useSetFilteredCountries', () => {
  it('updates filteredCountries when translatedCountries changes', () => {
    const { getByText } = render(<TestComponent />);
    const consoleSpy = jest.spyOn(console, 'log');

    fireEvent.click(getByText('Change Countries'));

    expect(consoleSpy).toHaveBeenCalledWith(['Country3', 'Country4']);
  });
});