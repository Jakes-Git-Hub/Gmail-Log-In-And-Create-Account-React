import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; // Import necessary functions
import LanguageChanger from './LanguageChangerComponent';
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

describe('LanguageChanger component', () => {
  test('renders without crashing', () => {
    render(<LanguageChanger initialLanguage={mockUserData.language} onChange={mockOnChange} text={mockText} />);
    const dropDownComponent = screen.getByTestId('language-changer-dropdown');
    expect(dropDownComponent).toBeInTheDocument();
  });

  test.each(languageOptions)('selectedValue should be a valid language option or en-GB', ({ value }) => {
    render(<LanguageChanger initialLanguage={value} onChange={mockOnChange} text={mockText} />);
    let selectElement = screen.getByTestId('language-selector-dropdown');
    const expectedValue = textData.LanguageChanger.help[value] ? value : 'en-GB';
    expect(selectElement.value).toBe(expectedValue);
  });

  test('changes language selection and calls onChange', () => {
    const mockOnChange = jest.fn();
    render(<LanguageChanger onChange={mockOnChange} text={mockText} />);
    const select = screen.getByTestId('language-selector-dropdown');
    fireEvent.change(select, { target: { value: 'es-ES' } });
    expect(select.value).toBe('es-ES');
    expect(mockOnChange).toHaveBeenCalledWith('es-ES');
  });

  test('handleChange should update selectedValue and call onChange', () => { 
    const valueToSet = 'es-ES';
    render(<LanguageChanger initialLanguage={mockUserData.language} onChange={mockOnChange} text={mockText} />);
    const select = screen.getByTestId('language-selector-dropdown');
    fireEvent.change(select, { target: { value: valueToSet } });
    expect(select.value).toBe(valueToSet); 
    expect(mockOnChange).toHaveBeenCalledWith(valueToSet); 
  });

  test('toggles menu open state when clicked', () => {
    render(<LanguageChanger initialLanguage={mockUserData.language} onChange={mockOnChange} text={mockText} />);
    const dropdown = screen.getByTestId('language-changer-dropdown');
    expect(dropdown).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(dropdown);
    expect(dropdown).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(dropdown);
    expect(dropdown).toHaveAttribute('aria-expanded', 'false');
  });

  test('opens link in new tab on help button click', () => {
    const mockWindowOpen = jest.spyOn(window, 'open');
    render(<LanguageChanger text={mockText} />);
    const helpButton = screen.getByText('Help');
    fireEvent.click(helpButton);
    expect(mockWindowOpen).toHaveBeenCalledWith('https://support.google.com/accounts?hl=en-GB&visit_id=638451420796909083-2011793641&rd=2&p=account_iph#topic=3382296', '_blank');
  });

  test('opens link in new tab on privacy button click', () => {
    const mockWindowOpen = jest.spyOn(window, 'open');
    render(<LanguageChanger text={mockText} />);
    const privacyButton = screen.getByText('Privacy');
    fireEvent.click(privacyButton);
    expect(mockWindowOpen).toHaveBeenCalledWith('https://policies.google.com/privacy?gl=GB&hl=en-GB', '_blank');
  });

  test('opens link in new tab on terms button click', () => {
    const mockWindowOpen = jest.spyOn(window, 'open');
    render(<LanguageChanger text={mockText} />);
    const termsButton = screen.getByText('Terms');
    fireEvent.click(termsButton);
    expect(mockWindowOpen).toHaveBeenCalledWith('https://policies.google.com/terms?gl=GB&hl=en-GB', '_blank');
  });
});
