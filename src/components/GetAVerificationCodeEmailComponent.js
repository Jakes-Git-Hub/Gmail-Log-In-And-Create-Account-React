import React from 'react';
import errorImage from '../images/Daco_5575399.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import googleWritingSvg from "../images/google-writing-svg.svg";
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';


export const GetAVerificationCodeEmailComponent = ({ 
    handleLanguageSelection,
    text,
    isImageLoaded,
    userData,
    findYourEmailCredentials,    
    handleSendClick,
}) => {

    return (

        <>

            <div id='google-container-responsive'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-BG"/>

                <form>

                    <h1 class="thin h1-space">{text.GetAVerificationCode.h1[userData.language]}</h1>

                    <div class='width-h2'>
                        <h2 class='thin gap center h2-line-height'>To help keep your account safe, Google wants to make sure it's really you trying to sign in</h2>
                    </div>  

                    <div class="p17Urb">
                    </div>
                 
                    <img src="https://ssl.gstatic.com/accounts/account-recovery-email-pin.gif" class="xh7Wmd eMXECe TrZEUc" aria-hidden="true" alt=""></img>

                    <div class='p-container-gavc'>
                        <p class='p-get-a-verification-code'>
                            Google will send a verification code to {findYourEmailCredentials.phoneNumberOrEmail}.
                        </p>
                    </div>

                    <div id='button-get-a-verification-code-container'>
                        <CustomNextButton 
                            variant="contained" 
                            onClick={handleSendClick}
                            sx={{
                                '&& .MuiTouchRipple-rippleVisible': {
                                    animationDuration: '300ms',
                                },
                            }}
                        >
                            <div class='next'>
                                Send
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
};