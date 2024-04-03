import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { SelectAnAccountToSignInComponent } from "../components/SelectAnAccountToSignInComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";

export const SelectAnAccountToSignInContainer = ({ userData, updateUser, text, findYourEmailCredentials, users, handleListItemLogIn }) => {

    const [isImageLoaded, setIsImageLoaded] = useState(false); 
    const [emailAccountClicked, setEmailAccountClicked] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

// Change Language

    const handleLanguageSelection = (chosenLanguage) => {
        window.scrollTo({
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
        updateUser({ language: chosenLanguage })
    };

// Matching Users

    const matchingUsers = users.filter(user => {
        return (
            (user.email === findYourEmailCredentials.phoneNumberOrEmail || 
            user.phoneNumber === findYourEmailCredentials.phoneNumberOrEmail) &&
            user.firstName.toLowerCase() === findYourEmailCredentials.firstName.toLowerCase() &&
            user.lastName.toLowerCase() === findYourEmailCredentials.lastName.toLowerCase()
        );
    });

    useEffect(() => {
        console.log('matchingUsers', matchingUsers)
        console.log('users', users)
        console.log('findYourEmailCredentials', findYourEmailCredentials)
    }, [matchingUsers, users, findYourEmailCredentials]);

// Handle List Item Click

    const onListItemClick = email => {
        setEmailAccountClicked(email);
    }

    useEffect(() => {
        if (emailAccountClicked) {
            handleListItemLogIn(emailAccountClicked);
                navigate('/mockmail');
            console.log('emailAccountClicked', emailAccountClicked);
        }
    }, [emailAccountClicked]);

    const navToHome = () => {
        navigate('/');
    }


    return(
        <>
            <SelectAnAccountToSignInComponent
                isImageLoaded={isImageLoaded}
                userData={userData}
                handleLanguageSelection={handleLanguageSelection}
                text={text}
                findYourEmailCredentials={findYourEmailCredentials}
                users={users}
                matchingUsers={matchingUsers}
                onListItemClick={onListItemClick}
                navToHome={navToHome}
            />
        </>
    );
};
