"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = __importStar(require("react"));
var languageOptions_1 = __importDefault(require("../../utils/languageOptions"));
var Select_1 = __importDefault(require("@mui/material/Select"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FooterGreyButton_1 = __importDefault(require("../buttons/FooterGreyButton"));
var LanguageChangerOverflow = function (_a) {
    var onChange = _a.onChange, initialLanguage = _a.initialLanguage, text = _a.text;
    var _b = (0, react_1.useState)(initialLanguage || 'en-GB'), selectedValue = _b[0], setSelectedValue = _b[1];
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var _d = (0, react_1.useState)('500px'), maxHeight = _d[0], setMaxHeight = _d[1];
    // Handle Language Selection
    (0, react_1.useEffect)(function () {
        if (initialLanguage) {
            setSelectedValue(initialLanguage);
            onChange(initialLanguage);
        }
    }, [initialLanguage, onChange]);
    var handleChange = function (event) {
        var value = event.target.value;
        setSelectedValue(value);
        onChange(value);
        console.log('value:', value);
    };
    // Handles Dynamic Dropdown Menu Height
    var handleResize = function () {
        var dropdown = document.getElementById('language-changer-dropdown');
        if (dropdown) {
            var rect = dropdown.getBoundingClientRect();
            var viewportHeight = window.innerHeight;
            var dynamicDifference = viewportHeight - rect.top + 33;
            var dynamicMaxheight = viewportHeight - dynamicDifference;
            setMaxHeight(dynamicMaxheight + 'px');
        }
    };
    (0, react_1.useEffect)(function () {
        handleResize();
        window.addEventListener('resize', handleResize);
        return function () {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // Options
    var customOptions = languageOptions_1.default.map(function (language) { return ({
        value: language.value,
        label: language.label,
    }); });
    // Menu Open/ Close
    var toggleMenu = function () {
        setOpen(!open);
    };
    // Footer Button Links
    var handleHelpButtonClicked = function () {
        window.open('https://support.google.com/accounts?hl=en-GB&visit_id=638451420796909083-2011793641&rd=2&p=account_iph#topic=3382296', '_blank');
    };
    var handlePrivacyButtonClicked = function () {
        window.open('https://policies.google.com/privacy?gl=GB&hl=en-GB', '_blank');
    };
    var handleTermsButtonClicked = function () {
        window.open('https://policies.google.com/terms?gl=GB&hl=en-GB', '_blank');
    };
    return (react_1.default.createElement("div", { id: 'language-changer-footer-overflow' },
        react_1.default.createElement(FormControl_1.default, { role: 'combobox', onClick: toggleMenu, id: 'language-changer-dropdown', "aria-expanded": open, "data-testid": 'language-changer-dropdown', sx: {
                backgroundColor: open ? '#eeeeee' : '',
                borderRadius: '4px',
            } },
            react_1.default.createElement(Select_1.default, { open: open, "aria-expanded": open, onClose: function () { return setOpen(false); }, onOpen: function () { return setOpen(true); }, onChange: handleChange, displayEmpty: true, inputProps: {
                    'data-testid': 'language-selector-dropdown',
                }, "aria-label": 'Select text language', value: selectedValue, MenuProps: __assign(__assign({ anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    }, transformOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                    } }, (typeof document !== 'undefined' && {
                    getContentAnchorEl: function () { return document.getElementById('language-changer-dropdown'); }
                })), { PaperProps: {
                        style: {
                            maxHeight: maxHeight,
                        },
                    } }), sx: {
                    '& .MuiSelect-icon': {
                        color: '#202124',
                    },
                    fontSize: '12px',
                    boxShadow: 'none',
                    '.MuiOutlinedInput-notchedOutline': {
                        border: 0,
                    },
                    '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                        border: 0,
                    },
                    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: 0,
                    },
                    paddingRight: '25px',
                } }, customOptions.map(function (option) { return (react_1.default.createElement(MenuItem_1.default, { key: option.value, value: option.value, sx: {
                    fontSize: '12px',
                    padding: '14px',
                    color: 'rgb(60,64,67)',
                } }, option.label)); }))),
        react_1.default.createElement("nav", { id: 'footer-trio-buttons-container', "aria-label": 'Footer links', role: 'navigation' },
            react_1.default.createElement(FooterGreyButton_1.default, { role: 'button', onClick: handleHelpButtonClicked }, text.LanguageChanger.help[selectedValue]),
            react_1.default.createElement(FooterGreyButton_1.default, { role: 'button', onClick: handlePrivacyButtonClicked }, text.LanguageChanger.privacy[selectedValue]),
            react_1.default.createElement(FooterGreyButton_1.default, { role: 'button', onClick: handleTermsButtonClicked }, text.LanguageChanger.terms[selectedValue]))));
};
exports.default = LanguageChangerOverflow;
