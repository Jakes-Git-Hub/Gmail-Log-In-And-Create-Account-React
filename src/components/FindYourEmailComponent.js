import React from 'react';
import TextField from '@mui/material/TextField';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import googleWritingSvg from "../images/google-writing-svg.svg";
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';


export const FindYourEmailComponent = ({ 
    phoneNumberOrEmail,
    handleNextClick,
    isImagePreloaded,
    errorCondition,
    handleLanguageSelection,
    text,
    isImageLoaded,
    userData,
    onPhoneNumberOrEmailInputChange,

}) => {

    return (

        <>

            <div id='google-container-BG'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-BG"/>

                <form>

                    <h1 class="thin h1-space">{text.FindYourEmail.h1[userData.language]}</h1>
                    <h2 class='thin gap'>Enter your phone number or recovery email</h2>

                    <TextField 
                        className="standard-text-field"
                        error={errorCondition}
                        id="phoneNumberOrEmailInput" 
                        label='Phone number or email'
                        variant="outlined" 
                        fullWidth
                        value={phoneNumberOrEmail}
                        onChange={onPhoneNumberOrEmailInputChange}
                        InputLabelProps={
                            errorCondition ? 
                            { 
                                sx: {
                                    color: phoneNumberOrEmail ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
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

                    {errorCondition === "phoneNumberOrEmailEmpty" && isImagePreloaded ? (
                        <div class='error-div'>
                            <svg aria-hidden="true" class="error-image" fill="rgb(217, 48, 37)" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                            </svg>
                            <p class="input-error-message">Enter a valid email or phone number</p>
                        </div>
                    ) : errorCondition === "wrongCredentials" && isImagePreloaded ? (
                        <div class='error-div'>
                            <svg aria-hidden="true" class="error-image" fill="rgb(217, 48, 37)" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                            </svg>
                            <p class="input-error-message">Please enter a valid email address or phone number</p>
                        </div>
                    ) : (
                        <div className='hidden-error-message-container-create-account'></div>
                    )} 

                    <div class={errorCondition ? 'button-right-find-email-empty' : 'button-right-find-email'}>
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
                                Next
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