import React, { useState, useEffect } from 'react';
import languageOptions from '../../utils/languageOptions';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function LanguageChanger({ onChange, initialLanguage }) {
    const [selectedValue, setSelectedValue] = useState(initialLanguage || 'en-GB');

    useEffect(() => {
        if (initialLanguage) {
            setSelectedValue(initialLanguage);
            onChange(initialLanguage);
        }
    }, [initialLanguage, onChange]);

    const customOptions = languageOptions.map((language) => ({
        value: language.value,
        label: language.label
    }));

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        onChange(value);
        console.log("value:", value);
    };

    return (

    <div id='language-changer-footer'>

        <FormControl id='language-changer-dropdown'>
            <Select
                onChange={handleChange}
                displayEmpty={true}
                value={selectedValue}
                sx={{
                    '& .MuiSelect-icon': {
                        color: '#202124',
                    },
                    fontSize: '12px',
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                    },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                    },
                    paddingRight: '20px',
                }}
            >
                <MenuItem 
                    value=""
                    disabled
                    style={{ display:  'none' }}                    
                >
                    English (United Kingdom)
                </MenuItem>

                {customOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
                
            </Select>
        </FormControl>

    </div>
        
    );
}

export default LanguageChanger;
