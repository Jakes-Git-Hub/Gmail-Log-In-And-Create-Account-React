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
exports.ChooseYourGmailAddressContainer = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ChooseYourGmailAddressComponent_1 = require("../components/ChooseYourGmailAddressComponent");
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var ChooseYourGmailAddressContainer = function (_a) {
    var updateUser = _a.updateUser, users = _a.users, text = _a.text, userData = _a.userData;
    var _b = (0, react_1.useState)(''), email = _b[0], setEmail = _b[1];
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
    // Email
    var handleSelectEmail = function (e) { return setEmail(e.target.value); };
    // Errors
    var error = function (error) { return setErrorCondition(error); };
    // Validate Email Address
    var validateEmail = function () {
        setEmail(email);
        var usernameInput = document.getElementById('usernameInput');
        if (email === '') {
            error('usernameEmpty');
            usernameInput.focus();
        }
        else if (!/^[a-zA-Z0-9.]+$/.test(email)) {
            error('usesUnallowedChars');
            usernameInput.focus();
        }
        else if (email.length < 6 || email.length > 30) {
            error('isIncorrectLength');
            usernameInput.focus();
        }
        else if (users.find(function (user) { return user.email === email + '@gmail.com'; })) {
            error('usernameIsAlreadyTaken');
            usernameInput.focus();
        }
        else {
            updateUser({ email: email + '@gmail.com' });
            navigate('/create-password');
        }
    };
    // Handle Next Click
    var handleNextClick = function () { return validateEmail(); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ChooseYourGmailAddressComponent_1.ChooseYourGmailAddressComponent, { email: email, setEmail: setEmail, handleNextClick: handleNextClick, errorCondition: errorCondition, handleSelectEmail: handleSelectEmail, text: text, handleLanguageSelection: handleLanguageSelection, isImageLoaded: isImageLoaded, userData: userData })));
};
exports.ChooseYourGmailAddressContainer = ChooseYourGmailAddressContainer;
