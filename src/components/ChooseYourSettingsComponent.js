import React from 'react';
import googleWritingSvg from "../images/google-writing-svg.svg";
import CustomNextButton from './CustomNextButtonComponent';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

export const ChooseYourSettingsComponent = ({ 
    handleNextClick,
    isImageLoaded,
    userData,
    CustomRadio,
    handleRadioChange,
    selectedValue,
    theme,
}) => {


    return (

        <div id='google-container-flexible-ryai'>

            <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : "empty-blue-snake-loader"}>
                <div className="blue-snake-loader"></div>
            </div>
            <img src={googleWritingSvg} alt="Google Writing" id="google-writing-recovery-ryai"/>

            <h1 class="thin h1-space">Choose your settings</h1>
            
            <RadioGroup
                aria-label="settings"
                name="settings"
                value={selectedValue}
                onChange={handleRadioChange}
                id="choose-your-settings-container"
            >
                <div className="radio-input-and-writting-container">
                    <div className="radio-input-container">
                        <FormControlLabel 
                            value="express" 
                            control={
                                <Radio
                                    sx={{
                                        '&.MuiButtonBase-root:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                />
                            }
                            style={{margin:'6.5px 11px 3px 3px'}}
                        />
                    </div>
                    <div className='writting-container'>
                        <p className="setting-option-name" >Express (1 step)</p>
                        <p className="setting-information">Choose your settings in one step. Your choices to turn settings on or off help tailor the content and ad experiences you see.</p>
                    </div>
                </div>
                <div className="radio-input-and-writting-container">
                    <div className="radio-input-container">
                        <FormControlLabel 
                            value="manual" 
                            control={
                                <Radio
                                    sx={{
                                        '&.MuiButtonBase-root:hover': {
                                            backgroundColor: 'transparent',
                                        }
                                    }}
                                 />
                            }
                            style={{margin:'6.5px 11px 3px 3px'}}
                        />
                    </div>
                    <div className='writting-container'>
                        <p className="setting-option-name">Manual (4 steps)</p>
                        <p className="setting-information">Choose your settings step by step. Your choices to turn settings on or off help tailor the content and ad experiences you see.</p>
                    </div>
                </div>
            </RadioGroup>

            <div id="p-container-choose-your-settings">
                <p id="choose-your-settings-p">You can change your settings anytime at account.google.com</p>
            </div>

            <div id='next-button-choose-your-settings'>
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
                        Next
                    </div>
                </CustomNextButton>                
                
            </div>

        </div>
    );
}
