import React from 'react';
import googleWritingSvg from '../images/google-writing-svg.svg';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';

interface LanguageStrings {
    [key: string]: string;
}

interface NestedTextObject {
    [key: string]: LanguageStrings;
}

interface TextData {
    [key: string]: NestedTextObject;
}

interface ReviewYourAccountInfoComponentProps {
    handleNextClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isImageLoaded: boolean;
    userData: {
        profileCircleColor?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        language: string;
        [key: string]: any;
    };
    handleLanguageSelection: (chosenLanguage: string) => void;
    text: TextData;
}

export const ReviewYourAccountInfoComponent: React.FC<ReviewYourAccountInfoComponentProps> = ({ 
    handleNextClick,
    isImageLoaded,
    userData,
    handleLanguageSelection,
    text,
}) => {

    return (

        <>

            <main className='google-container-flexible-ryai' data-testid='RYAI'>

                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className='blue-snake-loader'></div>
                </div>
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-recovery-ryai'/>

                <h1 className='thin h1-space'>{text.ReviewYourAccountInfo.h1[userData.language]}</h1>
                <div id='reduce-width-h2'>
                    <h2 className='thin gap center'>{text.ReviewYourAccountInfo.h2[userData.language]}</h2>
                </div>
                
                <div id='profile-card-container' aria-label='profile card container'>
                    <div id='profile-initial-circle-container'>
                        <div id='profile-initial-circle' style={{backgroundColor: userData.profileCircleColor}}>
                            {userData.firstName ? userData.firstName.charAt(0) : ''}
                        </div>
                    </div>
                    <div id='name-and-email-container'>
                        <div id='name-ryai'>
                            {userData.firstName} {userData.lastName}
                        </div>
                        <div id='email-address-ryai'>
                            {userData.email}
                        </div>
                    </div>
                </div>

                <div id='review-your-account-next-button' className='button-space-create-password'>
                    <CustomNextButton 
                        variant='contained' 
                        onClick={handleNextClick}
                        aria-label='next button'
                        sx={{
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        }}
                    >
                        <div className='next'>
                            {text.ReviewYourAccountInfo.next[userData.language]}
                        </div>
                    </CustomNextButton>                
                    
                </div>

            </main>

            <LanguageChanger 
                className='language-changer-div'
                onChange={handleLanguageSelection}
                initialLanguage={userData.language}
                aria-label='Change language'
                text={text}
            />

        </>
    );
}
