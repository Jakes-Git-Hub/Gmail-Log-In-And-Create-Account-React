import React from 'react';
import googleWritingSvg from '../images/google-writing-svg.svg';
import SecondaryGreyButton2 from './buttons/SecondaryGreyButtonComponent2';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import LanguageChangerOverflow from './LanguageChanger/LanguageChangerOverflowComponent';

export const PrivacyAndTermsComponent = ({ 
    handleNextClick,
    isImageLoaded,
    handleLanguageSelection,
    text,
    handleBackClick,
    userData,
}) => {

    return (

        <>

            <main className='google-container-flexible-ryai' data-testid='PAT'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className='blue-snake-loader'></div>
                </div>
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-recovery-ryai'/>
                
                <h1 className='thin h1-space h1-mcys'>{text.PrivacyAndTerms.h1[userData.language]}</h1>

                <div id='container-choose-your-settings-m'>
                    <p className='p-privacy-and-terms p-gap-ecys'>
                        {text.PrivacyAndTerms.pT1}
                        <a 
                            className='href' 
                            href='https://policies.google.com/terms?hl=en&gl=GB' 
                            target='blank'
                            aria-label='Google Terms of Service hyperlink'
                        >
                            {text.PrivacyAndTerms.pT2}
                        </a>
                        {text.PrivacyAndTerms.pT3}
                        <a 
                            className='href' 
                            href='https://www.youtube.com/t/terms?gl=GB&hl=en&override_hl=1' 
                            target='blank'
                            aria-label='YouTube Terms of Service hyperlink'
                        >
                            {text.PrivacyAndTerms.pT4}
                        </a>
                        {text.PrivacyAndTerms.pT5}
                    </p>

                    <p className='p-privacy-and-terms p-gap-ecys'>
                        {text.PrivacyAndTerms.pT6}
                        <a 
                            className='href' 
                            href='https://policies.google.com/terms?hl=en&gl=GB' 
                            target='blank'
                            aria-label='Google Terms of Service hyperlink'
                        >
                            {text.PrivacyAndTerms.pT7}
                        </a>
                        {text.PrivacyAndTerms.pT8}
                    </p>

                    <p className='p-privacy-and-terms p-gap-ecys'>
                        {text.PrivacyAndTerms.pT9}
                        <a 
                            className='href' 
                            href='https://policies.google.com/terms?hl=en&gl=GB' 
                            target='blank'
                            aria-label="Google's privacy policy hyperlink"
                        >
                            {text.PrivacyAndTerms.pT10}
                        </a>
                        {text.PrivacyAndTerms.pT11}
                    </p>

                    <p className='p-privacy-and-terms p-gap-ecys'>{text.PrivacyAndTerms.pT12}</p>


                    <ul id='bullet-points-mcys'>
                        <li className='p-privacy-and-terms confirm-list bullet-point-privacy-and-terms'>{text.PrivacyAndTerms.pT13}</li>
                        <li className='p-privacy-and-terms confirm-list bullet-point-privacy-and-terms'>{text.PrivacyAndTerms.pT14}</li>
                        <li className='p-privacy-and-terms confirm-list bullet-point-privacy-and-terms'>{text.PrivacyAndTerms.pT15}</li>
                        <li className='p-privacy-and-terms confirm-list bullet-point-privacy-and-terms'>{text.PrivacyAndTerms.pT16}</li>
                        <li className='p-privacy-and-terms confirm-list bullet-point-privacy-and-terms'>{text.PrivacyAndTerms.pT17}</li>
                        <li className='p-privacy-and-terms confirm-list bullet-point-privacy-and-terms'>{text.PrivacyAndTerms.pT18}</li>
                        <li className='p-privacy-and-terms confirm-list bullet-point-privacy-and-terms'>{text.PrivacyAndTerms.pT19}</li>
                        <li className='p-privacy-and-terms confirm-list bullet-point-privacy-and-terms'>{text.PrivacyAndTerms.pT20}</li>
                        <li className='p-privacy-and-terms confirm-list bullet-point-privacy-and-terms'>{text.PrivacyAndTerms.pT21}</li>
                        <li className='p-privacy-and-terms confirm-list bullet-point-privacy-and-terms'>{text.PrivacyAndTerms.pT22}</li>
                        <li className='p-privacy-and-terms confirm-list bullet-point-privacy-and-terms'>{text.PrivacyAndTerms.pT23}</li>
                    </ul>

                    <p className='p-privacy-and-terms p-gap-ecys'>{text.PrivacyAndTerms.pT24}</p>
                </div>

                

                <div className='i-agree-and-cancel-button-duo button-space-mcys'>
                    <SecondaryGreyButton2 
                        variant='contained'     
                        onClick={handleBackClick}
                        aria-label='Cancel button'
                        sx={{
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                            
                        }}
                    >
                        <div className='got-it-text'>
                        {text.PrivacyAndTerms.cancel}
                        </div>
                    </SecondaryGreyButton2>

                    <CustomNextButton 
                            variant='contained' 
                            onClick={handleNextClick}
                            aria-label='I agree button'
                            sx={{
                                '&& .MuiTouchRipple-rippleVisible': {
                                    animationDuration: '300ms',
                                },
                            }}
                        >
                            <div className='next'>
                              {text.PrivacyAndTerms.iAgree}
                            </div>
                    </CustomNextButton>
                </div>

            </main>

            <LanguageChangerOverflow 
                className='language-changer-div'
                onChange={handleLanguageSelection}
                initialLanguage={userData.language}
                aria-label='Change language'
            />

        </>
    );
}
