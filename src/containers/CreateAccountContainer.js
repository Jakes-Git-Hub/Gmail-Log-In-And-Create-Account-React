import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CreateAccountcomponent } from "../components/CreateAccountComponent";

export const CreateAccountContainer = ({ updateUser }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstNamePlaceholder, setFirstNamePlaceholder] = useState("First Name");
    const [lastNamePlaceholder, setLastNamePlaceholder] = useState("Last Name (optional)");

    const navigate = useNavigate();

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

    const handleNextClick = () => {

        updateUser({ firstName: firstName, lastName: lastName })

        setFirstName('');
        setLastName('');
      
        navigate('/basic-information')
    };

 return(
    <>
        <CreateAccountcomponent
            firstName={firstName}
            lastName={lastName}
            firstNamePlaceholder={firstNamePlaceholder}
            lastNamePlaceholder={lastNamePlaceholder}
            handleFirstNameClick={handleFirstNameClick}
            handleLastNameClick={handleLastNameClick}
            handleFirstNameBlur={handleFirstNameBlur}
            handleLastNameBlur={handleLastNameBlur}
            handleNextClick={handleNextClick}
        />
    </>
 );
}