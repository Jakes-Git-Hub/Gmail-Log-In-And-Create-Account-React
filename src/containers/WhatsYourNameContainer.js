import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WhatsYourNameComponent } from '../components/WhatsYourNameComponent';
import useImagePreload from '../hooks/useIsImagePreloadedHook';
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from '../images/google-writing-svg.svg';

export const WhatsYourNameContainer = ({ updateUser, text,  userData, updateFindYourEmailCredentials, findYourEmailCredentials, users, handleIncorrectInfoSearch, handleCorrectInfoSearch }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [proceedWithFindUser, setProceedWithFindUser] = useState(false);
    const [findWith, setFindWith] = useState('');
    const [foundMatchingUser, setfoundMatchingUser] = useState(false);

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

    useEffect(() => {
        console.log('findWith:', findWith);
    }, [findWith]);

    const isImagePreloaded = useImagePreload(errorImage);

// Change Language

    const handleLanguageSelection = (chosenLanguage) => {
        updateUser({ language: chosenLanguage })
    };

// First Name

    const onFirstNameInputChange = (e) => {
        setFirstName(e.target.value.toLowerCase());
    }

// Last Name

    const onLastNameInputChange = (e) => {
         setLastName(e.target.value.toLowerCase());
    }

// Errors

    const error = error => {
        setErrorCondition(error);
    };

// Find With

    const handleFindWithPhoneNumber = () => {
        setFindWith('phoneNumber');
    }

    const handleFindWithEmail = () => {
        setFindWith('email');
    }



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
            const matchingUser = findMatchingUser();
            if (matchingUser) {
                setfoundMatchingUser(true);
            } else {
                handleIncorrectInfoSearch();
                navigate('/find-your-email');
            }
        } 
    }, [proceedWithFindUser]);

// findMatchingUser
    
    const findMatchingUser = () => {
        const matchingUser = users.find(user => {
            if (
                user.email === findYourEmailCredentials.phoneNumberOrEmail &&
                user.firstName.toLowerCase() === findYourEmailCredentials.firstName &&
                user.lastName.toLowerCase() === findYourEmailCredentials.lastName
            ) {
                return true;
            } else if (
                user.phoneNumber === findYourEmailCredentials.phoneNumberOrEmail &&
                user.firstName.toLowerCase() === findYourEmailCredentials.firstName &&
                user.lastName.toLowerCase() === findYourEmailCredentials.lastName
            ) {
                return true;
            }
            return false;
        });

        if (matchingUser) {
            console.log('matchingUser', matchingUser);
            console.log('findYourEmailCredentials.phoneNumberOrEmail', findYourEmailCredentials.phoneNumberOrEmail);
            if (matchingUser.email === findYourEmailCredentials.phoneNumberOrEmail) {
                handleFindWithEmail();
            } else if (matchingUser.phoneNumber === findYourEmailCredentials.phoneNumberOrEmail) {
                handleFindWithPhoneNumber();
            }
        }
        return matchingUser;
    };

    useEffect(() => {
        if (foundMatchingUser) {
            handleCorrectInfoSearch();
            if (findWith === 'email') {
                navigate('/get-a-verification-code-email');
            } if (findWith === 'phoneNumber') {
                navigate('/get-a-verification-code-phone');
            } 
        } 
    }, [foundMatchingUser]);

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