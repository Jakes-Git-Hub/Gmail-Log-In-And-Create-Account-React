import React from 'react';
import googleWritingSvg from '../images/google-writing-svg.svg';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import LanguageChanger from './LanguageChanger/LanguageChangerComponent';


export const ChooseYourSettingsComponent = ({ 
    handleNextClick,
    isImageLoaded,
    handleRadioChange,
    setting,
    errorCondition,
    isImagePreloaded,
    handleLanguageSelection,
    text,
    userData,
    
}) => {

    return (

        <>

            <main className='google-container-flexible-ryai'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className='blue-snake-loader'></div>
                </div>
                
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-recovery-ryai'/>

                <h1 className='thin h1-space'>{text.ChooseYourSettings.h1[userData.language]}</h1>
                
                <RadioGroup
                    aria-label='settings'
                    name='settings'
                    value={setting}
                    onChange={handleRadioChange}
                    id='choose-your-settings-container'
                >
                    <div className='radio-input-container' aria-label='settings-container'>
                        <FormControlLabel 
                            value='express' 
                            control={
                                <Radio
                                    aria-label='Select express option settings'
                                    className='cys-radio'
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
                                    <p className='setting-option-name'>{text.ChooseYourSettings.express[userData.language]}</p>
                                    <p className='setting-information setting-information-pointer'>{text.ChooseYourSettings.expressInfo[userData.language]}</p>
                                </div>
                            }
                            style={{
                                    margin:'6.5px 0 11.5px 1px',
                                    width: '100%',
                                    position: 'relative',
                                    right: '10px',
                            }}
                        />
                    </div>
                    <div className='radio-input-container'>
                        <FormControlLabel 
                            value='manual' 
                            control={
                                <Radio
                                    aria-label='Select manual option settings'
                                    className='cys-radio'
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
                                    <p className='setting-option-name'>{text.ChooseYourSettings.manual[userData.language]}</p>
                                    <p className='setting-information setting-information-pointer'>{text.ChooseYourSettings.manualInfo[userData.language]}</p>
                                </div>
                            }
                            style={{
                                margin:'6.5px 0 11.5px 1px',
                                width: '100%',
                                position: 'relative',
                                right: '10px',
                            }}
                        />
                    </div>
                </RadioGroup>

                {errorCondition === 'selectAnOption' && isImagePreloaded && (   
                    <div id='error-div-choose-your-settings'>
                        <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
                        </svg>
                        <p className='input-error-message'>{text.ChooseYourSettings.error[userData.language]}</p>
                    </div>
                )}

                <div id='p-container-choose-your-settings'>
                    <p id='choose-your-settings-p'>{text.ChooseYourSettings.postlude[userData.language]}</p>
                </div>

                <div id='next-button-choose-your-settings'>
                    <CustomNextButton 
                        variant='contained' 
                        onClick={handleNextClick}
                        aria-label='Next button'
                        sx={{
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        }}
                    >
                        <div className='next'>
                            {text.ChooseYourSettings.next[userData.language]}
                        </div>
                    </CustomNextButton>                
                    
                </div>

            </main>

            <LanguageChanger 
                className='language-changer-div'
                onChange={handleLanguageSelection}
                initialLanguage={userData.language}
                
            />

        </>
    );
}
