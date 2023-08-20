import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CreateAccountcomponent } from "../components/CreateAccountComponent";

export const CreateAccountContainer = ({ updateNameDetails, addUser, nextUserId }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstNamePlaceholder, setFirstNamePlaceholder] = useState("First Name");
    const [lastNamePlaceholder, setLastNamePlaceholder] = useState("Last Name");

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
            setLastNamePlaceholder("Last Name");
        }
    };

    const handleNextClick = () => {
        updateNameDetails(1, firstName, lastName); // Update initial user's details
    
        const newUser = {
          id: nextUserId, // Assign the next unique ID
          phone: '',
          firstName: firstName,
          lastName: lastName,
          dob: '',
          gender: '',
          email: '',
          password: ''
        };
    
        addUser(newUser); // Add the new user to the array
    
        navigate('/birthday-and-gender')// Proceed with navigation or any other logic
      };

 return(
    <>
        <CreateAccountcomponent
            firstName={firstName}
            lastName={lastName}
            setFirstName={setFirstName}
            setLastName={setLastName}
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