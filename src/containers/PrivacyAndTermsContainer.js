import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivacyAndTermsComponent } from '../components/PrivacyAndTermsComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';

export const PrivacyAndTermsContainer = ({ userData, updateUser, text, addUser, handleLogin, loggedIn, }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [email, setEmail] = useState(userData.email);
    const [password, setPassword] = useState(userData.password);
    const [nextClicked, setNextClicked] = useState(false);
    const [tryedLogin, setTryedLogin] = useState(false);

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
        return () => {
            document.body.id = 'body';
        };
    }, []);

// Change Language

    const handleLanguageSelection = chosenLanguage => {
        window.scrollTo({
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
        updateUser({ language: chosenLanguage })
    };

// Handle Next & Back Click

    const handleNextClick = e => {
        e.preventDefault();
        repositionViewPortOnNextOrBackClick();
        if (email && password) {
            addUser();
        }
        setNextClicked(true);
    };

    useEffect(() => {
        if (nextClicked) {
            setTryedLogin(true)
            if (email && password) {
                handleLogin(email, password);
            };
        }
    }, [nextClicked]);

    useEffect(() => {
        if (loggedIn) {
            document.body.id = 'body';
            navigate('/mockmail');
            console.log('User Logged In');
        } else if (tryedLogin) {
            navigate('/create-account');
            console.log('User not Logged In');
        }   
    }, [tryedLogin]);

    const handleBackClick = e => {
        e.preventDefault();
        repositionViewPortOnNextOrBackClick();
        navigate('/confirm-your-settings');
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
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                handleBackClick={handleBackClick}
            />
        </>
    );
};
