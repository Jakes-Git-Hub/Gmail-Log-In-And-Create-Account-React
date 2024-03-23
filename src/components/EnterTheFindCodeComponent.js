import React from 'react';
import errorImage from '../images/Daco_5575399.png';
import TextField from '@mui/material/TextField';
import googleWritingSvg from "../images/google-writing-svg.svg";
import SecondaryGreyButton from './buttons/SecondaryGreyButtonComponent';
import CustomNextButton from './buttons/CustomNextButtonComponent'; 
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';

export const EnterTheFindCodeComponent = ({
    handleNextClick,
    isImagePreloaded,
    isImageLoaded,
    handleUserVerificationCodeInput,
    usersVerificationCodeInput,
    errorCondition,
    theme,
    text,
    handleLanguageSelection,
    userData,
}) => {
    
    return (

        <>

            <div id='google-container-BG'>
                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-BG"/>

                <form>

                    <h1 class="thin h1-space">{text.EnterTheCode.h1[userData.language]}</h1>

                    <p id='p-enter-the-code'>{text.EnterTheCode.h2[userData.language]}</p>

                    <div class="line-height label-input-width input-label" id='username-input-width'>
                        <Box>
                            <span id={errorCondition ? 'static-G-error' : "static-G"}>
                                G-
                            </span>

                            <ThemeProvider theme={theme}>
                                <TextField
                                    id="code-input"
                                    fullWidth error={errorCondition}
                                    value={usersVerificationCodeInput}
                                    label={text.EnterTheCode.enterCode[userData.language]}
                                    onChange={handleUserVerificationCodeInput}
                                    InputLabelProps={
                                        errorCondition ? 
                                        { 
                                            sx: {
                                                color: usersVerificationCodeInput ? '#d32f2f' : 'rgb(95,99,104) !important',
                                                '&.Mui-focused': {
                                                    color: '#d32f2f !important',
                                                },
                                            },
                                        } : {
                                            sx: {
                                                color: "rgb(95,99,104)",
                                            }
                                        }
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
                                            },
                                        }
                                    }
                                />
                            </ThemeProvider>
                        </Box>
                    </div>

                    {errorCondition === "inputEmpty" && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-etc'>
                            <svg aria-hidden="true" class="error-image" fill="rgb(217, 48, 37)" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                            </svg>
                            <p class="input-error-message">{text.EnterTheCode.error1[userData.language]}</p>
                        </div>
                    ) : errorCondition === "wrongNumberOfDigits" && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-etc'>
                            <svg aria-hidden="true" class="error-image" fill="rgb(217, 48, 37)" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                            </svg>
                            <p class="input-error-message">{text.EnterTheCode.error2[userData.language]}</p>
                        </div>
                    ) : errorCondition === "wrongCode" && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-etc'>
                            <svg aria-hidden="true" class="error-image" fill="rgb(217, 48, 37)" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                            </svg>
                            <p class="input-error-message">{text.EnterTheCode.error3[userData.language]}</p>
                        </div>
                    ) : errorCondition === "hasLetters" && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-etc'>
                            <svg aria-hidden="true" class="error-image" fill="rgb(217, 48, 37)" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                            </svg>
                            <p class="input-error-message">C{text.EnterTheCode.error4[userData.language]}</p>
                        </div>
                    ) : (
                        <div className='hidden-error-message-container-BI'></div>
                    )}

                    <div id={errorCondition ? "buttons-container-enter-the-code-error" : "buttons-container-enter-the-code"}>
                        <div id="next-button-container-etc">
                            <CustomNextButton 
                                    variant="contained" 
                                    onClick={handleNextClick}
                                    sx={{
                                        '&& .MuiTouchRipple-rippleVisible': {
                                            animationDuration: '300ms',
                                        },
                                    }}
                            >
                                <div className="next">
                                    {text.EnterTheCode.next[userData.language]}
                                </div>
                            </CustomNextButton>
                        </div>
                    </div>

                </form>

            </div>

            <LanguageChanger 
                className='language-changer-div'
                onChange={handleLanguageSelection}
                initialLanguage={userData.language}
                
            />

        </>
    )
}