import { render, fireEvent } from '@testing-library/react';
import React, { useState } from 'react';
import { useHandleLanguageSelectionEffectHook } from './useHandleLanguageSelectionEffectHook';

// Create a test component that uses the custom hook
function TestComponent() {
  const [language, setLanguage] = useState('English');
  useHandleLanguageSelectionEffectHook(() => console.log('Language selected'), { language });

  return (
    <button onClick={() => setLanguage('Spanish')}>Change Language</button>
  );
}

describe('useHandleLanguageSelectionEffectHook', () => {
  it('calls handleLanguageSelection when button is clicked', () => {
    const { getByText } = render(<TestComponent />);
    const consoleSpy = jest.spyOn(console, 'log');

    fireEvent.click(getByText('Change Language'));

    expect(consoleSpy).toHaveBeenCalledWith('Language selected');
  });
});