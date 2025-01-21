import React, { useState, useEffect } from 'react';
import languageOptions from '../../utils/languageOptions';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FooterGreyButton from '../buttons/FooterGreyButton';

interface LanguageChangerOverflowProps {
  onChange: (language: string) => void;
  initialLanguage: string;
  text: any;
}

const LanguageChangerOverflow: React.FC<LanguageChangerOverflowProps> = ({ onChange, initialLanguage, text }) => {
  const [selectedValue, setSelectedValue] = useState<string>(initialLanguage || 'en-GB');
  const [open, setOpen] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<string>('500px');

  // Handle Language Selection
  useEffect(() => {
    if (initialLanguage) {
      setSelectedValue(initialLanguage);
      onChange(initialLanguage);
    }
  }, [initialLanguage, onChange]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setSelectedValue(value);
    onChange(value);
    console.log('value:', value);
  };

  // Handles Dynamic Dropdown Menu Height
  const handleResize = () => {
    const dropdown = document.getElementById('language-changer-dropdown');
    if (dropdown) {
      const rect = dropdown.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const dynamicDifference = viewportHeight - rect.top + 33;
      const dynamicMaxheight = viewportHeight - dynamicDifference;
      setMaxHeight(dynamicMaxheight + 'px');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Options
  const customOptions = languageOptions.map((language) => ({
    value: language.value,
    label: language.label,
  }));

  // Menu Open/ Close
  const toggleMenu = () => {
    setOpen(!open);
  };

  // Footer Button Links
  const handleHelpButtonClicked = () => {
    window.open('https://support.google.com/accounts?hl=en-GB&visit_id=638451420796909083-2011793641&rd=2&p=account_iph#topic=3382296', '_blank');
  };

  const handlePrivacyButtonClicked = () => {
    window.open('https://policies.google.com/privacy?gl=GB&hl=en-GB', '_blank');
  };

  const handleTermsButtonClicked = () => {
    window.open('https://policies.google.com/terms?gl=GB&hl=en-GB', '_blank');
  };

  return (
    <div id='language-changer-footer-overflow'>
      <FormControl
        role='combobox'
        onClick={toggleMenu}
        id='language-changer-dropdown'
        aria-expanded={open}
        data-testid='language-changer-dropdown'
        sx={{
          backgroundColor: open ? '#eeeeee' : '',
          borderRadius: '4px',
        }}
      >
        <Select
          open={open}
          aria-expanded={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          onChange={handleChange}
          displayEmpty={true}
          inputProps={{
            'data-testid': 'language-selector-dropdown',
          }}
          aria-label='Select text language'
          value={selectedValue}
          MenuProps={{
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'left',
            },
            transformOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            },
            ...(typeof document !== 'undefined' && { 
                getContentAnchorEl: () => document.getElementById('language-changer-dropdown') 
            }), 
            PaperProps: { 
                style: { 
                    maxHeight: maxHeight,
                },
            },
        }}
          sx={{
            '& .MuiSelect-icon': {
              color: '#202124',
            },
            fontSize: '12px',
            boxShadow: 'none',
            '.MuiOutlinedInput-notchedOutline': {
              border: 0,
            },
            '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              border: 0,
            },
            '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 0,
            },
            paddingRight: '25px',
          }}
        >
          {customOptions.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                fontSize: '12px',
                padding: '14px',
                color: 'rgb(60,64,67)',
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <nav id='footer-trio-buttons-container' aria-label='Footer links' role='navigation'>
        <FooterGreyButton role='button' onClick={handleHelpButtonClicked}>
          {text.LanguageChanger.help[selectedValue]}
        </FooterGreyButton>
        <FooterGreyButton role='button' onClick={handlePrivacyButtonClicked}>
          {text.LanguageChanger.privacy[selectedValue]}
        </FooterGreyButton>
        <FooterGreyButton role='button' onClick={handleTermsButtonClicked}>
          {text.LanguageChanger.terms[selectedValue]}
        </FooterGreyButton>
      </nav>
    </div>
  );
};

export default LanguageChangerOverflow;