import React from 'react';
import { render } from '@testing-library/react';
import LanguageChanger from './LanguageChangerComponent';

test('div value is correct', () => {
  const { getByRole } = render(<LanguageChanger />);
  const div = getByRole('div-test');

  // Get the value attribute of the div
  const value = div.getAttribute('value');

  // Assert that the value is as expected
  expect(value).toBe('div');
});
