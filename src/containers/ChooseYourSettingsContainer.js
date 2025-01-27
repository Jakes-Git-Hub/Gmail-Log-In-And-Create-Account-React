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
exports.ChooseYourSettingsContainer = void 0;
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ChooseYourSettingsComponent_1 = require("../components/ChooseYourSettingsComponent");
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var ChooseYourSettingsContainer = function (_a) {
    var userData = _a.userData, updateUser = _a.updateUser, text = _a.text;
    var _b = (0, react_1.useState)(''), setting = _b[0], setSetting = _b[1];
    var _c = (0, react_1.useState)(false), isImageLoaded = _c[0], setIsImageLoaded = _c[1];
    var _d = (0, react_1.useState)(''), errorCondition = _d[0], setErrorCondition = _d[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    // Check for Image Loads
    (0, react_1.useEffect)(function () {
        var image = new Image();
        image.src = google_writing_svg_svg_1.default;
        image.onload = function () {
            setIsImageLoaded(true);
        };
    }, []);
    // Change Language
    var handleLanguageSelection = function (chosenLanguage) { return updateUser({ language: chosenLanguage }); };
    // Handle Radio Change
    var handleRadioChange = function (e) {
        setSetting(e.target.value);
        if (errorCondition === 'selectAnOption') {
            setErrorCondition('');
        }
    };
    // Errors
    var setError = function (error) { return setErrorCondition(error); };
    // Handle Next Click
    var handleNextClick = function (e) {
        e.preventDefault();
        if (setting === '') {
            setError('selectAnOption');
        }
        else if (setting === 'express') {
            updateUser({ settings: 'express' });
            navigate('/express-choose-your-settings');
        }
        else if (setting === 'manual') {
            updateUser({ settings: 'manual' });
            navigate('/manual-choose-your-settings');
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ChooseYourSettingsComponent_1.ChooseYourSettingsComponent, { handleNextClick: handleNextClick, isImageLoaded: isImageLoaded, userData: userData, setting: setting, handleRadioChange: handleRadioChange, errorCondition: errorCondition, text: text, handleLanguageSelection: handleLanguageSelection })));
};
exports.ChooseYourSettingsContainer = ChooseYourSettingsContainer;
