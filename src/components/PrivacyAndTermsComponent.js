import React from 'react';
import googleWritingSvg from "../images/google-writing-svg.svg";
import CustomNextAndSkipButton from './buttons/CustomNext&SkipButtonComponent';
import SecondaryGreyButton2 from './buttons/SecondaryGreyButtonComponent2';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';

export const PrivacyAndTermsComponent = ({ 
    handleNextClick,
    isImageLoaded,
    handleLanguageSelection,
    text,
    handleBackClick,
    translationLoading,
    userData,
}) => {

    return (

        <>

            <div className='google-container-flexible-ryai'>

                <div className={!isImageLoaded || translationLoading ? "empty-blue-snake-loader" : 'empty-blue-snake-loader-placeholder'}>
                    <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-recovery-ryai"/>
                
                <h1 class="thin h1-space h1-mcys">{text.PrivacyAndTerms.h1}</h1>

                <div id="container-choose-your-settings-m">
                    <p class='p-privacy-and-terms p-gap-ecys'>
                        {text.PrivacyAndTerms.pT1}
                        <a class='href' href='https://policies.google.com/terms?hl=en&gl=GB' target='blank'>{text.PrivacyAndTerms.pT2}</a>
                        {text.PrivacyAndTerms.pT3}
                        <a class='href' href='https://www.youtube.com/t/terms?gl=GB&hl=en&override_hl=1' target='blank'>{text.PrivacyAndTerms.pT4}</a>
                        {text.PrivacyAndTerms.pT5}
                    </p>

                    <p class='p-privacy-and-terms p-gap-ecys'>
                        {text.PrivacyAndTerms.pT6}
                        <a class='href' href='https://policies.google.com/terms?hl=en&gl=GB' target='blank'>{text.PrivacyAndTerms.pT7}</a>
                        {text.PrivacyAndTerms.pT8}
                    </p>

                    <p class='p-privacy-and-terms p-gap-ecys'>
                        {text.PrivacyAndTerms.pT9}
                        <a class='href' href='https://policies.google.com/terms?hl=en&gl=GB' target='blank'>{text.PrivacyAndTerms.pT10}</a>
                        {text.PrivacyAndTerms.pT11}
                    </p>

                    <p class='p-privacy-and-terms p-gap-ecys'>{text.PrivacyAndTerms.pT12}</p>


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

                    <p class='p-privacy-and-terms p-gap-ecys'>{text.PrivacyAndTerms.pT24}</p>
                </div>

                

                <div class='i-agree-and-cancel-button-duo button-space-mcys'>
                    <SecondaryGreyButton2 
                        variant="contained"     
                        onClick={handleBackClick}
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
                            variant="contained" 
                            onClick={handleNextClick}
                            sx={{
                                '&& .MuiTouchRipple-rippleVisible': {
                                    animationDuration: '300ms',
                                },
                            }}
                        >
                            <div class='next'>
                              {text.PrivacyAndTerms.iAgree}
                            </div>
                    </CustomNextButton>
                </div>

            </div>

            <LanguageChanger 
                className='language-changer-div'
                onChange={handleLanguageSelection}
                initialLanguage={userData.language}
            />

        </>
    );
}
