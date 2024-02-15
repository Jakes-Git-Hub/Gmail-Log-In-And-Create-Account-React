import React from 'react';
import googleWritingSvg from "../images/google-writing-svg.svg";
import CustomNextAndSkipButton from './buttons/CustomNext&SkipButtonComponent';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import errorImage from '../images/Daco_5575399.png';
import Checkbox from '@mui/material/Checkbox';

export const ManualChooseYourSettingsComponent4 = ({ 
    handleNextClick,
    isImageLoaded,
    handleRadioChange,
    setting,
    errorCondition,
    isImagePreloaded,
    handleLanguageSelection,
    text,
    handleBackClick,
    checked,
    toggleCheckBox,
}) => {

    return (

        <>

            <div className='google-container-flexible-ryai'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : "empty-blue-snake-loader"}>
                    <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-recovery-ryai"/>

                <h1 class="thin h1-space h1-mcys">{text.ManualChooseYourSettings4.h1}</h1>
                <p class="first-p-mcys">{text.ManualChooseYourSettings4.step}</p>

                <div id="container-choose-your-settings-m">
                    <p class="regular-p">{text.ManualChooseYourSettings4.choose}</p>
                    <ul id='bullet-points-mcys'>
                        <li className='modal-li'>{text.ManualChooseYourSettings4.bullet1}</li>
                        <li className='modal-li'>{text.ManualChooseYourSettings4.bullet2}</li>
                        <li className='modal-li'>{text.ManualChooseYourSettings4.bullet3}</li>
                    </ul>
                </div>

                <RadioGroup
                    aria-label="settings"
                    name="settings"
                    value={setting}
                    id="choose-your-settings-container-no-margin"
                >
                    <div className="radio-input-container-mcys">
                        <FormControlLabel 
                            value="show personalized ads" 
                            control={
                                <Checkbox 
                                    type="checkbox"
                                    checked={checked}
                                    onChange={toggleCheckBox}
                                    className="custom-checkbox-input"
                                    sx={{
                                        color: '#5f6368',
                                        '&& .MuiTouchRipple-rippleVisible': {
                                            animationDuration: '300ms',
                                        },
                                        '&:hover': {
                                            color: !checked ? '#202124': '',
                                            '& .MuiTouchRipple-root': {
                                                backgroundColor: !checked ? '#e2e2e21a' : '',
                                            },
                                        },
                                        '&:active': {
                                            backgroundColor: '#e8f1fc',
                                        },
                                        '&.Mui-checked': {
                                            color: '#1a73e8',
                                            '&:hover': {
                                                color: '#174ea6',
                                            },
                                        },
                                    }}
                                />
                            }
                            label={
                                <div className='writting-container'>
                                    <p className="setting-option-name">{text.ManualChooseYourSettings4.privacy}</p>
                                    <p className="setting-information setting-information-pointer">{text.ManualChooseYourSettings4.privacy1}</p>
                                </div>
                            }
                            style={{
                                    margin:'-5px 0 11.5px 1px',
                                    width: "100%",
                                    position: "relative",
                                    right: "10px",
                            }}
                        />
                    </div>
                </RadioGroup>

                <div id="container-choose-your-settings-m">
                    <p class="regular-p grey-mcys">{text.ManualChooseYourSettings4.youCanChange}</p>
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

            <div className='language-changer-div'>
                <select onChange={handleLanguageSelection}>
                    <option value="es">Translate to Spanish</option>
                    <option value="fr">Translate to French</option>
                    <option value="de">Translate to German</option>
                </select>
            </div>

        </>
    );
}
