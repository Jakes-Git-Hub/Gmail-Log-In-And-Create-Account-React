import React, { memo } from 'react';
import errorImage from '../images/Daco_5575399.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomNextButton from './CustomNextButtonComponent';

export const CreateAccountcomponent = memo(({ 
    firstName,
    lastName,
    handleNextClick,
    isImagePreloaded,
    onFirstNameInputChange,
    onLastNameInputChange,
    errorCondition,
    handleLanguageSelection,
    text,
}) => {

    return (
        <form>

            <h1 class="thin h1-space">{text.h1}</h1>
            <h2 class='thin gap'>{text.h2}</h2>

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
                    label={text.firstName}
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
                    label={text.lastName}
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
                    <p class="input-error-message">Enter first name</p>
                </div>
            ) : errorCondition === "areYouSureCorrect" && isImagePreloaded ? (
                <div class='error-div'>
                    <img className='error-image' src={errorImage} alt='Error Image' />
                    <p class="input-error-message">Are you sure you entered your name correctly?</p>
                </div>
            ) : (
                <div className='hidden-error-message-container-create-account'></div>
            )} 

            <div class={errorCondition === "firstNameEmpty" || errorCondition === "areYouSureCorrect" ? 'button-right-first-name-empty' : 'button-right'}>
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
                        {text.next}
                    </div>
                </CustomNextButton>
            </div>

            <div className='language-changer-div'>
                <select onChange={handleLanguageSelection}>
                    <option value="es">Translate to Spanish</option>
                    <option value="fr">Translate to French</option>
                    <option value="de">Translate to German</option>
                </select>
            </div>

        </form>
    );
});