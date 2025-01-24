import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import Checkbox from '@mui/material/Checkbox';
import googleWritingSvg from '../images/google-writing-svg.svg';
import LanguageChangerTallerPage from './LanguageChanger/LanguageChangerMediumPageComponent';
export const CreatePasswordComponent = ({ password, handleSelectPassword, confirmPassword, handleSelectConfirmPassword, handleNextClick, showPassword, handleTogglePassword, errorCondition, text, handleLanguageSelection, isImageLoaded, userData, }) => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: 'google-container-responsive', "data-testid": 'CP', children: [_jsx("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader', children: _jsx("div", { className: 'blue-snake-loader' }) }), _jsx("img", { src: googleWritingSvg, alt: 'Google Writing', id: 'google-writing-BG' }), _jsxs("form", { children: [_jsx("h1", { className: 'thin h1-space', children: text.CreatePassword.h1[userData.language] }), _jsx("div", { className: 'width-h2', children: _jsx("h2", { className: 'thin gap center', children: text.CreatePassword.h2[userData.language] }) }), _jsx(Box, { id: 'create-password-space', className: 'line-height label-input-width input-label', children: _jsx(TextField, { fullWidth: true, error: !!errorCondition && errorCondition !== 'confirmPasswordEmpty' && errorCondition !== 'passwordMismatch', id: 'passwordInput', value: password, type: !showPassword ? 'password' : 'text', label: text.CreatePassword.password[userData.language], onChange: handleSelectPassword, InputLabelProps: !!errorCondition && errorCondition !== 'confirmPasswordEmpty' && errorCondition !== 'passwordMismatch'
                                        ? {
                                            sx: {
                                                color: password ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                                '&.Mui-focused': {
                                                    color: '#d32f2f !important',
                                                },
                                            },
                                        }
                                        : {}, sx: !!errorCondition && errorCondition !== 'confirmPasswordEmpty' && errorCondition !== 'passwordMismatch'
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
                                        } }) }), _jsx(Box, { className: 'space line-height label-input-width input-label', id: 'error-message-margin', children: _jsx(TextField, { fullWidth: true, error: !!errorCondition && errorCondition !== 'passwordEmpty' && errorCondition !== 'needs8CharsOrMore', id: 'confirmPasswordInput', value: confirmPassword, type: !showPassword ? 'password' : 'text', label: text.CreatePassword.confirm[userData.language], onChange: handleSelectConfirmPassword, InputLabelProps: !!errorCondition && errorCondition !== 'passwordEmpty' && errorCondition !== 'needs8CharsOrMore'
                                        ? {
                                            sx: {
                                                color: confirmPassword ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                                '&.Mui-focused': {
                                                    color: '#d32f2f !important',
                                                },
                                            },
                                        }
                                        : {}, sx: !!errorCondition && errorCondition !== 'passwordEmpty' && errorCondition !== 'needs8CharsOrMore'
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
                                        } }) }), errorCondition === 'passwordEmpty' && (_jsxs("div", { className: 'error-div', id: 'create-password-error-div', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.CreatePassword.error1[userData.language] })] })), errorCondition === 'confirmPasswordEmpty' && (_jsxs("div", { className: 'error-div', id: 'create-password-error-div', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.CreatePassword.error2[userData.language] })] })), errorCondition === 'passwordMismatch' && (_jsxs("div", { className: 'error-div', id: 'create-password-error-div', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.CreatePassword.error3[userData.language] })] })), errorCondition === 'needs8CharsOrMore' && (_jsxs("div", { className: 'error-div', id: 'create-password-error-div', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.CreatePassword.error4[userData.language] })] })), errorCondition === 'pleaseChooseAStrongerPassword' && (_jsxs("div", { className: 'error-div', id: 'create-password-error-div-stronger-password', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.CreatePassword.error5[userData.language] })] })), _jsxs("div", { className: 'password-toggle checkbox-text-colour', children: [_jsx(Checkbox, { defaultChecked: true, checked: showPassword, onChange: handleTogglePassword, className: 'custom-checkbox-input', sx: {
                                            color: '#5f6368',
                                            '&& .MuiTouchRipple-rippleVisible': {
                                                animationDuration: '300ms',
                                            },
                                            '&:hover': {
                                                color: !showPassword ? '#202124' : '',
                                                '& .MuiTouchRipple-root': {
                                                    backgroundColor: !showPassword ? '#e2e2e21a' : '',
                                                },
                                            },
                                            '&:active': {
                                                backgroundColor: '#e8f1fc',
                                            },
                                            '&.Mui-checked': {
                                                color: '#1a73e8',
                                                '&:hover': {
                                                    color: '#174ea6',
                                                },
                                            },
                                        } }), _jsx("p", { id: 'show-password-checkbox', children: text.CreatePassword.show[userData.language] })] }), _jsx("div", { id: 'create-password-next-button', className: 'button-space-create-password', children: _jsx(CustomNextButton, { variant: 'contained', onClick: handleNextClick, sx: {
                                        '&& .MuiTouchRipple-rippleVisible': {
                                            animationDuration: '300ms',
                                        },
                                    }, children: _jsx("div", { className: 'next', children: text.CreatePassword.next[userData.language] }) }) })] })] }), _jsx(LanguageChangerTallerPage, { id: 'language-changer-footer-CP', className: 'language-changer-div', onChange: handleLanguageSelection, initialLanguage: userData.language, text: text })] }));
};
