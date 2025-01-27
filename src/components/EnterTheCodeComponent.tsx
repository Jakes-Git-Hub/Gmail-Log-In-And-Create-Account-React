import React from 'react';
import TextField from '@mui/material/TextField';
import googleWritingSvg from '../images/google-writing-svg.svg';
import SecondaryGreyButton from './buttons/SecondaryGreyButtonComponent';
import CustomNextButton from './buttons/CustomNextButtonComponent'; 
import { ThemeProvider, Theme } from '@mui/material/styles';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

interface EnterTheCodeComponentProps {
    handleNextClick: () => void;
    isImageLoaded: boolean;
    handleUserVerificationCodeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    usersVerificationCodeInput: string;
    errorCondition: string | null;
    theme: Theme;
    getNewCode: () => void;
    getNewCodeButtonDisabled: boolean;
    disabledCount: number;
    text: any;
    handleLanguageSelection: (language: string) => void;
    userData: any;
    toggleFocus: () => void;
    isFocused: boolean;
}

export const EnterTheCodeComponent: React.FC<EnterTheCodeComponentProps> = ({
    handleNextClick,
    isImageLoaded,
    handleUserVerificationCodeInput,
    usersVerificationCodeInput,
    errorCondition,
    theme,
    getNewCode,
    getNewCodeButtonDisabled,
    disabledCount,
    text,
    handleLanguageSelection,
    userData,
    toggleFocus,
    isFocused,
}) => {
    
    return (
        <>
            <main id='google-container-responsive' data-testid='ETC'>
                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className='blue-snake-loader'></div>
                </div>
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-BG'/>

                <form>
                    <h1 className='thin h1-space'>{text.EnterTheCode.h1[userData.language]}</h1>
                    <p id='p-enter-the-code'>{text.EnterTheCode.h2[userData.language]}</p>

                    <ThemeProvider theme={theme} >
                        <TextField
                            className='standard-text-field line-height'
                            id='code-input'
                            fullWidth
                            error={!!errorCondition}
                            value={usersVerificationCodeInput}
                            label={text.EnterTheCode.enterCode[userData.language]}
                            onChange={handleUserVerificationCodeInput}
                            onFocus={toggleFocus}
                            onBlur={toggleFocus}
                            aria-label='Enter the verification code'
                            aria-invalid={!!errorCondition}
                            InputLabelProps={
                                errorCondition ? 
                                { 
                                    shrink: !!usersVerificationCodeInput || isFocused,
                                    sx: {
                                        color: usersVerificationCodeInput ? '#d32f2f' : 'rgb(95,99,104) !important',
                                        '&.Mui-focused': {
                                            color: '#d32f2f !important',
                                        },
                                    },
                                } : {
                                    shrink: !!usersVerificationCodeInput || isFocused,
                                    sx: {
                                        color: 'rgb(95,99,104)',
                                    }
                                }
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
                                    },
                                }
                            }
                            InputProps={{
                                startAdornment: 
                                    <InputAdornment position='start'>
                                        <Typography id='static-G'>
                                            G-
                                        </Typography>
                                    </InputAdornment>
                            }}
                        />
                    </ThemeProvider>

                    {errorCondition === 'inputEmpty' ? (
                        <div className='error-div' id='error-div-space-etc'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.EnterTheCode.error1[userData.language]}</p>
                        </div>
                    ) : errorCondition === 'wrongNumberOfDigits'  ? (
                        <div className='error-div' id='error-div-space-etc'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.EnterTheCode.error2[userData.language]}</p>
                        </div>
                    ) : errorCondition === 'wrongCode' ? (
                        <div className='error-div' id='error-div-space-etc'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.EnterTheCode.error3[userData.language]}</p>
                        </div>
                    ) : errorCondition === 'hasLetters' ? (
                        <div className='error-div' id='error-div-space-etc'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.EnterTheCode.error4[userData.language]}</p>
                        </div>
                    ) : (
                        <div className='hidden-error-message-container-BI'></div>
                    )}

                    <div id={errorCondition ? 'buttons-container-enter-the-code-error' : 'buttons-container-enter-the-code'}>
                        {getNewCodeButtonDisabled ? (
                            <div id='secondary-button-container-etc'>
                                <SecondaryGreyButton 
                                    variant='contained' 
                                    aria-label='Get new code after 30 seconds button (disabled until 30 seconds pass)'
                                    disabled
                                    sx={{
                                        '&& .MuiTouchRipple-rippleVisible': {
                                            animationDuration: '300ms',
                                        },
                                        backgroundColor: 'transparent !important',
                                    }}
                                >
                                    <div className='get-new-code-text'>
                                        {text.EnterTheCode.getNewCode[userData.language]} {disabledCount} {text.EnterTheCode.seconds[userData.language]}
                                    </div>
                                </SecondaryGreyButton>
                            </div>
                        ) : (
                            <div id='secondary-button-container-etc'>
                                <SecondaryGreyButton 
                                    variant='contained' 
                                    onClick={getNewCode}
                                    aria-label='Get new code button'
                                    sx={{
                                        '&& .MuiTouchRipple-rippleVisible': {
                                            animationDuration: '300ms',
                                        },
                                    }}
                                >
                                    <div className='get-new-code-text'>
                                        {text.EnterTheCode.getNewCode[userData.language]}
                                    </div>
                                </SecondaryGreyButton>
                            </div>
                        )}    

                        <div id='next-button-container-etc'>
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
                                <div className='next'>
                                    {text.EnterTheCode.next[userData.language]}
                                </div>
                            </CustomNextButton>
                        </div>
                    </div>
                </form>
            </main>

            <LanguageChanger 
                className='language-changer-div'
                onChange={handleLanguageSelection}
                initialLanguage={userData.language}
                aria-label='Change language'
                text={text}
            />
        </>
    );
};