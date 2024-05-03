import React, { useState, useEffect } from 'react';
import { components } from 'react-select';
import { useNavigate } from 'react-router-dom';
import { ConfirmYoureNotARobotComponent } from '../components/ConfirmYoureNotARobotComponent';
import axios from 'axios';
import GBSVG from '../images/flags/gb2.svg';
import googleWritingSvg from '../images/google-writing-svg.svg';
import libphonenumber from 'google-libphonenumber';

export const ConfirmYoureNotARobotContainer = ({ updateUser, userData, users, userIP, handleCYNARCountrySelect, hasSelectedCYNARCountry, text, translatedCountries, IPGeoLocationAPIKey, }) => {

    const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorCondition, setErrorCondition] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);  
    const [usersCountryFlagSVG, setUsersCountryFlagSVG] = useState(hasSelectedCYNARCountry ? userData.countryDetails.svg : '');
    const [countryFromAPIOrSelection, setCountryFromAPIOrSelection] = useState(hasSelectedCYNARCountry ? userData.countryDetails.name : {});
    const [selectedOption, setSelectedOption] = useState(null);
    const [actualSelectedOption, setActualSelectedOption] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(translatedCountries);
    const [topOption, setTopOption] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    
    useEffect(() => {
        const image = new Image();
        image.src = googleWritingSvg;
        image.onload = () => {
          setIsImageLoaded(true);
        };
    }, []);

// Change Language

    const handleLanguageSelection = chosenLanguage => updateUser({ language: chosenLanguage})

// Populate the filteredCountries state with the translatedCountries

    useEffect(() => {
        setFilteredCountries(translatedCountries);
    }, [translatedCountries]);

    useEffect(() => {
        console.log('filteredCountries', filteredCountries);   
        console.log('selectedOption', selectedOption);  
    }, [filteredCountries, selectedOption]);

