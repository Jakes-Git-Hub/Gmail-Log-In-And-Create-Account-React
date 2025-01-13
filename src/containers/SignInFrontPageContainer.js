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
exports.SignInFrontPageContainer = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var SignInFrontPageComponent_1 = require("../components/SignInFrontPageComponent");
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var SignInFrontPageContainer = function (_a) {
    var users = _a.users, userData = _a.userData, updateUser = _a.updateUser, text = _a.text, passFoundUser = _a.passFoundUser;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _b = (0, react_1.useState)(''), emailOrPhone = _b[0], setEmailOrPhone = _b[1];
    var _c = (0, react_1.useState)(false), isImageLoaded = _c[0], setIsImageLoaded = _c[1];
    var _d = (0, react_1.useState)(null), errorCondition = _d[0], setErrorCondition = _d[1];
    // Handle Slow Svg Load
    (0, react_1.useEffect)(function () {
        var image = new Image();
        image.src = google_writing_svg_svg_1.default;
        image.onload = function () {
            setIsImageLoaded(true);
        };
    }, []);
    // Change Language
    var handleLanguageSelection = function (chosenLanguage) {
        updateUser({ language: chosenLanguage });
    };
    // Email or Phone
    var onEmailOrPhoneChange = function (e) {
        setEmailOrPhone(e.target.value);
    };
    // Forgot Email
    var handleForgotEmailButtonClick = function () {
        navigate('/find-your-email');
    };
    // Guest Mode Info Click
    var handleGuestModeInfoButtonClick = function () {
        window.open('https://support.google.com/chrome/answer/6130773?hl=en', '_blank');
    };
    // Create Account Click
    var handleCreateAccountClick = function () {
        navigate('/create-account');
    };
    // Error
    var error = function (error) {
        setErrorCondition(error);
    };
    // Handle Next
    var handleNextClick = function (e) {
        e.preventDefault();
        if (emailOrPhone === '') {
            error('emailOrPhoneEmpty');
            var emailOrPhoneInput = document.getElementById('emailOrPhoneInput');
            emailOrPhoneInput.focus();
        }
        else if (!users.some(function (user) { return user.email === emailOrPhone || user.phoneNumber === emailOrPhone; })) {
            error('couldntFindYourAccount');
            var emailOrPhoneInput = document.getElementById('emailOrPhoneInput');
            emailOrPhoneInput.focus();
        }
        else {
            var registeredUser = users.find(function (user) { return user.email === emailOrPhone || user.phoneNumber === emailOrPhone; });
            if (registeredUser) {
                passFoundUser(registeredUser);
                navigate('/verify-with-password');
            }
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SignInFrontPageComponent_1.SignInFrontPageComponent, { userData: userData, handleLanguageSelection: handleLanguageSelection, isImageLoaded: isImageLoaded, errorCondition: errorCondition, emailOrPhone: emailOrPhone, onEmailOrPhoneChange: onEmailOrPhoneChange, handleForgotEmailButtonClick: handleForgotEmailButtonClick, handleGuestModeInfoButtonClick: handleGuestModeInfoButtonClick, handleCreateAccountClick: handleCreateAccountClick, handleNextClick: handleNextClick, text: text })));
};
exports.SignInFrontPageContainer = SignInFrontPageContainer;
