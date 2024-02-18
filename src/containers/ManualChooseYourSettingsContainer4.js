import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ManualChooseYourSettingsComponent4 } from "../components/ManualChooseYourSettingsComponent4";
import googleWritingSvg from "../images/google-writing-svg.svg";
import errorImage from '../images/Daco_5575399.png';
import useImagePreload from "../hooks/useImagePreload";
export const ManualChooseYourSettingsContainer4 = ({ userData, updateUser, text }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();

// Check for Image Loads

    const isImagePreloaded = useImagePreload(errorImage);

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

    const handleLanguageSelection = async (e) => {
        e.preventDefault();
        const chosenLanguage = e.target.value;
        updateUser({ language: chosenLanguage })
    };

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
        navigate("/confirm-your-settings")
    };

    const handleBackClick = (e) => {
        e.preventDefault();
        repositionViewPortOnNextOrBackClick();
        navigate("/manual-choose-your-settings3")
    };

    return(
        <>
            <ManualChooseYourSettingsComponent4
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                isImagePreloaded={isImagePreloaded}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                handleBackClick={handleBackClick}
                toggleCheckBox={toggleCheckBox}
            />
        </>
    );
};
