import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { WhatsYourNameComponent } from "../components/WhatsYourNameComponent";
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";

export const WhatsYourNameContainer = ({ updateUser, text,  userData, updateFindYourEmailCredentials, findYourEmailCredentials, users, handleIncorrectInfoSearch, handleCorrectInfoSearch, handleFindWithPhoneNubmer, handleFindWithEmail, findWith }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [proceedWithFindUser, setProceedWithFindUser] = useState(false);
    const navigate = useNavigate();

// Handle Slow Svg Load

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

    useEffect(() => {
        console.log('findYourEmailCredentials', findYourEmailCredentials);
    }, [findYourEmailCredentials]);

    const isImagePreloaded = useImagePreload(errorImage);

// Change Language

    const handleLanguageSelection = (chosenLanguage) => {
        updateUser({ language: chosenLanguage })
    };

// First Name

    const onFirstNameInputChange = (e) => {
        setFirstName(e.target.value);
    }

// Last Name

    const onLastNameInputChange = (e) => {
         setLastName(e.target.value);
    }

// Errors

    const error = error => {
        setErrorCondition(error);
    };

// Matching User
    
    const findMatchingUser = () => {
        const matchingUser = users.find(user => {
            if (user.email === findYourEmailCredentials.phoneNumberOrEmail && user.firstName === findYourEmailCredentials.firstName && user.lastName === findYourEmailCredentials.lastName) { 
                handleFindWithEmail();
                return true;
            } else if (user.phoneNumber === findYourEmailCredentials.phoneNumberOrEmail && user.firstName === findYourEmailCredentials.firstName && user.lastName === findYourEmailCredentials.lastName) {
                handleFindWithPhoneNubmer();
                return true;
            }
            return false;
        });
        return matchingUser;
    };

    const matchingUser = findMatchingUser();

// Handle Next

    const handleNextClick = () => {
        const firstNameInput = document.getElementById('firstNameInput');
        if (firstName === '') {
            error('firstNameEmpty');
            if (firstNameInput) {
                firstNameInput.focus();
            }
        }
        if (firstName !== '') {
            setErrorCondition(null);
            updateFindYourEmailCredentials({ firstName: firstName, lastName: lastName });
            setProceedWithFindUser(true);
        } 
    };

    useEffect(() => {
        if (proceedWithFindUser) {
            if (matchingUser) {
                handleCorrectInfoSearch();
                if (findWith === 'email') {
                    navigate('/get-a-verification-code-email');
                } else {
                    navigate('/get-a-verification-code-phone-number');
                }
            } else {
                handleIncorrectInfoSearch();
                navigate('/find-your-email');
            }  
        } 
    }, [proceedWithFindUser]);



    return(
        <>
            <WhatsYourNameComponent
                firstName={firstName}
                setFirstName={setFirstName}
                setLastName={setLastName}
                lastName={lastName}
                handleNextClick={handleNextClick}
                isImagePreloaded={isImagePreloaded}
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