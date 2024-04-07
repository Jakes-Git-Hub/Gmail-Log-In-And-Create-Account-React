import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import googleWritingSvg from '../images/google-writing-svg.svg';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';
import LanguageChangerOverflow from './LanguageChanger/LanguageChangerOverflowComponent';

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
    text,
    handleLanguageSelection,
    userData,
}) => {
    
    return (
        <>
            <main id='google-container-responsive'>
                
                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className='blue-snake-loader'></div>
                </div>
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-BG'/>

            
                <form>

                    <h1 class='thin h1-space'>{text.BirthdayAndGender.h1[userData.language]}</h1>

                    <h2 class='thin h2-bg'>{text.BirthdayAndGender.h2[userData.language]}</h2>

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
                                    {text.BirthdayAndGender.month[userData.language]}
                                </InputLabel>
                                <Select
                                    value={month}
                                    label={text.BirthdayAndGender.month[userData.language]}
                                    onChange={(e) => handleSelectMonth(e, year, day)}
                                    native='true'
                                    aria-label='select month of birth'
                                    aria-invalid={errorCondition ? true : false}
                                    sx={{
                                        '&:hover:not(.Mui-focused)': {
                                            '&& fieldset': {
                                                borderColor: errorCondition ? '' : '#dadce0',
                                            },
                                        },
                                        '.MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#dadce0',
                                        },
                                        '.MuiSvgIcon-root ': {
                                            fill: '#9e9e9e',
                                            fontSize: '1.8rem',
                                        },
                                    }}
                                >
                                    <option value='' hidden></option>
                                    <option value='January'>{text.BirthdayAndGender.january[userData.language]}</option>
                                    <option value='February'>{text.BirthdayAndGender.february[userData.language]}</option>
                                    <option value='March'>{text.BirthdayAndGender.march[userData.language]}</option>
                                    <option value='April'>{text.BirthdayAndGender.april[userData.language]}</option>
                                    <option value='May'>{text.BirthdayAndGender.may[userData.language]}</option>
                                    <option value='June'>{text.BirthdayAndGender.june[userData.language]}</option>
                                    <option value='July'>{text.BirthdayAndGender.july[userData.language]}</option>
                                    <option value='August'>{text.BirthdayAndGender.august[userData.language]}</option>
                                    <option value='September'>{text.BirthdayAndGender.september[userData.language]}</option>
                                    <option value='October'>{text.BirthdayAndGender.october[userData.language]}</option>
                                    <option value='November'>{text.BirthdayAndGender.november[userData.language]}</option>
                                    <option value='December'>{text.BirthdayAndGender.december[userData.language]}</option>

                                </Select>
                            </FormControl>
                        </Box>

{/* Day */}

                        <Box sx={{ width: 'calc(32.5% - 10px)' }}>
                            <TextField
                                fullWidth error={errorCondition}
                                value={day}
                                label={text.BirthdayAndGender.day[userData.language]}
                                onChange={(e) => handleSelectDay(e, year, month)}
                                maxLength='2'
                                aria-label='Enter day of birth'
                                aria-invalid={errorCondition ? true : false}
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
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover:not(.Mui-focused) fieldset': {
                                                borderColor: '#dadce0'
                                            },
                                            '& fieldset': {
                                                borderColor: '#dadce0'
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
                                label={text.BirthdayAndGender.year[userData.language]}
                                onChange={(e) => handleSelectYear(e, day, month)}
                                maxLength='4'
                                aria-label='Enter year of birth'
                                aria-invalid={errorCondition ? true : false}
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
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover:not(.Mui-focused) fieldset': {
                                                borderColor: '#dadce0'
                                            },
                                            '& fieldset': {
                                                borderColor: '#dadce0'
                                            },
                                        }
                                    }
                                }
                            />
                        </Box>

                    </div>

                    {errorCondition === 'incompleteBirthday' && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-basic-info'>
                            <svg aria-hidden='true' class='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p class='input-error-message'>{text.BirthdayAndGender.pleaseFillInCompleteBirthday[userData.language]}</p>
                        </div>
                    ) : errorCondition === 'isWrongFormat' && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-basic-info'>
                            <svg aria-hidden='true' class='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p class='input-error-message'>{text.BirthdayAndGender.pleaseEnterVAlidDate[userData.language]}</p>
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
                                    {text.BirthdayAndGender.gender[userData.language]}
                                </InputLabel>
                                <Select
                                    value={gender}
                                    label={text.BirthdayAndGender.gender[userData.language]}
                                    onChange={handleSelectGender}
                                    aria-label='Select your gender'
                                    aria-invalid={errorCondition ? true : false}
                                    native='true'
                                    sx={{
                                        '&:hover:not(.Mui-focused)': {
                                            '&& fieldset': {
                                                borderColor: genderEmpty ? '' : '#dadce0',
                                            },
                                        },
                                        '.MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#dadce0',
                                        },
                                        '.MuiSvgIcon-root ': {
                                            fill: '#9e9e9e',
                                            fontSize: '1.8rem',
                                        },
                                    }}
                                >
                                    <option value='' hidden></option>
                                    <option value='Female'>{text.BirthdayAndGender.female[userData.language]}</option>
                                    <option value='Male'>{text.BirthdayAndGender.male[userData.language]}</option>
                                    <option value='Rather not say'>{text.BirthdayAndGender.ratherNotSay[userData.language]}</option>
                                    <option value='Custom'>{text.BirthdayAndGender.custom[userData.language]}</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>  

                    {genderEmpty && isImagePreloaded ? (
                        <div class='error-div' id='error-div-space-basic-info'>
                            <svg aria-hidden='true' class='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p class='input-error-message'>{text.BirthdayAndGender.pleaseSelectGender[userData.language]}</p>
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
                                            label={text.BirthdayAndGender.whatsYourGender[userData.language]}
                                            onChange={handleSelectCustomGender}
                                            aria-label='State your gender identity'
                                            aria-invalid={errorCondition ? true : false}
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
                                                    '& .MuiOutlinedInput-root': {
                                                        '&:hover:not(.Mui-focused) fieldset': {
                                                            borderColor: '#dadce0'
                                                        },
                                                        '& fieldset': {
                                                            borderColor: '#dadce0'
                                                        },
                                                    }
                                                }
                                            }
                                        />
                                </Box>  
                            </div>

                            {customGenderEmpty && isImagePreloaded ? (
                                <div class='error-div' id='error-div-space-basic-info'>
                                    <svg aria-hidden='true' class='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                                    </svg>
                                    <p class='input-error-message'>{text.BirthdayAndGender.pleaseIndicateGender[userData.language]}</p>
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
                                            {text.BirthdayAndGender.pleaseReferToMeAs[userData.language]}
                                        </InputLabel>
                                        <Select
                                            value={pronoun}
                                            label={text.BirthdayAndGender.pleaseReferToMeAs[userData.language]}
                                            onChange={handleSelectPronoun}
                                            aria-label='Select your gender'
                                            aria-invalid={errorCondition ? true : false}
                                            native='true'
                                            sx={{
                                                '&:hover:not(.Mui-focused)': {
                                                    '&& fieldset': {
                                                        borderColor: pronounEmpty ? '' : '#dadce0',
                                                    },
                                                },
                                                '.MuiOutlinedInput-notchedOutline': {
                                                    borderColor: '#dadce0',
                                                },
                                                '.MuiSvgIcon-root ': {
                                                    fill: '#9e9e9e',
                                                },
                                            }}
                                        >
                                            <option value='' hidden></option>
                                            <option value='Female'>{text.BirthdayAndGender.female[userData.language]}</option>
                                            <option value='Male'>{text.BirthdayAndGender.male[userData.language]}</option>
                                            <option value='Other'>{text.BirthdayAndGender.other[userData.language]}</option>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>

                            {pronounEmpty && isImagePreloaded ? (
                                <div class='error-div' id='error-div-space-basic-info'>
                                    <svg aria-hidden='true' class='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                                    </svg>
                                    <p class='input-error-message'>{text.BirthdayAndGender.pleaseSelectPronoun[userData.language]}</p>
                                </div>
                            ) : (
                                <div className='hidden-error-message-container-BI'></div>
                            )} 
                        </>
                    )}
        

                    <section class={errorCondition || genderEmpty ? 'button-right-error-BI' : 'button-right-BI'}>
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
                            <div class='next'>
                                {text.BirthdayAndGender.next[userData.language]}
                            </div>
                        </CustomNextButton>
                    </section>

                </form>

            </main>

            { isCustomChecked ? (
                <LanguageChangerOverflow
                    onChange={handleLanguageSelection}
                    initialLanguage={userData.language}
                    aria-label='Change language'
                />
            ) : (
                <LanguageChanger
                    onChange={handleLanguageSelection}
                    initialLanguage={userData.language}
                    aria-label='Change language'
                />
            )}

        </>
    )
}