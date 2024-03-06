import React from 'react';
import errorImage from '../images/Daco_5575399.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import googleWritingSvg from "../images/google-writing-svg.svg";
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';


export const CreateAccountcomponent = ({ 
    firstName,
    lastName,
    handleNextClick,
    isImagePreloaded,
    onFirstNameInputChange,
    onLastNameInputChange,
    errorCondition,
    handleLanguageSelection,
    text,
    isImageLoaded,
    translationLoading,
    userData,
    
}) => {

    return (

        <>

            <div id='google-container-BG'>

                <div className={!isImageLoaded || translationLoading ? "empty-blue-snake-loader" : 'empty-blue-snake-loader-placeholder'}>
                <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-BG"/>

                <form>

                    <h1 class="thin h1-space">{text.CreateAccount.h1[userData.language]}</h1>
                    <h2 class='thin gap'>{text.CreateAccount.h2[userData.language]}</h2>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1.25},
                            width: 363,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField 
                            error={errorCondition}
                            id="firstNameInput" 
                            label={text.CreateAccount.firstName[userData.language]}
                            variant="outlined" 
                            fullWidth
                            value={firstName}
                            onChange={onFirstNameInputChange}
                            InputLabelProps={
                                errorCondition ? 
                                { 
                                    sx: {
                                        color: firstName ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                        '&.Mui-focused': {
                                            color: '#d32f2f !important',
                                        },
                                    },
                                } : {}
                            }
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
                                    }
                                }
                            }
                        />
                        <TextField 
                            label={text.CreateAccount.lastName[userData.language]}
                            className='last-name-margin-top' 
                            variant="outlined" 
                            fullWidth
                            value={lastName}
                            onChange={onLastNameInputChange}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&:hover:not(.Mui-focused) fieldset": {
                                    borderColor: "#dadce0"
                                    },
                                    "& fieldset": {
                                        borderColor: "#dadce0"
                                    },
                                },
                            }}
                        />       
                    </Box>

                    {errorCondition === "firstNameEmpty" && isImagePreloaded ? (
                        <div class='error-div'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.CreateAccount.error1[userData.language]}</p>
                        </div>
                    ) : errorCondition === "areYouSureCorrect" && isImagePreloaded ? (
                        <div class='error-div'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.CreateAccount.error2[userData.language]}</p>
                        </div>
                    ) : (
                        <div className='hidden-error-message-container-create-account'></div>
                    )} 

                    <div class={errorCondition === "firstNameEmpty" || errorCondition === "areYouSureCorrect" ? 'button-right-first-name-empty' : 'button-right-ca'}>
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
                                {text.CreateAccount.next[userData.language]}
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
};