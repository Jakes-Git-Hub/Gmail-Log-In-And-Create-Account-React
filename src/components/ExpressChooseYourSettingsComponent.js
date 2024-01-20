import React from 'react';
import googleWritingSvg from "../images/google-writing-svg.svg";
import CustomNextAndSkipButton from './CustomNext&SkipButtonComponent';

export const ExpressChooseYourSettingsComponent = ({ 
    handleNextClick,
    isImageLoaded,
}) => {


    return (

        <div id='google-container-flexible-ryai'>

            <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : "empty-blue-snake-loader"}>
                <div className="blue-snake-loader"></div>
            </div>
            <img src={googleWritingSvg} alt="Google Writing" id="google-writing-recovery-ryai"/>

            <div id="choose-your-settings-title">
                <h1 class="thin h1-space">Choose your settings</h1>
            </div>

            <div id="express-choose-your-settings-info">

                <p class='thin gap pcys'>Depending on your choice, your data will be used to give you more personalized experiences and more control over the personalized ads you see</p>

                <div class="settings-svg-and-info-container">
                    <div class="settings-svg-and-info-row">
                        <div class="svg-settings">
                            <svg aria-hidden="true" class="setting-svg" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                <path d="M20 2H4C2.89 2 2 2.9 2 4V16C2 17.1 2.89 18 4 18H7V16H4V6H20V8H22V4C22 2.9 21.11 2 20 2ZM9.97 18L9.58333 18.3867L10.6996 19.5029L12.2025 18L12.3779 17.8246L11.2617 16.7083L9.97 18ZM15.1302 18C15.415 18.9241 15.6866 19.8278 15.9167 20.6667L16.7984 18L16.8983 17.6979L17.2011 18L20.6667 21.4583L22.25 19.875L20.3453 17.9703C21.2853 17.8067 22 16.9868 22 16C22 16.9824 21.2821 17.8053 20.345 17.97L18.5292 16.1542L21.4583 15.125C20.0383 14.7356 18.4328 14.2403 16.8565 13.7539L16.8565 13.7539C15.7084 13.3997 14.5758 13.0502 13.5417 12.75C13.8781 13.9771 14.3036 15.3427 14.7292 16.7083L14.7295 16.7095C14.864 17.1411 14.9985 17.5727 15.1302 18ZM20 18C20.1178 18 20.2331 17.9898 20.3453 17.9703L20.345 17.97C20.2329 17.9897 20.1176 18 20 18ZM14.3333 8H15.9167V10.375H14.3333V8ZM8 15.125V13.5417H10.375V15.125H8ZM9.58333 10.28L10.6996 9.16375L12.3779 10.8421L11.2617 11.9583L9.58333 10.28ZM19.5504 9.15583L20.6667 10.2721C19.8275 11.1192 19.8038 11.1429 18.9883 11.9583L17.8721 10.8421C18.6793 10.027 18.735 9.97129 19.5495 9.1567L19.5496 9.15664L19.5496 9.15662L19.55 9.15629L19.5504 9.15583Z"></path>
                            </svg> 
                        </div>
                        <div class="info-settings">
                            <p className="pcys">Web & App Activity</p>
                            <p className="setting-information">Provides things like faster searching, more relevant results, and more helpful app and content recommendations.</p>
                            <p className="setting-information" >Learn more about Web & App Activity</p>
                        </div>
                    </div>
                </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            </div>
            







































            {/* <div class='next-and-skip-button-duo button-space-add-recovery-email'>
                <CustomNextAndSkipButton 
                    className="duo" 
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
                    className="duo"  
                    variant="contained" 
                    // onClick={}
                    type="button"
                    sx={{
                        '&& .MuiTouchRipple-rippleVisible': {
                            animationDuration: '300ms',
                        },
                    }}
                >
                    Accept all
                </CustomNextAndSkipButton>
            </div> */}

        </div>
    );
}
