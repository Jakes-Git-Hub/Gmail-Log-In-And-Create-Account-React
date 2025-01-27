"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRecoveryEmailComponent = void 0;
var react_1 = __importDefault(require("react"));
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var CustomNext_SkipButtonComponent_1 = __importDefault(require("./buttons/CustomNext&SkipButtonComponent"));
var LanguageChangerComponent_1 = __importDefault(require("./LanguageChanger/LanguageChangerComponent"));
var AddRecoveryEmailComponent = function (_a) {
    var recoveryEmail = _a.recoveryEmail, setRecoveryEmail = _a.setRecoveryEmail, handleNextClick = _a.handleNextClick, errorCondition = _a.errorCondition, handleSkip = _a.handleSkip, isImageLoaded = _a.isImageLoaded, handleLanguageSelection = _a.handleLanguageSelection, text = _a.text, userData = _a.userData;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("main", { id: 'google-container-flexible', "data-testid": 'AREComp' },
            react_1.default.createElement("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader' },
                react_1.default.createElement("div", { className: 'blue-snake-loader' })),
            react_1.default.createElement("img", { src: google_writing_svg_svg_1.default, alt: 'Google Writing', id: 'google-writing-recovery-email' }),
            react_1.default.createElement("form", { role: 'form' },
                react_1.default.createElement("h1", { className: 'thin h1-space' }, text.AddRecoveryEmail.h1[userData.language]),
                react_1.default.createElement("div", { id: 'reduce-width-h2' },
                    react_1.default.createElement("h2", { className: 'thin gap center' }, text.AddRecoveryEmail.h2[userData.language])),
                react_1.default.createElement("div", { id: 'create-password-space', className: ' line-height label-input-width input-label-recovery-email' },
                    react_1.default.createElement(Box_1.default, null,
                        react_1.default.createElement(TextField_1.default, { fullWidth: true, error: !!errorCondition, id: 'recoveryEmailInput', value: recoveryEmail, label: text.AddRecoveryEmail.recoveryEmail[userData.language], "aria-label": 'Enter your recovery email address', "aria-invalid": errorCondition ? true : false, onChange: function (e) { return setRecoveryEmail(e.target.value); }, InputLabelProps: errorCondition ?
                                {
                                    sx: {
                                        color: recoveryEmail ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
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
                                } }))),
                errorCondition === 'enterValidEmail' && (react_1.default.createElement("div", { className: 'error-div-add-recovery-email' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.AddRecoveryEmail.error1[userData.language]))),
                errorCondition === 'dontForgetAtSymbol' && (react_1.default.createElement("div", { className: 'error-div-add-recovery-email' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.AddRecoveryEmail.error2[userData.language]))),
                errorCondition === 'enterADomainName' && (react_1.default.createElement("div", { className: 'error-div-add-recovery-email' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.AddRecoveryEmail.error3[userData.language]))),
                errorCondition === 'emailAddressNotValid' && (react_1.default.createElement("div", { className: 'error-div-add-recovery-email' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.AddRecoveryEmail.error4[userData.language]))),
                react_1.default.createElement("div", { className: 'next-and-skip-button-duo button-space-add-recovery-email' },
                    react_1.default.createElement(CustomNext_SkipButtonComponent_1.default, { className: 'duo', role: 'button', variant: 'contained', onClick: handleNextClick, "aria-label": 'Next button', type: 'button', sx: {
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        } },
                        react_1.default.createElement("div", { className: 'next' }, text.EnterTheCode.next[userData.language])),
                    react_1.default.createElement(CustomNext_SkipButtonComponent_1.default, { className: 'duo', variant: 'contained', onClick: handleSkip, type: 'button', role: 'button', "aria-label": 'Skip button', sx: {
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        } },
                        react_1.default.createElement("div", { className: 'next' }, text.AddRecoveryEmail.skip[userData.language]))))),
        react_1.default.createElement(LanguageChangerComponent_1.default, { initialLanguage: userData.language, onChange: handleLanguageSelection, "aria-label": 'Change language', text: text })));
};
exports.AddRecoveryEmailComponent = AddRecoveryEmailComponent;
