import React from 'react';
import errorImage from '../images/Daco_5575399.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import googleWritingSvg from "../images/google-writing-svg.svg";

export const ChooseYourGmailAddressComponent = ({ 
    email,
    handleNextClick,
    isImagePreloaded,
    errorCondition,
    handleSelectEmail,
    text,
    handleLanguageSelection,
    isImageLoaded,
}) => {

    return (

        <>

            <div id='google-container-BG'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : "empty-blue-snake-loader"}>
                <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-BG"/>

                <form>

                    <h1 class="thin h1-space">{text.ChooseYourGmailAddress.h1}</h1>

                    <h2 class='thin gap center' id='h2'>{text.ChooseYourGmailAddress.h2}</h2>

                    <div class="space line-height label-input-width input-label" id='username-input-width'>
                        <Box>
                            <TextField
                                fullWidth error={errorCondition}
                                id='usernameInput'
                                value={email}
                                type='text'
                                label={text.ChooseYourGmailAddress.username}
                                onChange={handleSelectEmail}
                                InputLabelProps={
                                    errorCondition ? 
                                    { 
                                        sx: {
                                            color: email ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                            '&.Mui-focused': {
                                                color: '#d32f2f !important',
                                            },
                                        },
                                    } : {}
                                }
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                            <Typography sx={{ color: '#202124', fontSize: '0.875em', fontWeight: '400' }}>
                                                @gmail.com
                                            </Typography>
                                        </InputAdornment>,
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
                                        }
                                    }
                                }
                            />
                        </Box> 
                    </div>

                    {errorCondition === "isIncorrectLength" && isImagePreloaded ? (
                        <div class='long-error-div' id='error-div-space'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message-6-30">{text.ChooseYourGmailAddress.error1}</p>
                        </div>
                    ) : errorCondition === "usernameEmpty" && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.ChooseYourGmailAddress.error2}</p>
                        </div>
                    ) : errorCondition === "usesUnallowedChars" && isImagePreloaded ? (
                        <div class='long-error-div' id='error-div-space'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.ChooseYourGmailAddress.error3}</p>
                        </div>
                    ) : errorCondition === "usernameIsAlreadyTaken" && isImagePreloaded ? (
                        <div class='long-error-div' id='error-div-space'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.ChooseYourGmailAddress.error4}</p>
                        </div>
                    ) : (
                        <div class='below-input-small-grey'>
                            <p class='small-grey'>{text.ChooseYourGmailAddress.youCanUse}</p>
                        </div>
                    )}

                    <div id='button-right-choose-email'>
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

            <div className='language-changer-div'>
                <select onChange={handleLanguageSelection}>
                    <option value="es">Translate to Spanish</option>
                    <option value="fr">Translate to French</option>
                    <option value="de">Translate to German</option>
                </select>
            </div>

        </>

    );
}