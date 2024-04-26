import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateAccountComponent } from '../components/CreateAccountComponent';


import googleWritingSvg from '../images/google-writing-svg.svg';

export const CreateAccountContainer = ({ updateUser, text,  userData, }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
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

    

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage})

// First Name

    // Allow Only String Values to be Inputted

    const isLetters = (str) => /^[A-Za-z]*$/.test(str);

    const onFirstNameInputChange = (e) => {
        const { value } = e.target;
        if (isLetters(value)) {
          setFirstName(value);
        }
    };

// First Name Errors

    const firstNameError = () => setErrorCondition('firstNameEmpty');

    const unsureNameIsCorrect = () => setErrorCondition('areYouSureCorrect');

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
                firstNameInput.focus();
             }
        }
        if (firstName === '') {
            firstNameError();
            if (firstNameInput) {
               firstNameInput.focus();
            }
        }
    };

    return(
        <>
            <CreateAccountComponent
                firstName={firstName}
                setFirstName={setFirstName}
                setLastName={setLastName}
                lastName={lastName}
                handleNextClick={handleNextClick}
                
                onFirstNameInputChange={onFirstNameInputChange}
                onLastNameInputChange={onLastNameInputChange}
                errorCondition={errorCondition}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                isImageLoaded={isImageLoaded}
                userData={userData}
                
            />
        </>
    );
}