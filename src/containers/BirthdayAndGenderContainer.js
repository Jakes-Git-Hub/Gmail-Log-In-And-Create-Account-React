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
exports.BirthdayAndGenderContainer = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var BirthdayAndGenderComponent_1 = require("../components/BirthdayAndGenderComponent");
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var BirthdayAndGenderContainer = function (_a) {
    var updateUser = _a.updateUser, text = _a.text, userData = _a.userData;
    var _b = (0, react_1.useState)(''), month = _b[0], setMonth = _b[1];
    var _c = (0, react_1.useState)(''), day = _c[0], setDay = _c[1];
    var _d = (0, react_1.useState)(''), year = _d[0], setYear = _d[1];
    var _e = (0, react_1.useState)(''), gender = _e[0], setGender = _e[1];
    var _f = (0, react_1.useState)(false), genderEmpty = _f[0], setGenderEmpty = _f[1];
    var _g = (0, react_1.useState)(null), errorCondition = _g[0], setErrorCondition = _g[1];
    var _h = (0, react_1.useState)(false), isImageLoaded = _h[0], setIsImageLoaded = _h[1];
    var _j = (0, react_1.useState)(false), isCustomChecked = _j[0], setIsCustomChecked = _j[1];
    var _k = (0, react_1.useState)(''), customGender = _k[0], setCustomGender = _k[1];
    var _l = (0, react_1.useState)(false), customGenderEmpty = _l[0], setCustomGenderEmpty = _l[1];
    var _m = (0, react_1.useState)(''), pronoun = _m[0], setPronoun = _m[1];
    var _o = (0, react_1.useState)(false), pronounEmpty = _o[0], setPronounEmpty = _o[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        console.log('userData', userData);
    }, [userData]);
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
    // Month
    var handleSelectMonth = function (e) {
        setMonth(e.target.value);
        if (day && year) {
            setErrorCondition(null);
        }
    };
    // Day
    var handleSelectDay = function (e) {
        var inputDay = e.target.value;
        var maxDayLength = 2;
        if (inputDay.length <= maxDayLength) {
            setDay(inputDay);
            if (month && year && year.length === 4 && !isNaN(Number(year)) && !isNaN(Number(inputDay))) {
                setErrorCondition(null);
            }
        }
    };
    // Year
    var handleSelectYear = function (e) {
        var inputYear = e.target.value;
        var maxYearLength = 4;
        if (inputYear.length <= maxYearLength) {
            setYear(inputYear);
            if (inputYear.length === 4 && month && day && day.length === 2 && !isNaN(Number(day)) && !isNaN(Number(inputYear))) {
                setErrorCondition(null);
            }
        }
    };
    // Gender
    var handleSelectGender = function (e) {
        setGender(e.target.value);
        setGenderEmpty(false);
        if (e.target.value === 'Custom') {
            setIsCustomChecked(true);
        }
        else {
            setIsCustomChecked(false);
        }
    };
    // Custom Gender
    var handleSelectCustomGender = function (e) {
        setCustomGender(e.target.value);
    };
    // Pronoun
    var handleSelectPronoun = function (e) {
        setPronoun(e.target.value);
        setPronounEmpty(false);
    };
    // Error Messages
    var birthdayError = function () { return setErrorCondition('incompleteBirthday'); };
    var wrongFormat = function () { return setErrorCondition('isWrongFormat'); };
    var genderError = function () { return setGenderEmpty(true); };
    var customGenderError = function () { return setCustomGenderEmpty(true); };
    var pronounError = function () { return setPronounEmpty(true); };
    // Validate User Basic Info
    var validateUserBasicInfo = function () {
        var isGenderEmpty = gender === '';
        var numericDay = +day;
        var numericYear = +year;
        var isBirthdayEmpty = month === '' || day === '' || year === '';
        var isCustomGenderEmpty = customGender === '';
        var isPronounEmpty = pronoun === '';
        var isValidDate = !isNaN(numericDay) && !isNaN(numericYear) && new Date(Number(year), +month - 1, numericDay).getMonth() === +month - 1;
        if (isBirthdayEmpty) {
            birthdayError();
        }
        if (isGenderEmpty) {
            genderError();
        }
        if (!isBirthdayEmpty && !isGenderEmpty && !isNaN(numericDay) && !isNaN(numericYear)) {
            console.log('triggered');
            updateUser({ month: month, day: day, year: year, gender: gender, customGender: customGender, pronoun: pronoun });
            navigate('/choose-your-gmail-address');
        }
        if (!isBirthdayEmpty && (isNaN(numericDay) || isNaN(numericYear) || year.length < 4 || !isValidDate)) {
            wrongFormat();
        }
        if (isCustomGenderEmpty && isCustomChecked) {
            customGenderError();
        }
        if (customGender) {
            setCustomGenderEmpty(false);
        }
        if (isPronounEmpty && isCustomChecked) {
            pronounError();
        }
    };
    // Handle Next Click
    var handleNextClick = function () { return validateUserBasicInfo(); };
    return (react_1.default.createElement(BirthdayAndGenderComponent_1.BirthdayAndGenderComponent, { month: month, handleSelectMonth: handleSelectMonth, day: day, handleSelectDay: handleSelectDay, year: year, handleSelectYear: handleSelectYear, gender: gender, handleSelectGender: handleSelectGender, handleNextClick: handleNextClick, genderEmpty: genderEmpty, errorCondition: errorCondition, isImageLoaded: isImageLoaded, customGender: customGender, handleSelectCustomGender: handleSelectCustomGender, customGenderEmpty: customGenderEmpty, pronounEmpty: pronounEmpty, pronoun: pronoun, handleSelectPronoun: handleSelectPronoun, isCustomChecked: isCustomChecked, text: text, handleLanguageSelection: handleLanguageSelection, userData: userData }));
};
exports.BirthdayAndGenderContainer = BirthdayAndGenderContainer;
