import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { ExpressChooseYourSettingsComponent } from "../components/ExpressChooseYourSettingsComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const ExpressChooseYourSettingsContainer = ({ updateUser }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false); 
    const [showWebAndAppActivityModal, setShowWebAndAppActivityModal] = useState(false);
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

    const openWebAndAppActivityModal = () => {
        setShowWebAndAppActivityModal(true);
    }

    const closeWebAndAppActivityModal = () => {
        setShowWebAndAppActivityModal(false);
    }

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
        />
    </>
 );
};
