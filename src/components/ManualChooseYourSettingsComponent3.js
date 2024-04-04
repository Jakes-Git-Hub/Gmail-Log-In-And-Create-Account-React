import React from 'react';
import googleWritingSvg from "../images/google-writing-svg.svg";
import CustomNextAndSkipButton from './buttons/CustomNext&SkipButtonComponent';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Modal, Box } from '@mui/material';
import { animated } from 'react-spring';
import TransparentSmallButton from './buttons/TransparentSmallButtonComponent';
import SecondaryGreyButton2 from './buttons/SecondaryGreyButtonComponent2';
import LanguageChangerOverflow from './LanguageChanger/LanguageChangerOverflowComponent';

export const ManualChooseYourSettingsComponent3 = ({ 
    handleNextClick,
    isImageLoaded,
    handleRadioChange,
    setting,
    errorCondition,
    isImagePreloaded,
    handleLanguageSelection,
    text,
    openYouTubeHistoryModal,
    closeYouTubeHistoryModal,
    showYouTubeHistoryModal,
    modalCondition,
    animationOpen,
    animationClose,
    handleBackClick,
    
    userData,
    
}) => {

    return (

        <>

            <div className='google-container-flexible-ryai'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-recovery-ryai"/>

                <h1 class="thin h1-space h1-mcys">{text.ManualChooseYourSettings3.h1[userData.language]}</h1>
                <p class="first-p-mcys">{text.ManualChooseYourSettings3.step}</p>

                <div id="container-choose-your-settings-m">
                    <p class="regular-p">{text.ManualChooseYourSettings3.choose}</p>
                </div>
                
                <RadioGroup
                    aria-label="settings"
                    name="settings"
                    value={setting}
                    onChange={handleRadioChange}
                    id="choose-your-settings-container-no-margin"
                >
                    <div className="radio-input-container">
                        <FormControlLabel 
                            value='show personalized ads'
                            control={
                                <Radio
                                    className='mcys-radio'
                                    sx={{
                                        '&.MuiButtonBase-root:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        color: errorCondition === "selectAnOption" ? 'rgb(217,48,37)' : 'default',
                                    }}
                                />
                            }
                            label={
                                <div className='writting-container'>
                                    <p className="setting-option-name">{text.ManualChooseYourSettings3.showMePersonalisedAds}</p>
                                    <p className="setting-information setting-information-pointer">{text.ManualChooseYourSettings3.showMePersonalisedAds1}</p>
                                </div>
                            }
                            style={{
                                    margin:'6.5px 0 11.5px 1px',
                                    width: "100%",
                                    position: "relative",
                                    right: "10px",
                            }}
                        />
                    </div>
                    <div className="radio-input-container">
                        <FormControlLabel 
                            value="show generic ads" 
                            control={
                                <Radio
                                    className='mcys-radio'
                                    sx={{
                                        '&.MuiButtonBase-root:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        color: errorCondition === "selectAnOption" ? 'rgb(217,48,37)' : 'default',
                                    }}
                                    />
                            }
                            label={
                                <div className='writting-container'>
                                    <p className="setting-option-name">{text.ManualChooseYourSettings3.showMeGenericAds}</p>
                                    <p className="setting-information setting-information-pointer">{text.ManualChooseYourSettings3.showMeGenericAds1}</p>
                                </div>
                            }
                            style={{
                                margin:'6.5px 0 11.5px 1px',
                                width: "100%",
                                position: "relative",
                                right: "10px",
                            }}
                        />
                    </div>
                </RadioGroup>

                {errorCondition === "selectAnOption" && isImagePreloaded && (   
                    <div id='error-div-choose-your-settings'>
                        <svg aria-hidden="true" class="error-image" fill="rgb(217, 48, 37)" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                        </svg>
                        <p class="input-error-message">{text.ManualChooseYourSettings3.error}</p>
                    </div>
                )}

                <div id="container-choose-your-settings-m">
                    <h2 class="mcys-h2">{text.ManualChooseYourSettings3.whatData}</h2>
                    <p class='pecys p-gap-ecys'>{text.ManualChooseYourSettings3.whatData1}</p>
                    <h2 class="mcys-h2" id='more-margin-top-h2-mcys'>{text.ManualChooseYourSettings3.howWeUse}</h2>
                    <p class='pecys p-gap-ecys'>{text.ManualChooseYourSettings3.howWeUse1}</p>
                    <h2 class="mcys-h2" id='more-margin-top-h2-mcys'>{text.ManualChooseYourSettings3.howYouCanManage}</h2>
                    <p class='pecys p-gap-ecys'>{text.ManualChooseYourSettings3.howYouCanManage1}</p>

                    <TransparentSmallButton className="setting-information learn-more-mcys" onClick={openYouTubeHistoryModal}>{text.ManualChooseYourSettings3.learnMore}</TransparentSmallButton>
                    <Modal
                        open={showYouTubeHistoryModal}
                        onClose={closeYouTubeHistoryModal}
                        closeAfterTransition
                        className= 'modal-ecys'
                    >
                        <animated.div style={modalCondition === 'opening' ? animationOpen : modalCondition === 'closing' ? animationClose : {}}>  
                            <Box 
                                sx={{
                                    width: '336px',
                                    height: '93.25vh',
                                    bgcolor: '#fff',
                                    borderRadius: '8px',
                                    color: '#5f6368',
                                    WebkitBoxAlign: 'stretch',
                                    boxAlign: 'stretch',
                                    alignItems: 'stretch',
                                    display: 'flex',
                                    WebkitBoxOrient: 'vertical',
                                    boxOrient: 'vertical',
                                    flexDirection: 'column',
                                    transition: 'transform .225s cubic-bezier(0,0,0.2,1)',
                                    WebkitTransition: 'transform .225s cubic-bezier(0,0,0.2,1),-webkit-transform .225s cubic-bezier(0,0,0.2,1)',
                                    backgroundColor: '#fff',
                                    boxShadow: '0 12px 15px 0 rgba(0,0,0,.24)',
                                    maxWidth: '24em',
                                    outline: '1px solid transparent',
                                    overflow: 'hidden',
                                }}
                            >
                        
                        <div className='modal-title-div'>
                            <h1 className='modal-title-h1'>{text.ManualChooseYourSettings3.aboutAd}</h1>
                        </div>
                        <div className='modal-scroll-information-container'>
                            <div className='modal-scroll-information'>  
                                <p className='modal-p'>{text.ManualChooseYourSettings3.aboutAd1}</p>
                                <p className='modal-p'>{text.ManualChooseYourSettings3.aboutAd2}</p>
                                <p className='modal-p'>{text.ManualChooseYourSettings3.aboutAd3}</p>
                                <p className='modal-p'>{text.ManualChooseYourSettings3.aboutAd4}</p>
                                <p className='modal-p'>{text.ManualChooseYourSettings3.aboutAd5}</p>
                            </div>
                        </div>
                        <div className='modal-got-it-div'>
                            <SecondaryGreyButton2 
                                    variant="contained"     
                                    onClick={closeYouTubeHistoryModal}
                                    sx={{
                                        '&& .MuiTouchRipple-rippleVisible': {
                                            animationDuration: '300ms',
                                        },
                                        
                                    }}
                            >
                                <div className='got-it-text'>
                                {text.ExpressChooseYourSettings.gotIt}
                                </div>
                            </SecondaryGreyButton2>
                        </div>
                            </Box>
                        </animated.div>  
                    </Modal>
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
                        {text.ManualChooseYourSettings3.back}
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
                        {text.ManualChooseYourSettings3.next}
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
