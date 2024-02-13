import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { ManualChooseYourSettingsComponent } from "../components/ManualChooseYourSettingsComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";
import errorImage from '../images/Daco_5575399.png';
import useImagePreload from "../hooks/useImagePreload";
import { useSpring } from 'react-spring';

export const ManualChooseYourSettingsContainer = ({ userData, updateUser, text }) => {

    const [manualSetting1, setManualSetting1] = useState("");
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [errorCondition, setErrorCondition] = useState("");
    const [showWebAndAppActivityModal, setShowWebAndAppActivityModal] = useState(false);
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

    useEffect(() => {
        console.log('errorCondition:', errorCondition);
    }, [errorCondition]);

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

    const openWebAndAppActivityModal = () => {
        setShowWebAndAppActivityModal(true);
        toggleModalCondition('opening');
    };

    const closeWebAndAppActivityModal = () => {
        toggleModalCondition('closing');
        setTimeout(() => {
            toggleModalCondition('closed');
            setShowWebAndAppActivityModal(false);
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
        setManualSetting1(e.target.value);
        if (errorCondition === "selectAnOption") {
            setErrorCondition("");
        }
    }

// Error & Scroll to Error

    const setError = error => setErrorCondition(error);

    const scrollRef = useRef(null);

    const scrollToOptions = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

// Handle Next & Back Click

    const handleNextClick = () => {
        if (manualSetting1 === "") {
            setError("selectAnOption");
        } if (manualSetting1 === "keep until delete") {
            updateUser({ manualSetting1: "keep until delete" });
            navigate("/manual-choose-your-settings2")
        } if (manualSetting1 === "18 months or delete") {
            updateUser({ manualSetting1: "18 months or delete" });
            navigate("/manual-choose-your-settings2")
        } if (manualSetting1 === "dont save") {
            updateUser({ manualSetting1: "dont save" });
            navigate("/manual-choose-your-settings2")
        }
    };

    const handleBackClick = (e) => {
        e.preventDefault();
        navigate("/choose-your-settings")
    }

    return(
        <>
            <ManualChooseYourSettingsComponent
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                manualSetting1={manualSetting1}
                handleRadioChange={handleRadioChange}
                errorCondition={errorCondition}
                isImagePreloaded={isImagePreloaded}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                openWebAndAppActivityModal={openWebAndAppActivityModal}
                closeWebAndAppActivityModal={closeWebAndAppActivityModal}
                showWebAndAppActivityModal={showWebAndAppActivityModal}
                modalCondition={modalCondition}
                animationOpen={animationOpen}
                animationClose={animationClose}
                handleBackClick={handleBackClick}
                scrollToOptions={scrollToOptions}
                scrollRef={scrollRef}
            />
        </>
    );
};
