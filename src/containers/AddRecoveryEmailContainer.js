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
exports.AddRecoveryEmailContainer = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var AddRecoveryEmailComponent_1 = require("../components/AddRecoveryEmailComponent");
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var AddRecoveryEmailContainer = function (_a) {
    var updateUser = _a.updateUser, text = _a.text, userData = _a.userData;
    var _b = (0, react_1.useState)(''), recoveryEmail = _b[0], setRecoveryEmail = _b[1];
    var _c = (0, react_1.useState)(null), errorCondition = _c[0], setErrorCondition = _c[1];
    var _d = (0, react_1.useState)(false), isImageLoaded = _d[0], setIsImageLoaded = _d[1];
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
    // Handle Next
    var recoveryEmailInput = document.getElementById('recoveryEmailInput');
    var isEmailValid = function (recoveryEmail) {
        var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailPattern.test(recoveryEmail);
    };
    var isStringAndAtSymbolThere = function (recoveryEmail) {
        return /^[A-Za-z0-9._%+-]+@.*$/g.test(recoveryEmail);
    };
    var isEmailInvalid = function (recoveryEmail) {
        return /^[A-Za-z0-9._%+-]+@+[A-Za-z0-9._%+-]+$/g.test(recoveryEmail);
    };
    var isDomainNameNotThere = function (recoveryEmail) {
        return /^[A-Za-z0-9._%+-]+@$/g.test(recoveryEmail);
    };
    var isEmailNotValid = function (recoveryEmail) {
        var invalidEmailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        var multipleAtSymbolPattern = /@.*@/;
        return invalidEmailPattern.test(recoveryEmail) || multipleAtSymbolPattern.test(recoveryEmail);
    };
    var handleEmailValidation = function (recoveryEmail) {
        if (isEmailValid(recoveryEmail)) {
            updateUser({ recoveryEmail: recoveryEmail });
            setRecoveryEmail('');
            setErrorCondition(null);
            navigate('/review-account-info');
        }
        if (recoveryEmail === '') {
            setErrorCondition('enterValidEmail');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }
        }
        if (isEmailNotValid(recoveryEmail)) {
            setErrorCondition('emailAddressNotValid');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }
        }
        if (recoveryEmail !== '' && !isStringAndAtSymbolThere(recoveryEmail)) {
            setErrorCondition('dontForgetAtSymbol');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }
        }
        if (isDomainNameNotThere(recoveryEmail) && !isEmailInvalid(recoveryEmail)) {
            setErrorCondition('enterADomainName');
            if (recoveryEmailInput) {
                recoveryEmailInput.focus();
            }
        }
    };
    var handleNextClick = function (e) {
        e.preventDefault();
        handleEmailValidation(recoveryEmail);
    };
    // Handle Skip
    var handleSkip = function () {
        setRecoveryEmail('');
        setErrorCondition(null);
        navigate('/review-account-info');
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(AddRecoveryEmailComponent_1.AddRecoveryEmailComponent, { recoveryEmail: recoveryEmail, setRecoveryEmail: setRecoveryEmail, handleNextClick: handleNextClick, isImageLoaded: isImageLoaded, errorCondition: errorCondition, handleSkip: handleSkip, handleLanguageSelection: handleLanguageSelection, text: text, userData: userData })));
};
exports.AddRecoveryEmailContainer = AddRecoveryEmailContainer;
