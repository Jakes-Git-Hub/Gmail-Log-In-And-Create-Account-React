import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CreateAccountcomponent } from "../components/CreateAccountComponent";
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';

export const CreateAccountContainer = ({ updateUser }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstNamePlaceholder, setFirstNamePlaceholder] = useState("First Name");
    const [lastNamePlaceholder, setLastNamePlaceholder] = useState("Last Name (optional)");
    const [firstNameEmpty, setFirstNameEmpty] = useState(false);

    const navigate = useNavigate();

// Pre-load Error Img

const isImagePreloaded = useImagePreload(errorImage);

// First Name

    const handleFirstNameClick = () => {
        setFirstNamePlaceholder("");
    };

    const handleLastNameClick = () => {
        setLastNamePlaceholder("");
    };

    const handleFirstNameBlur = () => {
        if (firstName === "") {
            setFirstNamePlaceholder("First Name");
        }
    };

    const handleLastNameBlur = () => {
        if (lastName === "") {
            setLastNamePlaceholder("Last Name (optional)");
        }
    };

// First Name Error Message

    const firstNameError = () => setFirstNameEmpty(true);

// Handle Next

    const handleNextClick = () => {
        if (firstName !== '') {
            updateUser({ firstName: firstName, lastName: lastName });
            setFirstName('');
            setLastName('');
            setFirstNameEmpty(false);
            navigate('/basic-information');
        } else if (firstName === '') {
            firstNameError();
            const firstNameInput = document.getElementById('firstNameInput');
            if (firstNameInput) {
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
            firstNamePlaceholder={firstNamePlaceholder}
            lastNamePlaceholder={lastNamePlaceholder}
            handleFirstNameClick={handleFirstNameClick}
            handleLastNameClick={handleLastNameClick}
            handleFirstNameBlur={handleFirstNameBlur}
            handleLastNameBlur={handleLastNameBlur}
            handleNextClick={handleNextClick}
            firstNameEmpty={firstNameEmpty}
            isImagePreloaded={isImagePreloaded}
        />
    </>
 );
}