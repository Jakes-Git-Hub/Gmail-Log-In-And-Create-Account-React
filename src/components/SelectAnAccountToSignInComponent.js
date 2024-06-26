import React from 'react';
import googleWritingSvg from '../images/google-writing-svg.svg';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';
import LanguageChangerOverflow from './LanguageChanger/LanguageChangerOverflowComponent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export const SelectAnAccountToSignInComponent = ({ 
    isImageLoaded,
    userData,
    handleLanguageSelection,
    text,
    matchingUsers,
    onListItemClick,
    navToHome,
    ammountOfAccounts,
}) => {

    return (

        <>

            <main id='google-container-sac' data-testid='SAATSI'>
                <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
                    <div className='blue-snake-loader'></div>
                </div>
                <img src={googleWritingSvg} alt='Google Writing' id='google-writing-recovery-ryai'/>

                <h1 className='thin h1-space'>{text.SelectAnAccount.h1[userData.language]}</h1>

                <List id='account-list-sac' aria-label='Assoicated Gmail accounts'>
                    {matchingUsers.map((userAccount, index) => (
                        <React.Fragment key={index}>
                            <ListItem disablePadding>
                                <ListItemButton 
                                    disableRipple
                                    aria-label={`Select this account to sign in with ${userAccount.email} button`}
                                    sx={{
                                        borderRadius: '10px',
                                        marginLeft: '-3%', 
                                        marginRight: '-3%', 
                                        '&:hover': {
                                            backgroundColor: '#f0f4f9', 
                                        },
                                    }}
                                    onClick={() => onListItemClick(userAccount.email)}
                                >
                                    <ListItemText 
                                        primary={
                                            <div id='profile-card-container'>
                                                <div id='profile-initial-circle-container'>
                                                    <div id='profile-initial-circle' style={{backgroundColor: userAccount.profileCircleColor}}>
                                                        {userAccount.firstName ? userAccount.firstName.charAt(0) : ''}
                                                    </div>
                                                </div>
                                                <div id='name-and-email-container'>
                                                    <div id='name-ryai'>
                                                        {userAccount.firstName} {userAccount.lastName}
                                                    </div>
                                                    <div id='email-address-ryai'>
                                                        {userAccount.email}
                                                    </div>
                                                </div>
                                            </div>
                                        } 
                                        className='list-item-sac'
                                    />
                                </ListItemButton>
                            </ListItem>
                            {index !== matchingUsers.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                    <Divider />
                    <ListItem disablePadding>
                        <ListItemButton 
                            disableRipple
                            aria-label='Use another account to sign in with button'
                            sx={{
                                borderRadius: '10px',
                                marginLeft: '-3%', 
                                marginRight: '-3%', 
                                '&:hover': {
                                    backgroundColor: '#f0f4f9', 
                                },
                            }}
                            onClick={navToHome}
                        >
                            <ListItemText 
                                primary={
                                    <div id='profile-card-container'>
                                        <div id='profile-initial-circle-container'>
                                            <svg aria-hidden='true' className='' fill='currentColor' focusable='false' width='20px' height='20px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                                                <path d='M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2z M7.07,18.28 c0.43-0.9,3.05-1.78,4.93-1.78s4.51,0.88,4.93,1.78C15.57,19.36,13.86,20,12,20S8.43,19.36,7.07,18.28z M18.36,16.83 c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93,0.59-6.36,2.33C4.62,15.49,4,13.82,4,12c0-4.41,3.59-8,8-8c4.41,0,8,3.59,8,8 C20,13.82,19.38,15.49,18.36,16.83z'></path>
                                                <path d='M12,6c-1.94,0-3.5,1.56-3.5,3.5S10.06,13,12,13c1.94,0,3.5-1.56,3.5-3.5S13.94,6,12,6z M12,11c-0.83,0-1.5-0.67-1.5-1.5 C10.5,8.67,11.17,8,12,8c0.83,0,1.5,0.67,1.5,1.5C13.5,10.33,12.83,11,12,11z'></path>
                                            </svg>
                                        </div>
                                        <div id='name-and-email-container'>
                                            <div id='name-ryai'>
                                                Use another account
                                            </div>
                                        </div>
                                    </div>
                                } 
                            />
                        </ListItemButton>
                    </ListItem>
                </List>

            </main>

            { ammountOfAccounts <= 2 ? (
                <LanguageChanger 
                    className='language-changer-div'
                    onChange={handleLanguageSelection}
                    initialLanguage={userData.language}
                    aria-label='Change language' 
                    text={text}
                />
            ) : (
                <LanguageChangerOverflow 
                    className='language-changer-div'
                    onChange={handleLanguageSelection}
                    initialLanguage={userData.language}
                    aria-label='Change language' 
                    text={text}
                />
            )}                    

        </>
    );
}
