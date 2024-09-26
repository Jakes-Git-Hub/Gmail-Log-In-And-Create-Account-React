import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; // Import necessary functions
import LanguageChangerOverflow from './LanguageChangerOverflowComponent';
import '@testing-library/jest-dom';
import languageOptions from '../../utils/languageOptions';
import textData from '../../data/textData';

const mockUserData = { 
  language: 'en-GB' 
};

const mockOnChange = jest.fn();

const mockText = {
  LanguageChanger: {
    help: textData.LanguageChanger.help,
    privacy: textData.LanguageChanger.privacy,
    terms: textData.LanguageChanger.terms,
  }
};

describe('LanguageChangerOverflow component', () => {
  test('renders without crashing', () => {
    render(<LanguageChangerOverflow initialLanguage={mockUserData.language} onChange={mockOnChange} text={mockText} />);
    const dropDownComponent = screen.getByTestId('language-changer-dropdown'); // Assuming this is the data-testid of the intended combobox
    expect(dropDownComponent).toBeInTheDocument();
  });

  test.each(languageOptions)('selectedValue should be a valid language option or en-GB', ({ value }) => {
    render(<LanguageChangerOverflow initialLanguage={value} onChange={mockOnChange} text={mockText} />);
    let selectElement = screen.getByTestId('language-selector-dropdown');
    const expectedValue = textData.LanguageChanger.help[value] ? value : 'en-GB';
    expect(selectElement.value).toBe(expectedValue);
  });

  test('changes language selection and calls onChange', () => {
    const mockOnChange = jest.fn();
    render(<LanguageChangerOverflow onChange={mockOnChange} text={mockText} />);

    const select = screen.getByTestId('language-selector-dropdown');
    fireEvent.change(select, { target: { value: 'es-ES' } });

    expect(select.value).toBe('es-ES');
    expect(mockOnChange).toHaveBeenCalledWith('es-ES');
  });

  test('handleChange should update selectedValue and call onChange', () => { 
    const valueToSet = 'es-ES';
  
    render(<LanguageChangerOverflow initialLanguage={mockUserData.language} onChange={mockOnChange} text={mockText} />);
  
    const select = screen.getByTestId('language-selector-dropdown');
  
    // Simulate the change event
    fireEvent.change(select, { target: { value: valueToSet } });
  
    // Assert that the select element's value has been updated
    expect(select.value).toBe(valueToSet); 
  
    // Assert onChange is called with the correct value
    expect(mockOnChange).toHaveBeenCalledWith(valueToSet); 
  });

  test('toggles menu open state when clicked', () => {
    render(<LanguageChangerOverflow initialLanguage={mockUserData.language} onChange={mockOnChange} text={mockText} />);
    const dropdown = screen.getByTestId('language-changer-dropdown');

    // Initially, the menu should be closed
    expect(dropdown).toHaveAttribute('aria-expanded', 'false');

    // Simulate a click event
    fireEvent.click(dropdown);

    // Now, the menu should be open
    expect(dropdown).toHaveAttribute('aria-expanded', 'true');

    // Simulate another click event
    fireEvent.click(dropdown);

    // The menu should be closed again
    expect(dropdown).toHaveAttribute('aria-expanded', 'false');
  });

  test('opens link in new tab on help button click', () => {
    const mockWindowOpen = jest.spyOn(window, 'open');
    render(<LanguageChangerOverflow text={mockText} />);

    const helpButton = screen.getByText('Help');
    fireEvent.click(helpButton);

    expect(mockWindowOpen).toHaveBeenCalledWith('https://support.google.com/accounts?hl=en-GB&visit_id=638451420796909083-2011793641&rd=2&p=account_iph#topic=3382296', '_blank');
  });

  test('opens link in new tab on privacy button click', () => {
    const mockWindowOpen = jest.spyOn(window, 'open');
    render(<LanguageChangerOverflow text={mockText} />);

    const privacyButton = screen.getByText('Privacy');
    fireEvent.click(privacyButton);

    expect(mockWindowOpen).toHaveBeenCalledWith('https://policies.google.com/privacy?gl=GB&hl=en-GB', '_blank');
  });

  test('opens link in new tab on terms button click', () => {
    const mockWindowOpen = jest.spyOn(window, 'open');
    render(<LanguageChangerOverflow text={mockText} />);

    const termsButton = screen.getByText('Terms');
    fireEvent.click(termsButton);

    expect(mockWindowOpen).toHaveBeenCalledWith('https://policies.google.com/terms?gl=GB&hl=en-GB', '_blank');
  });
});
