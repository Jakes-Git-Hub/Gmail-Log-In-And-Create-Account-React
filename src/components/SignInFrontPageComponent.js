import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';
import TextField from '@mui/material/TextField';
import TransparentSmallButtonSignInPage from './buttons/TransparentSmallButtonSignInPageComponent';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import SecondaryGreyButton from './buttons/SecondaryGreyButtonComponent';
export const SignInFrontPageComponent = ({ isImageLoaded, handleLanguageSelection, handleCreateAccountClick, userData, errorCondition, emailOrPhone, onEmailOrPhoneChange, handleForgotEmailButtonClick, handleGuestModeInfoButtonClick, handleNextClick, text, }) => {
    return (_jsxs(_Fragment, { children: [_jsxs("main", { id: 'google-container-responsive', "data-testid": 'SIFP', children: [_jsx("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader', children: _jsx("div", { className: 'blue-snake-loader' }) }), _jsx("img", { src: googleWritingSvg, alt: 'Google Writing', id: 'google-writing-BG' }), _jsxs("form", { children: [_jsx("h1", { className: 'thin h1-space', children: text.SignIn.h1[userData.language] }), _jsx("h2", { className: 'thin gap', children: text.SignIn.h2[userData.language] }), _jsx(TextField, { className: 'standard-text-field', error: !!errorCondition, id: 'emailOrPhoneInput', label: text.SignIn.emailOrPhone[userData.language], variant: 'outlined', fullWidth: true, value: emailOrPhone, onChange: onEmailOrPhoneChange, "aria-label": 'Enter your email or phone number', InputLabelProps: errorCondition ?
                                    {
                                        sx: {
                                            color: emailOrPhone ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                            '&.Mui-focused': {
                                                color: '#d32f2f !important',
                                            },
                                        },
                                    } : {}, sx: errorCondition ?
                                    {} :
                                    {
                                        '& .MuiOutlinedInput-root': {
                                            '&:hover:not(.Mui-focused) fieldset': {
                                                borderColor: '#dadce0'
                                            },
                                            '& fieldset': {
                                                borderColor: '#dadce0'
                                            },
                                        }
                                    } }), errorCondition === 'emailOrPhoneEmpty' && (_jsxs("div", { className: 'error-div', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.SignIn.enterAnEmail[userData.language] })] })), errorCondition === 'couldntFindYourAccount' && (_jsxs("div", { className: 'error-div', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.SignIn.couldntFindYour[userData.language] })] })), _jsx("div", { id: 'forgot-email-container', children: _jsx(TransparentSmallButtonSignInPage, { onClick: handleForgotEmailButtonClick, "aria-label": 'Forgot email button', children: text.SignIn.forgotEmail[userData.language] }) }), _jsxs("div", { id: 'sign-in-guest-mode-container', children: [_jsx("p", { className: 'p-sign-in', children: text.SignIn.notYourComputer[userData.language] }), _jsx(TransparentSmallButtonSignInPage, { id: 'learn-more-button', onClick: handleGuestModeInfoButtonClick, "aria-label": 'Learn more about using guest mode button', children: text.SignIn.learnMore[userData.language] })] }), _jsxs("div", { id: 'create-account-and-next-button-div-sign-in-page', children: [_jsx(SecondaryGreyButton, { onClick: handleCreateAccountClick, id: 'create-account-button-adjust-left', "aria-label": 'Create account button', children: text.SignIn.createAccount[userData.language] }), _jsx(CustomNextButton, { onClick: handleNextClick, "aria-label": 'Next button', children: text.CreateAccount.next[userData.language] })] })] })] }), _jsx(LanguageChanger, { className: 'language-changer-div', onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text })] }));
};
