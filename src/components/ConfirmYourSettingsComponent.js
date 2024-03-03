import React from 'react';
import googleWritingSvg from "../images/google-writing-svg.svg";
import CustomNextAndSkipButton from './buttons/CustomNext&SkipButtonComponent';
import errorImage from '../images/Daco_5575399.png';
import TickSVG from './svg\'s/tickSVG';
import NullSVG from './svg\'s/nullSVG';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';

export const ConfirmYourSettingsComponent = ({ 
    handleNextClick,
    isImageLoaded,
    errorCondition,
    isImagePreloaded,
    handleLanguageSelection,
    text,
    handleBackClick,
    userData,
    showPrivacyRow,
    translationLoading,
    
}) => {

    return (

        <>

            <div className='google-container-flexible-ryai'>

                <div className={!isImageLoaded || translationLoading ? "empty-blue-snake-loader" : 'empty-blue-snake-loader-placeholder'}>
                    <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-recovery-ryai"/>
                
                <h1 class="thin h1-space h1-mcys">{text.ConfirmYourSettings.h1}</h1>
                <div id='reduce-width-h2-confirm-your-settings'>
                    <h2 class='thin gap center'>{text.ConfirmYourSettings.h2}</h2>
                </div>
                
                <div id="choose-your-settings-container-mcys">
                    <div className="confirm-your-settings-configuration-container">
                        {userData.manualSetting1 === 'dont save' ? (
                                <NullSVG />
                            ) : (
                                <TickSVG />
                            )
                        }
                        <div className='writting-container'>
                            <p className="setting-option-name-confirm">{text.ConfirmYourSettings.webAndAppActivity}</p>
                            {userData.manualSetting1 === 'dont save' ? (
                                    <p className="setting-information">{text.ConfirmYourSettings.off}</p> 
                                ) : (
                                    <p className="setting-information">{text.ConfirmYourSettings.on}</p>
                                )
                            }
                        </div>
                    </div>

                    <div className="confirm-your-settings-configuration-container">
                        {userData.manualSetting2 === 'dont save' ? (
                                <NullSVG />
                            ) : (
                                <TickSVG />
                            )
                        }
                        <div className='writting-container'>
                            <p className="setting-option-name-confirm">{text.ConfirmYourSettings.youTubeHistory}</p>
                            {userData.manualSetting2 === 'dont save' ? (
                                    <p className="setting-information">{text.ConfirmYourSettings.off}</p> 
                                ) : (
                                    <p className="setting-information">{text.ConfirmYourSettings.on}</p>
                                )
                            }
                        </div>
                    </div>

                    <div className="confirm-your-settings-configuration-container">
                        {userData.manualSetting3 === 'show me generic ads' ? (
                                <NullSVG />
                            ) : (
                                <TickSVG />
                            )
                        }
                        <div className='writting-container'>
                            <p className="setting-option-name-confirm">{text.ConfirmYourSettings.personalizedAds}</p>
                            {userData.manualSetting3 === 'show me generic ads' ? (
                                    <p className="setting-information">{text.ConfirmYourSettings.off}</p> 
                                ) : (
                                    <p className="setting-information">{text.ConfirmYourSettings.on}</p>
                                )
                            }
                        </div>
                    </div>

                    {showPrivacyRow ? (
                        <div className="confirm-your-settings-configuration-container">
                            {userData.manualSetting4 ? (
                                <TickSVG />
                            ) : (
                                <NullSVG />
                            )}
                            <div className='writting-container'>
                                <p className="setting-option-name-confirm">{text.ConfirmYourSettings.privacyReminders}</p>
                                {userData.manualSetting4 ? (
                                    <p className="setting-information">{text.ConfirmYourSettings.onPrivacyReminders}</p> 
                                ) : (
                                    <p className="setting-information">{text.ConfirmYourSettings.offPrivacyReminders}</p>
                                )}
                            </div>
                        </div>
                    ) : null}
                    
                </div>

                {errorCondition === "selectAnOption" && isImagePreloaded && (   
                    <div id='error-div-choose-your-settings'>
                        <img className='error-image' src={errorImage} alt='Error Image' />
                        <p class="input-error-message">{text.ManualChooseYourSettings2.error}</p>
                    </div>
                )}

                <div id="container-confirm-your-settings">
                    <h2 class="mcys-h2">{text.ConfirmYourSettings.aboutCookies}</h2>
                    <p class='pconfirmys p-gap-ecys'>
                        {text.ConfirmYourSettings.aboutCookies1}
                        <a class='href' href='https://policies.google.com/technologies/cookies?hl=en&gl=GB' target='blank'>{text.ConfirmYourSettings.aboutCookies2}</a>
                        {text.ConfirmYourSettings.aboutCookies3}
                    </p>
                    <ul id='bullet-points-mcys'>
                        <li className='pconfirmys confirm-list'>{text.ConfirmYourSettings.aboutCookies4}</li>
                        <li className='pconfirmys confirm-list'>{text.ConfirmYourSettings.aboutCookies5}</li>
                    </ul>
                    <p class='pconfirmys p-gap-ecys'>{text.ConfirmYourSettings.aboutCookies6}</p>
                    <ul id='bullet-points-mcys'>
                        <li className='pconfirmys confirm-list'>{text.ConfirmYourSettings.aboutCookies7}</li>
                        <li className='pconfirmys confirm-list'>{text.ConfirmYourSettings.aboutCookies8}</li>
                        <li className='pconfirmys confirm-list'>{text.ConfirmYourSettings.aboutCookies9}</li>
                        <li className='pconfirmys confirm-list'>{text.ConfirmYourSettings.aboutCookies10}</li>
                    </ul>
                    <p class='pconfirmys p-gap-ecys'>{text.ConfirmYourSettings.aboutCookies11}</p>
                    <p class='pconfirmys p-gap-ecys'>{text.ConfirmYourSettings.aboutCookies12}</p>
                </div>

                

                <div class='next-and-skip-button-duo button-space-mcys'>
                    <CustomNextAndSkipButton 
                        className="duo" 
                        variant="contained" 
                        onClick={handleBackClick}
                        type="submit"
                        sx={{
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        }}
                    >
                        {text.ManualChooseYourSettings2.back}
                    </CustomNextAndSkipButton>

                    <CustomNextAndSkipButton
                        className="duo"  
                        variant="contained" 
                        onClick={handleNextClick}
                        type="button"
                        sx={{
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        }}
                    >
                        {text.ConfirmYourSettings.confirm}
                    </CustomNextAndSkipButton>
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
