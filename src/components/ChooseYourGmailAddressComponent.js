import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import googleWritingSvg from '../images/google-writing-svg.svg';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';
export const ChooseYourGmailAddressComponent = ({ email, setEmail, handleNextClick, errorCondition, handleSelectEmail, text, handleLanguageSelection, isImageLoaded, userData, }) => {
    return (_jsxs(_Fragment, { children: [_jsxs("main", { id: 'google-container-responsive', "data-testid": 'CYGAComp', children: [_jsx("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader', children: _jsx("div", { className: 'blue-snake-loader' }) }), _jsx("img", { src: googleWritingSvg, alt: 'Google Writing', id: 'google-writing-BG' }), _jsxs("form", { children: [_jsx("h1", { className: 'thin h1-space', children: text.ChooseYourGmailAddress.h1[userData.language] }), _jsx("h2", { className: 'thin gap center', id: 'h2', children: text.ChooseYourGmailAddress.h2[userData.language] }), _jsx("div", { className: 'space line-height label-input-width input-label', id: 'username-input-width', children: _jsx(Box, { children: _jsx(TextField, { fullWidth: true, error: !!errorCondition, id: 'usernameInput', value: email, type: 'text', label: text.ChooseYourGmailAddress.username[userData.language], onChange: handleSelectEmail, "aria-label": 'Enter desired email address', "aria-invalid": !!errorCondition, InputLabelProps: errorCondition
                                            ? {
                                                sx: {
                                                    color: email ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                                    '&.Mui-focused': {
                                                        color: '#d32f2f !important',
                                                    },
                                                },
                                            }
                                            : {}, InputProps: {
                                            endAdornment: (_jsx(InputAdornment, { position: 'end', children: _jsx(Typography, { sx: { color: '#202124', fontSize: '0.875em', fontWeight: '400' }, children: "@gmail.com" }) })),
                                        }, sx: errorCondition
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
                                            } }) }) }), errorCondition === 'isIncorrectLength' ? (_jsxs("div", { className: 'long-error-div', id: 'error-div-space', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message-6-30', children: text.ChooseYourGmailAddress.error1[userData.language] })] })) : errorCondition === 'usernameEmpty' ? (_jsxs("div", { className: 'error-div', id: 'error-div-space', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.ChooseYourGmailAddress.error2[userData.language] })] })) : errorCondition === 'usesUnallowedChars' ? (_jsxs("div", { className: 'long-error-div', id: 'error-div-space', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.ChooseYourGmailAddress.error3[userData.language] })] })) : errorCondition === 'usernameIsAlreadyTaken' ? (_jsxs("div", { className: 'long-error-div', id: 'error-div-space', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.ChooseYourGmailAddress.error4[userData.language] })] })) : (_jsx("div", { className: 'below-input-small-grey', children: _jsx("p", { className: 'small-grey', children: text.ChooseYourGmailAddress.youCanUse[userData.language] }) })), _jsx("div", { id: 'button-right-choose-email', children: _jsx(CustomNextButton, { variant: 'contained', onClick: handleNextClick, "aria-label": 'Next button', sx: {
                                        '&& .MuiTouchRipple-rippleVisible': {
                                            animationDuration: '300ms',
                                        },
                                    }, children: _jsx("div", { className: 'next', children: text.BirthdayAndGender.next[userData.language] }) }) })] })] }), _jsx(LanguageChanger, { className: 'language-changer-div', onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text })] }));
};
