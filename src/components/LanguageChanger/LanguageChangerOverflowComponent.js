import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import languageOptions from '../../utils/languageOptions';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FooterGreyButton from '../buttons/FooterGreyButton';
const LanguageChangerOverflow = ({ onChange, initialLanguage, text }) => {
    const [selectedValue, setSelectedValue] = useState(initialLanguage || 'en-GB');
    const [open, setOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState('500px');
    // Handle Language Selection
    useEffect(() => {
        if (initialLanguage) {
            setSelectedValue(initialLanguage);
            onChange(initialLanguage);
        }
    }, [initialLanguage, onChange]);
    const handleChange = (event) => {
        const value = event.target.value;
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
    return (_jsxs("div", { id: 'language-changer-footer-overflow', children: [_jsx(FormControl, { role: 'combobox', onClick: toggleMenu, id: 'language-changer-dropdown', "aria-expanded": open, "data-testid": 'language-changer-dropdown', sx: {
                    backgroundColor: open ? '#eeeeee' : '',
                    borderRadius: '4px',
                }, children: _jsx(Select, { open: open, "aria-expanded": open, onClose: () => setOpen(false), onOpen: () => setOpen(true), onChange: handleChange, displayEmpty: true, inputProps: {
                        'data-testid': 'language-selector-dropdown',
                    }, "aria-label": 'Select text language', value: selectedValue, MenuProps: {
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
                    }, sx: {
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
                    }, children: customOptions.map((option) => (_jsx(MenuItem, { value: option.value, sx: {
                            fontSize: '12px',
                            padding: '14px',
                            color: 'rgb(60,64,67)',
                        }, children: option.label }, option.value))) }) }), _jsxs("nav", { id: 'footer-trio-buttons-container', "aria-label": 'Footer links', role: 'navigation', children: [_jsx(FooterGreyButton, { role: 'button', onClick: handleHelpButtonClicked, children: text.LanguageChanger.help[selectedValue] }), _jsx(FooterGreyButton, { role: 'button', onClick: handlePrivacyButtonClicked, children: text.LanguageChanger.privacy[selectedValue] }), _jsx(FooterGreyButton, { role: 'button', onClick: handleTermsButtonClicked, children: text.LanguageChanger.terms[selectedValue] })] })] }));
};
export default LanguageChangerOverflow;
