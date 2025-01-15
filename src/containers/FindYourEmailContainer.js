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
exports.FindYourEmailContainer = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var FindYourEmailComponent_1 = require("../components/FindYourEmailComponent");
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var FindYourEmailContainer = function (_a) {
    var updateUser = _a.updateUser, text = _a.text, userData = _a.userData, updateFindYourEmailCredentials = _a.updateFindYourEmailCredentials, isWrongCredentials = _a.isWrongCredentials;
    var _b = (0, react_1.useState)(''), phoneNumberOrEmail = _b[0], setPhoneNumberOrEmail = _b[1];
    var _c = (0, react_1.useState)(null), errorCondition = _c[0], setErrorCondition = _c[1];
    var _d = (0, react_1.useState)(false), isImageLoaded = _d[0], setIsImageLoaded = _d[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    // Handle Slow Svg Load
    (0, react_1.useEffect)(function () {
        var image = new Image();
        image.src = google_writing_svg_svg_1.default;
        image.onload = function () {
            setIsImageLoaded(true);
        };
    }, []);
    // Change Language
    var handleLanguageSelection = function (chosenLanguage) { return updateUser({ language: chosenLanguage }); };
    // Email or Phone Number
    var onPhoneNumberOrEmailInputChange = function (e) { return setPhoneNumberOrEmail(e.target.value); };
    // Errors
    var error = function (error) { return setErrorCondition(error); };
    var phoneNumberOrEmailInput = document.getElementById('phoneNumberOrEmailInput');
    (0, react_1.useEffect)(function () {
        if (isWrongCredentials) {
            error('wrongCredentials');
            if (phoneNumberOrEmailInput) {
                phoneNumberOrEmailInput.focus();
            }
        }
    }, [isWrongCredentials, phoneNumberOrEmailInput]);
    // Handle Next
    var handleNextClick = function () {
        if (phoneNumberOrEmail === '') {
            error('phoneNumberOrEmailEmpty');
            if (phoneNumberOrEmailInput) {
                phoneNumberOrEmailInput.focus();
            }
        }
        if (phoneNumberOrEmail !== '') {
            error(null);
            updateFindYourEmailCredentials({ phoneNumberOrEmail: phoneNumberOrEmail });
            navigate('/whats-your-name');
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(FindYourEmailComponent_1.FindYourEmailComponent, { handleNextClick: handleNextClick, errorCondition: errorCondition, handleLanguageSelection: handleLanguageSelection, text: text, isImageLoaded: isImageLoaded, onPhoneNumberOrEmailInputChange: onPhoneNumberOrEmailInputChange, userData: userData, phoneNumberOrEmail: phoneNumberOrEmail })));
};
exports.FindYourEmailContainer = FindYourEmailContainer;
