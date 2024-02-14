import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ManualChooseYourSettingsComponent4 } from "../components/ManualChooseYourSettingsComponent4";
import googleWritingSvg from "../images/google-writing-svg.svg";
import errorImage from '../images/Daco_5575399.png';
import useImagePreload from "../hooks/useImagePreload";
import { useSpring } from 'react-spring';

export const ManualChooseYourSettingsContainer4 = ({ userData, updateUser, text }) => {

    const [manualSetting3, setManualSetting3] = useState("");
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [errorCondition, setErrorCondition] = useState("");
    const [showYouTubeHistoryModal, setShowYouTubeHistoryModal] = useState(false);
    const [modalCondition, setModalCondition] = useState('closed');

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

// Add Overflow Body CSS

    useEffect(() => {
        // Remove the existing id from the body
        document.body.removeAttribute('id');

        // Add a new id to the body
        document.body.id = 'body-overflow';

        // Remove the new id when the component unmounts
        return () => {
            document.body.removeAttribute('id');
        };
    }, []);

// Handle Modals

    const toggleModalCondition = condition => setModalCondition(condition);

    const openYouTubeHistoryModal = () => {
        setShowYouTubeHistoryModal(true);
        toggleModalCondition('opening');
    };

    const closeYouTubeHistoryModal = () => {
        toggleModalCondition('closing');
        setTimeout(() => {
            toggleModalCondition('closed');
            setShowYouTubeHistoryModal(false);
        }, 275);
    };

    const animationOpen = useSpring({
        transform: modalCondition === 'opening' ? `scale(1)` : `scale(0.85)`,
        config: {
          duration: 175,
          easing: t => t < 0.5 ? 2*t*t : -1+(4-2*t)*t
        }
    });

    const animationClose = useSpring({
        transform: modalCondition === 'closing' ? `scale(0.85)` : `scale(1)`,
        config: {
          duration: 275,
          easing: t => t < 0.5 ? 2*t*t : -1+(4-2*t)*t
        }
    });

// Change Language

    const handleLanguageSelection = async (e) => {
        e.preventDefault();
        const chosenLanguage = e.target.value;
        updateUser({ language: chosenLanguage })
    };

// Handle Radio Change

    const handleRadioChange = (e) => {
        setManualSetting3(e.target.value);
        if (errorCondition === "selectAnOption") {
            setErrorCondition("");
        }
    }

// Errors

    const setError = (error) => setErrorCondition(error);

    const repositionViewPortOnError = () => {
        const settingsContainer = document.getElementById('container-choose-your-settings-m');
        if (settingsContainer) {
            const topOffset = settingsContainer.getBoundingClientRect().top;
            if (topOffset < 0 || topOffset > window.innerHeight) {
                window.scrollTo({
                    top: window.scrollY + topOffset,
                    behavior: 'auto'
                });
            }
        }
    };

// Handle Next & Back Click

    const handleNextClick = (e) => {
        e.preventDefault();
        if (manualSetting3 === "") {
            setError("selectAnOption");
            repositionViewPortOnError();
        } if (manualSetting3 === "show personalized ads") {
            updateUser({ manualSetting3: "show personalized ads" });
            repositionViewPortOnNextOrBackClick();
            navigate("/manual-choose-your-settings3")
        } if (manualSetting3 === "show generic ads") {
            updateUser({ manualSetting3: "show generic ads" });
            repositionViewPortOnNextOrBackClick();
            navigate("/manual-choose-your-settings3")
        }
    };

    const handleBackClick = (e) => {
        e.preventDefault();
        repositionViewPortOnNextOrBackClick();
        navigate("/manual-choose-your-settings2")
    };

    const repositionViewPortOnNextOrBackClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    };

    return(
        <>
            <ManualChooseYourSettingsComponent4
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                handleRadioChange={handleRadioChange}
                errorCondition={errorCondition}
                isImagePreloaded={isImagePreloaded}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                openYouTubeHistoryModal={openYouTubeHistoryModal}
                closeYouTubeHistoryModal={closeYouTubeHistoryModal}
                showYouTubeHistoryModal={showYouTubeHistoryModal}
                modalCondition={modalCondition}
                animationOpen={animationOpen}
                animationClose={animationClose}
                handleBackClick={handleBackClick}
            />
        </>
    );
};
