"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsYourNameComponent = void 0;
var react_1 = __importDefault(require("react"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var CustomNextButtonComponent_1 = __importDefault(require("./buttons/CustomNextButtonComponent"));
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var LanguageChangerComponent_1 = __importDefault(require("./LanguageChanger/LanguageChangerComponent"));
var WhatsYourNameComponent = function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName, handleNextClick = _a.handleNextClick, onFirstNameInputChange = _a.onFirstNameInputChange, onLastNameInputChange = _a.onLastNameInputChange, errorCondition = _a.errorCondition, handleLanguageSelection = _a.handleLanguageSelection, text = _a.text, isImageLoaded = _a.isImageLoaded, userData = _a.userData;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("main", { id: 'google-container-responsive', "data-testid": 'WYN' },
            react_1.default.createElement("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader' },
                react_1.default.createElement("div", { className: 'blue-snake-loader' })),
            react_1.default.createElement("img", { src: google_writing_svg_svg_1.default, alt: 'Google Writing', id: 'google-writing-BG' }),
            react_1.default.createElement("form", null,
                react_1.default.createElement("h1", { className: 'thin h1-space' }, text.WhatsYourName.h1[userData.language]),
                react_1.default.createElement("h2", { className: 'thin gap' }, text.WhatsYourName.enterTheName[userData.language]),
                react_1.default.createElement(TextField_1.default, { className: 'standard-text-field', error: !!errorCondition, id: 'firstNameInput', label: text.CreateAccount.firstName[userData.language], variant: 'outlined', fullWidth: true, value: firstName, onChange: onFirstNameInputChange, "aria-label": 'Enter your first name', "aria-invalid": errorCondition ? 'true' : 'false', InputLabelProps: errorCondition
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
                        } }),
                react_1.default.createElement(TextField_1.default, { label: text.WhatsYourName.lastName[userData.language], className: 'last-name-margin-top standard-text-field', variant: 'outlined', fullWidth: true, "aria-label": 'Enter your last name', "aria-invalid": errorCondition ? 'true' : 'false', value: lastName, onChange: onLastNameInputChange, sx: {
                        '& .MuiOutlinedInput-root': {
                            '&:hover:not(.Mui-focused) fieldset': {
                                borderColor: '#dadce0',
                            },
                            '& fieldset': {
                                borderColor: '#dadce0',
                            },
                        },
                    } }),
                errorCondition === 'firstNameEmpty' ? (react_1.default.createElement("div", { className: 'error-div' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.CreateAccount.error1[userData.language]))) : (react_1.default.createElement("div", { className: 'hidden-error-message-container-create-account' })),
                react_1.default.createElement("div", { className: errorCondition === 'firstNameEmpty' ? 'button-right-first-name-empty' : 'button-right-ca' },
                    react_1.default.createElement(CustomNextButtonComponent_1.default, { variant: 'contained', onClick: handleNextClick, sx: {
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        } },
                        react_1.default.createElement("div", { className: 'next' }, text.CreateAccount.next[userData.language]))))),
        react_1.default.createElement(LanguageChangerComponent_1.default, { className: 'language-changer-div', onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text })));
};
exports.WhatsYourNameComponent = WhatsYourNameComponent;
