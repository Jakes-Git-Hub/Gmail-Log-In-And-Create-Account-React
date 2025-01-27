"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterTheCodeComponent = void 0;
var react_1 = __importDefault(require("react"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var SecondaryGreyButtonComponent_1 = __importDefault(require("./buttons/SecondaryGreyButtonComponent"));
var CustomNextButtonComponent_1 = __importDefault(require("./buttons/CustomNextButtonComponent"));
var styles_1 = require("@mui/material/styles");
var LanguageChangerComponent_1 = __importDefault(require("./LanguageChanger/LanguageChangerComponent"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var EnterTheCodeComponent = function (_a) {
    var handleNextClick = _a.handleNextClick, isImageLoaded = _a.isImageLoaded, handleUserVerificationCodeInput = _a.handleUserVerificationCodeInput, usersVerificationCodeInput = _a.usersVerificationCodeInput, errorCondition = _a.errorCondition, theme = _a.theme, getNewCode = _a.getNewCode, getNewCodeButtonDisabled = _a.getNewCodeButtonDisabled, disabledCount = _a.disabledCount, text = _a.text, handleLanguageSelection = _a.handleLanguageSelection, userData = _a.userData, toggleFocus = _a.toggleFocus, isFocused = _a.isFocused;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("main", { id: 'google-container-responsive', "data-testid": 'ETC' },
            react_1.default.createElement("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader' },
                react_1.default.createElement("div", { className: 'blue-snake-loader' })),
            react_1.default.createElement("img", { src: google_writing_svg_svg_1.default, alt: 'Google Writing', id: 'google-writing-BG' }),
            react_1.default.createElement("form", null,
                react_1.default.createElement("h1", { className: 'thin h1-space' }, text.EnterTheCode.h1[userData.language]),
                react_1.default.createElement("p", { id: 'p-enter-the-code' }, text.EnterTheCode.h2[userData.language]),
                react_1.default.createElement(styles_1.ThemeProvider, { theme: theme },
                    react_1.default.createElement(TextField_1.default, { className: 'standard-text-field line-height', id: 'code-input', fullWidth: true, error: !!errorCondition, value: usersVerificationCodeInput, label: text.EnterTheCode.enterCode[userData.language], onChange: handleUserVerificationCodeInput, onFocus: toggleFocus, onBlur: toggleFocus, "aria-label": 'Enter the verification code', "aria-invalid": !!errorCondition, InputLabelProps: errorCondition ?
                            {
                                shrink: !!usersVerificationCodeInput || isFocused,
                                sx: {
                                    color: usersVerificationCodeInput ? '#d32f2f' : 'rgb(95,99,104) !important',
                                    '&.Mui-focused': {
                                        color: '#d32f2f !important',
                                    },
                                },
                            } : {
                            shrink: !!usersVerificationCodeInput || isFocused,
                            sx: {
                                color: 'rgb(95,99,104)',
                            }
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
                            }, InputProps: {
                            startAdornment: react_1.default.createElement(InputAdornment_1.default, { position: 'start' },
                                react_1.default.createElement(Typography_1.default, { id: 'static-G' }, "G-"))
                        } })),
                errorCondition === 'inputEmpty' ? (react_1.default.createElement("div", { className: 'error-div', id: 'error-div-space-etc' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.EnterTheCode.error1[userData.language]))) : errorCondition === 'wrongNumberOfDigits' ? (react_1.default.createElement("div", { className: 'error-div', id: 'error-div-space-etc' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.EnterTheCode.error2[userData.language]))) : errorCondition === 'wrongCode' ? (react_1.default.createElement("div", { className: 'error-div', id: 'error-div-space-etc' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.EnterTheCode.error3[userData.language]))) : errorCondition === 'hasLetters' ? (react_1.default.createElement("div", { className: 'error-div', id: 'error-div-space-etc' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.EnterTheCode.error4[userData.language]))) : (react_1.default.createElement("div", { className: 'hidden-error-message-container-BI' })),
                react_1.default.createElement("div", { id: errorCondition ? 'buttons-container-enter-the-code-error' : 'buttons-container-enter-the-code' },
                    getNewCodeButtonDisabled ? (react_1.default.createElement("div", { id: 'secondary-button-container-etc' },
                        react_1.default.createElement(SecondaryGreyButtonComponent_1.default, { variant: 'contained', "aria-label": 'Get new code after 30 seconds button (disabled until 30 seconds pass)', disabled: true, sx: {
                                '&& .MuiTouchRipple-rippleVisible': {
                                    animationDuration: '300ms',
                                },
                                backgroundColor: 'transparent !important',
                            } },
                            react_1.default.createElement("div", { className: 'get-new-code-text' },
                                text.EnterTheCode.getNewCode[userData.language],
                                " ",
                                disabledCount,
                                " ",
                                text.EnterTheCode.seconds[userData.language])))) : (react_1.default.createElement("div", { id: 'secondary-button-container-etc' },
                        react_1.default.createElement(SecondaryGreyButtonComponent_1.default, { variant: 'contained', onClick: getNewCode, "aria-label": 'Get new code button', sx: {
                                '&& .MuiTouchRipple-rippleVisible': {
                                    animationDuration: '300ms',
                                },
                            } },
                            react_1.default.createElement("div", { className: 'get-new-code-text' }, text.EnterTheCode.getNewCode[userData.language])))),
                    react_1.default.createElement("div", { id: 'next-button-container-etc' },
                        react_1.default.createElement(CustomNextButtonComponent_1.default, { variant: 'contained', onClick: handleNextClick, "aria-label": 'Next button', sx: {
                                '&& .MuiTouchRipple-rippleVisible': {
                                    animationDuration: '300ms',
                                },
                            } },
                            react_1.default.createElement("div", { className: 'next' }, text.EnterTheCode.next[userData.language])))))),
        react_1.default.createElement(LanguageChangerComponent_1.default, { className: 'language-changer-div', onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text })));
};
exports.EnterTheCodeComponent = EnterTheCodeComponent;
