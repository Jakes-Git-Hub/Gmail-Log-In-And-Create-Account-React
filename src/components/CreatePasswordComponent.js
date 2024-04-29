import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import Checkbox from '@mui/material/Checkbox';
import googleWritingSvg from '../images/google-writing-svg.svg';
import LanguageChangerTallerPage from './LanguageChanger/LanguageChangerMediumPageComponent';

export const CreatePasswordComponent = ({ 
    password,
    handleSelectPassword,
    confirmPassword,
    handleSelectConfirmPassword,
    handleNextClick,
    showPassword,
    handleTogglePassword,
    errorCondition,
    text,
    handleLanguageSelection,
    isImageLoaded,
    userData,
}) => {

    return (

        <>

            <div id='google-container-responsive' data-testid='CP'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                <div className='blue-snake-loader'></div>
                </div>
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-BG'/>

                <form>

                    <h1 className='thin h1-space'>{text.CreatePassword.h1[userData.language]}</h1>

                    <div className='width-h2'>
                        <h2 className='thin gap center'>{text.CreatePassword.h2[userData.language]}</h2>
                    </div>

                    <Box id='create-password-space'className=' line-height label-input-width input-label'>
                        <TextField
                            fullWidth error={errorCondition && errorCondition !== 'confirmPasswordEmpty' && errorCondition !== 'passwordMismatch'}
                            id='passwordInput'
                            value={password}
                            type={!showPassword ? 'password' : 'text'}
                            label={text.CreatePassword.password[userData.language]}
                            onChange={handleSelectPassword}
                            InputLabelProps={
                                errorCondition && errorCondition !== 'confirmPasswordEmpty' && errorCondition !== 'passwordMismatch'? 
                                { 
                                    sx: {
                                        color: password ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                        '&.Mui-focused': {
                                            color: '#d32f2f !important',
                                        },
                                    },
                                } : {}
                            }
                            sx={
                                errorCondition && errorCondition !== 'confirmPasswordEmpty' && errorCondition !== 'passwordMismatch'? 
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

                    <Box className='space line-height label-input-width input-label' id='error-message-margin'>
                        <TextField
                            fullWidth error={errorCondition && errorCondition !== 'passwordEmpty' && errorCondition !== 'needs8CharsOrMore'}
                            id='confirmPasswordInput'
                            value={confirmPassword}
                            type={!showPassword ? 'password' : 'text'}
                            label={text.CreatePassword.confirm[userData.language]}
                            onChange={handleSelectConfirmPassword}
                            InputLabelProps={
                                errorCondition && errorCondition !== 'passwordEmpty' && errorCondition !== 'needs8CharsOrMore' ? 
                                { 
                                    sx: {
                                        color: confirmPassword ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                        '&.Mui-focused': {
                                            color: '#d32f2f !important',
                                        },
                                    },
                                } : {}
                            }
                            sx={
                                errorCondition && errorCondition !== 'passwordEmpty' && errorCondition !== 'needs8CharsOrMore' ? 
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

                    {errorCondition === 'passwordEmpty' && (
                        <div className='error-div' id='create-password-error-div'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.CreatePassword.error1[userData.language]}</p>
                        </div>
                    )}

                    {errorCondition === 'confirmPasswordEmpty' && ( 
                        <div className='error-div' id='create-password-error-div'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.CreatePassword.error2[userData.language]}</p>
                        </div>
                    )} 
                    
                    {errorCondition === 'passwordMismatch' && (
                        <div className='error-div' id='create-password-error-div'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.CreatePassword.error3[userData.language]}</p>
                        </div>
                    )}

                    {errorCondition === 'needs8CharsOrMore' && (
                        <div className='error-div' id='create-password-error-div'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.CreatePassword.error4[userData.language]}</p>
                        </div>
                    )}

                    {errorCondition === 'pleaseChooseAStrongerPassword' && (
                        <div className='error-div' id='create-password-error-div-stronger-password'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.CreatePassword.error5[userData.language]}</p>
                        </div>
                    )}

                    <div className='password-toggle checkbox-text-colour'>
                        <Checkbox 
                            defaultChecked
                            type='checkbox'
                            checked={showPassword}
                            onChange={handleTogglePassword}
                            className='custom-checkbox-input'
                            sx={{
                                color: '#5f6368',
                                '&& .MuiTouchRipple-rippleVisible': {
                                    animationDuration: '300ms',
                                },
                                '&:hover': {
                                    color: !showPassword ? '#202124': '',
                                    '& .MuiTouchRipple-root': {
                                        backgroundColor: !showPassword ? '#e2e2e21a' : '',
                                    },
                                },
                                '&:active': {
                                    backgroundColor: '#e8f1fc',
                                },
                                '&.Mui-checked': {
                                    color: '#1a73e8',
                                    '&:hover': {
                                        color: '#174ea6',
                                    },
                                },
                            }}
                        />
                        <p id='show-password-checkbox'>{text.CreatePassword.show[userData.language]}</p>
                    </div>

                    <div id='create-password-next-button' className='button-space-create-password'>
                        <CustomNextButton 
                            variant='contained' 
                            onClick={handleNextClick}
                            sx={{
                                '&& .MuiTouchRipple-rippleVisible': {
                                    animationDuration: '300ms',
                                },
                            }}
                        >
                            <div className='next'>
                            {text.CreatePassword.next[userData.language]}
                            </div>
                        </CustomNextButton>                
                        
                    </div>
                
                </form>

            </div>

            <LanguageChangerTallerPage 
                id='language-changer-footer-CP'
                className='language-changer-div'
                onChange={handleLanguageSelection}
                initialLanguage={userData.language}
            />

        </>
    );
}
