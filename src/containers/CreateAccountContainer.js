import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CreateAccountcomponent } from "../components/CreateAccountComponent";
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";

export const CreateAccountContainer = ({ updateUser, text, translationLoading, }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const navigate = useNavigate();

    // Handle Slow Svg Load

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

    const isImagePreloaded = useImagePreload(errorImage);

// Change Language

    const handleLanguageSelection = (chosenLanguage) => {
        updateUser({ language: chosenLanguage.value })
    };

// First Name

    // Allow Only String Values to be Inputted

    const isLetters = (str) => /^[A-Za-z]*$/.test(str);

    const onFirstNameInputChange = (e,) => {
        const { value } = e.target;
        if (isLetters(value)) {
          setFirstName(value);
        }
    };

// First Name Errors

    const firstNameError = () => setErrorCondition("firstNameEmpty");

    const unsureNameIsCorrect = () => setErrorCondition("areYouSureCorrect");

// Last Name - Allow Only Letters

    const onLastNameInputChange = (e) => {
        if (isLetters(e.target.value)) {
            setLastName(e.target.value);
        }
    };

// Handle Next

    const handleNextClick = () => {
        const firstNameInput = document.getElementById('firstNameInput');

        if (firstName !== '' && firstName.length > 2) {
            setErrorCondition(null);
            updateUser({ firstName: firstName, lastName: lastName });
            navigate('/basic-information');
            console.log(firstName);
        } 

        if (firstName.length > 0 && firstName.length <= 2) {
            unsureNameIsCorrect();
            if (firstNameInput) {
                setIsFirstNameFocused(true); 
                firstNameInput.focus();
             }
        }
        if (firstName === '') {
            firstNameError();
            if (firstNameInput) {
               setIsFirstNameFocused(true); 
               firstNameInput.focus();
            }
        }
    };

    return(
        <>
            <CreateAccountcomponent
                firstName={firstName}
                setFirstName={setFirstName}
                setLastName={setLastName}
                lastName={lastName}
                handleNextClick={handleNextClick}
                isImagePreloaded={isImagePreloaded}
                isFirstNameFocused={isFirstNameFocused}
                setIsFirstNameFocused={setIsFirstNameFocused}
                onFirstNameInputChange={onFirstNameInputChange}
                onLastNameInputChange={onLastNameInputChange}
                errorCondition={errorCondition}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                isImageLoaded={isImageLoaded}
                translationLoading={translationLoading}
            />
        </>
    );
}