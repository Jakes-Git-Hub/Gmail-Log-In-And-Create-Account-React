import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ExpressChooseYourSettingsComponent } from "../components/ExpressChooseYourSettingsComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";
import { useSpring } from 'react-spring';

export const ExpressChooseYourSettingsContainer = ({ updateUser, text, hidePrivacyRow }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false); 
    const [showWebAndAppActivityModal, setShowWebAndAppActivityModal] = useState(false);
    const [modalCondition, setModalCondition] = useState('closed');
    const [showYouTubeHistoryModal, setShowYouTubeHistoryModal] = useState(false);
    const [showPersonalizedAdsModal, setShowPersonalizedAdsModal] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);
    
// Change Language

    const handleLanguageSelection = async (e) => {
        e.preventDefault();
        const chosenLanguage = e.target.value;
        updateUser({ language: chosenLanguage })
    };

// Add Overflow Body CSS

    useEffect(() => {
        document.body.id = 'body-overflow';
        return () => {
            document.body.id = 'body';
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

    const openPersonalizedAdsModal = () => {
        setShowPersonalizedAdsModal(true);
        toggleModalCondition('opening');
    };

    const closePersonalizedAdsModal = () => {
        toggleModalCondition('closing');
        setTimeout(() => {
            toggleModalCondition('closed');
            setShowPersonalizedAdsModal(false);
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

// Handle Next Click

    const repositionViewPortOnNextOrBackClick = () => {
        window.scrollTo({
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
    };

    const handleNextClick = (e) => {
        e.preventDefault();
        hidePrivacyRow();
        updateUser({ manualSetting1: 'keep until delete', manualSetting2: 'keep until delete', manualSetting3: 'show personalized ads' });
        repositionViewPortOnNextOrBackClick();
        navigate('/confirm-your-settings'); 
    };

    const handleRejectAllClick = (e) => {
        e.preventDefault();
        navigate('/choose-your-settings');
    }

    return(
        <>
            <ExpressChooseYourSettingsComponent
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                openWebAndAppActivityModal={openWebAndAppActivityModal}
                closeWebAndAppActivityModal={closeWebAndAppActivityModal}
                showWebAndAppActivityModal={showWebAndAppActivityModal}
                modalCondition={modalCondition}
                animationOpen={animationOpen}
                animationClose={animationClose}
                showYouTubeHistoryModal={showYouTubeHistoryModal}
                openYouTubeHistoryModal={openYouTubeHistoryModal}
                closeYouTubeHistoryModal={closeYouTubeHistoryModal}
                openPersonalizedAdsModal={openPersonalizedAdsModal}
                closePersonalizedAdsModal={closePersonalizedAdsModal}
                showPersonalizedAdsModal={showPersonalizedAdsModal}
                text={text}
                handleLanguageSelection={handleLanguageSelection}
                handleRejectAllClick={handleRejectAllClick}
            />
        </>
    );
};
