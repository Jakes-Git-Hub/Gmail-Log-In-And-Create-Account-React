"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignInFrontPageComponent = void 0;
var react_1 = __importDefault(require("react"));
var LanguageChangerComponent_1 = __importDefault(require("./LanguageChanger/LanguageChangerComponent"));
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var TransparentSmallButtonSignInPageComponent_1 = __importDefault(require("./buttons/TransparentSmallButtonSignInPageComponent"));
var CustomNextButtonComponent_1 = __importDefault(require("./buttons/CustomNextButtonComponent"));
var SecondaryGreyButtonComponent_1 = __importDefault(require("./buttons/SecondaryGreyButtonComponent"));
var SignInFrontPageComponent = function (_a) {
    var isImageLoaded = _a.isImageLoaded, handleLanguageSelection = _a.handleLanguageSelection, handleCreateAccountClick = _a.handleCreateAccountClick, userData = _a.userData, errorCondition = _a.errorCondition, emailOrPhone = _a.emailOrPhone, onEmailOrPhoneChange = _a.onEmailOrPhoneChange, handleForgotEmailButtonClick = _a.handleForgotEmailButtonClick, handleGuestModeInfoButtonClick = _a.handleGuestModeInfoButtonClick, handleNextClick = _a.handleNextClick, text = _a.text;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("main", { id: 'google-container-responsive', "data-testid": 'SIFP' },
            react_1.default.createElement("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader' },
                react_1.default.createElement("div", { className: 'blue-snake-loader' })),
            react_1.default.createElement("img", { src: google_writing_svg_svg_1.default, alt: 'Google Writing', id: 'google-writing-BG' }),
            react_1.default.createElement("form", null,
                react_1.default.createElement("h1", { className: 'thin h1-space' }, text.SignIn.h1[userData.language]),
                react_1.default.createElement("h2", { className: 'thin gap' }, text.SignIn.h2[userData.language]),
                react_1.default.createElement(TextField_1.default, { className: 'standard-text-field', error: !!errorCondition, id: 'emailOrPhoneInput', label: text.SignIn.emailOrPhone[userData.language], variant: 'outlined', fullWidth: true, value: emailOrPhone, onChange: onEmailOrPhoneChange, "aria-label": 'Enter your email or phone number', InputLabelProps: errorCondition ?
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
                        } }),
                errorCondition === 'emailOrPhoneEmpty' && (react_1.default.createElement("div", { className: 'error-div' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.SignIn.enterAnEmail[userData.language]))),
                errorCondition === 'couldntFindYourAccount' && (react_1.default.createElement("div", { className: 'error-div' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.SignIn.couldntFindYour[userData.language]))),
                react_1.default.createElement("div", { id: 'forgot-email-container' },
                    react_1.default.createElement(TransparentSmallButtonSignInPageComponent_1.default, { onClick: handleForgotEmailButtonClick, "aria-label": 'Forgot email button' }, text.SignIn.forgotEmail[userData.language])),
                react_1.default.createElement("div", { id: 'sign-in-guest-mode-container' },
                    react_1.default.createElement("p", { className: 'p-sign-in' }, text.SignIn.notYourComputer[userData.language]),
                    react_1.default.createElement(TransparentSmallButtonSignInPageComponent_1.default, { id: 'learn-more-button', onClick: handleGuestModeInfoButtonClick, "aria-label": 'Learn more about using guest mode button' }, text.SignIn.learnMore[userData.language])),
                react_1.default.createElement("div", { id: 'create-account-and-next-button-div-sign-in-page' },
                    react_1.default.createElement(SecondaryGreyButtonComponent_1.default, { onClick: handleCreateAccountClick, id: 'create-account-button-adjust-left', "aria-label": 'Create account button' }, text.SignIn.createAccount[userData.language]),
                    react_1.default.createElement(CustomNextButtonComponent_1.default, { onClick: handleNextClick, "aria-label": 'Next button' }, text.CreateAccount.next[userData.language])))),
        react_1.default.createElement(LanguageChangerComponent_1.default, { className: 'language-changer-div', onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text })));
};
exports.SignInFrontPageComponent = SignInFrontPageComponent;
