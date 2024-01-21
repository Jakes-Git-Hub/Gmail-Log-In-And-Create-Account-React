import React from 'react';
import errorImage from '../images/Daco_5575399.png';
import TextField from '@mui/material/TextField';
import googleWritingSvg from "../images/google-writing-svg.svg";
import SecondaryGreyButton from './SecondaryGreyButtonComponent';
import CustomNextButton from './CustomNextButtonComponent'; 
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

export const EnterTheCodeComponent = ({
    handleNextClick,
    isImagePreloaded,
    isImageLoaded,
    handleUserVerificationCodeInput,
    usersVerificationCodeInput,
    errorCondition,
    theme,
    getNewCode,
    getNewCodeButtonDisabled,
    disabledCount,
}) => {
    
    return (
        <div id='google-container-BG'>
            <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : "empty-blue-snake-loader"}>
            <div className="blue-snake-loader"></div>
            </div>
            <img src={googleWritingSvg} alt="Google Writing" id="google-writing-BG"/>

            <form>

                <h1 class="thin h1-space">Enter the code</h1>

                <p id='p-enter-the-code'>Enter the 6-digit verification code to confirm you got the text message</p>

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
                                label="Enter code"
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
                        <img className='error-image' src={errorImage} alt='Error Image' />
                        <p class="input-error-message">Enter a code</p>
                    </div>
                ) : errorCondition === "wrongNumberOfDigits" && isImagePreloaded ? (
                    <div class='error-div' id='error-div-space-etc'>
                        <img className='error-image' src={errorImage} alt='Error Image' />
                        <p class="input-error-message">Wrong number of digits. Try again.</p>
                    </div>
                ) : errorCondition === "wrongCode" && isImagePreloaded ? (
                    <div class='error-div' id='error-div-space-etc'>
                        <img className='error-image' src={errorImage} alt='Error Image' />
                        <p class="input-error-message">Wrong code. Try Again</p>
                    </div>
                ) : errorCondition === "hasLetters" && isImagePreloaded ? (
                    <div class='error-div' id='error-div-space-etc'>
                        <img className='error-image' src={errorImage} alt='Error Image' />
                        <p class="input-error-message">Code has numbers only. Try again.</p>
                    </div>
                ) : (
                    <div className='hidden-error-message-container-BI'></div>
                )}

                <div id={errorCondition ? "buttons-container-enter-the-code-error" : "buttons-container-enter-the-code"}>
                        
                    {getNewCodeButtonDisabled ? (
                        <div id="secondary-button-container-etc">
                            <SecondaryGreyButton 
                                    variant="contained" 
                                    onClick={getNewCode}
                                    disabled
                                    sx={{
                                        '&& .MuiTouchRipple-rippleVisible': {
                                            animationDuration: '300ms',
                                        },
                                        backgroundColor: 'transparent !important',
                                    }}
                            >
                                <div className="get-new-code-text">
                                    {`Get new code (${disabledCount} seconds)`}
                                </div>
                            </SecondaryGreyButton>
                        </div>
                    ) : (
                        <div id="secondary-button-container-etc">
                            <SecondaryGreyButton 
                                    variant="contained" 
                                    onClick={getNewCode}
                                    sx={{
                                        '&& .MuiTouchRipple-rippleVisible': {
                                            animationDuration: '300ms',
                                        },
                                    }}
                            >
                                <div className="get-new-code-text">
                                    Get new code
                                </div>
                            </SecondaryGreyButton>
                        </div>
                    )}    
                        

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
                                Next
                            </div>
                        </CustomNextButton>
                    </div>
                </div>

            </form>
        </div>
    )
}