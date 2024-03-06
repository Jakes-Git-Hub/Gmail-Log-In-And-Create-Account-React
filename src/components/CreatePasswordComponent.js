import React from 'react';
import errorImage from '../images/Daco_5575399.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import Checkbox from '@mui/material/Checkbox';
import googleWritingSvg from "../images/google-writing-svg.svg";
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';

export const CreatePasswordComponent = ({ 
    password,
    handleSelectPassword,
    confirmPassword,
    handleSelectConfirmPassword,
    handleNextClick,
    showPassword,
    handleTogglePassword,
    isImagePreloaded,
    errorCondition,
    text,
    handleLanguageSelection,
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

                    <h1 class="thin h1-space">{text.CreatePassword.h1[userData.language]}</h1>
                    <div id='create-password-h2'>
                        <h2 class='thin gap center'>{text.CreatePassword.h2[userData.language]}</h2>
                    </div>

                    <div id='create-password-space'class=" line-height label-input-width input-label">
                        <Box>
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

                    <div class="space line-height label-input-width input-label" id='error-message-margin'>
                        <Box>
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

                    {errorCondition === 'passwordEmpty' && isImagePreloaded && (
                        <div class='error-div' id='create-password-error-div'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.CreatePassword.error1[userData.language]}</p>
                        </div>
                    )}

                    {errorCondition === 'confirmPasswordEmpty' && isImagePreloaded && ( 
                        <div class='error-div' id='create-password-error-div'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.CreatePassword.error2[userData.language]}</p>
                        </div>
                    )} 
                    
                    {errorCondition === 'passwordMismatch' && isImagePreloaded && (
                        <div class='error-div' id='create-password-error-div'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.CreatePassword.error3[userData.language]}</p>
                        </div>
                    )}

                    {errorCondition === 'needs8CharsOrMore' && isImagePreloaded && (
                        <div class='error-div' id='create-password-error-div'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.CreatePassword.error4[userData.language]}</p>
                        </div>
                    )}

                    {errorCondition === 'pleaseChooseAStrongerPassword' && isImagePreloaded && (
                        <div class='error-div' id='create-password-error-div-stronger-password'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">{text.CreatePassword.error5[userData.language]}</p>
                        </div>
                    )}

                    <div className='password-toggle checkbox-text-colour'>
                        <Checkbox 
                            defaultChecked
                            type="checkbox"
                            checked={showPassword}
                            onChange={handleTogglePassword}
                            className="custom-checkbox-input"
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

                    <div id='create-password-next-button' class="button-space-create-password">
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
                            {text.CreatePassword.next[userData.language]}
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
}
