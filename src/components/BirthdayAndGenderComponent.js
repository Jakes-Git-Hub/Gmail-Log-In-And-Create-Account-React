import React from 'react';
import errorImage from '../images/Daco_5575399.png';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import googleWritingSvg from "../images/google-writing-svg.svg";
import CustomNextButton from './CustomNextButtonComponent';

export const BirthdayAndGenderComponent = ({
    month, 
    handleSelectMonth,
    day,
    handleSelectDay,
    year,
    handleSelectYear,
    gender,
    handleSelectGender,
    handleNextClick,
    isImagePreloaded,
    genderEmpty,
    errorCondition,
    isImageLoaded,
    customGender,
    handleSelectCustomGender,
    customGenderEmpty,
    pronounEmpty,
    pronoun,
    handleSelectPronoun,
    isCustomChecked,
    handleLanguageSelection,
    text,
}) => {
    
    return (
        <>
            <div id='google-container-BG'>
                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : "empty-blue-snake-loader"}>
                <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-BG"/>

            
                <form>

                    <h1 class="thin h1-space">{text.BirthdayAndGender.h1}</h1>

                    <h2 class='thin gap'>{text.BirthdayAndGender.h2}</h2>

                    <div class='third-container-basic-information'>

{/* Month */}

                        <Box sx={{ width: 'calc(32.5% - 2px)' }}>
                            <FormControl fullWidth error={errorCondition}>
                                <InputLabel 
                                    sx={errorCondition ? 
                                        {
                                            color: month ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                            '&.Mui-focused': {
                                                color: '#d32f2f !important',
                                            },
                                        } : {}
                                    } 
                                >
                                    {text.BirthdayAndGender.month}
                                </InputLabel>
                                <Select
                                    value={month}
                                    label={text.BirthdayAndGender.month}
                                    onChange={(e) => handleSelectMonth(e, year, day)}
                                    native="true"
                                    sx={{
                                        "&:hover:not(.Mui-focused)": {
                                            "&& fieldset": {
                                                borderColor: errorCondition ? "" : "#dadce0",
                                            },
                                        },
                                        ".MuiOutlinedInput-notchedOutline": {
                                            borderColor: '#dadce0',
                                        },
                                        '.MuiSvgIcon-root ': {
                                            fill: "#9e9e9e",
                                            fontSize: '1.8rem',
                                        },
                                    }}
                                >
                                    <option value="" hidden></option>
                                    <option value="January">{text.BirthdayAndGender.january}</option>
                                    <option value="February">{text.BirthdayAndGender.february}</option>
                                    <option value="March">{text.BirthdayAndGender.march}</option>
                                    <option value="April">{text.BirthdayAndGender.april}</option>
                                    <option value="May">{text.BirthdayAndGender.may}</option>
                                    <option value="June">{text.BirthdayAndGender.june}</option>
                                    <option value="July">{text.BirthdayAndGender.july}</option>
                                    <option value="August">{text.BirthdayAndGender.august}</option>
                                    <option value="September">{text.BirthdayAndGender.september}</option>
                                    <option value="October">{text.BirthdayAndGender.october}</option>
                                    <option value="November">{text.BirthdayAndGender.november}</option>
                                    <option value="December">{text.BirthdayAndGender.december}</option>

                                </Select>
                            </FormControl>
                        </Box>

{/* Day */}

                        <Box sx={{ width: 'calc(32.5% - 10px)' }}>
                            <TextField
                                fullWidth error={errorCondition}
                                value={day}
                                label={text.BirthdayAndGender.day}
                                onChange={(e) => handleSelectDay(e, year, month)}
                                maxLength="2"
                                InputLabelProps={
                                    errorCondition ? 
                                    { 
                                        sx: {
                                            color: day ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
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
                        </Box>

{/* Year */}

                        <Box sx={{ width: 'calc(32.5% - 10px)' }}>
                            <TextField
                                fullWidth error={errorCondition}
                                value={year}
                                label={text.BirthdayAndGender.year}
                                onChange={(e) => handleSelectYear(e, day, month)}
                                maxLength="4"
                                InputLabelProps={
                                    errorCondition ? 
                                    { 
                                        sx: {
                                            color: year ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
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
                        </Box>

                    </div>

                    {errorCondition === 'incompleteBirthday' && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-basic-info'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">Please fill in a complete birthday</p>
                        </div>
                    ) : errorCondition === 'isWrongFormat' && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-basic-info'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">Please enter a valid date</p>
                        </div>
                    ) : (
                        <div className='hidden-error-message-container-create-account'></div>
                    )}

{/* Gender */}

                    <div class='line-height gender-input-width' id='gender-space'>
                        <Box>
                            <FormControl fullWidth error={genderEmpty}>
                                <InputLabel 
                                sx={genderEmpty ? 
                                    {
                                        color: gender ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                        '&.Mui-focused': {
                                            color: '#d32f2f !important',
                                        },
                                    } : {}
                                } 
                                >  
                                    {text.BirthdayAndGender.gender}
                                </InputLabel>
                                <Select
                                    value={gender}
                                    label={text.BirthdayAndGender.gender}
                                    onChange={handleSelectGender}
                                    native="true"
                                    sx={{
                                        "&:hover:not(.Mui-focused)": {
                                            "&& fieldset": {
                                                borderColor: genderEmpty ? "" : "#dadce0",
                                            },
                                        },
                                        ".MuiOutlinedInput-notchedOutline": {
                                            borderColor: '#dadce0',
                                        },
                                        '.MuiSvgIcon-root ': {
                                            fill: "#9e9e9e",
                                            fontSize: '1.8rem',
                                        },
                                    }}
                                >
                                    <option value="" hidden></option>
                                    <option value="Female">{text.BirthdayAndGender.female}</option>
                                    <option value="Male">{text.BirthdayAndGender.male}</option>
                                    <option value="Rather not say">{text.BirthdayAndGender.ratherNotSay}</option>
                                    <option value="Custom">{text.BirthdayAndGender.custom}</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>  

                    {genderEmpty && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-basic-info'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">Please select your gender</p>
                        </div>
                    ) : (
                        <div className='hidden-error-message-container-BI'></div>
                    )}

{/* Hidden Gender Options */}

    {/* What's Your Gender? */}

                    {isCustomChecked && (
                        <>
                            <div class='line-height gender-input-width' id='gender-space'>
                                <Box>
                                        <TextField
                                            fullWidth error={customGenderEmpty}
                                            value={customGender}
                                            label={text.BirthdayAndGender.whatsYourGender}
                                            onChange={handleSelectCustomGender}
                                            InputLabelProps={
                                                customGenderEmpty ? 
                                                { 
                                                    sx: {
                                                        color: customGender ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                                        '&.Mui-focused': {
                                                            color: '#d32f2f !important',
                                                        },
                                                    },
                                                } : {}
                                            }
                                            sx={
                                                customGenderEmpty ? 
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

                            {customGenderEmpty && isImagePreloaded ? (
                                <div class='error-div' id='error-div-space-basic-info'>
                                    <img className='error-image' src={errorImage} alt='Error Image' />
                                    <p class="input-error-message">Please indicate the gender you most identify with</p>
                                </div>
                            ) : (
                                <div className='hidden-error-message-container-BI'></div>
                            )}

                            <div class='line-height gender-input-width' id='gender-space'>
                                <Box>
                                    <FormControl fullWidth error={pronounEmpty}>
                                        <InputLabel 
                                        sx={pronounEmpty ? 
                                            {
                                                color: pronoun ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                                '&.Mui-focused': {
                                                    color: '#d32f2f !important',
                                                },
                                            } : {}
                                        } 
                                        >  
                                            {text.BirthdayAndGender.pleaseReferToMeAs}
                                        </InputLabel>
                                        <Select
                                            value={pronoun}
                                            label={text.BirthdayAndGender.pleaseReferToMeAs}
                                            onChange={handleSelectPronoun}
                                            native="true"
                                            sx={{
                                                "&:hover:not(.Mui-focused)": {
                                                    "&& fieldset": {
                                                        borderColor: pronounEmpty ? "" : "#dadce0",
                                                    },
                                                },
                                                ".MuiOutlinedInput-notchedOutline": {
                                                    borderColor: '#dadce0',
                                                },
                                                '.MuiSvgIcon-root ': {
                                                    fill: "#9e9e9e",
                                                },
                                            }}
                                        >
                                            <option value="" hidden></option>
                                            <option value="Female">{text.BirthdayAndGender.female}</option>
                                            <option value="Male">{text.BirthdayAndGender.male}</option>
                                            <option value="Other">{text.BirthdayAndGender.other}</option>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>

                            {pronounEmpty && isImagePreloaded ? (
                                <div class='error-div' id='error-div-space-basic-info'>
                                    <img className='error-image' src={errorImage} alt='Error Image' />
                                    <p class="input-error-message">Please select a pronoun</p>
                                </div>
                            ) : (
                                <div className='hidden-error-message-container-BI'></div>
                            )} 
                        </>
                    )}
        

                    <section class={errorCondition || genderEmpty ? 'button-right-error-BI' : 'button-right-BI'}>
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
                    </section>

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
    )
}