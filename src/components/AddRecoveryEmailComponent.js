import React from 'react';
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomNextAndSkipButton from './buttons/CustomNext&SkipButtonComponent';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';

export const AddRecoveryEmailComponent = ({ 
    recoveryEmail,
    setRecoveryEmail,
    handleNextClick,
    isImagePreloaded,
    errorCondition,
    handleSkip,
    handleSubmit,
    isImageLoaded,
    handleLanguageSelection,
    text,
    translationLoading,
    userData,
    
}) => {

    return (

        <>

            <div id='google-container-flexible'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-recovery-email"/>

                    <form onSubmit={handleSubmit}>

                        <h1 class="thin h1-space">{text.AddRecoveryEmail.h1[userData.language]}</h1>
                        <div id='reduce-width-h2'>
                            <h2 class='thin gap center'>{text.AddRecoveryEmail.h2[userData.language]}</h2>
                        </div>

                        <div id='create-password-space'class=" line-height label-input-width input-label-recovery-email">
                                <Box>
                                        <TextField
                                            fullWidth error={errorCondition}
                                            id='recoveryEmailInput'
                                            value={recoveryEmail}
                                            label={text.AddRecoveryEmail.recoveryEmail[userData.language]}
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
                
                        {errorCondition === 'enterValidEmail' && isImagePreloaded && (
                            <div class='error-div-add-recovery-email'>
                                <img className='error-image' src={errorImage} alt='Error Image' />
                                <p class="input-error-message">{text.AddRecoveryEmail.error1[userData.language]}</p>
                            </div>
                        )}

                        {errorCondition === 'dontForgetAtSymbol' && isImagePreloaded && ( 
                            <div class='error-div-add-recovery-email'>
                                <img className='error-image' src={errorImage} alt='Error Image' />
                                <p class="input-error-message">{text.AddRecoveryEmail.error2[userData.language]}</p>
                            </div>
                        )} 
                        
                        {errorCondition === 'enterADomainName' && isImagePreloaded && (
                            <div class='error-div-add-recovery-email'>
                                <img className='error-image' src={errorImage} alt='Error Image' />
                                <p class="input-error-message">{text.AddRecoveryEmail.error3[userData.language]}</p>
                            </div>
                        )}

                        {errorCondition === 'emailAddressNotValid' && isImagePreloaded && (
                            <div class='error-div-add-recovery-email'>
                                <img className='error-image' src={errorImage} alt='Error Image' />
                                <p class="input-error-message">{text.AddRecoveryEmail.error4[userData.language]}</p>
                            </div>
                        )}  

                        <div class='next-and-skip-button-duo button-space-add-recovery-email'>
                            <CustomNextAndSkipButton
                                className="duo" 
                                variant="contained" 
                                onClick={handleNextClick}
                                type="submit"
                                sx={{
                                    '&& .MuiTouchRipple-rippleVisible': {
                                        animationDuration: '300ms',
                                    },
                                }}
                            >
                                <div class='next'>
                                    {text.EnterTheCode.next[userData.language]}
                                </div>
                            </CustomNextAndSkipButton>
                            <CustomNextAndSkipButton
                                className="duo" 
                                variant="contained" 
                                onClick={handleSkip}
                                type="button"
                                sx={{
                                    '&& .MuiTouchRipple-rippleVisible': {
                                        animationDuration: '300ms',
                                    },
                                }}
                            >
                                <div class='skip'>
                                    {text.AddRecoveryEmail.skip[userData.language]}
                                </div>
                            </CustomNextAndSkipButton>
                        </div>

                    </form>

            </div>

            <LanguageChanger 
                initialLanguage={userData.language}
                onChange={handleLanguageSelection}
                
            />

        </>
    );
}