// Get User's Country from IP and Set Placeholder SVG and Top Option Based on it

    const apiKey = IPGeoLocationAPIKey;

    useEffect(() => {
        console.log('userIP:', userIP);
    }, [userIP]);

    useEffect(() => { 
        if (userIP && hasSelectedCYNARCountry === true) {
            const countryFromSelection = userData.countryDetails;
            if (countryFromSelection) {
                setUsersCountryFlagSVG(countryFromSelection.svg);
                setCountryFromAPIOrSelection({name: countryFromSelection.name, svg: countryFromSelection.svg});
            }
        } else if (userIP && hasSelectedCYNARCountry === false) {
            console.log('actualSelectedOption:', actualSelectedOption)
            axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${userIP}`)
            .then((response) => {
                const countryFromIP = response.data.country_name;
                const matchingCountry = filteredCountries.find(country => country.name === countryFromIP);
                if (matchingCountry) {
                    setUsersCountryFlagSVG(matchingCountry.svg);
                    setCountryFromAPIOrSelection({name: matchingCountry.name, svg: matchingCountry.svg});
                }
            })
            .catch((error) => {
                console.error('Error fetching geolocation data:', error);
            });
        } else {
            console.log('didn\'t work, or still waiting for IP API request');
        }
    }, [userIP, usersCountryFlagSVG]);

// Custom Options

    useEffect(() => {
        const countryOption = filteredCountries && Array.isArray(filteredCountries) 
            ? filteredCountries.find(country => country.svg === countryFromAPIOrSelection.svg) : null;
        if (countryOption && hasSelectedCYNARCountry === false) {
            setSelectedOption({
                value: countryOption,
                label: countryOption.name,
            });
            console.log('countryOption:', countryOption);
        } 
    }, [countryFromAPIOrSelection]);
    
    useEffect(() => {
        const newTopOption = filteredCountries && Array.isArray(filteredCountries) 
            ? filteredCountries.find(country => country.svg === countryFromAPIOrSelection.svg) 
            : null;
        setTopOption(newTopOption);
        const newFilteredCountries = Array.isArray(filteredCountries) 
            ? filteredCountries.sort((a, b) => a.name.localeCompare(b.name)) 
            : [];
        setFilteredCountries(newFilteredCountries);
    }, [selectedOption, countryFromAPIOrSelection]);

    const unitedKingdom = filteredCountries && Array.isArray(filteredCountries) 
    ? filteredCountries.find(country => country.abbreviation === 'gb')
    : undefined;

    useEffect(() => {
        console.log('topOption:', topOption);
    }, [topOption])

    const customOptions = [
        // Top Option
        {
            value: topOption === undefined ? unitedKingdom : topOption,
            label: (
                <div>
                    <img
                        src={require(`../images/flags/${countryFromAPIOrSelection.svg || 'gb2.svg'}`)}
                        className='flag-image'
                        alt={`${countryFromAPIOrSelection.name || 'GB Flag'} flag1`}
                        width='24'
                        height='16'
                    />
                    <span className='country-option'>
                        {usersCountryFlagSVG 
                            ? (filteredCountries.find(country => country.svg === usersCountryFlagSVG) || {}).name + ' ' 
                            : (unitedKingdom || {}).name + ' '
                        } 
                        ({usersCountryFlagSVG
                            ? (filteredCountries.find(country => country.svg === usersCountryFlagSVG) || {}).dialingCode
                            : (unitedKingdom || {}).dialingCode
                        })
                    </span>
                </div>
            ),
        },
        // Separator
        {
            value: 'separator',
            label: (
                <div className='separator' />
            ),
            isDisabled: true,
        },
        // Add the rest of the translatedCountries
        ...(Array.isArray(filteredCountries) ? filteredCountries : []).map((country) => ({
            value: country,
            label: (
                <div>
                    <img
                    src={require(`../images/flags/${country.svg}`)}
                    className='flag-image'
                    alt={`${country.name} flag2`}
                    width='24'
                    height='16'
                    />
                    <span className='country-option'>
                        {country.name || country.name} ({country.dialingCode})
                    </span>
                </div>
            ),
        })),
    ];

// Chosen Country Flag Image Placeholder    

    const chosenCountryFlagImage = ({ children, ...props }) => {
        return (
            <components.SingleValue {...props}>
                {props.data && props.data.value ? (
                    <img
                        src={require(`../images/flags/${props.data.value.svg || 'gb2.svg'}`)}
                        className='flag-image'
                        alt={`${props.data.value.name} flag3`}
                        style={{ 
                            marginLeft: '14px',
                            marginBottom: '2px',
                        }}
                    />
                ) : null}
            </components.SingleValue>
        );
    };

    // Placeholder Content

    const placeholderContent = usersCountryFlagSVG ? (
        <img
            src={require(`../images/flags/${usersCountryFlagSVG}`)}
            alt='Flag4'
            width='24'
            height='16'
        />
    ) : (
        <img    
            src={GBSVG} 
            alt='Flag5' 
            width='24' 
            height='16' 
        />
    );
    
// Error Messages

    const setError = errorType => setErrorCondition(errorType);

// phoneNumber

    const handleCountrySelect = selectedOption => {
        setSelectedOption(selectedOption);
        console.log('selectedOption:', selectedOption);
        setActualSelectedOption(true);
    };

    const handleSelectPhoneNumber = e => setPhoneNumber(e.target.value);

// Handle Next Click

    const handleNextClick = () => {
        const phoneNumberInput = document.getElementById('phoneNumberInput');
        if (phoneNumber === '') {
            setError('phoneNumberEmpty');
            phoneNumberInput.focus();
        } else if (!/^\+?[0-9]+$/.test(phoneNumber)) {
            setError('incorrectFormat');
            phoneNumberInput.focus();
        } else {
            const isPhoneNumberAlreadyRegistered = users.some(user => user.phoneNumber === phoneNumber);
            if (isPhoneNumberAlreadyRegistered) {
                setError('alreadyRegistered'); 
            } else {
                if (actualSelectedOption) {
                    setFormattedPhoneNumber(selectedOption.value.dialingCode + phoneNumber);
                    updateUser({ phoneNumber: selectedOption.value.dialingCode + phoneNumber, countryDetails: selectedOption.value,  });
                    console.log('selectedOption:', selectedOption.value);
                    handleCYNARCountrySelect();
                    setError(null);                    
                } else {
                    setFormattedPhoneNumber(phoneNumber);
                    updateUser({ phoneNumber: phoneNumber, countryDetails: unitedKingdom });
                    handleCYNARCountrySelect();
                    setError(null);
                }
            }
        }
    };

// Send Verification Code When Formatted Phone Number Changes

    useEffect(() => {
        if (formattedPhoneNumber) {
            sendVerificationCode();
        }
    }, [formattedPhoneNumber]);

    const sendVerificationCode = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/send-verification-code', {
                formattedPhoneNumber: formattedPhoneNumber,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = response.data;

            if (data.verificationCode) {
                // Extract the verification code from the Twilio response
                const verificationCode = data.verificationCode.toString();
                updateUser({ verificationCode: verificationCode });
                console.log('actualSelectedOption:', actualSelectedOption);
                navigate('/enter-the-verification-code');    
            } else {
                setLoading(false);
                if (data.error) {
                    console.error('Error sending verification code:', data.error);
                } else {
                    console.error('Unknown error sending verification code');
                }
            }
        } catch (error) {
            console.error('Error sending verification code:', error);
            setLoading(false);
            setError('incorrectNumber');
        }
    } 

// Custom React Select Components

const customDropdownIndicator = props => (
    components.DropdownIndicator && (
    <components.DropdownIndicator {...props} className='custom-dropdown-indicator'>
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='24' height='24' viewBox='0 0 24 24'>
        <g transform='matrix(1.1364 0 0 1.1364 12 12)'>
            <g vectorEffect='non-scaling-stroke'>
            <g transform='matrix(0.6667 0 0 0.6667 0 2)'>
                <path style={{fill: 'currentColor'}} transform=' translate(-12, -12.5)' d='M 7 10 l 5 5 l 5 -5' strokeLinecap='round'/>
            </g>
            </g>
        </g>
        </svg>
    </components.DropdownIndicator>
    )
);

// Custom React Select Styles

const customStyles = {
    menu: styles => ({
        ...styles,
        width: '360px',
        height: '325px',
        top: '87%',
        zIndex: '2',
    }),
    menuList: styles => ({
        ...styles,
        maxHeight: '325px',
        padding: '8px 0',
    }),
    container: provided => ({
        ...provided,
        width: '103px',
        margin: '2px 0 0 5px',
    }),
    control: (provided, state) => ({
        ...provided,
        height: '56.6px',
        minHeight: '0px',
        maxWidth: '83px',
        border: state.selectProps.menuIsOpen ? '1px solid transparent' : 'transparent',
        borderImage: state.selectProps.menuIsOpen ? 'linear-gradient(145deg, rgba(54,122,225,1) 48%, rgba(113,168,252,1) 100%)' : 'transparent',
        borderImageSlice: state.selectProps.menuIsOpen ? '1' : 'transparent',
        ':hover': {
            cursor: 'pointer'
        },
        boxShadow: state.selectProps.menuIsOpen ? '0 0 0 1.5px #2684FF' : 'transparent',
    }),
    dropdownIndicator: (provided, state)=> ({
        ...provided,
        width: '32.5px',
        height: '27.5px',
        transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
        padding: '0px',
        justifyContent: 'center',
        color: state.selectProps.menuIsOpen ? '#2b7bfe' : 'rgb(158,158,158)',
        ':hover': {
            color: state.selectProps.menuIsOpen ? '#2b7bfe' : '#131313',
        },
    }),
    indicatorSeparator: provided => ({
        ...provided,
        display: 'none',
    }),
    indicatorContainer: provided => ({
        ...provided,
        display: 'flex',
        justifyContent: 'center',
    }),
    input: (provided) => ({
        ...provided,
        caretColor: 'transparent',
    }),
    valueContainer: provided => ({
        ...provided,
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
    }),
    placeholder: provided => ({
        ...provided,
        marginTop: '2px',
    }),
    singleValue: provided => ({
        ...provided,
        marginTop: '2px',
        minHeight: '100%',
        minWidth: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#d3e4fb' : state.isFocused ? 'rgb(245 245 245)' : '',
        ':active': {
            backgroundColor: state.isFocused ? '#d3e4fb' :'#e8f0fe',
        },
        cursor: 'pointer',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
    }),
};


    return (
        <>
            <ConfirmYoureNotARobotComponent
                value={phoneNumber}
                setValue={setPhoneNumber}
                handleNextClick={handleNextClick}
                customOptions={customOptions}
                customStyles={customStyles}
                customDropdownIndicator={customDropdownIndicator}
                chosenCountryFlagImage={chosenCountryFlagImage}
                placeholderContent={placeholderContent}
                selectedOption={selectedOption}
                handleSelectPhoneNumber={handleSelectPhoneNumber}
                isImageLoaded={isImageLoaded}
                handleCountrySelect={handleCountrySelect}
                errorCondition={errorCondition}
                actualSelectedOption={actualSelectedOption}
                formattedPhoneNumber={formattedPhoneNumber}
                loading={loading}
                text={text}
                unitedKingdom={unitedKingdom}
                handleLanguageSelection={handleLanguageSelection}
                userData={userData}
            />
        </>
    )
}
