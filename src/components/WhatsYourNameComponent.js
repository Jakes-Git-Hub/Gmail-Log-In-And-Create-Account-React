import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import TextField from '@mui/material/TextField';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import googleWritingSvg from '../images/google-writing-svg.svg';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';
export const WhatsYourNameComponent = ({ firstName, lastName, handleNextClick, onFirstNameInputChange, onLastNameInputChange, errorCondition, handleLanguageSelection, text, isImageLoaded, userData, }) => {
    return (_jsxs(_Fragment, { children: [_jsxs("main", { id: 'google-container-responsive', "data-testid": 'WYN', children: [_jsx("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader', children: _jsx("div", { className: 'blue-snake-loader' }) }), _jsx("img", { src: googleWritingSvg, alt: 'Google Writing', id: 'google-writing-BG' }), _jsxs("form", { children: [_jsx("h1", { className: 'thin h1-space', children: text.WhatsYourName.h1[userData.language] }), _jsx("h2", { className: 'thin gap', children: text.WhatsYourName.enterTheName[userData.language] }), _jsx(TextField, { className: 'standard-text-field', error: !!errorCondition, id: 'firstNameInput', label: text.CreateAccount.firstName[userData.language], variant: 'outlined', fullWidth: true, value: firstName, onChange: onFirstNameInputChange, "aria-label": 'Enter your first name', "aria-invalid": errorCondition ? 'true' : 'false', InputLabelProps: errorCondition
                                    ? {
                                        sx: {
                                            color: firstName ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                            '&.Mui-focused': {
                                                color: '#d32f2f !important',
                                            },
                                        },
                                    }
                                    : {}, sx: errorCondition
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
                                    } }), _jsx(TextField, { label: text.WhatsYourName.lastName[userData.language], className: 'last-name-margin-top standard-text-field', variant: 'outlined', fullWidth: true, "aria-label": 'Enter your last name', "aria-invalid": errorCondition ? 'true' : 'false', value: lastName, onChange: onLastNameInputChange, sx: {
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover:not(.Mui-focused) fieldset': {
                                            borderColor: '#dadce0',
                                        },
                                        '& fieldset': {
                                            borderColor: '#dadce0',
                                        },
                                    },
                                } }), errorCondition === 'firstNameEmpty' ? (_jsxs("div", { className: 'error-div', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.CreateAccount.error1[userData.language] })] })) : (_jsx("div", { className: 'hidden-error-message-container-create-account' })), _jsx("div", { className: errorCondition === 'firstNameEmpty' ? 'button-right-first-name-empty' : 'button-right-ca', children: _jsx(CustomNextButton, { variant: 'contained', onClick: handleNextClick, sx: {
                                        '&& .MuiTouchRipple-rippleVisible': {
                                            animationDuration: '300ms',
                                        },
                                    }, children: _jsx("div", { className: 'next', children: text.CreateAccount.next[userData.language] }) }) })] })] }), _jsx(LanguageChanger, { className: 'language-changer-div', onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text })] }));
};
