import React from 'react';
import googleWritingSvg from '../images/google-writing-svg.svg';
import CustomNextAndSkipButton from './buttons/CustomNext&SkipButtonComponent';
import TickSVG from './svg\'s/tickSVG';
import NullSVG from './svg\'s/nullSVG';
import LanguageChangerOverflow from './LanguageChanger/LanguageChangerOverflowComponent';

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
    
    
}) => {

    return (

        <>

            <div className='google-container-flexible-ryai' data-testid='CYS'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className='blue-snake-loader'></div>
                </div>
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-recovery-ryai'/>
                
                <h1 className='thin h1-space h1-mcys'>{text.ConfirmYourSettings.h1[userData.language]}</h1>
                <div id='reduce-width-h2-confirm-your-settings'>
                    <h2 className='thin gap center'>{text.ConfirmYourSettings.h2}</h2>
                </div>
                
                <div id='choose-your-settings-container-mcys'>
                    <div className='confirm-your-settings-configuration-container'>
                        {userData.manualSetting1 === 'dont save' ? (
                                <NullSVG />
                            ) : (
                                <TickSVG />
                            )
                        }
                        <div className='writting-container'>
                            <p className='setting-option-name-confirm'>{text.ConfirmYourSettings.webAndAppActivity}</p>
                            {userData.manualSetting1 === 'dont save' ? (
                                    <p className='setting-information'>{text.ConfirmYourSettings.off}</p> 
                                ) : (
                                    <p className='setting-information'>{text.ConfirmYourSettings.on}</p>
                                )
                            }
                        </div>
                    </div>

                    <div className='confirm-your-settings-configuration-container'>
                        {userData.manualSetting2 === 'dont save' ? (
                                <NullSVG />
                            ) : (
                                <TickSVG />
                            )
                        }
                        <div className='writting-container'>
                            <p className='setting-option-name-confirm'>{text.ConfirmYourSettings.youTubeHistory}</p>
                            {userData.manualSetting2 === 'dont save' ? (
                                    <p className='setting-information'>{text.ConfirmYourSettings.off}</p> 
                                ) : (
                                    <p className='setting-information'>{text.ConfirmYourSettings.on}</p>
                                )
                            }
                        </div>
                    </div>

                    <div className='confirm-your-settings-configuration-container'>
                        {userData.manualSetting3 === 'show me generic ads' ? (
                                <NullSVG />
                            ) : (
                                <TickSVG />
                            )
                        }
                        <div className='writting-container'>
                            <p className='setting-option-name-confirm'>{text.ConfirmYourSettings.personalizedAds}</p>
                            {userData.manualSetting3 === 'show me generic ads' ? (
                                    <p className='setting-information'>{text.ConfirmYourSettings.off}</p> 
                                ) : (
                                    <p className='setting-information'>{text.ConfirmYourSettings.on}</p>
                                )
                            }
                        </div>
                    </div>

                    {showPrivacyRow ? (
                        <div className='confirm-your-settings-configuration-container'>
                            {userData.manualSetting4 ? (
                                <TickSVG />
                            ) : (
                                <NullSVG />
                            )}
                            <div className='writting-container'>
                                <p className='setting-option-name-confirm'>{text.ConfirmYourSettings.privacyReminders}</p>
                                {userData.manualSetting4 ? (
                                    <p className='setting-information'>{text.ConfirmYourSettings.onPrivacyReminders}</p> 
                                ) : (
                                    <p className='setting-information'>{text.ConfirmYourSettings.offPrivacyReminders}</p>
                                )}
                            </div>
                        </div>
                    ) : null}
                    
                </div>

                {errorCondition === 'selectAnOption'  && (   
                    <div id='error-div-choose-your-settings'>
                        <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                            </svg>
                        <p className='input-error-message'>{text.ManualChooseYourSettings2.error}</p>
                    </div>
                )}

                <div id='container-confirm-your-settings'>
                    <h2 className='mcys-h2'>{text.ConfirmYourSettings.aboutCookies}</h2>
                    <p className='pconfirmys p-gap-ecys'>
                        {text.ConfirmYourSettings.aboutCookies1}
                        <a className='href' href='https://policies.google.com/technologies/cookies?hl=en&gl=GB' target='blank'>{text.ConfirmYourSettings.aboutCookies2}</a>
                        {text.ConfirmYourSettings.aboutCookies3}
                    </p>
                    <ul id='bullet-points-mcys'>
                        <li className='pconfirmys confirm-list'>{text.ConfirmYourSettings.aboutCookies4}</li>
                        <li className='pconfirmys confirm-list'>{text.ConfirmYourSettings.aboutCookies5}</li>
                    </ul>
                    <p className='pconfirmys p-gap-ecys'>{text.ConfirmYourSettings.aboutCookies6}</p>
                    <ul id='bullet-points-mcys'>
                        <li className='pconfirmys confirm-list'>{text.ConfirmYourSettings.aboutCookies7}</li>
                        <li className='pconfirmys confirm-list'>{text.ConfirmYourSettings.aboutCookies8}</li>
                        <li className='pconfirmys confirm-list'>{text.ConfirmYourSettings.aboutCookies9}</li>
                        <li className='pconfirmys confirm-list'>{text.ConfirmYourSettings.aboutCookies10}</li>
                    </ul>
                    <p className='pconfirmys p-gap-ecys'>{text.ConfirmYourSettings.aboutCookies11}</p>
                    <p className='pconfirmys p-gap-ecys'>{text.ConfirmYourSettings.aboutCookies12}</p>
                </div>

                

                <div className='next-and-skip-button-duo button-space-mcys'>
                    <CustomNextAndSkipButton 
                        className='duo' 
                        variant='contained' 
                        onClick={handleBackClick}
                        type='submit'
                        sx={{
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        }}
                    >
                        {text.ManualChooseYourSettings2.back}
                    </CustomNextAndSkipButton>

                    <CustomNextAndSkipButton
                        className='duo'  
                        variant='contained' 
                        onClick={handleNextClick}
                        type='button'
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

            <LanguageChangerOverflow
                className='language-changer-div'
                onChange={handleLanguageSelection}
                initialLanguage={userData.language}
            />

        </>
    );
}
