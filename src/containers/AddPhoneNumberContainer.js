import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddPhoneNumberComponent } from '../components/AddPhoneNumberComponent';
import useImagePreload from "../hooks/useImagePreload";
import errorImage from '../images/Daco_5575399.png';
import { countries, customOptions } from '../utils/addPhoneNumberDropDownOptionsObject';
import axios from 'axios';

export const AddPhoneNumberContainer = ({ updateUser, users, userIP }) => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberPlaceholder, setPhoneNumberPlaceholder] = useState("Phone Number");
    const [isPhoneNumberEmpty, setIsPhoneNumberEmpty] = useState(false);
    const [isIncorrectFormat, setIsIncorrectFormat] = useState(false);
    const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
    const [errorCondition, setErrorCondition] = useState(null);
    const [usersCountryFlagSVG, setUsersCountryFlagSVG] = useState('');
    const navigate = useNavigate();

// Loads Error Image

    const isImagePreloaded = useImagePreload(errorImage);

// Get User's Country from IP and Set SVG Based on it

    useEffect(() => { 
        if (userIP) {
            const apiKey = 'b2ef0251b1264f88ae869467dfe144d8';

            axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=200.7.98.19`)
            .then((response) => {
                const countryFromIP = response.data.country_name;
                const matchingCountry = countries.find(country => country.name === countryFromIP);
                if (matchingCountry) {
                    setUsersCountryFlagSVG(matchingCountry.svg);
                }
                console.log(`User's country: ${countryFromIP}`);
            })
            .catch((error) => {
                console.error('Error fetching geolocation data:', error);
            });
        } else {
            console.log("didn't work, or still waiting for IP API request");
        }
    }, [userIP]);

// phoneNumber

    const handlePhoneNumberClick = () => {
        setPhoneNumberPlaceholder("");
    };

    const handlePhoneNumberBlur = () => {
        if (phoneNumber === "") {
            setPhoneNumberPlaceholder("Phone Number");
        }
    };

// Error Messages

    const phoneNumberEmpty = () => setIsPhoneNumberEmpty(true);

    const incorrectFormat = () => setIsIncorrectFormat(true);

    const alreadyRegistered = () => setIsAlreadyRegistered(true);

// Handle Next Click

    const handleNextClick = () => {
        setIsPhoneNumberEmpty(false);
        setIsIncorrectFormat(false);
        setIsAlreadyRegistered(false);
        if (phoneNumber === '') {
        const phoneNumberInput = document.getElementById('phoneNumberInput');
        phoneNumberEmpty();
        phoneNumberInput.focus();
        } else if (!/^[a-zA-Z0-9.]+$/.test(phoneNumber)) {
        // Check if the phoneNumber contains unallowed characters
        incorrectFormat();
        console.log('correct regex')
        } else {
                const isPhoneNumberAlreadyRegistered = users.some(user => user.phoneNumber === phoneNumber);
                if(isPhoneNumberAlreadyRegistered) {
                    alreadyRegistered();    
                } else {
            updateUser({ phoneNumber: phoneNumber })
            setPhoneNumber('');
            navigate('/next')
            }
        }
    };

// Custom React Select Styles

    const customStyles = {
        menu: styles => ({
            ...styles,
            width: '360px',
        }),
        container: provided => ({
            ...provided,
            width: '103px',
            marginLeft: '3px',
        }),
        control: provided => ({
            ...provided,
            height: '33px',
            minHeight: '0px',
            borderColor: 'transparent',
            ':hover': {
                borderColor: 'transparent',
                pointer: 'cursor'
            },
            ':focus:': {
                border
            }
        }),
            indicatorSeparator: provided => ({
            ...provided,
            width: '0px',
        }),
        valueContainer: provided => ({
        ...provided,
            display: 'flex',
            flexWrap: 'nowrap',
            alignContent: 'center',
            justifyContent: 'center',
            flexDirection: 'row-reverse',
        }),
    };
  


// Handle Skip

    const handleSkip = () => {
        setPhoneNumber('');
        setErrorCondition(null);
        navigate('/review-your-account-info');
    };

    return (
        <>
            <AddPhoneNumberComponent
                value={phoneNumber}
                setValue={setPhoneNumber}
                handlePhoneNumberClick={handlePhoneNumberClick}
                handlePhoneNumberBlur={handlePhoneNumberBlur}
                phoneNumberPlaceholder={phoneNumberPlaceholder}
                handleNextClick={handleNextClick}
                handleSkip={handleSkip}
                isPhoneNumberEmpty={isPhoneNumberEmpty}
                isImagePreloaded={isImagePreloaded}
                isIncorrectFormat={isIncorrectFormat}
                isAlreadyRegistered={isAlreadyRegistered}
                customOptions={customOptions}
                countries={countries}
                customStyles={customStyles}
                userIP={userIP}
                usersCountryFlagSVG={usersCountryFlagSVG}
            />
        </>
    )
    
}