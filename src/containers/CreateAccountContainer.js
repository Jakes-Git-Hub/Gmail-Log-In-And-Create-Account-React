import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateAccountComponent } from '../components/CreateAccountComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';
export const CreateAccountContainer = ({ updateUser, text, userData }) => {
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
    const handleLanguageSelection = (chosenLanguage) => updateUser({ language: chosenLanguage });
    // First Name
    // Allow Only String Values to be Inputted
    const isLetters = (str) => /^[A-Za-z]+$/.test(str);
    const onFirstNameInputChange = (e) => {
        const { value } = e.target;
        if (isLetters(value)) {
            setFirstName(value);
        }
    };
    // Errors
    const setError = (error) => setErrorCondition(error);
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
            updateUser({ language: userData.language, firstName: firstName, lastName: lastName });
            navigate('/basic-information');
            console.log(firstName);
        }
        if (firstName.length > 0 && firstName.length <= 2) {
            setError('areYouSureCorrect');
            if (firstNameInput) {
                firstNameInput.focus();
            }
        }
        if (firstName === '') {
            setError('firstNameEmpty');
            if (firstNameInput) {
                firstNameInput.focus();
            }
        }
    };
    return (_jsx(_Fragment, { children: _jsx(CreateAccountComponent, { firstName: firstName, lastName: lastName, handleNextClick: handleNextClick, onFirstNameInputChange: onFirstNameInputChange, onLastNameInputChange: onLastNameInputChange, errorCondition: errorCondition, handleLanguageSelection: handleLanguageSelection, text: text, isImageLoaded: isImageLoaded, userData: userData }) }));
};
