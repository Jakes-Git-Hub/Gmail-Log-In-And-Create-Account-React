import React from 'react';
import googleWritingSvg from "../images/google-writing-svg.svg";
import CustomNextAndSkipButton from './CustomNext&SkipButtonComponent';

export const ChooseYourSettingsComponent = ({ 
    handleNextClick,
    isImageLoaded,
}) => {


    return (

        <div id='google-container-flexible-ryai'>

            <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : "empty-blue-snake-loader"}>
                <div className="blue-snake-loader"></div>
            </div>
            <img src={googleWritingSvg} alt="Google Writing" id="google-writing-recovery-ryai"/>

            <div id="choose-your-settings-info">
                <h1 class="thin h1-space">Choose your settings</h1>
                <p class='thin gap center pcys'>Depending on your choice, your data will be used to give you more personalized experiences and more control over the personalized ads you see</p>
            </div>
            

            <div class='next-and-skip-button-duo button-space-add-recovery-email'>
                <CustomNextAndSkipButton 
                    variant="contained" 
                    onClick={handleNextClick}
                    type="submit"
                    sx={{
                        '&& .MuiTouchRipple-rippleVisible': {
                            animationDuration: '300ms',
                        },
                    }}
                >
                    Reject all
                </CustomNextAndSkipButton>

                <CustomNextAndSkipButton 
                    variant="contained" 
                    // onClick={}
                    type="button"
                    sx={{
                        '&& .MuiTouchRipple-rippleVisible': {
                            animationDuration: '150ms',
                        },
                    }}
                >
                    Accept all
                </CustomNextAndSkipButton>
            </div>

        </div>
    );
}
