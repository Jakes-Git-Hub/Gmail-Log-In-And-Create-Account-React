import React from 'react';
import googleWritingSvg from '../images/google-writing-svg.svg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomNextAndSkipButton from './buttons/CustomNext&SkipButtonComponent';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';

export const AddRecoveryEmailComponent = ({ 
    recoveryEmail,
    setRecoveryEmail,
    handleNextClick,
    errorCondition,
    handleSkip,
    isImageLoaded,
    handleLanguageSelection,
    text,
    userData,
}) => {

    return (

        <>

            <main id='google-container-flexible' data-testid='AREComp'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className='blue-snake-loader'></div>
                </div>
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-recovery-email'/>

                    <form role='form'>

                        <h1 className='thin h1-space'>{text.AddRecoveryEmail.h1[userData.language]}</h1>
                        <div id='reduce-width-h2'>
                            <h2 className='thin gap center'>{text.AddRecoveryEmail.h2[userData.language]}</h2>
                        </div>

                        <div id='create-password-space'className=' line-height label-input-width input-label-recovery-email'>
                                <Box>
                                        <TextField
                                            fullWidth error={errorCondition}
                                            id='recoveryEmailInput'
                                            value={recoveryEmail}
                                            label={text.AddRecoveryEmail.recoveryEmail[userData.language]}
                                            aria-label='Enter your recovery email address'
                                            aria-invalid={errorCondition ? true : false}
                                            onChange={(e) => setRecoveryEmail(e.target.value)}
                                            InputLabelProps={
                                                errorCondition ? 
                                                { 
                                                    sx: {
                                                        color: recoveryEmail ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
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
                
                        {errorCondition === 'enterValidEmail'  && (
                            <div className='error-div-add-recovery-email'>
                                <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                                </svg>
                                <p className='input-error-message'>{text.AddRecoveryEmail.error1[userData.language]}</p>
                            </div>
                        )}

                        {errorCondition === 'dontForgetAtSymbol'  && ( 
                            <div className='error-div-add-recovery-email'>
                                <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                                </svg>
                                <p className='input-error-message'>{text.AddRecoveryEmail.error2[userData.language]}</p>
                            </div>
                        )} 
                        
                        {errorCondition === 'enterADomainName'  && (
                            <div className='error-div-add-recovery-email'>
                                <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                                </svg>
                                <p className='input-error-message'>{text.AddRecoveryEmail.error3[userData.language]}</p>
                            </div>
                        )}

                        {errorCondition === 'emailAddressNotValid'  && (
                            <div className='error-div-add-recovery-email'>
                                <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                                </svg>
                                <p className='input-error-message'>{text.AddRecoveryEmail.error4[userData.language]}</p>
                            </div>
                        )}  

                        <div className='next-and-skip-button-duo button-space-add-recovery-email'>
                            <CustomNextAndSkipButton
                                className='duo' 
                                role='button'
                                variant='contained' 
                                onClick={handleNextClick}
                                aria-label='Next button'
                                type='button'
                                sx={{
                                    '&& .MuiTouchRipple-rippleVisible': {
                                        animationDuration: '300ms',
                                    },
                                }}
                            >
                                <div className='next'>
                                    {text.EnterTheCode.next[userData.language]}
                                </div>
                            </CustomNextAndSkipButton>
                            <CustomNextAndSkipButton
                                className='duo' 
                                variant='contained' 
                                onClick={handleSkip}
                                type='button'
                                role='button'
                                aria-label='Skip button'
                                sx={{
                                    '&& .MuiTouchRipple-rippleVisible': {
                                        animationDuration: '300ms',
                                    },
                                }}
                            >
                                <div className='next'>
                                    {text.AddRecoveryEmail.skip[userData.language]}
                                </div>
                            </CustomNextAndSkipButton>
                        </div>

                    </form>

            </main>

            <LanguageChanger 
                initialLanguage={userData.language}
                onChange={handleLanguageSelection}
                aria-label='Change language'
            />

        </>
    );
}
