import React from 'react';
import googleWritingSvg from "../images/google-writing-svg.svg";
import CustomNextButton from './CustomNextButtonComponent';

export const ReviewYourAccountInfoComponent = ({ 
    handleNextClick,
    isImageLoaded,
    userData,
}) => {


    return (

        <div className='google-container-flexible-ryai'>

            <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : "empty-blue-snake-loader"}>
                <div className="blue-snake-loader"></div>
            </div>
            <img src={googleWritingSvg} alt="Google Writing" id="google-writing-recovery-ryai"/>

            <h1 class="thin h1-space">Review your account info</h1>
            <div id='reduce-width-h2'>
                <h2 class='thin gap center'>You can use this email address to sign in later</h2>
            </div>
            
            <div id="profile-card-container">
                <div id="profile-initial-circle-container">
                    <div id="profile-initial-circle" style={{backgroundColor: userData.profileCircleColor}}>
                        {userData.firstName.charAt(0) ? userData.firstName.charAt(0) : ""}
                    </div>
                </div>
                <div id="name-and-email-container">
                    <div id="name-ryai">
                        {userData.firstName} {userData.lastName}
                    </div>
                    <div id="email-address-ryai">
                        testerhapital@gmail.com{userData.email}
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
                        Next
                    </div>
                </CustomNextButton>                
                
            </div>

        </div>
    );
}
