import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ExpressChooseYourSettingsComponent } from "../components/ExpressChooseYourSettingsComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";
import { useSpring } from 'react-spring';

export const ExpressChooseYourSettingsContainer = ({ updateUser }) => {

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
        }, 300);
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
        }, 300);
    };

    const openPersonalizedAdsModal = () => setShowPersonalizedAdsModal(true);

    const closePersonalizedAdsModal = () => setShowPersonalizedAdsModal(false);

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
          duration: 300,
          easing: t => t < 0.5 ? 2*t*t : -1+(4-2*t)*t
        }
    });

// Handle Next Click

    const handleNextClick = (e) => {
        e.preventDefault();
        navigate('/add-phone-number'); 
    };

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
        />
    </>
 );
};
