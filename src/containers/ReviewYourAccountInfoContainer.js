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
exports.ReviewYourAccountInfoContainer = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ReviewYourAccountInfoComponent_1 = require("../components/ReviewYourAccountInfoComponent");
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var ReviewYourAccountInfoContainer = function (_a) {
    var userData = _a.userData, updateUser = _a.updateUser, text = _a.text;
    var _b = (0, react_1.useState)(false), isImageLoaded = _b[0], setIsImageLoaded = _b[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(function () {
        var image = new Image();
        image.src = google_writing_svg_svg_1.default;
        image.onload = function () {
            setIsImageLoaded(true);
        };
    }, []);
    // Change Language
    var handleLanguageSelection = function (chosenLanguage) {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        updateUser({ language: chosenLanguage });
    };
    // Assign Users Profile Circle Color
    (0, react_1.useEffect)(function () {
        if (!userData.profileCircleColor) {
            profileCircleColor();
        }
    }, [userData]);
    var profileCircleColor = function () {
        console.log('profileCircleColor running');
        var randomColor;
        var brightness;
        do {
            randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            var r = parseInt(randomColor.substring(1, 3), 16);
            var g = parseInt(randomColor.substring(3, 5), 16);
            var b = parseInt(randomColor.substring(5, 7), 16);
            brightness = (r * 299 + g * 587 + b * 114) / 1000;
        } while (brightness > 200);
        updateUser({ profileCircleColor: randomColor });
    };
    // Handle Next Click
    var handleNextClick = function (e) {
        e.preventDefault();
        navigate('/choose-your-settings');
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ReviewYourAccountInfoComponent_1.ReviewYourAccountInfoComponent, { handleNextClick: handleNextClick, isImageLoaded: isImageLoaded, userData: userData, handleLanguageSelection: handleLanguageSelection, text: text })));
};
exports.ReviewYourAccountInfoContainer = ReviewYourAccountInfoContainer;
