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
exports.CreateAccountContainer = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var CreateAccountComponent_1 = require("../components/CreateAccountComponent");
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var CreateAccountContainer = function (_a) {
    var updateUser = _a.updateUser, text = _a.text, userData = _a.userData;
    var _b = (0, react_1.useState)(''), firstName = _b[0], setFirstName = _b[1];
    var _c = (0, react_1.useState)(''), lastName = _c[0], setLastName = _c[1];
    var _d = (0, react_1.useState)(null), errorCondition = _d[0], setErrorCondition = _d[1];
    var _e = (0, react_1.useState)(false), isImageLoaded = _e[0], setIsImageLoaded = _e[1];
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
    // First Name
    // Allow Only String Values to be Inputted
    var isLetters = function (str) { return /^[A-Za-z]+$/.test(str); };
    var onFirstNameInputChange = function (e) {
        var value = e.target.value;
        if (isLetters(value)) {
            setFirstName(value);
        }
    };
    // Errors
    var setError = function (error) { return setErrorCondition(error); };
    // Last Name - Allow Only Letters
    var onLastNameInputChange = function (e) {
        if (isLetters(e.target.value)) {
            setLastName(e.target.value);
        }
    };
    // Handle Next
    var handleNextClick = function () {
        var firstNameInput = document.getElementById('firstNameInput');
        if (firstName !== '' && firstName.length > 2) {
            setErrorCondition(null);
            updateUser({ language: userData.language, firstName: firstName, lastName: lastName });
            navigate('/basic-information');
            console.log(firstName);
        }
        if (firstName.length > 0 && firstName.length <= 2) {
            setError('areYouSureCorrect');
            if (firstNameInput) {
                firstNameInput.focus();
            }
        }
        if (firstName === '') {
            setError('firstNameEmpty');
            if (firstNameInput) {
                firstNameInput.focus();
            }
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CreateAccountComponent_1.CreateAccountComponent, { firstName: firstName, setFirstName: setFirstName, setLastName: setLastName, lastName: lastName, handleNextClick: handleNextClick, onFirstNameInputChange: onFirstNameInputChange, onLastNameInputChange: onLastNameInputChange, errorCondition: errorCondition, handleLanguageSelection: handleLanguageSelection, text: text, isImageLoaded: isImageLoaded, userData: userData })));
};
exports.CreateAccountContainer = CreateAccountContainer;
