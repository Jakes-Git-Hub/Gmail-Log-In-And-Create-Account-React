import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CreateAccountcomponent } from "../components/CreateAccountComponent";
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import axios from 'axios';

export const CreateAccountContainer = ({ updateUser, userData }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
    const [errorCondition, setErrorCondition] = useState(null);
    const [text, setText] = useState({
        h1: 'Create a Google Account',
        h2: 'Enter your name',
        firstName: 'First name',
        lastName: 'Last name (optional)',
        next: 'Next',
    });
    const [language, setLanguage] = useState(userData.language ? userData.language : 'en');

    const googleAPIKey = 'AIzaSyAnvQnBbhJ9H6qMEnyo-i0yxoj1w_cmrWI';

// Change Language

    useEffect(() => {
        if (userData.language) {
            handleLanguageSelection();
        }
    }, []);

    const handleLanguageSelection = async (e) => {
        let chosenLanguage;
        if (e) {
            e.preventDefault();
            chosenLanguage = e.target.value;
        } else {
            chosenLanguage = userData.language;
        }

        // Translate each text in the 'text' object
        const translatedText = {};
        for (const key in text) {
            const translation = await changeLanguageAndTranslate(text[key], chosenLanguage);
            translatedText[key] = translation;
        }
        
        // Update the 'text' state with translated text
        setText(translatedText);
    };

    const changeLanguageAndTranslate = async (text, chosenLanguage) => {
        setLanguage(chosenLanguage);
        updateUser({ language: chosenLanguage })
        try {
            const res = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${googleAPIKey}`, {
                q: text,
                target: chosenLanguage,
            });
            return res.data.data.translations[0].translatedText;
        } catch (error) {
            console.error('Error translating text:', error);
            return null;
        }
    };
   
    const navigate = useNavigate();

// Pre-load Error Img

    const isImagePreloaded = useImagePreload(errorImage);

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
            />
        </>
    );
}