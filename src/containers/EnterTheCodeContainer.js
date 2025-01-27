"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterTheCodeContainer = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var EnterTheCodeComponent_1 = require("../components/EnterTheCodeComponent");
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var styles_1 = require("@mui/material/styles");
var EnterTheCodeContainer = function (_a) {
    var updateUser = _a.updateUser, userData = _a.userData, text = _a.text;
    var _b = (0, react_1.useState)(null), errorCondition = _b[0], setErrorCondition = _b[1];
    var _c = (0, react_1.useState)(false), isImageLoaded = _c[0], setIsImageLoaded = _c[1];
    var _d = (0, react_1.useState)(''), usersVerificationCodeInput = _d[0], setUsersVerificationCodeInput = _d[1];
    var _e = (0, react_1.useState)(''), verificationCode = _e[0], setVerificationCode = _e[1];
    var _f = (0, react_1.useState)(true), getNewCodeButtonDisabled = _f[0], setGetNewCodeButtonDisabled = _f[1];
    var _g = (0, react_1.useState)(30), disabledCount = _g[0], setDisabledCount = _g[1];
    var _h = (0, react_1.useState)(false), isFocused = _h[0], setIsFocused = _h[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        var image = new Image();
        image.src = google_writing_svg_svg_1.default;
        image.onload = function () {
            setIsImageLoaded(true);
        };
    }, []);
    // Change Language
    var handleLanguageSelection = function (chosenLanguage) { return updateUser({ language: chosenLanguage }); };
    // Verification Code
    (0, react_1.useEffect)(function () {
        console.log('userData', userData);
        if (userData) {
            setVerificationCode(userData.verificationCode);
        }
    }, [userData]);
    var handleUserVerificationCodeInput = function (e) { return setUsersVerificationCodeInput(e.target.value); };
    // Errors
    var setError = function (errorType) { return setErrorCondition(errorType); };
    // Get New Code
    var thirtySecondGetNewCodeCountdown = function (count) {
        setTimeout(function () {
            setDisabledCount(count - 1);
        }, 1000);
    };
    (0, react_1.useEffect)(function () {
        thirtySecondGetNewCodeCountdown(disabledCount);
        if (disabledCount === 0) {
            setDisabledCount(30);
            setGetNewCodeButtonDisabled(false);
        }
    }, [disabledCount]);
    var getNewCode = function () { return navigate('/confirm-youre-not-a-robot'); };
    // Handle Next Click
    var handleNextClick = function () {
        var emptyInput = '';
        var hasLetters = /[a-zA-Z]/.test(usersVerificationCodeInput);
        var sixDigits = /^\d{6}$/;
        if (usersVerificationCodeInput === emptyInput) {
            setError('inputEmpty');
        }
        if (hasLetters) {
            setError('hasLetters');
        }
        if ((usersVerificationCodeInput !== emptyInput) && (!hasLetters && !sixDigits.test(usersVerificationCodeInput))) {
            setError('wrongNumberOfDigits');
        }
        if (sixDigits.test(usersVerificationCodeInput) && (usersVerificationCodeInput !== verificationCode)) {
            setError('wrongCode');
        }
        if (usersVerificationCodeInput === verificationCode) {
            navigate('/add-recovery-email');
        }
    };
    // isFocused?
    var toggleFocus = function () { return setIsFocused(!isFocused); };
    // Custom MUI TextField
    var theme = (0, styles_1.createTheme)({
        components: {
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        paddingLeft: usersVerificationCodeInput || isFocused ? '14%' : '10.5%',
                        '&.Mui-focused': {
                            paddingLeft: '14%',
                        },
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        paddingLeft: '12.4%',
                    },
                    input: {
                        paddingLeft: '7.5%',
                    },
                },
            },
        },
    });
    return (react_1.default.createElement(EnterTheCodeComponent_1.EnterTheCodeComponent, { handleNextClick: handleNextClick, errorCondition: errorCondition, isImageLoaded: isImageLoaded, handleUserVerificationCodeInput: handleUserVerificationCodeInput, usersVerificationCodeInput: usersVerificationCodeInput, theme: theme, getNewCode: getNewCode, getNewCodeButtonDisabled: getNewCodeButtonDisabled, disabledCount: disabledCount, text: text, handleLanguageSelection: handleLanguageSelection, toggleFocus: toggleFocus, isFocused: isFocused, userData: userData }));
};
exports.EnterTheCodeContainer = EnterTheCodeContainer;
