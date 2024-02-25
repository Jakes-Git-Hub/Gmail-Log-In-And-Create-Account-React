import React, { useState, useEffect } from 'react';
import languageOptions from '../../utils/languageOptions';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function LanguageChanger({ onChange }) {

    const [selectedValue, setSelectedValue] = useState('');

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

    useEffect(() => {
        console.log("selectedValue:", selectedValue);
    }, [selectedValue]);

    return (

        <FormControl className='language-changer'>
            <InputLabel id="language-changer-label">Name</InputLabel>
            <Select
                onChange={handleChange}
                displayEmpty
                value={selectedValue}
                style={{ minWidth: 'auto' }} // Allow the dropdown width to adjust dynamically
            >
                {customOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        
    );
}

export default LanguageChanger;
