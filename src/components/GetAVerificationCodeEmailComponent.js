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
    errorCondition,
    loading,
}) => {

    return (

        <>

            <main id='google-container-responsive' data-testid='GAVCE'>

                <div className={!isImageLoaded || loading ? 'empty-blue-snake-loader' : 'empty-blue-snake-loader-placeholder'}>
                    <div className='blue-snake-loader'></div>
                </div>
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-BG'/>

                <form>

                    <h1 className='thin h1-space'>{text.GetAVerificationCode.h1[userData.language]}</h1>

                    <div className='width-h2'>
                        <h2 className='thin gap center h2-line-height'>{text.GetAVerificationCode.h2[userData.language]}</h2>
                    </div>  

                    <div className='p17Urb'>
                    </div>
                 
                    <img src='https://ssl.gstatic.com/accounts/account-recovery-email-pin.gif' className='xh7Wmd eMXECe TrZEUc' aria-hidden='true' alt=''></img>

                    <div className='p-container-gavc'>
                        <p className='p-get-a-verification-code'>
                            {text.GetAVerificationCode.googleWillSend[userData.language]} {findYourEmailCredentials.phoneNumberOrEmail ? findYourEmailCredentials.phoneNumberOrEmail : ''}.
                        </p>
                    </div>

                    { errorCondition ? (
                        <div className='error-div' id='error-div-space-cynar'>
                            <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                            <p className='input-error-message'>{text.ConfirmYoureNotARobot.error5[userData.language]}</p>
                        </div>
                    ) : <div class='hidden-confirm-error'></div> }

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
                                {text.GetAVerificationCode.send[userData.language]}
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
                text={text}
            />

        </>
    );
};