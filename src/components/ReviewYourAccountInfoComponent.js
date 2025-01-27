"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewYourAccountInfoComponent = void 0;
var react_1 = __importDefault(require("react"));
var google_writing_svg_svg_1 = __importDefault(require("../images/google-writing-svg.svg"));
var CustomNextButtonComponent_1 = __importDefault(require("./buttons/CustomNextButtonComponent"));
var LanguageChangerComponent_1 = __importDefault(require("./LanguageChanger/LanguageChangerComponent"));
var ReviewYourAccountInfoComponent = function (_a) {
    var handleNextClick = _a.handleNextClick, isImageLoaded = _a.isImageLoaded, userData = _a.userData, handleLanguageSelection = _a.handleLanguageSelection, text = _a.text;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("main", { className: 'google-container-flexible-ryai', "data-testid": 'RYAI' },
            react_1.default.createElement("div", { className: isImageLoaded ? 'empty-blue-snake-loader-placeholder' : 'empty-blue-snake-loader' },
                react_1.default.createElement("div", { className: 'blue-snake-loader' })),
            react_1.default.createElement("img", { src: google_writing_svg_svg_1.default, alt: 'Google Writing', id: 'google-writing-recovery-ryai' }),
            react_1.default.createElement("h1", { className: 'thin h1-space' }, text.ReviewYourAccountInfo.h1[userData.language]),
            react_1.default.createElement("div", { id: 'reduce-width-h2' },
                react_1.default.createElement("h2", { className: 'thin gap center' }, text.ReviewYourAccountInfo.h2[userData.language])),
            react_1.default.createElement("div", { id: 'profile-card-container', "aria-label": 'profile card container' },
                react_1.default.createElement("div", { id: 'profile-initial-circle-container' },
                    react_1.default.createElement("div", { id: 'profile-initial-circle', style: { backgroundColor: userData.profileCircleColor } }, userData.firstName ? userData.firstName.charAt(0) : '')),
                react_1.default.createElement("div", { id: 'name-and-email-container' },
                    react_1.default.createElement("div", { id: 'name-ryai' },
                        userData.firstName,
                        " ",
                        userData.lastName),
                    react_1.default.createElement("div", { id: 'email-address-ryai' }, userData.email))),
            react_1.default.createElement("div", { id: 'review-your-account-next-button', className: 'button-space-create-password' },
                react_1.default.createElement(CustomNextButtonComponent_1.default, { variant: 'contained', onClick: handleNextClick, "aria-label": 'next button', sx: {
                        '&& .MuiTouchRipple-rippleVisible': {
                            animationDuration: '300ms',
                        },
                    } },
                    react_1.default.createElement("div", { className: 'next' }, text.ReviewYourAccountInfo.next[userData.language])))),
        react_1.default.createElement(LanguageChangerComponent_1.default, { className: 'language-changer-div', onChange: handleLanguageSelection, initialLanguage: userData.language, "aria-label": 'Change language', text: text })));
};
exports.ReviewYourAccountInfoComponent = ReviewYourAccountInfoComponent;
