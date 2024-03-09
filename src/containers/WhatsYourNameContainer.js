import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { WhatsYourNameComponent } from "../components/WhatsYourNameComponent";
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";

export const WhatsYourNameContainer = ({ updateUser, text,  userData, updateFindYourEmailCredentials, findYourEmailCredentials, users, handleIncorrectEmailInfoSearch, handleCorrectEmailInfoSearch, }) => {

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
            // Check if phoneNumberOrEmail matches either email or phoneNumber
            if (user.email === findYourEmailCredentials.phoneNumberOrEmail || user.phoneNumber === findYourEmailCredentials.phoneNumberOrEmail) {
                // Check if firstName and lastName match
                return user.firstName === findYourEmailCredentials.firstName && user.lastName === findYourEmailCredentials.lastName;
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
                handleCorrectEmailInfoSearch();
                navigate('/get-a-verification-code');
            } else {
                handleIncorrectEmailInfoSearch();
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