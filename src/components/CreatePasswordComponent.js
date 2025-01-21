"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePasswordComponent = void 0;
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var CustomNextButtonComponent_1 = __importDefault(require("./buttons/CustomNextButtonComponent"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var LanguageChangerMediumPageComponent_1 = __importDefault(require("./LanguageChanger/LanguageChangerMediumPageComponent"));
var CreatePasswordComponent = function (_a) {
    var password = _a.password, handleSelectPassword = _a.handleSelectPassword, confirmPassword = _a.confirmPassword, handleSelectConfirmPassword = _a.handleSelectConfirmPassword, handleNextClick = _a.handleNextClick, showPassword = _a.showPassword, handleTogglePassword = _a.handleTogglePassword, errorCondition = _a.errorCondition, text = _a.text, handleLanguageSelection = _a.handleLanguageSelection, isImageLoaded = _a.isImageLoaded, userData = _a.userData;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: 'google-container-responsive', "data-testid": 'CP' },
            react_1.default.createElement("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader' },
                react_1.default.createElement("div", { className: 'blue-snake-loader' })),
            react_1.default.createElement("img", { src: google_writing_svg_svg_1.default, alt: 'Google Writing', id: 'google-writing-BG' }),
            react_1.default.createElement("form", null,
                react_1.default.createElement("h1", { className: 'thin h1-space' }, text.CreatePassword.h1[userData.language]),
                react_1.default.createElement("div", { className: 'width-h2' },
                    react_1.default.createElement("h2", { className: 'thin gap center' }, text.CreatePassword.h2[userData.language])),
                react_1.default.createElement(Box_1.default, { id: 'create-password-space', className: 'line-height label-input-width input-label' },
                    react_1.default.createElement(TextField_1.default, { fullWidth: true, error: !!errorCondition && errorCondition !== 'confirmPasswordEmpty' && errorCondition !== 'passwordMismatch', id: 'passwordInput', value: password, type: !showPassword ? 'password' : 'text', label: text.CreatePassword.password[userData.language], onChange: handleSelectPassword, InputLabelProps: !!errorCondition && errorCondition !== 'confirmPasswordEmpty' && errorCondition !== 'passwordMismatch'
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
                            } })),
                react_1.default.createElement(Box_1.default, { className: 'space line-height label-input-width input-label', id: 'error-message-margin' },
                    react_1.default.createElement(TextField_1.default, { fullWidth: true, error: !!errorCondition && errorCondition !== 'passwordEmpty' && errorCondition !== 'needs8CharsOrMore', id: 'confirmPasswordInput', value: confirmPassword, type: !showPassword ? 'password' : 'text', label: text.CreatePassword.confirm[userData.language], onChange: handleSelectConfirmPassword, InputLabelProps: !!errorCondition && errorCondition !== 'passwordEmpty' && errorCondition !== 'needs8CharsOrMore'
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
                            } })),
                errorCondition === 'passwordEmpty' && (react_1.default.createElement("div", { className: 'error-div', id: 'create-password-error-div' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.CreatePassword.error1[userData.language]))),
                errorCondition === 'confirmPasswordEmpty' && (react_1.default.createElement("div", { className: 'error-div', id: 'create-password-error-div' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.CreatePassword.error2[userData.language]))),
                errorCondition === 'passwordMismatch' && (react_1.default.createElement("div", { className: 'error-div', id: 'create-password-error-div' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.CreatePassword.error3[userData.language]))),
                errorCondition === 'needs8CharsOrMore' && (react_1.default.createElement("div", { className: 'error-div', id: 'create-password-error-div' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.CreatePassword.error4[userData.language]))),
                errorCondition === 'pleaseChooseAStrongerPassword' && (react_1.default.createElement("div", { className: 'error-div', id: 'create-password-error-div-stronger-password' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.CreatePassword.error5[userData.language]))),
                react_1.default.createElement("div", { className: 'password-toggle checkbox-text-colour' },
                    react_1.default.createElement(Checkbox_1.default, { defaultChecked: true, checked: showPassword, onChange: handleTogglePassword, className: 'custom-checkbox-input', sx: {
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
                        } }),
                    react_1.default.createElement("p", { id: 'show-password-checkbox' }, text.CreatePassword.show[userData.language])),
                react_1.default.createElement("div", { id: 'create-password-next-button', className: 'button-space-create-password' },
                    react_1.default.createElement(CustomNextButtonComponent_1.default, { variant: 'contained', onClick: handleNextClick, sx: {
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        } },
                        react_1.default.createElement("div", { className: 'next' }, text.CreatePassword.next[userData.language]))))),
        react_1.default.createElement(LanguageChangerMediumPageComponent_1.default, { id: 'language-changer-footer-CP', className: 'language-changer-div', onChange: handleLanguageSelection, initialLanguage: userData.language, text: text })));
};
exports.CreatePasswordComponent = CreatePasswordComponent;
