import React from 'react';
import Select from 'react-select';
import errorImage from '../images/Daco_5575399.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import googleWritingSvg from "../images/google-writing-svg.svg";
import InputAdornment from "@mui/material/InputAdornment";
import CustomNextButton from './buttons/CustomNextButtonComponent';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';

export const ConfirmYoureNotARobotComponent = ({ 
    phoneNumber,
    handleSelectPhoneNumber,
    handleNextClick,
    isImagePreloaded,
    customOptions,
    customStyles,
    customDropdownIndicator,
    placeholderContent,
    selectedOption,
    chosenCountryFlagImage, 
    isImageLoaded,
    handleCountrySelect,
    errorCondition,
    actualSelectedOption,
    formattedPhoneNumber,
    loading,
    text,
    unitedKingdom,
    handleLanguageSelection,
    
    userData,
    
}) => {

    return (

        <>

            <div id='google-container-flexible'>
                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-BG"/>

                <form>


                    <h1 class="thin" id="h1-cynar">{text.ConfirmYoureNotARobot.h1[userData.language]}</h1>

                    <div id='h2-cynar-div'>
                        <h2 id='h2-cynar'>{text.ConfirmYoureNotARobot.h2[userData.language]}</h2>
                    </div>
                    

                    <div id='add-phone-number-dropdown-and-input'>
                        <Select
                            styles={customStyles}
                            class="flag-drop-down"
                            options={customOptions}
                            components={{ 
                                DropdownIndicator: customDropdownIndicator, 
                                SingleValue: chosenCountryFlagImage, 
                            }}
                            placeholder={placeholderContent}
                            onChange={handleCountrySelect}
                            value={selectedOption}
                            onInputChange={(inputValue, { action }) => {
                                if (action === 'input-change') {
                                return '';
                                }
                                return inputValue;
                            }}
                        />

                        <div class='line-height gender-input-width' id='phoneNumber-input-width'>
                            <Box>
                                    <TextField
                                        autoFocus
                                        fullWidth error={errorCondition}
                                        id='phoneNumberInput'
                                        value={phoneNumber}
                                        label={text.ConfirmYoureNotARobot.phoneNumber[userData.language]}
                                        type="number text"
                                        onChange={handleSelectPhoneNumber}
                                        InputLabelProps={
                                            errorCondition ? 
                                            { 
                                                sx: {
                                                    color: phoneNumber || actualSelectedOption ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                                    '&.Mui-focused': {
                                                        color: '#d32f2f !important',
                                                    },
                                                },
                                            } : {}
                                        }
                                        InputProps={{
                                            startAdornment: actualSelectedOption ? (
                                            <InputAdornment position="start" sx={{color: 'rgba(0, 0, 0, 0.87)', marginTop: '2.5px'}}>
                                                    {selectedOption.value.dialingCode || unitedKingdom.dialingCode}
                                                </InputAdornment>
                                            ) : null,
                                        }}
                                        sx={
                                            errorCondition ? 
                                            {} : 
                                            {
                                                "& .MuiOutlinedInput-root": {
                                                    "&:hover:not(.Mui-focused) fieldset": {
                                                        borderColor: "#dadce0"
                                                    },
                                                    "& fieldset": {
                                                        borderColor: "#dadce0"
                                                    },
                                                },
                                            }
                                        }
                                    />
                            </Box>  
                        </div>
                    </div>

                    {errorCondition === "phoneNumberEmpty" && isImagePreloaded ? (
                        <div class='long-error-div' id='error-div-space-cynar'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.ConfirmYoureNotARobot.error1[userData.language]}</p>
                        </div>
                    ) : errorCondition === "incorrectFormat" && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-cynar'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.ConfirmYoureNotARobot.error2[userData.language]}</p>
                        </div>
                    ) : errorCondition === "alreadyRegistered" && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-cynar'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.ConfirmYoureNotARobot.error3[userData.language]}</p>
                        </div>
                    ) : errorCondition === "incorrectNumber" && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-cynar'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.ConfirmYoureNotARobot.error4[userData.language]}</p>
                        </div>
                    ) : null}

                    <div class='below-input-small-grey-cynar'>
                        <p class='small-grey-cynar'>{text.ConfirmYoureNotARobot.googleWillVerify[userData.language]}</p>
                    </div>
                    
                    <div id={formattedPhoneNumber ? 'button-right-robot-confirm' : "button-right-robot"}>
                        <CustomNextButton 
                            variant="contained" 
                            onClick={handleNextClick}
                            sx={{
                                '&& .MuiTouchRipple-rippleVisible': {
                                    animationDuration: '300ms',
                                },
                            }}
                        >
                            <div class='next'>
                            {text.ConfirmYoureNotARobot.next[userData.language]}
                            </div>
                        </CustomNextButton>
                    </div>

                </form>

            </div> 

            <LanguageChanger 
                className='language-changer-div'
                onChange={handleLanguageSelection}
                initialLanguage={userData.language}
                
            />

        </>            

    );
}