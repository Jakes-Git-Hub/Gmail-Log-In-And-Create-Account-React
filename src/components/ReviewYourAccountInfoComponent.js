import React from 'react';
import googleWritingSvg from "../images/google-writing-svg.svg";
import CustomNextButton from './buttons/CustomNextButtonComponent';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';

export const ReviewYourAccountInfoComponent = ({ 
    handleNextClick,
    isImageLoaded,
    userData,
    handleLanguageSelection,
    text,
    translationLoading,
    

}) => {

    return (

        <>

            <div className='google-container-flexible-ryai'>

                <div className={!isImageLoaded || translationLoading ? "empty-blue-snake-loader" : 'empty-blue-snake-loader-placeholder'}>
                    <div className="blue-snake-loader"></div>
                </div>
                <img src={googleWritingSvg} alt="Google Writing" id="google-writing-recovery-ryai"/>

                <h1 class="thin h1-space">{text.ReviewYourAccountInfo.h1}</h1>
                <div id='reduce-width-h2'>
                    <h2 class='thin gap center'>{text.ReviewYourAccountInfo.h2}</h2>
                </div>
                
                <div id="profile-card-container">
                    <div id="profile-initial-circle-container">
                        <div id="profile-initial-circle" style={{backgroundColor: userData.profileCircleColor}}>
                            {userData.firstName ? userData.firstName.charAt(0) : ""}
                        </div>
                    </div>
                    <div id="name-and-email-container">
                        <div id="name-ryai">
                            {userData.firstName} {userData.lastName}
                        </div>
                        <div id="email-address-ryai">
                            {userData.email}
                        </div>
                    </div>
                </div>

                <div id='review-your-account-next-button' class="button-space-create-password">
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
                            {text.ReviewYourAccountInfo.next}
                        </div>
                    </CustomNextButton>                
                    
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
