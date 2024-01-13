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
    customGenderEmpty,
    usersVerificationCodeInput,
    errorCondition,
    theme,
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
                        <span id='static-G'>
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
                                            color: usersVerificationCodeInput ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                            '&.Mui-focused': {
                                                color: '#d32f2f !important',
                                            },
                                        },
                                    } : {
                                        sx: {
                                            color: "red !important",
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

                {customGenderEmpty && isImagePreloaded ? (
                    <div class='error-div' id='error-div-space-basic-info'>
                        <img className='error-image' src={errorImage} alt='Error Image' />
                        <p class="input-error-message">Please indicate the gender you most identify with</p>
                    </div>
                ) : (
                    <div className='hidden-error-message-container-BI'></div>
                )}

                <div id="buttons-container-enter-the-code">
                    <div id="secondary-button-container-etc">
                        <SecondaryGreyButton 
                                variant="contained" 
                                onClick={handleNextClick}
                                sx={{
                                    '&& .MuiTouchRipple-rippleVisible': {
                                        animationDuration: '300ms',
                                    },
                                }}
                            >
                                    Get new code
                        </SecondaryGreyButton>
                    </div>

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
                                    Next
                        </CustomNextButton>
                    </div>
                </div>

            </form>
        </div>
    )
}