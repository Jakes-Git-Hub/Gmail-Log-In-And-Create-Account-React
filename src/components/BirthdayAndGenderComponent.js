import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import googleWritingSvg from '../images/google-writing-svg.svg';
import CustomNextButton from './buttons/CustomNextButtonComponent';
import LanguageChanger from './LanguageChanger/LanguageChangerComponent';
import LanguageChangerOverflow from './LanguageChanger/LanguageChangerOverflowComponent';
export const BirthdayAndGenderComponent = ({ month, handleSelectMonth, day, handleSelectDay, year, handleSelectYear, gender, handleSelectGender, handleNextClick, genderEmpty, errorCondition, isImageLoaded, customGender, handleSelectCustomGender, customGenderEmpty, pronounEmpty, pronoun, handleSelectPronoun, isCustomChecked, text, handleLanguageSelection, userData, }) => {
    return (_jsxs(_Fragment, { children: [_jsxs("main", { id: 'google-container-responsive', "data-testid": 'BAGComp', children: [_jsx("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader', children: _jsx("div", { className: 'blue-snake-loader' }) }), _jsx("img", { src: googleWritingSvg, alt: 'Google Writing', id: 'google-writing-BG' }), _jsxs("form", { children: [_jsx("h1", { className: 'thin h1-space', children: text.BirthdayAndGender.h1[userData.language] }), _jsx("h2", { className: 'thin h2-bg', children: text.BirthdayAndGender.h2[userData.language] }), _jsxs("div", { className: 'third-container-basic-information', children: [_jsx(Box, { sx: { width: 'calc(32.5% - 2px)' }, children: _jsxs(FormControl, { fullWidth: true, error: !!errorCondition, children: [_jsx(InputLabel, { sx: errorCondition ?
                                                        {
                                                            color: month ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                                            '&.Mui-focused': {
                                                                color: '#d32f2f !important',
                                                            },
                                                        } : {}, children: text.BirthdayAndGender.month[userData.language] }), _jsxs(Select, { value: month, label: text.BirthdayAndGender.month[userData.language], onChange: handleSelectMonth, native: true, "aria-label": 'select month of birth', "aria-invalid": errorCondition ? true : false, sx: {
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
                                                    }, children: [_jsx("option", { value: '', hidden: true }), _jsx("option", { value: 'January', children: text.BirthdayAndGender.january[userData.language] }), _jsx("option", { value: 'February', children: text.BirthdayAndGender.february[userData.language] }), _jsx("option", { value: 'March', children: text.BirthdayAndGender.march[userData.language] }), _jsx("option", { value: 'April', children: text.BirthdayAndGender.april[userData.language] }), _jsx("option", { value: 'May', children: text.BirthdayAndGender.may[userData.language] }), _jsx("option", { value: 'June', children: text.BirthdayAndGender.june[userData.language] }), _jsx("option", { value: 'July', children: text.BirthdayAndGender.july[userData.language] }), _jsx("option", { value: 'August', children: text.BirthdayAndGender.august[userData.language] }), _jsx("option", { value: 'September', children: text.BirthdayAndGender.september[userData.language] }), _jsx("option", { value: 'October', children: text.BirthdayAndGender.october[userData.language] }), _jsx("option", { value: 'November', children: text.BirthdayAndGender.november[userData.language] }), _jsx("option", { value: 'December', children: text.BirthdayAndGender.december[userData.language] })] })] }) }), _jsx(Box, { sx: { width: 'calc(32.5% - 10px)' }, children: _jsx(TextField, { fullWidth: true, error: !!errorCondition, value: day, label: text.BirthdayAndGender.day[userData.language], onChange: handleSelectDay, inputProps: { maxLength: 2 }, "aria-label": 'Enter day of birth', "aria-invalid": errorCondition ? true : false, InputLabelProps: errorCondition ?
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
                                                } }) }), _jsx(Box, { sx: { width: 'calc(32.5% - 10px)' }, children: _jsx(TextField, { fullWidth: true, error: !!errorCondition, value: year, label: text.BirthdayAndGender.year[userData.language], onChange: handleSelectYear, inputProps: { maxLength: 4 }, "aria-label": 'Enter year of birth', "aria-invalid": errorCondition ? true : false, InputLabelProps: errorCondition ?
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
                                                } }) })] }), errorCondition === 'incompleteBirthday' ? (_jsxs("div", { className: 'error-div', id: 'error-div-space-basic-info', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.BirthdayAndGender.pleaseFillInCompleteBirthday[userData.language] })] })) : errorCondition === 'isWrongFormat' ? (_jsxs("div", { className: 'error-div', id: 'error-div-space-basic-info', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.BirthdayAndGender.pleaseEnterValidDate[userData.language] })] })) : (_jsx("div", { className: 'hidden-error-message-container-create-account' })), _jsx("div", { className: 'line-height gender-input-width', id: 'gender-space', children: _jsx(Box, { children: _jsxs(FormControl, { fullWidth: true, error: genderEmpty, children: [_jsx(InputLabel, { sx: genderEmpty ?
                                                    {
                                                        color: gender ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                                        '&.Mui-focused': {
                                                            color: '#d32f2f !important',
                                                        },
                                                    } : {}, children: text.BirthdayAndGender.gender[userData.language] }), _jsxs(Select, { value: gender, label: text.BirthdayAndGender.gender[userData.language], onChange: handleSelectGender, "aria-label": 'Select your gender', "aria-invalid": errorCondition ? true : false, native: true, sx: {
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
                                                }, children: [_jsx("option", { value: '', hidden: true }), _jsx("option", { value: 'Female', children: text.BirthdayAndGender.female[userData.language] }), _jsx("option", { value: 'Male', children: text.BirthdayAndGender.male[userData.language] }), _jsx("option", { value: 'Rather not say', children: text.BirthdayAndGender.ratherNotSay[userData.language] }), _jsx("option", { value: 'Custom', children: text.BirthdayAndGender.custom[userData.language] })] })] }) }) }), genderEmpty ? (_jsxs("div", { className: 'error-div', id: 'error-div-space-basic-info', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.BirthdayAndGender.pleaseSelectGender[userData.language] })] })) : (_jsx("div", { className: 'hidden-error-message-container-BI' })), isCustomChecked && (_jsxs(_Fragment, { children: [_jsx("div", { className: 'line-height gender-input-width', id: 'gender-space', children: _jsx(Box, { children: _jsx(TextField, { fullWidth: true, error: customGenderEmpty, value: customGender, label: text.BirthdayAndGender.whatsYourGender[userData.language], onChange: handleSelectCustomGender, "aria-label": 'State your gender identity', "aria-invalid": errorCondition ? true : false, InputLabelProps: customGenderEmpty ?
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
                                                    } }) }) }), customGenderEmpty ? (_jsxs("div", { className: 'error-div', id: 'error-div-space-basic-info', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.BirthdayAndGender.pleaseIndicateGender[userData.language] })] })) : (_jsx("div", { className: 'hidden-error-message-container-BI' })), _jsx("div", { className: 'line-height gender-input-width', id: 'gender-space', children: _jsx(Box, { children: _jsxs(FormControl, { fullWidth: true, error: pronounEmpty, children: [_jsx(InputLabel, { sx: pronounEmpty ?
                                                            {
                                                                color: pronoun ? '#d32f2f' : 'rgba(0, 0, 0, 0.6) !important',
                                                                '&.Mui-focused': {
                                                                    color: '#d32f2f !important',
                                                                },
                                                            } : {}, children: text.BirthdayAndGender.pleaseReferToMeAs[userData.language] }), _jsxs(Select, { value: pronoun, label: text.BirthdayAndGender.pleaseReferToMeAs[userData.language], onChange: handleSelectPronoun, "aria-label": 'Select your gender', "aria-invalid": errorCondition ? true : false, native: true, sx: {
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
                                                        }, children: [_jsx("option", { value: '', hidden: true }), _jsx("option", { value: 'Female', children: text.BirthdayAndGender.female[userData.language] }), _jsx("option", { value: 'Male', children: text.BirthdayAndGender.male[userData.language] }), _jsx("option", { value: 'Other', children: text.BirthdayAndGender.other[userData.language] })] })] }) }) }), pronounEmpty ? (_jsxs("div", { className: 'error-div', id: 'error-div-space-basic-info', children: [_jsx("svg", { "aria-hidden": 'true', className: 'error-image', fill: 'rgb(217, 48, 37)', focusable: 'false', width: '16px', height: '16px', viewBox: '0 0 24 24', xmlns: 'https://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' }) }), _jsx("p", { className: 'input-error-message', children: text.BirthdayAndGender.pleaseSelectPronoun[userData.language] })] })) : (_jsx("div", { className: 'hidden-error-message-container-BI' }))] })), _jsx("section", { className: errorCondition || genderEmpty ? 'button-right-error-BI' : 'button-right-BI', children: _jsx(CustomNextButton, { variant: 'contained', onClick: handleNextClick, "aria-label": 'Next button', sx: {
                                        '&& .MuiTouchRipple-rippleVisible': {
                                            animationDuration: '300ms',
                                        },
                                    }, children: _jsx("div", { className: 'next', children: text.BirthdayAndGender.next[userData.language] }) }) })] })] }), isCustomChecked ? (_jsx(LanguageChangerOverflow, { onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text })) : (_jsx(LanguageChanger, { onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text }))] }));
};
