"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChooseYourGmailAddressComponent = void 0;
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var CustomNextButtonComponent_1 = __importDefault(require("./buttons/CustomNextButtonComponent"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var LanguageChangerComponent_1 = __importDefault(require("./LanguageChanger/LanguageChangerComponent"));
var ChooseYourGmailAddressComponent = function (_a) {
    var email = _a.email, setEmail = _a.setEmail, handleNextClick = _a.handleNextClick, errorCondition = _a.errorCondition, handleSelectEmail = _a.handleSelectEmail, text = _a.text, handleLanguageSelection = _a.handleLanguageSelection, isImageLoaded = _a.isImageLoaded, userData = _a.userData;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("main", { id: 'google-container-responsive', "data-testid": 'CYGAComp' },
            react_1.default.createElement("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader' },
                react_1.default.createElement("div", { className: 'blue-snake-loader' })),
            react_1.default.createElement("img", { src: google_writing_svg_svg_1.default, alt: 'Google Writing', id: 'google-writing-BG' }),
            react_1.default.createElement("form", null,
                react_1.default.createElement("h1", { className: 'thin h1-space' }, text.ChooseYourGmailAddress.h1[userData.language]),
                react_1.default.createElement("h2", { className: 'thin gap center', id: 'h2' }, text.ChooseYourGmailAddress.h2[userData.language]),
                react_1.default.createElement("div", { className: 'space line-height label-input-width input-label', id: 'username-input-width' },
                    react_1.default.createElement(Box_1.default, null,
                        react_1.default.createElement(TextField_1.default, { fullWidth: true, error: !!errorCondition, id: 'usernameInput', value: email, type: 'text', label: text.ChooseYourGmailAddress.username[userData.language], onChange: handleSelectEmail, "aria-label": 'Enter desired email address', "aria-invalid": !!errorCondition, InputLabelProps: errorCondition
                                ? {
                                    sx: {
                                        color: email ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                        '&.Mui-focused': {
                                            color: '#d32f2f !important',
                                        },
                                    },
                                }
                                : {}, InputProps: {
                                endAdornment: (react_1.default.createElement(InputAdornment_1.default, { position: 'end' },
                                    react_1.default.createElement(Typography_1.default, { sx: { color: '#202124', fontSize: '0.875em', fontWeight: '400' } }, "@gmail.com"))),
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
                                } }))),
                errorCondition === 'isIncorrectLength' ? (react_1.default.createElement("div", { className: 'long-error-div', id: 'error-div-space' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message-6-30' }, text.ChooseYourGmailAddress.error1[userData.language]))) : errorCondition === 'usernameEmpty' ? (react_1.default.createElement("div", { className: 'error-div', id: 'error-div-space' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.ChooseYourGmailAddress.error2[userData.language]))) : errorCondition === 'usesUnallowedChars' ? (react_1.default.createElement("div", { className: 'long-error-div', id: 'error-div-space' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.ChooseYourGmailAddress.error3[userData.language]))) : errorCondition === 'usernameIsAlreadyTaken' ? (react_1.default.createElement("div", { className: 'long-error-div', id: 'error-div-space' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.ChooseYourGmailAddress.error4[userData.language]))) : (react_1.default.createElement("div", { className: 'below-input-small-grey' },
                    react_1.default.createElement("p", { className: 'small-grey' }, text.ChooseYourGmailAddress.youCanUse[userData.language]))),
                react_1.default.createElement("div", { id: 'button-right-choose-email' },
                    react_1.default.createElement(CustomNextButtonComponent_1.default, { variant: 'contained', onClick: handleNextClick, "aria-label": 'Next button', sx: {
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        } },
                        react_1.default.createElement("div", { className: 'next' }, text.BirthdayAndGender.next[userData.language]))))),
        react_1.default.createElement(LanguageChangerComponent_1.default, { className: 'language-changer-div', onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text })));
};
exports.ChooseYourGmailAddressComponent = ChooseYourGmailAddressComponent;
