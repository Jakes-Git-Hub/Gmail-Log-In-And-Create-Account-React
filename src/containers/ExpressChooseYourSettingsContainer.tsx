import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExpressChooseYourSettingsComponent } from '../components/ExpressChooseYourSettingsComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';
import { useSpring } from 'react-spring';

interface LanguageStrings {
    [key: string]: string;
}

interface NestedTextObject {
    [key: string]: LanguageStrings;
}

interface TextData {
    [key: string]: NestedTextObject;
}

interface ExpressChooseYourSettingsContainerProps {
    updateUser: (data: { [key: string]: any }) => void;
    text: TextData;
    hidePrivacyRow: () => void;
    userData: {
        language: string;
        [key: string]: any;
    };
}

export const ExpressChooseYourSettingsContainer: React.FC<ExpressChooseYourSettingsContainerProps> = ({ updateUser, text, hidePrivacyRow, userData }) => {

    const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false); 
    const [showWebAndAppActivityModal, setShowWebAndAppActivityModal] = useState<boolean>(false);
    const [modalCondition, setModalCondition] = useState<string>('closed');
    const [showYouTubeHistoryModal, setShowYouTubeHistoryModal] = useState<boolean>(false);
    const [showPersonalizedAdsModal, setShowPersonalizedAdsModal] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);
    
    // Change Language
    const handleLanguageSelection = (chosenLanguage: string) => {
        window.scrollTo({
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
        updateUser({ language: chosenLanguage });
    };

    // Add Overflow Body CSS
    useEffect(() => {
        document.body.id = 'body-overflow';
        return () => {
            document.body.id = 'body';
        };
    }, []);

    // Handle Modals
    const toggleModalCondition = (condition: string) => setModalCondition(condition);

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

    const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        hidePrivacyRow();
        updateUser({ manualSetting1: 'keep until delete', manualSetting2: 'keep until delete', manualSetting3: 'show personalized ads' });
        repositionViewPortOnNextOrBackClick();
        navigate('/confirm-your-settings'); 
    };

    const handleRejectAllClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/choose-your-settings');
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
                openPersonalizedAdsModal={openPersonalizedAdsModal}
                closePersonalizedAdsModal={closePersonalizedAdsModal}
                showPersonalizedAdsModal={showPersonalizedAdsModal}
                text={text}
                handleLanguageSelection={handleLanguageSelection}
                handleRejectAllClick={handleRejectAllClick}
                userData={userData}
            />
        </>
    );
};