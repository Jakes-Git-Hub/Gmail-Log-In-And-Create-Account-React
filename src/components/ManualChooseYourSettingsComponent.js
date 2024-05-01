import React from 'react';
import googleWritingSvg from '../images/google-writing-svg.svg';
import CustomNextAndSkipButton from './buttons/CustomNext&SkipButtonComponent';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Modal, Box } from '@mui/material';
import { animated } from 'react-spring';
import TransparentSmallButton from './buttons/TransparentSmallButtonComponent';
import SecondaryGreyButton2 from './buttons/SecondaryGreyButtonComponent2';
import LanguageChangerOverflow from './LanguageChanger/LanguageChangerOverflowComponent';

export const ManualChooseYourSettingsComponent = ({ 
    handleNextClick,
    isImageLoaded,
    handleRadioChange,
    setting,
    errorCondition,
    handleLanguageSelection,
    text,
    openWebAndAppActivityModal,
    closeWebAndAppActivityModal,
    showWebAndAppActivityModal,
    modalCondition,
    animationOpen,
    animationClose,
    handleBackClick,
    userData,
    
}) => {

    return (

        <>

            <main className='google-container-flexible-ryai' data-testid='MCYS1'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className='blue-snake-loader'></div>
                </div>
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-recovery-ryai'/>

                <h1 className='thin h1-space h1-mcys'>{text.ManualChooseYourSettings.h1[userData.language]}</h1>
                <p className='first-p-mcys'>{text.ManualChooseYourSettings.step1}</p>
                <div id='container-choose-your-settings-m'>
                    <p className='regular-p'>{text.ManualChooseYourSettings.choose}</p>
                </div>
                
                <RadioGroup
                    aria-label='settings'
                    name='settings'
                    value={setting}
                    onChange={handleRadioChange}
                    id='choose-your-settings-container-mcys'
                >
                    <div className='radio-input-container'>
                        <FormControlLabel 
                            value='keep until delete' 
                            control={
                                <Radio
                                aria-label='Select keep until I delete manualy'
                                    className='cys-radio-manual'
                                    sx={{
                                        '&.MuiButtonBase-root:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        color: errorCondition === 'selectAnOption' ? 'rgb(217,48,37)' : 'default',
                                    }}
                                />
                            }
                            label={
                                <div className='writting-container'>
                                    <p className='setting-option-name'>{text.ManualChooseYourSettings.keepUntil}</p>
                                </div>
                            }
                            style={{
                                    margin: '2.5px 0 2.5px 11.5px',
                                    width: '100%',
                                    position: 'relative',
                                    right: '25px',
                            }}
                        />
                    </div>
                    <div className='radio-input-container'>
                        <FormControlLabel 
                            value='18 months or delete' 
                            control={
                                <Radio
                                    className='cys-radio-manual'
                                    aria-label='Select Keep activity for 18 months'
                                    sx={{
                                        '&.MuiButtonBase-root:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        color: errorCondition === 'selectAnOption' ? 'rgb(217,48,37)' : 'default',
                                    }}
                                    />
                            }
                            label={
                                <div className='writting-container'>
                                    <p className='setting-option-name'>{text.ManualChooseYourSettings.keepActivity}</p>
                                    <p className='setting-information setting-information-pointer'>{text.ManualChooseYourSettings.keepActivity2}</p>
                                </div>
                            }
                            style={{
                                marginLeft:'11.5px',
                                marginBottom: '2.5px',
                                width: '100%',
                                position: 'relative',
                                right: '25px',
                            }}
                        />
                    </div>
                    <div className='radio-input-container'>
                        <FormControlLabel 
                            value='dont save' 
                            control={
                                <Radio
                                    className='cys-radio-manual'
                                    aria-label='Select dont save Web & App Activity in my account'
                                    sx={{
                                        '&.MuiButtonBase-root:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        color: errorCondition === 'selectAnOption' ? 'rgb(217,48,37)' : 'default',
                                    }}
                                    />
                            }
                            label={
                                <div className='writting-container'>
                                    <p className='setting-option-name'>{text.ManualChooseYourSettings.dontSave}</p>
                                </div>
                            }
                            style={{
                                marginLeft:'11.5px',
                                marginBottom: '2.5px',
                                width: '100%',
                                position: 'relative',
                                right: '25px',
                            }}
                        />
                    </div>
                </RadioGroup>

                {errorCondition === 'selectAnOption'  && (   
                    <div id='error-div-choose-your-settings'>
                        <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                        </svg>
                        <p className='input-error-message'>{text.ManualChooseYourSettings.error}</p>
                    </div>
                )}

                <div id='container-choose-your-settings-m'>
                    <h2 className='mcys-h2'>{text.ManualChooseYourSettings.whatData}</h2>
                    <p className='pecys p-gap-ecys'>{text.ManualChooseYourSettings.whatData1}</p>
                    <h2 className='mcys-h2' id='more-margin-top-h2-mcys'>{text.ManualChooseYourSettings.howWeUse}</h2>
                    <p className='pecys p-gap-ecys'>{text.ManualChooseYourSettings.howWeUse1}</p>
                    <h2 className='mcys-h2' id='more-margin-top-h2-mcys'>{text.ManualChooseYourSettings.howYouCanManage}</h2>
                    <p className='pecys p-gap-ecys'>{text.ManualChooseYourSettings.howYouCanManage1}</p>

                    <TransparentSmallButton 
                        className='setting-information learn-more-mcys' 
                        onClick={openWebAndAppActivityModal}
                        aria-label='Learn more about Web & App Activity button'
                    >
                        {text.ExpressChooseYourSettings.learnMore1[userData.language]}
                    </TransparentSmallButton>
                    <Modal
                        open={showWebAndAppActivityModal}
                        onClose={closeWebAndAppActivityModal}
                        closeAfterTransition
                        className= 'modal-ecys'
                        aria-modal={showWebAndAppActivityModal ? 'true' : 'false'}
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
                                    <h1 className='modal-title-h1'>{text.ExpressChooseYourSettings.about1[userData.language]}</h1>
                                </div>
                                <div className='modal-scroll-information-container'>
                                    <div className='modal-scroll-information'>  
                                        <h2 className='modal-h2'>{text.ExpressChooseYourSettings.m1h21[userData.language]}</h2>
                                        <p className='modal-p'>{text.ExpressChooseYourSettings.m1p1[userData.language]}</p>
                                        <p className='modal-p'>{text.ExpressChooseYourSettings.m1p2[userData.language]}</p>
                                        <ul>
                                            <li className='modal-li'>{text.ExpressChooseYourSettings.m1b1[userData.language]}</li>
                                            <li className='modal-li'>{text.ExpressChooseYourSettings.m1b2[userData.language]}</li>
                                            <li className='modal-li'>{text.ExpressChooseYourSettings.m1b3[userData.language]}</li>
                                            <li className='modal-li'>{text.ExpressChooseYourSettings.m1b4[userData.language]}</li>
                                        </ul>
                                        <p className='modal-p'>{text.ExpressChooseYourSettings.m1p3[userData.language]}.</p>
                                        <p className='modal-p'>{text.ExpressChooseYourSettings.m1p4[userData.language]}</p>
                                        <h2 className='modal-h2 modal-h2-more-margin'>{text.ExpressChooseYourSettings.m1h22[userData.language]}</h2>
                                        <p className='modal-p'>{text.ExpressChooseYourSettings.m1p5[userData.language]}</p>
                                        <p className='modal-p'>{text.ExpressChooseYourSettings.m1p6[userData.language]}</p>
                                        <h2 className='modal-h2 modal-h2-more-margin'>{text.ExpressChooseYourSettings.m1h23[userData.language]}</h2>
                                        <p className='modal-p'>{text.ExpressChooseYourSettings.m1p7[userData.language]}</p>
                                    </div>
                                </div>
                                <div className='modal-got-it-div'>
                                    <SecondaryGreyButton2 
                                            variant='contained'     
                                            onClick={closeWebAndAppActivityModal}
                                            aria-label='Close modal button'
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

                <div className='next-and-skip-button-duo button-space-mcys'>
                    <CustomNextAndSkipButton 
                        className='duo' 
                        variant='contained' 
                        onClick={handleBackClick}
                        type='submit'
                        aria-label='Back button'
                        sx={{
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        }}
                    >
                        {text.ManualChooseYourSettings.back}
                    </CustomNextAndSkipButton>

                    <CustomNextAndSkipButton
                        className='duo'  
                        variant='contained' 
                        onClick={handleNextClick}
                        type='button'
                        aria-label='Next button'
                        sx={{
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        }}
                    >
                        {text.ManualChooseYourSettings.next}
                    </CustomNextAndSkipButton>
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
