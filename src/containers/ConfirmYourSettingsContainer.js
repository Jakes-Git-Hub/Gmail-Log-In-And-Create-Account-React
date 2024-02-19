import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ConfirmYourSettingsComponent } from "../components/ConfirmYourSettingsComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";
import errorImage from '../images/Daco_5575399.png';
import useImagePreload from "../hooks/useImagePreload";

export const ConfirmYourSettingsContainer = ({ userData, updateUser, text, showPrivacyRow }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);

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

    useEffect(() => {
        console.log('userData.ManualSetting1:', userData.manualSetting1);
        console.log('userData.ManualSetting2:', userData.manualSetting2);
        console.log('userData.ManualSetting3:', userData.manualSetting3);
        console.log('userData.ManualSetting4:', userData.manualSetting4);
    }, []);

// Add Overflow Body CSS

    useEffect(() => {
        document.body.id = 'body-overflow';
        return () => {
            document.body.id = 'body';
        };
    }, []);

// Change Language

    const handleLanguageSelection = async (e) => {
        e.preventDefault();
        const chosenLanguage = e.target.value;
        updateUser({ language: chosenLanguage })
    };

// Handle Next & Back Click

    const handleNextClick = (e) => {
        e.preventDefault();
        repositionViewPortOnNextOrBackClick();
        navigate("/privacy-and-terms")
    };

    const handleBackClick = (e) => {
        e.preventDefault();
        repositionViewPortOnNextOrBackClick();
        navigate("/manual-choose-your-settings")
    };

    const repositionViewPortOnNextOrBackClick = () => {
        window.scrollTo({
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
    };

    return(
        <>
            <ConfirmYourSettingsComponent
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                isImagePreloaded={isImagePreloaded}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                handleBackClick={handleBackClick}
                showPrivacyRow={showPrivacyRow}
            />
        </>
    );
};
