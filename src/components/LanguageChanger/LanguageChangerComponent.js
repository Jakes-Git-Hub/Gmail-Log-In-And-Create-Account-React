import React, { useEffect, useState } from 'react';
import languageOptions from '../../utils/languageOptions';
import Select from 'react-select';
import { components } from 'react-select';

function LanguageChanger({ updateUser, userData }) {

    const handleRSLanguageSelection = (chosenLanguage) => {
        updateUser({ language: chosenLanguage })
    };

    const customStyles = {
        menu: styles => ({
            ...styles,
            width: '360px',
            height: '325px',
            top: "87%",
            zIndex: '2',
        }),
        menuList: styles => ({
            ...styles,
            maxHeight: "325px",
            padding: "8px 0",
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
            color: state.selectProps.menuIsOpen ? "#2b7bfe" : "rgb(158,158,158)",
            ':hover': {
                color: state.selectProps.menuIsOpen ? "#2b7bfe" : "#131313",
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
            minHeight: "100%",
            minWidth: "100%",
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'center',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#d3e4fb' : state.isFocused ? 'rgb(245 245 245)' : '',
            ':active': {
                backgroundColor: state.isFocused ? "#d3e4fb" :"#e8f0fe",
            },
            cursor: 'pointer',
            height: "48px",
            display: 'flex',
            alignItems: 'center',
        }),
    };

    useEffect(() => {
        console.log('userData', userData);
    }, [userData]);

    const customOptions = [
        // Add the rest of the translatedCountries
        ...languageOptions.map((language) => {
          console.log(language);
          return {
            value: language.value,
            label: (
              <div>
                <span className='language-option'>{language.label}</span>
              </div>
            ),
          };
        }),
      ];

    const customDropdownIndicator = props => (
        components.DropdownIndicator && (
        <components.DropdownIndicator {...props} className="custom-dropdown-indicator">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <g transform="matrix(1.1364 0 0 1.1364 12 12)">
                <g vectorEffect="non-scaling-stroke">
                <g transform="matrix(0.6667 0 0 0.6667 0 2)">
                    <path style={{fill: 'currentColor'}} transform=" translate(-12, -12.5)" d="M 7 10 l 5 5 l 5 -5" strokeLinecap="round"/>
                </g>
                </g>
            </g>
            </svg>
        </components.DropdownIndicator>
        )
    );

    return (
        <>
            <Select
                styles={customStyles}
                className='language-changer-div'
                options={customOptions}
                components={{ 
                    DropdownIndicator: customDropdownIndicator,  
                }}
                // placeholder=
                // value={selectedOption}
                
            />

        </>
    );
}

export default LanguageChanger;

// // Chosen Country Flag Image Placeholder    

    // const chosenLanguage = ({ children, ...props }) => {
    //     return (
    //     <components.SingleValue {...props}>
    //         {props.data && props.data.value ? (
    //             <div>
    //                 <span className='language-option'>
    //                     {language.value}
    //                 </span>
    //             </div>
    //         ) : null}
    //     </components.SingleValue>
    //     );
    // };

    // // Placeholder Content

    // const placeholderContent = usersCountryFlagSVG ? (
    //     <img
    //         src={require(`../images/flags/${usersCountryFlagSVG}`)}
    //         alt="Flag4"
    //         width="24"
    //         height="16"
    //     />
    // ) : (
    //     <img    
    //         src={GBSVG} 
    //         alt="Flag5" 
    //         width="24" 
    //         height="16" 
    //     />
    // );
