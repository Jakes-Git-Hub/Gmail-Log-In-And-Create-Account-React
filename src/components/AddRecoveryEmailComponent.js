import React from 'react';
import errorImage from '../images/Daco_5575399.png';
import googleWritingSvg from "../images/google-writing-svg.svg";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomNextAndSkipButton from './CustomNext&SkipButtonComponent';

export const AddRecoveryEmailComponent = ({ 
    recoveryEmail,
    setRecoveryEmail,
    handleNextClick,
    isImagePreloaded,
    errorCondition,
    handleSkip,
    handleSubmit,
    isImageLoaded,
}) => {


    return (

        <div id='google-container-flexible'>

            <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : "empty-blue-snake-loader"}>
                <div className="blue-snake-loader"></div>
            </div>
            <img src={googleWritingSvg} alt="Google Writing" id="google-writing-recovery-email"/>

                <form onSubmit={handleSubmit}>

                    <h1 class="thin h1-space">Add recovery email</h1>
                    <div id='reduce-width-h2'>
                        <h2 class='thin gap center'>The address where Google can contact you if there’s unusual activity in your account or if you get locked out.</h2>
                    </div>

                    <div id='create-password-space'class=" line-height label-input-width input-label-recovery-email">
                            <Box>
                                    <TextField
                                        fullWidth error={errorCondition}
                                        id='recoveryEmailInput'
                                        value={recoveryEmail}
                                        label="Recovery email address"
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
                            <p class="input-error-message">Enter a valid email</p>
                        </div>
                    )}

                    {errorCondition === 'dontForgetAtSymbol' && isImagePreloaded && ( 
                        <div class='error-div-add-recovery-email'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">Don't forget to include the '@'.</p>
                        </div>
                    )} 
                    
                    {errorCondition === 'enterADomainName' && isImagePreloaded && (
                        <div class='error-div-add-recovery-email'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">Enter a domain name after the '@'.</p>
                        </div>
                    )}

                    {errorCondition === 'emailAddressNotValid' && isImagePreloaded && (
                        <div class='error-div-add-recovery-email'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">This email address is not valid.</p>
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
                                Next
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
                                Skip
                        </CustomNextAndSkipButton>
                    </div>

                </form>

        </div>
    );
}
