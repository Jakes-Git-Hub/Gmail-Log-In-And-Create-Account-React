import React from 'react';
import Select, { SingleValueProps, StylesConfig } from 'react-select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import googleWritingSvg from '../images/google-writing-svg.svg';
import InputAdornment from '@mui/material/InputAdornment';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';
import { OptionType } from '../types/OptionType';

interface ConfirmYoureNotARobotComponentProps {
    phoneNumber: string;
    handleSelectPhoneNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNextClick: () => void;
    customOptions: OptionType[];
    customStyles: StylesConfig<OptionType, false>;
    customDropdownIndicator: React.ComponentType<any>;
    placeholderContent: React.ReactNode;
    selectedOption: OptionType | null;
    chosenCountryFlagImage: React.ComponentType<SingleValueProps<OptionType, false>>;
    isImageLoaded: boolean;
    handleCountrySelect: (selectedOption: OptionType | null) => void;
    errorCondition: string | null;
    actualSelectedOption: boolean | null;
    formattedPhoneNumber: string;
    text: any;
    unitedKingdom: OptionType;
    handleLanguageSelection: (language: string) => void;
    userData: any;
    loading: boolean;
}

export const ConfirmYoureNotARobotComponent: React.FC<ConfirmYoureNotARobotComponentProps> = ({ 
    phoneNumber,
    handleSelectPhoneNumber,
    handleNextClick,
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
    text,
    unitedKingdom,
    handleLanguageSelection,
    userData,
    loading,
}) => {

    return (

        <>

            <main id='google-container-responsive' data-testid='CYNAR'>
                <div className={!isImageLoaded || loading ? 'empty-blue-snake-loader' : 'empty-blue-snake-loader-placeholder'}>
                    <div className='blue-snake-loader'></div>
                </div>
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-BG'/>

                <form>

                    <h1 className='thin' id='h1-cynar'>{text.ConfirmYoureNotARobot.h1[userData.language]}</h1>

                    <div id='h2-cynar-div'>
                        <h2 id='h2-cynar'>{text.ConfirmYoureNotARobot.h2[userData.language]}</h2>
                    </div>
                    
                    <div id='add-phone-number-dropdown-and-input'>
                        <Select
                            styles={customStyles}
                            // class='flag-drop-down'
                            options={customOptions}
                            aria-label='Select your Country'
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

                        <div className='line-height gender-input-width' id='phoneNumber-input-width'>
                            <Box>
                                    <TextField
                                        autoFocus
                                        fullWidth error={!!errorCondition}
                                        id='phoneNumberInput'
                                        value={phoneNumber}
                                        label={text.ConfirmYoureNotARobot.phoneNumber[userData.language]}
                                        type='number text'
                                        onChange={handleSelectPhoneNumber}
                                        aria-label='Enter your Number (without dialing code)'
                                        aria-invalid={errorCondition ? true : false}
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
                                            startAdornment: actualSelectedOption && selectedOption ? (
                                                <InputAdornment position='start' sx={{color: 'rgba(0, 0, 0, 0.87)', marginTop: '2.5px'}}>
                                                        {selectedOption.value.dialingCode ? selectedOption.value.dialingCode : unitedKingdom.value.dialingCode}
                                                </InputAdornment>
                                            ) : null,
                                        }}
                                        sx={
                                            errorCondition ? 
                                            {} : 
                                            {
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover:not(.Mui-focused) fieldset': {
                                                        borderColor: '#dadce0'
                                                    },
                                                    '& fieldset': {
                                                        borderColor: '#dadce0'
                                                    },
                                                },
                                            }
                                        }
                                    />
                            </Box>  
                        </div>
                    </div>

                    {errorCondition === 'phoneNumberEmpty'  ? (
                        <div className='long-error-div' id='error-div-space-cynar'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.ConfirmYoureNotARobot.error1[userData.language]}</p>
                        </div>
                    ) : errorCondition === 'incorrectFormat'  ? (
                        <div className='error-div' id='error-div-space-cynar'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.ConfirmYoureNotARobot.error2[userData.language]}</p>
                        </div>
                    ) : errorCondition === 'alreadyRegistered'  ? (
                        <div className='error-div' id='error-div-space-cynar'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.ConfirmYoureNotARobot.error3[userData.language]}</p>
                        </div>
                    ) : errorCondition === 'incorrectNumber'  ? (
                        <div className='error-div' id='error-div-space-cynar'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.ConfirmYoureNotARobot.error4[userData.language]}</p>
                        </div>
                    ) : errorCondition === 'apiLimitReached'  ? (
                        <div className='error-div' id='error-div-space-cynar'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.ConfirmYoureNotARobot.error5[userData.language]}</p>
                        </div>
                    ) : null}

                    <div className='below-input-small-grey-cynar'>
                        <p className='small-grey-cynar'>{text.ConfirmYoureNotARobot.googleWillVerify[userData.language]}</p>
                    </div>
                    
                    <div id={formattedPhoneNumber ? 'button-right-robot-confirm' : 'button-right-robot'}>
                        <CustomNextButton 
                            variant='contained' 
                            onClick={handleNextClick}
                            aria-label='Next button'
                            sx={{
                                '&& .MuiTouchRipple-rippleVisible': {
                                    animationDuration: '300ms',
                                },
                            }}
                        >
                            <div className='next'>
                            {text.ConfirmYoureNotARobot.next[userData.language]}
                            </div>
                        </CustomNextButton>
                    </div>

                </form>

            </main> 

            <LanguageChanger
                className='language-changer-div'
                onChange={handleLanguageSelection}
                initialLanguage={userData.language}
                aria-label='Change language'
                text={text}
            />

        </>            

    );
}