import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WhatsYourNameComponent } from '../components/WhatsYourNameComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';

interface WhatsYourNameProps {
    updateUser: (user: { language: string }) => void;
    text: string;
    userData: any;
    updateFindYourEmailCredentials: (credentials: { firstName: string; lastName: string }) => void;
    findYourEmailCredentials: { phoneNumberOrEmail: string; firstName: string; lastName: string };
    users: Array<{ email: string; firstName: string; lastName: string; phoneNumber: string }>;
    handleIncorrectInfoSearch: () => void;
    handleCorrectInfoSearch: () => void;
  }

export const WhatsYourNameContainer: React.FC<WhatsYourNameProps> = ({ updateUser, text,  userData, updateFindYourEmailCredentials, findYourEmailCredentials, users, handleIncorrectInfoSearch, handleCorrectInfoSearch }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorCondition, setErrorCondition] = useState<string | null>(null);
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

// Change Language

    const handleLanguageSelection = (chosenLanguage: string) => updateUser({ language: chosenLanguage })

// First Name

    const onFirstNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value.toLowerCase());

// Last Name

    const onLastNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value.toLowerCase());

// Errors

    const error = (error: string) => setErrorCondition(error);

// Find With

    const handleFindWithPhoneNumber = () => setFindWith('phoneNumber');

    const handleFindWithEmail = () => setFindWith('email');

// Handle Next

    const handleNextClick = () => {
        const firstNameInput = document.getElementById('firstNameInput') as HTMLInputElement;
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
            const sequences = generateSequences(findYourEmailCredentials.phoneNumberOrEmail);
            if (
                user.email === findYourEmailCredentials.phoneNumberOrEmail &&
                user.firstName.toLowerCase() === findYourEmailCredentials.firstName &&
                user.lastName.toLowerCase() === findYourEmailCredentials.lastName
            ) {
                return true;
            } else if (
                sequences.some(sequence => user.phoneNumber.includes(sequence)) &&
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
            } else if (generateSequences(findYourEmailCredentials.phoneNumberOrEmail).some(sequence => matchingUser.phoneNumber.includes(sequence))) {
                handleFindWithPhoneNumber();
            }
        }
        return matchingUser;
    };

    const generateSequences = (number: string) => {
        const sequences: string[] = [];
        for (let i = 0; i <= number.length - 7; i++) {
            sequences.push(number.slice(i, i + 7));
        }
        return sequences;
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