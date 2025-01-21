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
exports.CreatePasswordContainer = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var CreatePasswordComponent_1 = require("../components/CreatePasswordComponent");
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var CreatePasswordContainer = function (_a) {
    var updateUser = _a.updateUser, text = _a.text, userData = _a.userData;
    var _b = (0, react_1.useState)(''), password = _b[0], setPassword = _b[1];
    var _c = (0, react_1.useState)(''), confirmPassword = _c[0], setConfirmPassword = _c[1];
    var _d = (0, react_1.useState)(false), showPassword = _d[0], setShowPassword = _d[1];
    var _e = (0, react_1.useState)(null), errorCondition = _e[0], setErrorCondition = _e[1];
    var _f = (0, react_1.useState)(false), isImageLoaded = _f[0], setIsImageLoaded = _f[1];
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
    // Password
    var handleSelectPassword = function (e) { return setPassword(e.target.value); };
    var handleTogglePassword = function () { return setShowPassword(!showPassword); };
    // Confirm
    var handleSelectConfirmPassword = function (e) { return setConfirmPassword(e.target.value); };
    // Error messages
    var setError = function (error) { return setErrorCondition(error); };
    var confirmYourPassword = function () {
        if (password !== '' && confirmPassword === '') {
            setErrorCondition('confirmPasswordEmpty');
        }
        else {
            setErrorCondition(null);
        }
    };
    var passwordMismatch = function () {
        if (password !== confirmPassword && confirmPassword !== '') {
            setErrorCondition('passwordMismatch');
        }
        else {
            setErrorCondition(null);
        }
    };
    // Handle Next
    var handleNextClick = function () {
        var passwordInput = document.getElementById('passwordInput');
        var sufficientPasswordStrength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        var checkIfPasswordIsStrongEnough = function () {
            var passwordTest = sufficientPasswordStrength.test(password);
            var confirmPasswordTest = sufficientPasswordStrength.test(confirmPassword);
            if (!passwordTest && !confirmPasswordTest) {
                setError('pleaseChooseAStrongerPassword');
                console.log('not fine');
                return false;
            }
            else {
                console.log('fine');
                return true;
            }
        };
        checkIfPasswordIsStrongEnough();
        if (password === confirmPassword && password !== '' && confirmPassword !== '' && checkIfPasswordIsStrongEnough()) {
            updateUser({ password: password });
            navigate('/confirm-youre-not-a-robot');
        }
        if (password.length >= 8) {
            if (errorCondition === 'passwordEmpty' || errorCondition === 'needs8CharsOrMore') {
                setErrorCondition(null);
            }
        }
        if (password === '') {
            setError('passwordEmpty');
            passwordInput.focus();
        }
        if (password.length < 8 && password !== '') {
            setError('needs8CharsOrMore');
            passwordInput.focus();
        }
        if (password !== '' && password.length >= 8 && confirmPassword === '') {
            confirmYourPassword();
            var confirmPasswordInput = document.getElementById('confirmPasswordInput');
            confirmPasswordInput.focus();
        }
        if (password !== confirmPassword && password !== '' && confirmPassword !== '') {
            passwordMismatch();
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CreatePasswordComponent_1.CreatePasswordComponent, { password: password, setPassword: setPassword, handleSelectPassword: handleSelectPassword, confirmPassword: confirmPassword, handleSelectConfirmPassword: handleSelectConfirmPassword, setConfirmPassword: setConfirmPassword, handleNextClick: handleNextClick, showPassword: showPassword, setShowPassword: setShowPassword, handleTogglePassword: handleTogglePassword, confirmYourPassword: confirmYourPassword, passwordMismatch: passwordMismatch, errorCondition: errorCondition, text: text, handleLanguageSelection: handleLanguageSelection, isImageLoaded: isImageLoaded, userData: userData })));
};
exports.CreatePasswordContainer = CreatePasswordContainer;
