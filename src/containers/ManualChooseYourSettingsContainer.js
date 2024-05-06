import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ManualChooseYourSettingsComponent } from '../components/ManualChooseYourSettingsComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';
import { useSpring } from 'react-spring';

export const ManualChooseYourSettingsContainer = ({ userData, updateUser, text,  }) => {

    const [manualSetting1, setManualSetting1] = useState('');
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [errorCondition, setErrorCondition] = useState('');
    const [showWebAndAppActivityModal, setShowWebAndAppActivityModal] = useState(false);
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

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage })

    useEffect(() => {
        window.scrollTo({
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
    }, [userData.language]);

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

// Handle Radio Change

    const handleRadioChange = e => {
        setManualSetting1(e.target.value);
        if (errorCondition === 'selectAnOption') {
            setErrorCondition('');
        }
    }

// Error & Scroll to Error

    const setError = error => setErrorCondition(error);

    const repositionViewPortOnError = () => {
        const settingsContainer = document.getElementById('container-choose-your-settings-m');
        if (settingsContainer) {
            const topOffset = settingsContainer.getBoundingClientRect().top;
            if (topOffset < 0 || topOffset > window.innerHeight) {
                // Scroll the viewport to bring the settings container to the top
                window.scrollTo({
                    top: window.scrollY + topOffset,
                    behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
                });
            }
        }
    };

// Handle Next & Back Click

    const handleNextClick = () => {
        if (manualSetting1 === '') {
            setError('selectAnOption');
            repositionViewPortOnError();
        } if (manualSetting1 === 'keep until delete') {
            updateUser({ manualSetting1: 'keep until delete' });
            repositionViewPortOnNextOrBackClick();
            navigate('/manual-choose-your-settings2')
        } if (manualSetting1 === '18 months or delete') {
            updateUser({ manualSetting1: '18 months or delete' });
            repositionViewPortOnNextOrBackClick();
            navigate('/manual-choose-your-settings2')
        } if (manualSetting1 === 'dont save') {
            updateUser({ manualSetting1: 'dont save' });
            repositionViewPortOnNextOrBackClick();
            navigate('/manual-choose-your-settings2')
        }
    };

    const handleBackClick = e => {
        e.preventDefault();
        navigate('/choose-your-settings')
    }

    const repositionViewPortOnNextOrBackClick = () => {
        window.scrollTo({
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
    };

    return(
        <>
            <ManualChooseYourSettingsComponent
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                manualSetting1={manualSetting1}
                handleRadioChange={handleRadioChange}
                errorCondition={errorCondition}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                openWebAndAppActivityModal={openWebAndAppActivityModal}
                closeWebAndAppActivityModal={closeWebAndAppActivityModal}
                showWebAndAppActivityModal={showWebAndAppActivityModal}
                modalCondition={modalCondition}
                animationOpen={animationOpen}
                animationClose={animationClose}
                handleBackClick={handleBackClick}
            />
        </>
    );
};
