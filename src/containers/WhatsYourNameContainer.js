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
exports.WhatsYourNameContainer = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var WhatsYourNameComponent_1 = require("../components/WhatsYourNameComponent");
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var WhatsYourNameContainer = function (_a) {
    var updateUser = _a.updateUser, text = _a.text, userData = _a.userData, updateFindYourEmailCredentials = _a.updateFindYourEmailCredentials, findYourEmailCredentials = _a.findYourEmailCredentials, users = _a.users, handleIncorrectInfoSearch = _a.handleIncorrectInfoSearch, handleCorrectInfoSearch = _a.handleCorrectInfoSearch;
    var _b = (0, react_1.useState)(''), firstName = _b[0], setFirstName = _b[1];
    var _c = (0, react_1.useState)(''), lastName = _c[0], setLastName = _c[1];
    var _d = (0, react_1.useState)(null), errorCondition = _d[0], setErrorCondition = _d[1];
    var _e = (0, react_1.useState)(false), isImageLoaded = _e[0], setIsImageLoaded = _e[1];
    var _f = (0, react_1.useState)(false), proceedWithFindUser = _f[0], setProceedWithFindUser = _f[1];
    var _g = (0, react_1.useState)(''), findWith = _g[0], setFindWith = _g[1];
    var _h = (0, react_1.useState)(false), foundMatchingUser = _h[0], setfoundMatchingUser = _h[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    // Handle Slow Svg Load
    (0, react_1.useEffect)(function () {
        var image = new Image();
        image.src = google_writing_svg_svg_1.default;
        image.onload = function () {
            setIsImageLoaded(true);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        console.log('findYourEmailCredentials', findYourEmailCredentials);
    }, [findYourEmailCredentials]);
    (0, react_1.useEffect)(function () {
        console.log('findWith:', findWith);
    }, [findWith]);
    // Change Language
    var handleLanguageSelection = function (chosenLanguage) { return updateUser({ language: chosenLanguage }); };
    // First Name
    var onFirstNameInputChange = function (e) { return setFirstName(e.target.value.toLowerCase()); };
    // Last Name
    var onLastNameInputChange = function (e) { return setLastName(e.target.value.toLowerCase()); };
    // Errors
    var error = function (error) { return setErrorCondition(error); };
    // Find With
    var handleFindWithPhoneNumber = function () { return setFindWith('phoneNumber'); };
    var handleFindWithEmail = function () { return setFindWith('email'); };
    // Handle Next
    var handleNextClick = function () {
        var firstNameInput = document.getElementById('firstNameInput');
        if (firstName === '') {
            error('firstNameEmpty');
            if (firstNameInput) {
                firstNameInput.focus();
            }
        }
        if (firstName !== '') {
            setErrorCondition(null);
            updateFindYourEmailCredentials({ firstName: firstName, lastName: lastName });
            setProceedWithFindUser(true);
        }
    };
    (0, react_1.useEffect)(function () {
        if (proceedWithFindUser) {
            var matchingUser = findMatchingUser();
            if (matchingUser) {
                setfoundMatchingUser(true);
            }
            else {
                handleIncorrectInfoSearch();
                navigate('/find-your-email');
            }
        }
    }, [proceedWithFindUser]);
    // findMatchingUser
    var findMatchingUser = function () {
        var matchingUser = users.find(function (user) {
            var sequences = generateSequences(findYourEmailCredentials.phoneNumberOrEmail);
            if (user.email === findYourEmailCredentials.phoneNumberOrEmail &&
                user.firstName.toLowerCase() === findYourEmailCredentials.firstName &&
                user.lastName.toLowerCase() === findYourEmailCredentials.lastName) {
                return true;
            }
            else if (sequences.some(function (sequence) { return user.phoneNumber.includes(sequence); }) &&
                user.firstName.toLowerCase() === findYourEmailCredentials.firstName &&
                user.lastName.toLowerCase() === findYourEmailCredentials.lastName) {
                return true;
            }
            return false;
        });
        if (matchingUser) {
            console.log('matchingUser', matchingUser);
            console.log('findYourEmailCredentials.phoneNumberOrEmail', findYourEmailCredentials.phoneNumberOrEmail);
            if (matchingUser.email === findYourEmailCredentials.phoneNumberOrEmail) {
                handleFindWithEmail();
            }
            else if (generateSequences(findYourEmailCredentials.phoneNumberOrEmail).some(function (sequence) { return matchingUser.phoneNumber.includes(sequence); })) {
                handleFindWithPhoneNumber();
            }
        }
        return matchingUser;
    };
    var generateSequences = function (number) {
        var sequences = [];
        for (var i = 0; i <= number.length - 7; i++) {
            sequences.push(number.slice(i, i + 7));
        }
        return sequences;
    };
    (0, react_1.useEffect)(function () {
        if (foundMatchingUser) {
            handleCorrectInfoSearch();
            if (findWith === 'email') {
                navigate('/get-a-verification-code-email');
            }
            if (findWith === 'phoneNumber') {
                navigate('/get-a-verification-code-phone');
            }
        }
    }, [foundMatchingUser]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(WhatsYourNameComponent_1.WhatsYourNameComponent, { firstName: firstName, setFirstName: setFirstName, setLastName: setLastName, lastName: lastName, handleNextClick: handleNextClick, onFirstNameInputChange: onFirstNameInputChange, onLastNameInputChange: onLastNameInputChange, errorCondition: errorCondition, handleLanguageSelection: handleLanguageSelection, text: text, isImageLoaded: isImageLoaded, userData: userData })));
};
exports.WhatsYourNameContainer = WhatsYourNameContainer;
