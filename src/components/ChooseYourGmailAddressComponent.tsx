import React, { ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import googleWritingSvg from '../images/google-writing-svg.svg';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';

interface Props {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleNextClick: () => void;
  errorCondition: string | null;
  handleSelectEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  text: any;
  handleLanguageSelection: (language: string) => void;
  isImageLoaded: boolean;
  userData: any;
}

export const ChooseYourGmailAddressComponent: React.FC<Props> = ({
  email,
  setEmail,
  handleNextClick,
  errorCondition,
  handleSelectEmail,
  text,
  handleLanguageSelection,
  isImageLoaded,
  userData,
}) => {
  return (
    <>
      <main id='google-container-responsive' data-testid='CYGAComp'>
        <div className={isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader'}>
          <div className='blue-snake-loader'></div>
        </div>
        <img src={googleWritingSvg} alt='Google Writing' id='google-writing-BG' />

        <form>
          <h1 className='thin h1-space'>{text.ChooseYourGmailAddress.h1[userData.language]}</h1>
          <h2 className='thin gap center' id='h2'>{text.ChooseYourGmailAddress.h2[userData.language]}</h2>

          <div className='space line-height label-input-width input-label' id='username-input-width'>
            <Box>
              <TextField
                fullWidth
                error={!!errorCondition}
                id='usernameInput'
                value={email}
                type='text'
                label={text.ChooseYourGmailAddress.username[userData.language]}
                onChange={handleSelectEmail}
                aria-label='Enter desired email address'
                aria-invalid={!!errorCondition}
                InputLabelProps={
                  errorCondition
                    ? {
                        sx: {
                          color: email ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                          '&.Mui-focused': {
                            color: '#d32f2f !important',
                          },
                        },
                      }
                    : {}
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Typography sx={{ color: '#202124', fontSize: '0.875em', fontWeight: '400' }}>
                        @gmail.com
                      </Typography>
                    </InputAdornment>
                  ),
                }}
                sx={
                  errorCondition
                    ? {}
                    : {
                        '& .MuiOutlinedInput-root': {
                          '&:hover:not(.Mui-focused) fieldset': {
                            borderColor: '#dadce0',
                          },
                          '& fieldset': {
                            borderColor: '#dadce0',
                          },
                        },
                      }
                }
              />
            </Box>
          </div>

          {errorCondition === 'isIncorrectLength' ? (
            <div className='long-error-div' id='error-div-space'>
              <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
              </svg>
              <p className='input-error-message-6-30'>{text.ChooseYourGmailAddress.error1[userData.language]}</p>
            </div>
          ) : errorCondition === 'usernameEmpty' ? (
            <div className='error-div' id='error-div-space'>
              <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
              </svg>
              <p className='input-error-message'>{text.ChooseYourGmailAddress.error2[userData.language]}</p>
            </div>
          ) : errorCondition === 'usesUnallowedChars' ? (
            <div className='long-error-div' id='error-div-space'>
              <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
              </svg>
              <p className='input-error-message'>{text.ChooseYourGmailAddress.error3[userData.language]}</p>
            </div>
          ) : errorCondition === 'usernameIsAlreadyTaken' ? (
            <div className='long-error-div' id='error-div-space'>
              <svg aria-hidden='true' className='error-image' fill='rgb(217, 48, 37)' focusable='false' width='16px' height='16px' viewBox='0 0 24 24' xmlns='https://www.w3.org/2000/svg'>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'></path>
              </svg>
              <p className='input-error-message'>{text.ChooseYourGmailAddress.error4[userData.language]}</p>
            </div>
          ) : (
            <div className='below-input-small-grey'>
              <p className='small-grey'>{text.ChooseYourGmailAddress.youCanUse[userData.language]}</p>
            </div>
          )}

          <div id='button-right-choose-email'>
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
              <div className='next'>{text.BirthdayAndGender.next[userData.language]}</div>
            </CustomNextButton>
          </div>
        </form>
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
};