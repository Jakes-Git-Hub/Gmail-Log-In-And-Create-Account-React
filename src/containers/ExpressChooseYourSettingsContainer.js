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
exports.ExpressChooseYourSettingsContainer = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ExpressChooseYourSettingsComponent_1 = require("../components/ExpressChooseYourSettingsComponent");
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var react_spring_1 = require("react-spring");
var ExpressChooseYourSettingsContainer = function (_a) {
    var updateUser = _a.updateUser, text = _a.text, hidePrivacyRow = _a.hidePrivacyRow, userData = _a.userData;
    var _b = (0, react_1.useState)(false), isImageLoaded = _b[0], setIsImageLoaded = _b[1];
    var _c = (0, react_1.useState)(false), showWebAndAppActivityModal = _c[0], setShowWebAndAppActivityModal = _c[1];
    var _d = (0, react_1.useState)('closed'), modalCondition = _d[0], setModalCondition = _d[1];
    var _e = (0, react_1.useState)(false), showYouTubeHistoryModal = _e[0], setShowYouTubeHistoryModal = _e[1];
    var _f = (0, react_1.useState)(false), showPersonalizedAdsModal = _f[0], setShowPersonalizedAdsModal = _f[1];
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
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
        updateUser({ language: chosenLanguage });
    };
    // Add Overflow Body CSS
    (0, react_1.useEffect)(function () {
        document.body.id = 'body-overflow';
        return function () {
            document.body.id = 'body';
        };
    }, []);
    // Handle Modals
    var toggleModalCondition = function (condition) { return setModalCondition(condition); };
    var openWebAndAppActivityModal = function () {
        setShowWebAndAppActivityModal(true);
        toggleModalCondition('opening');
    };
    var closeWebAndAppActivityModal = function () {
        toggleModalCondition('closing');
        setTimeout(function () {
            toggleModalCondition('closed');
            setShowWebAndAppActivityModal(false);
        }, 275);
    };
    var openYouTubeHistoryModal = function () {
        setShowYouTubeHistoryModal(true);
        toggleModalCondition('opening');
    };
    var closeYouTubeHistoryModal = function () {
        toggleModalCondition('closing');
        setTimeout(function () {
            toggleModalCondition('closed');
            setShowYouTubeHistoryModal(false);
        }, 275);
    };
    var openPersonalizedAdsModal = function () {
        setShowPersonalizedAdsModal(true);
        toggleModalCondition('opening');
    };
    var closePersonalizedAdsModal = function () {
        toggleModalCondition('closing');
        setTimeout(function () {
            toggleModalCondition('closed');
            setShowPersonalizedAdsModal(false);
        }, 275);
    };
    var animationOpen = (0, react_spring_1.useSpring)({
        transform: modalCondition === 'opening' ? "scale(1)" : "scale(0.85)",
        config: {
            duration: 175,
            easing: function (t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
        }
    });
    var animationClose = (0, react_spring_1.useSpring)({
        transform: modalCondition === 'closing' ? "scale(0.85)" : "scale(1)",
        config: {
            duration: 275,
            easing: function (t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
        }
    });
    // Handle Next Click
    var repositionViewPortOnNextOrBackClick = function () {
        window.scrollTo({
            top: 0, // Scroll to the top of the viewport
            behavior: 'auto' // Optionally, you can use 'auto' for instant scrolling
        });
    };
    var handleNextClick = function (e) {
        e.preventDefault();
        hidePrivacyRow();
        updateUser({ manualSetting1: 'keep until delete', manualSetting2: 'keep until delete', manualSetting3: 'show personalized ads' });
        repositionViewPortOnNextOrBackClick();
        navigate('/confirm-your-settings');
    };
    var handleRejectAllClick = function (e) {
        e.preventDefault();
        navigate('/choose-your-settings');
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ExpressChooseYourSettingsComponent_1.ExpressChooseYourSettingsComponent, { handleNextClick: handleNextClick, isImageLoaded: isImageLoaded, openWebAndAppActivityModal: openWebAndAppActivityModal, closeWebAndAppActivityModal: closeWebAndAppActivityModal, showWebAndAppActivityModal: showWebAndAppActivityModal, modalCondition: modalCondition, animationOpen: animationOpen, animationClose: animationClose, showYouTubeHistoryModal: showYouTubeHistoryModal, openYouTubeHistoryModal: openYouTubeHistoryModal, closeYouTubeHistoryModal: closeYouTubeHistoryModal, openPersonalizedAdsModal: openPersonalizedAdsModal, closePersonalizedAdsModal: closePersonalizedAdsModal, showPersonalizedAdsModal: showPersonalizedAdsModal, text: text, handleLanguageSelection: handleLanguageSelection, handleRejectAllClick: handleRejectAllClick, userData: userData })));
};
exports.ExpressChooseYourSettingsContainer = ExpressChooseYourSettingsContainer;
