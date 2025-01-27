import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChooseYourSettingsComponent } from '../components/ChooseYourSettingsComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';

interface LanguageStrings {
    [key: string]: string;
}

interface NestedTextObject {
    [key: string]: LanguageStrings;
}

interface TextData {
    [key: string]: NestedTextObject;
}

interface ChooseYourSettingsContainerProps {
    userData: {
        language: string;
        settings?: string;
        [key: string]: any;
    };
    updateUser: (data: { [key: string]: any }) => void;
    text: TextData;
}

export const ChooseYourSettingsContainer: React.FC<ChooseYourSettingsContainerProps> = ({ userData, updateUser, text }) => {

    const [setting, setSetting] = useState<string>('');
    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
    const [errorCondition, setErrorCondition] = useState<string>('');

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
    const handleLanguageSelection = (chosenLanguage: string) => updateUser({ language: chosenLanguage });

    // Handle Radio Change
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSetting(e.target.value);
        if (errorCondition === 'selectAnOption') {
            setErrorCondition('');
        }
    };

    // Errors
    const setError = (error: string) => setErrorCondition(error);

    // Handle Next Click
    const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (setting === '') {
            setError('selectAnOption');
        } else if (setting === 'express') {
            updateUser({ settings: 'express' });
            navigate('/express-choose-your-settings');
        } else if (setting === 'manual') {
            updateUser({ settings: 'manual' });
            navigate('/manual-choose-your-settings');
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