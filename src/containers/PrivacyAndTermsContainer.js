import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { PrivacyAndTermsComponent } from "../components/PrivacyAndTermsComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";
import errorImage from '../images/Daco_5575399.png';
import useImagePreload from "../hooks/useImagePreload";

export const PrivacyAndTermsContainer = ({ userData, updateUser, text, addUser, handleLogin, users }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [email, setEmail] = useState(userData.email);
    const [password, setPassword] = useState(userData.password);

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
        addUser();
        handleLogin(email, password);
        document.body.id = 'body';
        navigate("/mockmail");
    };

    useEffect(() => {
        console.log(`email: ${email}`);
        console.log(`password: ${password}`);
    }, []);

    useEffect(() => {
        console.log(`users: ${users}`);
    }, [users]);

    const handleBackClick = (e) => {
        e.preventDefault();
        repositionViewPortOnNextOrBackClick();
        navigate("/confirm-your-settings");
    };

    const repositionViewPortOnNextOrBackClick = () => {
        window.scrollTo({
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
    };

    return(
        <>
            <PrivacyAndTermsComponent
                handleNextClick={handleNextClick}
                isImageLoaded={isImageLoaded}
                userData={userData}
                isImagePreloaded={isImagePreloaded}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                handleBackClick={handleBackClick}
            />
        </>
    );
};
