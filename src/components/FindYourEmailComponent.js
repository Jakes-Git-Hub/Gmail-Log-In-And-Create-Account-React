import React from "react";
import errorImage from '../images/Daco_5575399.png';
import LanguageChanger from "./LanguageChanger/LanguageChangerComponent";
import googleWritingSvg from "../images/google-writing-svg.svg";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TransparentSmallButtonSignInPage from "./buttons/TransparentSmallButtonSignInPageComponent";
import CustomNextButton from "./buttons/CustomNextButtonComponent";

export const FindYourEmailComponent = ({ 
    isImageLoaded,
    handleLanguageSelection,
    handleCreateAccountClick,
    isImagePreloaded,
    translationLoading,
    userData,
    errorCondition,
    emailOrPhone,
    onEmailOrPhoneChange,
    
}) => {

    return (

        <>

            <div id='google-container-BG'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-BG"/>

                <form>

                    <h1 class="thin h1-space">Sign In</h1>

                    <h2 class='thin gap'>Use your Google Account</h2>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1.25 },
                            width: 363,
                            maxWidth: '100%',
                        }}
                    >
                        <TextField 
                            error={errorCondition}
                            id="emailOrPhoneInput" 
                            label={'Email or phone'}
                            variant="outlined" 
                            fullWidth
                            value={emailOrPhone}
                            onChange={onEmailOrPhoneChange}
                            InputLabelProps={
                                errorCondition ? 
                                { 
                                    sx: {
                                        color: emailOrPhone ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
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

                    {errorCondition === 'emailOrPhoneEmpty' && isImagePreloaded && (
                        <div class='error-div'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">Enter an email or phone number</p>
                        </div>
                    )}

                    {errorCondition === 'couldntFindYourAccount' && isImagePreloaded && (
                        <div class='error-div'>
                            <img className='error-image' src={errorImage} alt='Error Image' />
                            <p class="input-error-message">Couldn't find your Google Account</p>
                        </div>
                    )}    
                      
                    <div id='forgot-email-container'>
                        <TransparentSmallButtonSignInPage>
                            Forgot email?
                        </TransparentSmallButtonSignInPage>
                    </div>

                    <div id='sign-in-guest-mode-container'>
                        <p class='p-sign-in'>Not your computer? Use Guest mode to sign in privately.</p>
                        <TransparentSmallButtonSignInPage>
                            Learn more about using Guest mode
                        </TransparentSmallButtonSignInPage>
                    </div>  

                    <div id='create-account-and-next-button-div-sign-in-page'>
                        <TransparentSmallButtonSignInPage  onClick={handleCreateAccountClick}>
                            Create account
                        </TransparentSmallButtonSignInPage>

                        <CustomNextButton>
                            Next  
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


