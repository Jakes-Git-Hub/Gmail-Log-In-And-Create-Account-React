import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChooseYourSettingsComponent } from '../components/ChooseYourSettingsComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';

export const ChooseYourSettingsContainer = ({ userData, updateUser, text, }) => {

    const [setting, setSetting] = useState('');
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [errorCondition, setErrorCondition] = useState('');

    const navigate = useNavigate();

// Check for Image Loads

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage})

// Handle Radio Change

    const handleRadioChange = e => {
        setSetting(e.target.value);
        if (errorCondition === 'selectAnOption') {
            setErrorCondition('');
        }
    }

// Errors

    const setError = error => setErrorCondition(error);

// Handle Next Click

    const handleNextClick = e => {
        e.preventDefault();
        if (setting === '') {
            setError('selectAnOption');
        } if (setting === 'express') {
            updateUser({ settings: 'express' });
            navigate('/express-choose-your-settings')
        } if (setting === 'manual') {
            updateUser({ settings: 'manual' });
            navigate('/manual-choose-your-settings')
        }
    };

    return(
        <>
            <ChooseYourSettingsComponent
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                setting={setting}
                handleRadioChange={handleRadioChange}
                errorCondition={errorCondition}
                text={text}
                handleLanguageSelection={handleLanguageSelection}
            />
        </>
    );
};
