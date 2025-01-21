"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BirthdayAndGenderComponent = void 0;
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var Select_1 = __importDefault(require("@mui/material/Select"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var CustomNextButtonComponent_1 = __importDefault(require("./buttons/CustomNextButtonComponent"));
var LanguageChangerComponent_1 = __importDefault(require("./LanguageChanger/LanguageChangerComponent"));
var LanguageChangerOverflowComponent_1 = __importDefault(require("./LanguageChanger/LanguageChangerOverflowComponent"));
var BirthdayAndGenderComponent = function (_a) {
    var month = _a.month, handleSelectMonth = _a.handleSelectMonth, day = _a.day, handleSelectDay = _a.handleSelectDay, year = _a.year, handleSelectYear = _a.handleSelectYear, gender = _a.gender, handleSelectGender = _a.handleSelectGender, handleNextClick = _a.handleNextClick, genderEmpty = _a.genderEmpty, errorCondition = _a.errorCondition, isImageLoaded = _a.isImageLoaded, customGender = _a.customGender, handleSelectCustomGender = _a.handleSelectCustomGender, customGenderEmpty = _a.customGenderEmpty, pronounEmpty = _a.pronounEmpty, pronoun = _a.pronoun, handleSelectPronoun = _a.handleSelectPronoun, isCustomChecked = _a.isCustomChecked, text = _a.text, handleLanguageSelection = _a.handleLanguageSelection, userData = _a.userData;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("main", { id: 'google-container-responsive', "data-testid": 'BAGComp' },
            react_1.default.createElement("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader' },
                react_1.default.createElement("div", { className: 'blue-snake-loader' })),
            react_1.default.createElement("img", { src: google_writing_svg_svg_1.default, alt: 'Google Writing', id: 'google-writing-BG' }),
            react_1.default.createElement("form", null,
                react_1.default.createElement("h1", { className: 'thin h1-space' }, text.BirthdayAndGender.h1[userData.language]),
                react_1.default.createElement("h2", { className: 'thin h2-bg' }, text.BirthdayAndGender.h2[userData.language]),
                react_1.default.createElement("div", { className: 'third-container-basic-information' },
                    react_1.default.createElement(Box_1.default, { sx: { width: 'calc(32.5% - 2px)' } },
                        react_1.default.createElement(FormControl_1.default, { fullWidth: true, error: !!errorCondition },
                            react_1.default.createElement(InputLabel_1.default, { sx: errorCondition ?
                                    {
                                        color: month ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                        '&.Mui-focused': {
                                            color: '#d32f2f !important',
                                        },
                                    } : {} }, text.BirthdayAndGender.month[userData.language]),
                            react_1.default.createElement(Select_1.default, { value: month, label: text.BirthdayAndGender.month[userData.language], onChange: handleSelectMonth, native: true, "aria-label": 'select month of birth', "aria-invalid": errorCondition ? true : false, sx: {
                                    '&:hover:not(.Mui-focused)': {
                                        '&& fieldset': {
                                            borderColor: errorCondition ? '' : '#dadce0',
                                        },
                                    },
                                    '.MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#dadce0',
                                    },
                                    '.MuiSvgIcon-root ': {
                                        fill: '#9e9e9e',
                                        fontSize: '1.8rem',
                                    },
                                } },
                                react_1.default.createElement("option", { value: '', hidden: true }),
                                react_1.default.createElement("option", { value: 'January' }, text.BirthdayAndGender.january[userData.language]),
                                react_1.default.createElement("option", { value: 'February' }, text.BirthdayAndGender.february[userData.language]),
                                react_1.default.createElement("option", { value: 'March' }, text.BirthdayAndGender.march[userData.language]),
                                react_1.default.createElement("option", { value: 'April' }, text.BirthdayAndGender.april[userData.language]),
                                react_1.default.createElement("option", { value: 'May' }, text.BirthdayAndGender.may[userData.language]),
                                react_1.default.createElement("option", { value: 'June' }, text.BirthdayAndGender.june[userData.language]),
                                react_1.default.createElement("option", { value: 'July' }, text.BirthdayAndGender.july[userData.language]),
                                react_1.default.createElement("option", { value: 'August' }, text.BirthdayAndGender.august[userData.language]),
                                react_1.default.createElement("option", { value: 'September' }, text.BirthdayAndGender.september[userData.language]),
                                react_1.default.createElement("option", { value: 'October' }, text.BirthdayAndGender.october[userData.language]),
                                react_1.default.createElement("option", { value: 'November' }, text.BirthdayAndGender.november[userData.language]),
                                react_1.default.createElement("option", { value: 'December' }, text.BirthdayAndGender.december[userData.language])))),
                    react_1.default.createElement(Box_1.default, { sx: { width: 'calc(32.5% - 10px)' } },
                        react_1.default.createElement(TextField_1.default, { fullWidth: true, error: !!errorCondition, value: day, label: text.BirthdayAndGender.day[userData.language], onChange: handleSelectDay, inputProps: { maxLength: 2 }, "aria-label": 'Enter day of birth', "aria-invalid": errorCondition ? true : false, InputLabelProps: errorCondition ?
                                {
                                    sx: {
                                        color: day ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
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
                                } })),
                    react_1.default.createElement(Box_1.default, { sx: { width: 'calc(32.5% - 10px)' } },
                        react_1.default.createElement(TextField_1.default, { fullWidth: true, error: !!errorCondition, value: year, label: text.BirthdayAndGender.year[userData.language], onChange: handleSelectYear, inputProps: { maxLength: 4 }, "aria-label": 'Enter year of birth', "aria-invalid": errorCondition ? true : false, InputLabelProps: errorCondition ?
                                {
                                    sx: {
                                        color: year ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
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
                errorCondition === 'incompleteBirthday' ? (react_1.default.createElement("div", { className: 'error-div', id: 'error-div-space-basic-info' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.BirthdayAndGender.pleaseFillInCompleteBirthday[userData.language]))) : errorCondition === 'isWrongFormat' ? (react_1.default.createElement("div", { className: 'error-div', id: 'error-div-space-basic-info' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.BirthdayAndGender.pleaseEnterValidDate[userData.language]))) : (react_1.default.createElement("div", { className: 'hidden-error-message-container-create-account' })),
                react_1.default.createElement("div", { className: 'line-height gender-input-width', id: 'gender-space' },
                    react_1.default.createElement(Box_1.default, null,
                        react_1.default.createElement(FormControl_1.default, { fullWidth: true, error: genderEmpty },
                            react_1.default.createElement(InputLabel_1.default, { sx: genderEmpty ?
                                    {
                                        color: gender ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                        '&.Mui-focused': {
                                            color: '#d32f2f !important',
                                        },
                                    } : {} }, text.BirthdayAndGender.gender[userData.language]),
                            react_1.default.createElement(Select_1.default, { value: gender, label: text.BirthdayAndGender.gender[userData.language], onChange: handleSelectGender, "aria-label": 'Select your gender', "aria-invalid": errorCondition ? true : false, native: true, sx: {
                                    '&:hover:not(.Mui-focused)': {
                                        '&& fieldset': {
                                            borderColor: genderEmpty ? '' : '#dadce0',
                                        },
                                    },
                                    '.MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#dadce0',
                                    },
                                    '.MuiSvgIcon-root ': {
                                        fill: '#9e9e9e',
                                        fontSize: '1.8rem',
                                    },
                                } },
                                react_1.default.createElement("option", { value: '', hidden: true }),
                                react_1.default.createElement("option", { value: 'Female' }, text.BirthdayAndGender.female[userData.language]),
                                react_1.default.createElement("option", { value: 'Male' }, text.BirthdayAndGender.male[userData.language]),
                                react_1.default.createElement("option", { value: 'Rather not say' }, text.BirthdayAndGender.ratherNotSay[userData.language]),
                                react_1.default.createElement("option", { value: 'Custom' }, text.BirthdayAndGender.custom[userData.language]))))),
                genderEmpty ? (react_1.default.createElement("div", { className: 'error-div', id: 'error-div-space-basic-info' },
                    react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                        react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                    react_1.default.createElement("p", { className: 'input-error-message' }, text.BirthdayAndGender.pleaseSelectGender[userData.language]))) : (react_1.default.createElement("div", { className: 'hidden-error-message-container-BI' })),
                isCustomChecked && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: 'line-height gender-input-width', id: 'gender-space' },
                        react_1.default.createElement(Box_1.default, null,
                            react_1.default.createElement(TextField_1.default, { fullWidth: true, error: customGenderEmpty, value: customGender, label: text.BirthdayAndGender.whatsYourGender[userData.language], onChange: handleSelectCustomGender, "aria-label": 'State your gender identity', "aria-invalid": errorCondition ? true : false, InputLabelProps: customGenderEmpty ?
                                    {
                                        sx: {
                                            color: customGender ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                            '&.Mui-focused': {
                                                color: '#d32f2f !important',
                                            },
                                        },
                                    } : {}, sx: customGenderEmpty ?
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
                    customGenderEmpty ? (react_1.default.createElement("div", { className: 'error-div', id: 'error-div-space-basic-info' },
                        react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                            react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                        react_1.default.createElement("p", { className: 'input-error-message' }, text.BirthdayAndGender.pleaseIndicateGender[userData.language]))) : (react_1.default.createElement("div", { className: 'hidden-error-message-container-BI' })),
                    react_1.default.createElement("div", { className: 'line-height gender-input-width', id: 'gender-space' },
                        react_1.default.createElement(Box_1.default, null,
                            react_1.default.createElement(FormControl_1.default, { fullWidth: true, error: pronounEmpty },
                                react_1.default.createElement(InputLabel_1.default, { sx: pronounEmpty ?
                                        {
                                            color: pronoun ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                            '&.Mui-focused': {
                                                color: '#d32f2f !important',
                                            },
                                        } : {} }, text.BirthdayAndGender.pleaseReferToMeAs[userData.language]),
                                react_1.default.createElement(Select_1.default, { value: pronoun, label: text.BirthdayAndGender.pleaseReferToMeAs[userData.language], onChange: handleSelectPronoun, "aria-label": 'Select your gender', "aria-invalid": errorCondition ? true : false, native: true, sx: {
                                        '&:hover:not(.Mui-focused)': {
                                            '&& fieldset': {
                                                borderColor: pronounEmpty ? '' : '#dadce0',
                                            },
                                        },
                                        '.MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#dadce0',
                                        },
                                        '.MuiSvgIcon-root ': {
                                            fill: '#9e9e9e',
                                        },
                                    } },
                                    react_1.default.createElement("option", { value: '', hidden: true }),
                                    react_1.default.createElement("option", { value: 'Female' }, text.BirthdayAndGender.female[userData.language]),
                                    react_1.default.createElement("option", { value: 'Male' }, text.BirthdayAndGender.male[userData.language]),
                                    react_1.default.createElement("option", { value: 'Other' }, text.BirthdayAndGender.other[userData.language]))))),
                    pronounEmpty ? (react_1.default.createElement("div", { className: 'error-div', id: 'error-div-space-basic-info' },
                        react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg' },
                            react_1.default.createElement("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' })),
                        react_1.default.createElement("p", { className: 'input-error-message' }, text.BirthdayAndGender.pleaseSelectPronoun[userData.language]))) : (react_1.default.createElement("div", { className: 'hidden-error-message-container-BI' })))),
                react_1.default.createElement("section", { className: errorCondition || genderEmpty ? 'button-right-error-BI' : 'button-right-BI' },
                    react_1.default.createElement(CustomNextButtonComponent_1.default, { variant: 'contained', onClick: handleNextClick, "aria-label": 'Next button', sx: {
                            '&& .MuiTouchRipple-rippleVisible': {
                                animationDuration: '300ms',
                            },
                        } },
                        react_1.default.createElement("div", { className: 'next' }, text.BirthdayAndGender.next[userData.language]))))),
        isCustomChecked ? (react_1.default.createElement(LanguageChangerOverflowComponent_1.default, { onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text })) : (react_1.default.createElement(LanguageChangerComponent_1.default, { onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text }))));
};
exports.BirthdayAndGenderComponent = BirthdayAndGenderComponent;
