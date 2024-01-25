import React from 'react';
import googleWritingSvg from "../images/google-writing-svg.svg";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TransparentSmallButton from './TransparentSmallButtonComponent';
import CustomNextAndSkipButton from './CustomNext&SkipButtonComponent';

export const ExpressChooseYourSettingsComponent = ({ 
    handleNextClick,
    isImageLoaded,
}) => {


    return (

        <div className='google-container-flexible-ryai' id='ecys-top-margin'>

            <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : "empty-blue-snake-loader"}>
                <div className="blue-snake-loader"></div>
            </div>
            <img src={googleWritingSvg} alt="Google Writing" id="google-writing-recovery-ryai"/>

            <div id="choose-your-settings-title">
                <h1 class="thin h1-space">Choose your settings</h1>
            </div>

            <div id="express-choose-your-settings-info">

                <p class='pecys'>Depending on your choice, your data will be used to give you more personalized experiences and more control over the personalized ads you see</p>

                <div class="settings-svg-and-info-container">
                    <div class="settings-svg-and-info-row">
                        <div class="svg-settings">
                            <svg aria-hidden="true" class="setting-svg" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                <path d="M20 2H4C2.89 2 2 2.9 2 4V16C2 17.1 2.89 18 4 18H7V16H4V6H20V8H22V4C22 2.9 21.11 2 20 2ZM9.97 18L9.58333 18.3867L10.6996 19.5029L12.2025 18L12.3779 17.8246L11.2617 16.7083L9.97 18ZM15.1302 18C15.415 18.9241 15.6866 19.8278 15.9167 20.6667L16.7984 18L16.8983 17.6979L17.2011 18L20.6667 21.4583L22.25 19.875L20.3453 17.9703C21.2853 17.8067 22 16.9868 22 16C22 16.9824 21.2821 17.8053 20.345 17.97L18.5292 16.1542L21.4583 15.125C20.0383 14.7356 18.4328 14.2403 16.8565 13.7539L16.8565 13.7539C15.7084 13.3997 14.5758 13.0502 13.5417 12.75C13.8781 13.9771 14.3036 15.3427 14.7292 16.7083L14.7295 16.7095C14.864 17.1411 14.9985 17.5727 15.1302 18ZM20 18C20.1178 18 20.2331 17.9898 20.3453 17.9703L20.345 17.97C20.2329 17.9897 20.1176 18 20 18ZM14.3333 8H15.9167V10.375H14.3333V8ZM8 15.125V13.5417H10.375V15.125H8ZM9.58333 10.28L10.6996 9.16375L12.3779 10.8421L11.2617 11.9583L9.58333 10.28ZM19.5504 9.15583L20.6667 10.2721C19.8275 11.1192 19.8038 11.1429 18.9883 11.9583L17.8721 10.8421C18.6793 10.027 18.735 9.97129 19.5495 9.1567L19.5496 9.15664L19.5496 9.15662L19.55 9.15629L19.5504 9.15583Z"></path>
                            </svg> 
                        </div>
                        <div class="info-settings">
                            <p className="pecys-pseudo-title">Web & App Activity</p>
                            <p className="setting-information">Provides things like faster searching, more relevant results, and more helpful app and content recommendations.</p>
                            <TransparentSmallButton className="setting-information" >Learn more about Web & App Activity</TransparentSmallButton>
                        </div>
                    </div>
                    <div class="settings-svg-and-info-row">
                        <div class="svg-settings">
                        <svg aria-hidden="true" id="youtube-svg" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM18 10L12 5.5V14.5L18 10Z"></path>
                        </svg>
                        </div>
                        <div class="info-settings">
                            <p className="pecys-pseudo-title">YouTube History</p>
                            <p className="setting-information">Provides things like YouTube homepage recommendations and helps you remember where you left off.</p>
                            <TransparentSmallButton className="setting-information">Learn more about YouTube History</TransparentSmallButton>
                        </div>
                    </div>
                    <div class="settings-svg-and-info-row">
                        <div class="svg-settings">
                        <svg aria-hidden="true" class="stUf5b" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2222 11.1111H9.88889V12.8889H15.2222V11.1111ZM14.7138 16.4444H4.55556V14.6667H14.1868C14.3511 15.2415 14.5288 15.8374 14.7138 16.4444ZM15.2629 18.2222H3.66667C3.18667 18.2222 2.77778 17.9022 2.77778 17.5289V6.47111C2.77778 6.09778 3.18667 5.77778 3.66667 5.77778H16.1022C16.5822 5.77778 16.9911 6.09778 16.9911 6.47111V12H17V14.9042C17.2675 14.9865 17.5366 15.0696 17.8065 15.1528C18.1296 15.2525 18.4539 15.3526 18.7778 15.4522V6.47111C18.7778 5.11111 17.5689 4 16.1111 4H3.66667C2.20889 4 1 5.12 1 6.47111V17.5289C1 18.8889 2.20889 20 3.66667 20H15.8153C15.6668 19.5183 15.5152 19.0319 15.3636 18.5455C15.3301 18.4377 15.2965 18.3299 15.2629 18.2222ZM8.11111 12.8889H4.55556V7.55556H8.11111V12.8889ZM15.2222 9.33333H9.88889V7.55556H15.2222V9.33333Z" fill="#5F6368"></path><path d="M15 15C15.5409 16.9727 16.3682 19.3909 16.9091 21.3636L17.6982 18.9773L20.7273 22L22 20.7273L19.0091 17.7364L21.3636 16.9091C19.3909 16.3682 16.9727 15.5727 15 15Z" fill="#5F6368"></path></svg>
                        </div>
                        <div class="info-settings">
                            <p className="pecys-pseudo-title">Personalized ads</p>
                            <p className="setting-information">Provides more relevant ads and control over the info used to show those ads. <TransparentSmallButton className="setting-information" >Learn more about personalized ads</TransparentSmallButton></p> 
                            
                        </div>
                    </div>
                </div>

                <h2 class="express-ecys-h2">What data is used</h2>

                <p class='pecys p-gap-ecys'>Web & App Activity saves your activity on Google sites and apps, like Search and Maps, and includes associated info like location. It also saves synced Chrome history and activity from sites, apps, and devices that use Google services.</p>

                <p class='pecys p-gap-ecys'>YouTube History saves the videos you watch and the things you search for when you use YouTube.</p>

                <p class='pecys p-gap-ecys-last'>Personalized ads use information saved in your Google Account (such as your activity, age range, and gender) as well as interactions with advertisers. We’ll also use your activity on other sites and apps that use our advertising services.</p>

                <h2 class="express-ecys-h2">How we use this data</h2>

                <p class='pecys'>When you’re signed in and these settings are on, personal data will be saved in your account and used to personalize your experience in Search, YouTube, Maps, and other Google services for things like</p>
            
                <ul className='ul-ecys'>
                    <li className='pecys bullet-point-ecys'>help remembering where you left off</li>
                    <li className='pecys bullet-point-ecys'>more personalized recommendations across Google products, like articles, apps, and videos</li>
                    <li className='pecys bullet-point-ecys'>YouTube homepage recommendations</li>
                </ul>

                <p class='pecys p-gap-ecys-first'>When this setting is off, YouTube features that rely on history to personalize your experience are disabled.</p>

                <p class='pecys p-gap-ecys-tight'>We also use your information to show ads. Ads are tailored to you in Google services and on sites and apps that partner with Google, so you can</p>
            
                <ul className='ul-ecys'>
                    <li className='pecys bullet-point-ecys'>see ads that are based on topics you might find appealing</li>
                    <li className='pecys bullet-point-ecys'>block specific topics and advertisers</li>
                </ul>
            
                <p class='pecys p-gap-ecys-first-and-last'>We don’t sell your personal information to anyone.</p>

                <h2 class="express-ecys-h2">How you can manage your data</h2>

                <p class='pecys p-gap-ecys'>In addition to being able to manually delete your activity anytime, Web & App Activity older than 18 months and YouTube History older than 36 months will be automatically deleted.</p>

                <p class='pecys p-gap-ecys-last'>You can see your data, delete it, change your settings, and withdraw your consent at account.google.com.</p>
             
            </div>

            <div class='next-and-skip-button-duo button-space-ecys'>
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
            </div>

        </div>
    );
}
