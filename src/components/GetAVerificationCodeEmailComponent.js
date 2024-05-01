import React from 'react';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';
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

            <main id='google-container-responsive' data-testid='GAVCE'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className='blue-snake-loader'></div>
                </div>
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-BG'/>

                <form>

                    <h1 className='thin h1-space'>{text.GetAVerificationCode.h1[userData.language]}</h1>

                    <div className='width-h2'>
                        <h2 className='thin gap center h2-line-height'>To help keep your account safe, Google wants to make sure it's really you trying to sign in</h2>
                    </div>  

                    <div className='p17Urb'>
                    </div>
                 
                    <img src='https://ssl.gstatic.com/accounts/account-recovery-email-pin.gif' className='xh7Wmd eMXECe TrZEUc' aria-hidden='true' alt=''></img>

                    <div className='p-container-gavc'>
                        <p className='p-get-a-verification-code'>
                            Google will send a verification code to {findYourEmailCredentials.phoneNumberOrEmail ? findYourEmailCredentials.phoneNumberOrEmail : ''}.
                        </p>
                    </div>

                    <div id='button-get-a-verification-code-container'>
                        <CustomNextButton 
                            variant='contained' 
                            onClick={handleSendClick}
                            aria-label='Send verification code to email button'
                            sx={{
                                '&& .MuiTouchRipple-rippleVisible': {
                                    animationDuration: '300ms',
                                },
                            }}
                        >
                            <div className='next'>
                                Send
                            </div>
                        </CustomNextButton>
                    </div>

                    

                </form>

            </main>

            <LanguageChanger 
                className='language-changer-div'
                onChange={handleLanguageSelection}
                initialLanguage={userData.language}
                aria-label='Change language'
            />

        </>
    );
};