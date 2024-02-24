import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ChooseYourSettingsComponent } from "../components/ChooseYourSettingsComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";
import errorImage from '../images/Daco_5575399.png';
import useImagePreload from "../hooks/useImagePreload";

export const ChooseYourSettingsContainer = ({ userData, updateUser, text, translationLoading, }) => {

    const [setting, setSetting] = useState("");
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [errorCondition, setErrorCondition] = useState("");

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

// Change Language

    const handleLanguageSelection = (chosenLanguage) => {
        console.log("chosenLanguage:", chosenLanguage.value);
        updateUser({ language: chosenLanguage.value })
    };

// Handle Radio Change

    const handleRadioChange = (e) => {
        setSetting(e.target.value);
        if (errorCondition === "selectAnOption") {
            setErrorCondition("");
        }
    }

// Errors

    const setError = (error) => setErrorCondition(error);

// Handle Next Click

    const handleNextClick = (e) => {
        e.preventDefault();
        if (setting === "") {
            setError("selectAnOption");
        } if (setting === "express") {
            updateUser({ settings: "express" });
            navigate("/express-choose-your-settings")
        } if (setting === "manual") {
            updateUser({ settings: "manual" });
            navigate("/manual-choose-your-settings")
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
                isImagePreloaded={isImagePreloaded}
                text={text}
                handleLanguageSelection={handleLanguageSelection}
                translationLoading={translationLoading}
            />
        </>
    );
};
