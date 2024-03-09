import React from 'react';
import googleWritingSvg from "../images/google-writing-svg.svg";
import CustomNextAndSkipButton from './buttons/CustomNext&SkipButtonComponent';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import errorImage from '../images/Daco_5575399.png';
import { Modal, Box } from '@mui/material';
import { animated } from 'react-spring';
import TransparentSmallButton from './buttons/TransparentSmallButtonComponent';
import SecondaryGreyButton2 from './buttons/SecondaryGreyButtonComponent2';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';

export const ManualChooseYourSettingsComponent2 = ({ 
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

                <h1 class="thin h1-space h1-mcys">{text.ManualChooseYourSettings2.h1[userData.language]}</h1>
                <p class="first-p-mcys">{text.ManualChooseYourSettings2.step}</p>

                <div id="container-choose-your-settings-m">
                    <p class="regular-p">{text.ManualChooseYourSettings2.choose}</p>
                </div>
                
                <RadioGroup
                    aria-label="settings"
                    name="settings"
                    value={setting}
                    onChange={handleRadioChange}
                    id="choose-your-settings-container-mcys"
                >
                    <div className="radio-input-container">
                        <FormControlLabel 
                            value="keep until delete" 
                            control={
                                <Radio
                                    className='cys-radio-manual'
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
                                    <p className="setting-option-name">{text.ManualChooseYourSettings2.keepUntil}</p>
                                </div>
                            }
                            style={{
                                    margin: '2.5px 0 2.5px 11.5px',
                                    width: "100%",
                                    position: "relative",
                                    right: "25px",
                            }}
                        />
                    </div>
                    <div className="radio-input-container">
                        <FormControlLabel 
                            value="36 months or delete" 
                            control={
                                <Radio
                                    className='cys-radio-manual'
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
                                    <p className="setting-option-name">{text.ManualChooseYourSettings2.keepActivity}</p>
                                    <p className="setting-information setting-information-pointer">{text.ManualChooseYourSettings2.keepActivity2}</p>
                                </div>
                            }
                            style={{
                                marginLeft:'11.5px',
                                marginBottom: '2.5px',
                                width: "100%",
                                position: "relative",
                                right: "25px",
                            }}
                        />
                    </div>
                    <div className="radio-input-container">
                        <FormControlLabel 
                            value="dont save" 
                            control={
                                <Radio
                                    className='cys-radio-manual'
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
                                    <p className="setting-option-name">{text.ManualChooseYourSettings2.dontSave}</p>
                                </div>
                            }
                            style={{
                                marginLeft:'11.5px',
                                marginBottom: '2.5px',
                                width: "100%",
                                position: "relative",
                                right: "25px",
                            }}
                        />
                    </div>
                </RadioGroup>

                {errorCondition === "selectAnOption" && isImagePreloaded && (   
                    <div id='error-div-choose-your-settings'>
                        <img className='error-image' src={errorImage} alt='Error Image' />
                        <p class="input-error-message">{text.ManualChooseYourSettings2.error}</p>
                    </div>
                )}

                <div id="container-choose-your-settings-m">
                    <h2 class="mcys-h2">{text.ManualChooseYourSettings2.whatData}</h2>
                    <p class='pecys p-gap-ecys'>{text.ManualChooseYourSettings2.whatData1}</p>
                    <h2 class="mcys-h2" id='more-margin-top-h2-mcys'>{text.ManualChooseYourSettings2.howWeUse}</h2>
                    <p class='pecys p-gap-ecys'>{text.ManualChooseYourSettings2.howWeUse1}</p>
                    <h2 class="mcys-h2" id='more-margin-top-h2-mcys'>{text.ManualChooseYourSettings2.howYouCanManage}</h2>
                    <p class='pecys p-gap-ecys'>{text.ManualChooseYourSettings2.howYouCanManage1}</p>

                    <TransparentSmallButton className="setting-information learn-more-mcys" onClick={openYouTubeHistoryModal}>{text.ManualChooseYourSettings2.learnMore}</TransparentSmallButton>
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
                            <h1 className='modal-title-h1'>{text.ExpressChooseYourSettings.about2}</h1>
                        </div>
                        <div className='modal-scroll-information-container'>
                            <div className='modal-scroll-information'>  
                                <h2 className='modal-h2'>{text.ExpressChooseYourSettings.m2h21}</h2>
                                <p className='modal-p'>{text.ExpressChooseYourSettings.m2p1}</p>
                                <p className='modal-p'>{text.ExpressChooseYourSettings.m2p2}</p>
                                <h2 className='modal-h2 modal-h2-more-margin'>{text.ExpressChooseYourSettings.m2h22}</h2>
                                <p className='modal-p'>{text.ManualChooseYourSettings2.howWeUse2}</p>
                                <p className='modal-p'>{text.ManualChooseYourSettings2.howWeUse3}</p>
                                <h2 className='modal-h2 modal-h2-more-margin'>{text.ExpressChooseYourSettings.m2h23}</h2>
                                <p className='modal-p'>{text.ManualChooseYourSettings2.howYouCanManage2}</p>
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
                        {text.ManualChooseYourSettings2.next}
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
