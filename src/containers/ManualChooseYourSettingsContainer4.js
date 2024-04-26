import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ManualChooseYourSettingsComponent4 } from '../components/ManualChooseYourSettingsComponent4';
import googleWritingSvg from '../images/google-writing-svg.svg';


export const ManualChooseYourSettingsContainer4 = ({ userData, updateUser, text, makePrivacyRowVisible,   }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();

// Check for Image Loads

    

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

// Check Box

    const toggleCheckBox = () => {
        setChecked(!checked);
    };

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage})

    useEffect(() => {
        window.scrollTo({
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
    }, [userData.language]);

// Handle Next & Back Click

    const repositionViewPortOnNextOrBackClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    };

    const handleNextClick = (e) => {
        e.preventDefault();
        if (checked) {
            updateUser({ manualSetting4: 'get privacy reminders' });
            repositionViewPortOnNextOrBackClick();
        }
        updateUser({ manualSetting4: 'no privacy reminders' });
        makePrivacyRowVisible();
        navigate('/confirm-your-settings')
    };

    const handleBackClick = (e) => {
        e.preventDefault();
        repositionViewPortOnNextOrBackClick();
        navigate('/manual-choose-your-settings3')
    };

    return(
        <>
            <ManualChooseYourSettingsComponent4
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                handleBackClick={handleBackClick}
                toggleCheckBox={toggleCheckBox}
                
            />
        </>
    );
};
