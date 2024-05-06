import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ManualChooseYourSettingsComponent3 } from '../components/ManualChooseYourSettingsComponent3';
import googleWritingSvg from '../images/google-writing-svg.svg';
import { useSpring } from 'react-spring';

export const ManualChooseYourSettingsContainer3 = ({ userData, updateUser, text,   }) => {

    const [manualSetting3, setManualSetting3] = useState('');
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [errorCondition, setErrorCondition] = useState('');
    const [showYouTubeHistoryModal, setShowYouTubeHistoryModal] = useState(false);
    const [modalCondition, setModalCondition] = useState('closed');

    const navigate = useNavigate();

// Check for Image Loads

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

// Add Overflow Body CSS

    useEffect(() => {
        document.body.id = 'body-overflow';
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

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage })

    useEffect(() => {
        window.scrollTo({
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
    }, [userData.language]);

// Handle Radio Change

    const handleRadioChange = e => {
        setManualSetting3(e.target.value);
        if (errorCondition === 'selectAnOption') {
            setErrorCondition('');
        }
    }

// Errors

    const setError = error => setErrorCondition(error);

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

    const handleNextClick = e => {
        e.preventDefault();
        if (manualSetting3 === '') {
            setError('selectAnOption');
            repositionViewPortOnError();
            return;
        } if (manualSetting3 === 'show personalized ads') {
            updateUser({ manualSetting3: 'show personalized ads' });
            repositionViewPortOnNextOrBackClick();
        } if (manualSetting3 === 'show generic ads') {
            updateUser({ manualSetting3: 'show me generic ads' });
            repositionViewPortOnNextOrBackClick();
        }
        document.body.id = 'body';
        navigate('/manual-choose-your-settings4');
    };

    const handleBackClick = e => {
        e.preventDefault();
        repositionViewPortOnNextOrBackClick();
        navigate('/manual-choose-your-settings2')
    };

    const repositionViewPortOnNextOrBackClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto',
        });
    };

    return(
        <>
            <ManualChooseYourSettingsComponent3
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                handleRadioChange={handleRadioChange}
                errorCondition={errorCondition}
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
