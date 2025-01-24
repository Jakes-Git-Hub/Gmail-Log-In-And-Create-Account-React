import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Select from 'react-select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import googleWritingSvg from '../images/google-writing-svg.svg';
import InputAdornment from '@mui/material/InputAdornment';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';
export const ConfirmYoureNotARobotComponent = ({ phoneNumber, handleSelectPhoneNumber, handleNextClick, customOptions, customStyles, customDropdownIndicator, placeholderContent, selectedOption, chosenCountryFlagImage, isImageLoaded, handleCountrySelect, errorCondition, actualSelectedOption, formattedPhoneNumber, text, unitedKingdom, handleLanguageSelection, userData, loading, }) => {
    return (_jsxs(_Fragment, { children: [_jsxs("main", { id: 'google-container-responsive', "data-testid": 'CYNAR', children: [_jsx("div", { className: !isImageLoaded || loading ? 'empty-blue-snake-loader' : 'empty-blue-snake-loader-placeholder', children: _jsx("div", { className: 'blue-snake-loader' }) }), _jsx("img", { src: googleWritingSvg, alt: 'Google Writing', id: 'google-writing-BG' }), _jsxs("form", { children: [_jsx("h1", { className: 'thin', id: 'h1-cynar', children: text.ConfirmYoureNotARobot.h1[userData.language] }), _jsx("div", { id: 'h2-cynar-div', children: _jsx("h2", { id: 'h2-cynar', children: text.ConfirmYoureNotARobot.h2[userData.language] }) }), _jsxs("div", { id: 'add-phone-number-dropdown-and-input', children: [_jsx(Select, { styles: customStyles, 
                                        // class='flag-drop-down'
                                        options: customOptions, "aria-label": 'Select your Country', components: {
                                            DropdownIndicator: customDropdownIndicator,
                                            SingleValue: chosenCountryFlagImage,
                                        }, placeholder: placeholderContent, onChange: handleCountrySelect, value: selectedOption, onInputChange: (inputValue, { action }) => {
                                            if (action === 'input-change') {
                                                return '';
                                            }
                                            return inputValue;
                                        } }), _jsx("div", { className: 'line-height gender-input-width', id: 'phoneNumber-input-width', children: _jsx(Box, { children: _jsx(TextField, { autoFocus: true, fullWidth: true, error: !!errorCondition, id: 'phoneNumberInput', value: phoneNumber, label: text.ConfirmYoureNotARobot.phoneNumber[userData.language], type: 'number text', onChange: handleSelectPhoneNumber, "aria-label": 'Enter your Number (without dialing code)', "aria-invalid": errorCondition ? true : false, InputLabelProps: errorCondition ?
                                                    {
                                                        sx: {
                                                            color: phoneNumber || actualSelectedOption ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                                            '&.Mui-focused': {
                                                                color: '#d32f2f !important',
                                                            },
                                                        },
                                                    } : {}, InputProps: {
                                                    startAdornment: actualSelectedOption && selectedOption ? (_jsx(InputAdornment, { position: 'start', sx: { color: 'rgba(0, 0, 0, 0.87)', marginTop: '2.5px' }, children: selectedOption.value.dialingCode ? selectedOption.value.dialingCode : unitedKingdom.value.dialingCode })) : null,
                                                }, sx: errorCondition ?
                                                    {} :
                                                    {
                                                        '& .MuiOutlinedInput-root': {
                                                            '&:hover:not(.Mui-focused) fieldset': {
                                                                borderColor: '#dadce0'
                                                            },
                                                            '& fieldset': {
                                                                borderColor: '#dadce0'
                                                            },
                                                        },
                                                    } }) }) })] }), errorCondition === 'phoneNumberEmpty' ? (_jsxs("div", { className: 'long-error-div', id: 'error-div-space-cynar', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.ConfirmYoureNotARobot.error1[userData.language] })] })) : errorCondition === 'incorrectFormat' ? (_jsxs("div", { className: 'error-div', id: 'error-div-space-cynar', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.ConfirmYoureNotARobot.error2[userData.language] })] })) : errorCondition === 'alreadyRegistered' ? (_jsxs("div", { className: 'error-div', id: 'error-div-space-cynar', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.ConfirmYoureNotARobot.error3[userData.language] })] })) : errorCondition === 'incorrectNumber' ? (_jsxs("div", { className: 'error-div', id: 'error-div-space-cynar', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.ConfirmYoureNotARobot.error4[userData.language] })] })) : errorCondition === 'apiLimitReached' ? (_jsxs("div", { className: 'error-div', id: 'error-div-space-cynar', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.ConfirmYoureNotARobot.error5[userData.language] })] })) : null, _jsx("div", { className: 'below-input-small-grey-cynar', children: _jsx("p", { className: 'small-grey-cynar', children: text.ConfirmYoureNotARobot.googleWillVerify[userData.language] }) }), _jsx("div", { id: formattedPhoneNumber ? 'button-right-robot-confirm' : 'button-right-robot', children: _jsx(CustomNextButton, { variant: 'contained', onClick: handleNextClick, "aria-label": 'Next button', sx: {
                                        '&& .MuiTouchRipple-rippleVisible': {
                                            animationDuration: '300ms',
                                        },
                                    }, children: _jsx("div", { className: 'next', children: text.ConfirmYoureNotARobot.next[userData.language] }) }) })] })] }), _jsx(LanguageChanger, { className: 'language-changer-div', onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text })] }));
};
