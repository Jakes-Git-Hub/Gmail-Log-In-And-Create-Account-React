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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var textData_1 = __importDefault(require("./data/textData"));
var axios_1 = __importDefault(require("axios"));
var react_router_dom_1 = require("react-router-dom");
var useGrabUsersIPHook_1 = require("./hooks/useGrabUsersIPHook");
var countryDropDownOptions_1 = require("./utils/countryDropDownOptions");
var SignInFrontPageContainer_1 = require("./containers/SignInFrontPageContainer");
var MockMailContainer_1 = require("./containers/MockMailContainer");
var FindYourEmailContainer_1 = require("./containers/FindYourEmailContainer");
var WhatsYourNameContainer_1 = require("./containers/WhatsYourNameContainer");
var CreateAccountContainer_1 = require("./containers/CreateAccountContainer");
var BirthdayAndGenderContainer_1 = require("./containers/BirthdayAndGenderContainer");
var ChooseYourGmailAddressContainer_1 = require("./containers/ChooseYourGmailAddressContainer");
var CreatePasswordContainer_1 = require("./containers/CreatePasswordContainer");
var ConfirmYoureNotARobotContainer_1 = require("./containers/ConfirmYoureNotARobotContainer");
var EnterTheCodeContainer_1 = require("./containers/EnterTheCodeContainer");
var AddRecoveryEmailContainer_1 = require("./containers/AddRecoveryEmailContainer");
var ReviewYourAccountInfoContainer_1 = require("./containers/ReviewYourAccountInfoContainer");
var ChooseYourSettingsContainer_1 = require("./containers/ChooseYourSettingsContainer");
var ExpressChooseYourSettingsContainer_1 = require("./containers/ExpressChooseYourSettingsContainer");
var ConfirmYourSettingsContainer_1 = require("./containers/ConfirmYourSettingsContainer");
var ManualChooseYourSettingsContainer_1 = require("./containers/ManualChooseYourSettingsContainer");
var ManualChooseYourSettingsContainer2_1 = require("./containers/ManualChooseYourSettingsContainer2");
var ManualChooseYourSettingsContainer3_1 = require("./containers/ManualChooseYourSettingsContainer3");
var ManualChooseYourSettingsContainer4_1 = require("./containers/ManualChooseYourSettingsContainer4");
var PrivacyAndTermsContainer_1 = require("./containers/PrivacyAndTermsContainer");
var GetAVerificationCodeEmailContainer_1 = require("./containers/GetAVerificationCodeEmailContainer");
var EnterTheFindCodeContainer_1 = require("./containers/EnterTheFindCodeContainer");
var GetAVerificationCodePhoneContainer_1 = require("./containers/GetAVerificationCodePhoneContainer");
var SelectAnAccountToSignInContainer_1 = require("./containers/SelectAnAccountToSignInContainer");
var VerifyWithPasswordContainer_1 = require("./containers/VerifyWithPasswordContainer");
function App() {
    var _this = this;
    var _a = (0, react_1.useState)(false), loggedIn = _a[0], setLoggedIn = _a[1];
    var _b = (0, react_1.useState)([
        {
            id: 0,
            email: 'jacmatthews7@gmail.com',
            password: '1234',
            firstName: 'Jake',
            lastName: 'Matthews',
            phoneNumber: '07720761143',
            profileCircleColor: 'blue',
            day: '28',
            month: 'April',
            year: '1993',
            gender: 'Male',
            countryDetails: {
                name: 'United Kingdom',
                abbreviation: 'gb',
                dialingCode: '+44',
                svg: 'gb.svg',
            },
        },
        {
            id: 1,
            email: 'jacmatthews12@gmail.com',
            password: '',
            firstName: 'Jake',
            lastName: 'Matthews',
            phoneNumber: '07377060086',
            profileCircleColor: 'red',
            day: '28',
            month: 'April',
            year: '1993',
            gender: 'Male',
            countryDetails: {
                name: 'United Kingdom',
                abbreviation: 'gb',
                dialingCode: '+44',
                svg: 'gb.svg',
            },
        },
        {
            id: 2,
            email: '',
            password: '',
            firstName: 'Wendy',
            lastName: 'Matthews',
            phoneNumber: '07377060086',
            profileCircleColor: 'red',
            day: '',
            month: '',
            year: '',
            gender: 'Female',
            countryDetails: {
                name: 'United Kingdom',
                abbreviation: 'gb',
                dialingCode: '+44',
                svg: 'gb.svg',
            },
        },
    ]), users = _b[0], setUsers = _b[1];
    var _c = (0, react_1.useState)(undefined), currentLoggedInUser = _c[0], setCurrentLoggedInUser = _c[1];
    var _d = (0, react_1.useState)(1), nextUserId = _d[0], setNextUserId = _d[1];
    var _e = (0, react_1.useState)({
        language: 'en-GB',
        id: 0,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        profileCircleColor: '',
        day: '',
        month: '',
        year: '',
        gender: '',
        countryDetails: {
            name: '',
            abbreviation: '',
            dialingCode: '',
            svg: '',
        },
    }), userData = _e[0], setUserData = _e[1];
    var _f = (0, react_1.useState)({}), findYourEmailCredentials = _f[0], setFindYourEmailCredentials = _f[1];
    var _g = (0, react_1.useState)(false), hasSelectedCYNARCountry = _g[0], setHasSelectedCYNARCountry = _g[1];
    var _h = (0, react_1.useState)(textData_1.default), text = _h[0], setText = _h[1];
    var _j = (0, react_1.useState)(countryDropDownOptions_1.filteredCountriesFromUtil), translatedCountries = _j[0], setTranslatedCountries = _j[1];
    var _k = (0, react_1.useState)(false), showPrivacyRow = _k[0], setShowPrivacyRow = _k[1];
    var _l = (0, react_1.useState)(false), isWrongCredentials = _l[0], setIsWrongCredentials = _l[1];
    var _m = (0, react_1.useState)(''), userToVerifyWithPassword = _m[0], setUserToVerifyWithPassword = _m[1];
    var _o = (0, react_1.useState)(0), confirmYoureNotARobotPhoneAPILimit = _o[0], setConfirmYoureNotARobotPhoneAPILimit = _o[1];
    var _p = (0, react_1.useState)(0), getAVerificationEmailAPILimit = _p[0], setgetAVerificationEmailAPILimit = _p[1];
    var _q = (0, react_1.useState)(0), getAVerificationPhoneAPILimit = _q[0], setGetAVerificationPhoneAPILimit = _q[1];
    // Translation
    var googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;
    (0, react_1.useEffect)(function () {
        handleLanguageSelection();
        console.log('chosenLanguage:', userData.language);
    }, [userData.language]);
    var handleLanguageSelection = function () { return __awaiter(_this, void 0, void 0, function () {
        var chosenLanguage, newTranslatedCountries, sanitizedTranslatedCountries, orderedSanitizedTranslatedCountries, error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!userData.language)
                        return [2 /*return*/];
                    chosenLanguage = userData.language;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Promise.all(countryDropDownOptions_1.filteredCountriesFromUtil.map(function (country) { return __awaiter(_this, void 0, void 0, function () {
                            var translatedName;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, changeLanguageAndTranslate(country.name, chosenLanguage)];
                                    case 1:
                                        translatedName = _a.sent();
                                        return [2 /*return*/, __assign(__assign({}, country), { name: translatedName })];
                                }
                            });
                        }); }))];
                case 2:
                    newTranslatedCountries = _a.sent();
                    sanitizedTranslatedCountries = sanitizeCountryNames(newTranslatedCountries);
                    orderedSanitizedTranslatedCountries = __spreadArray([], sanitizedTranslatedCountries, true).sort(function (a, b) { return a.name.localeCompare(b.name); });
                    // Update the translatedCountries state with new translated countries
                    setTranslatedCountries(orderedSanitizedTranslatedCountries);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error translating text:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var changeLanguageAndTranslate = function (text, chosenLanguage) { return __awaiter(_this, void 0, void 0, function () {
        var res, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    updateUser({ language: chosenLanguage });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.post("https://translation.googleapis.com/language/translate/v2?key=".concat(googleAPIKey), {
                            q: text,
                            target: chosenLanguage,
                        })];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res.data.data.translations[0].translatedText];
                case 3:
                    error_2 = _a.sent();
                    console.error('Error translating text:', error_2);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var sanitizeCountryNames = function (countries) {
        var sanitizedCountries = countries.map(function (country) { return (__assign(__assign({}, country), { name: country.name.replace(/&#39;/g, "'") })); });
        return sanitizedCountries;
    };
    // Grab User's IP
    var userIP = (0, useGrabUsersIPHook_1.useUserIP)().userIP;
    (0, react_1.useEffect)(function () {
        console.log('userIP', userIP);
    }, [userIP]);
    var IPGeoLocationAPIKey = process.env.REACT_APP_IP_GEO_LOCATION_API_KEY;
    // Handle Log Ins
    var handleLogin = function (email, password) {
        console.log("Attempting login with:", email, password);
        var correctLoginCredentials = users.find(function (user) { return user.email === email && user.password === password; });
        if (correctLoginCredentials) {
            setLoggedIn(true);
            setCurrentLoggedInUser(correctLoginCredentials);
            console.log("Logged in as:", correctLoginCredentials.email);
        }
        else {
            console.log("Invalid credentials");
        }
    };
    var handleListItemLogIn = function (emailClicked) {
        setLoggedIn(true);
        var userForEmailClicked = users.find(function (user) { return user.email === emailClicked; });
        setCurrentLoggedInUser(userForEmailClicked);
    };
    // Update User Data
    var updateUser = function (data) {
        setUserData(function (prevData) {
            // Check if the new data actually changes the user data
            var isDataChanged = Object.keys(data).some(function (key) { return data[key] !== prevData[key]; });
            if (isDataChanged) {
                // If the data has changed, return the new data to update the state
                return __assign(__assign({}, prevData), data);
            }
            else {
                // If the data hasn't changed, return the previous data to prevent a state update
                return prevData;
            }
        });
    };
    // Find Email
    var updateFindYourEmailCredentials = function (data) {
        setFindYourEmailCredentials(function (prevData) {
            // Check if the new data actually changes the user data
            var isDataChanged = Object.keys(data).some(function (key) { return data[key] !== prevData[key]; });
            if (isDataChanged) {
                // If the data has changed, return the new data to update the state
                return __assign(__assign({}, prevData), data);
            }
            else {
                // If the data hasn't changed, return the previous data to prevent a state update
                return prevData;
            }
        });
    };
    var handleIncorrectInfoSearch = function () { return setIsWrongCredentials(true); };
    var handleCorrectInfoSearch = function () { return setIsWrongCredentials(false); };
    // Add User
    var addUser = function () {
        var id = userData.id, restUserData = __rest(userData, ["id"]);
        var newUser = __assign({ id: nextUserId }, restUserData);
        setUsers(function (prevUsers) { return __spreadArray(__spreadArray([], prevUsers, true), [newUser], false); });
        setNextUserId(function (prevId) { return prevId + 1; });
        setUserData({
            language: 'en-GB',
            id: 0,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            profileCircleColor: '',
            day: '',
            month: '',
            year: '',
            gender: '',
            countryDetails: {
                name: '',
                abbreviation: '',
                dialingCode: '',
                svg: '',
            },
        });
    };
    // Handle CYNAR Country Selection
    var handleCYNARCountrySelect = function () { return setHasSelectedCYNARCountry(true); };
    // Choose Your Settings No Privacy Row For Confirm Your Settings
    var makePrivacyRowVisible = function () { return setShowPrivacyRow(true); };
    var hidePrivacyRow = function () { return setShowPrivacyRow(false); };
    (0, react_1.useEffect)(function () {
        console.log('users', users);
    }, [users]);
    // Pass user Inputted Email to Verify with Password
    var passFoundUser = function (registeredUserProfile) { return setUserToVerifyWithPassword(registeredUserProfile); };
    // Client Side API Throttle
    var handleConfirmYoureNotARobotPhoneAPILimit = function () { return setConfirmYoureNotARobotPhoneAPILimit(function (prevLimit) { return prevLimit + 1; }); };
    var resetCYNARPhoneAPILimit = function () { return setTimeout(function () { return setConfirmYoureNotARobotPhoneAPILimit(0); }, 1800000); };
    var handlegetAVerificationEmailAPILimit = function () { return setgetAVerificationEmailAPILimit(function (prevLimit) { return prevLimit + 1; }); };
    var resetgetAVerificationEmailAPILimit = function () { return setTimeout(function () { return setgetAVerificationEmailAPILimit(0); }, 1800000); };
    var handleGetAVerificationPhoneAPILimit = function () { return setGetAVerificationPhoneAPILimit(function (prevLimit) { return prevLimit + 1; }); };
    var resetGetAVerificationPhoneAPILimit = function () { return setTimeout(function () { return setGetAVerificationPhoneAPILimit(0); }, 1800000); };
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(SignInFrontPageContainer_1.SignInFrontPageContainer, { users: users, userIP: userIP, text: text, userData: userData, updateUser: updateUser, passFoundUser: passFoundUser }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/verify-with-password", element: react_1.default.createElement(VerifyWithPasswordContainer_1.VerifyWithPasswordContainer, { text: text, userData: userData, updateUser: updateUser, handleLogin: handleLogin, users: users, loggedIn: loggedIn, userToVerifyWithPassword: userToVerifyWithPassword }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/mockmail", element: react_1.default.createElement(MockMailContainer_1.MockMailContainer, { loggedIn: loggedIn, currentLoggedInUser: currentLoggedInUser, text: text, userData: userData }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/find-your-email", element: react_1.default.createElement(FindYourEmailContainer_1.FindYourEmailContainer, { updateUser: updateUser, userData: userData, text: text, updateFindYourEmailCredentials: updateFindYourEmailCredentials, isWrongCredentials: isWrongCredentials }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/whats-your-name", element: react_1.default.createElement(WhatsYourNameContainer_1.WhatsYourNameContainer, { updateUser: updateUser, userData: userData, text: text, updateFindYourEmailCredentials: updateFindYourEmailCredentials, findYourEmailCredentials: findYourEmailCredentials, users: users, handleIncorrectInfoSearch: handleIncorrectInfoSearch, handleCorrectInfoSearch: handleCorrectInfoSearch }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/get-a-verification-code-email", element: react_1.default.createElement(GetAVerificationCodeEmailContainer_1.GetAVerificationCodeEmailContainer, { userData: userData, text: text, updateUser: updateUser, findYourEmailCredentials: findYourEmailCredentials, updateFindYourEmailCredentials: updateFindYourEmailCredentials, handlegetAVerificationEmailAPILimit: handlegetAVerificationEmailAPILimit, getAVerificationEmailAPILimit: getAVerificationEmailAPILimit, resetgetAVerificationEmailAPILimit: resetgetAVerificationEmailAPILimit }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/get-a-verification-code-phone", element: react_1.default.createElement(GetAVerificationCodePhoneContainer_1.GetAVerificationCodePhoneContainer, { userData: userData, text: text, updateUser: updateUser, findYourEmailCredentials: findYourEmailCredentials, updateFindYourEmailCredentials: updateFindYourEmailCredentials, getAVerificationPhoneAPILimit: getAVerificationPhoneAPILimit, handleGetAVerificationPhoneAPILimit: handleGetAVerificationPhoneAPILimit, resetGetAVerificationPhoneAPILimit: resetGetAVerificationPhoneAPILimit }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/select-an-account-to-sign-in", element: react_1.default.createElement(SelectAnAccountToSignInContainer_1.SelectAnAccountToSignInContainer, { userData: userData, text: text, updateUser: updateUser, users: users, findYourEmailCredentials: findYourEmailCredentials, updateFindYourEmailCredentials: updateFindYourEmailCredentials, handleListItemLogIn: handleListItemLogIn }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/enter-the-find-code", element: react_1.default.createElement(EnterTheFindCodeContainer_1.EnterTheFindCodeContainer, { userData: userData, text: text, updateUser: updateUser, findYourEmailCredentials: findYourEmailCredentials }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/create-account", element: react_1.default.createElement(CreateAccountContainer_1.CreateAccountContainer, { updateUser: updateUser, userData: userData, text: text }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/basic-information", element: react_1.default.createElement(BirthdayAndGenderContainer_1.BirthdayAndGenderContainer, { updateUser: updateUser, userData: userData, text: text }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/choose-your-gmail-address", element: react_1.default.createElement(ChooseYourGmailAddressContainer_1.ChooseYourGmailAddressContainer, { updateUser: updateUser, users: users, text: text, userData: userData }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/create-password", element: react_1.default.createElement(CreatePasswordContainer_1.CreatePasswordContainer, { updateUser: updateUser, users: users, text: text, userData: userData }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/confirm-youre-not-a-robot", element: react_1.default.createElement(ConfirmYoureNotARobotContainer_1.ConfirmYoureNotARobotContainer, { updateUser: updateUser, userData: userData, userIP: userIP, users: users, handleCYNARCountrySelect: handleCYNARCountrySelect, hasSelectedCYNARCountry: hasSelectedCYNARCountry, text: text, translatedCountries: translatedCountries, IPGeoLocationAPIKey: IPGeoLocationAPIKey, handleConfirmYoureNotARobotPhoneAPILimit: handleConfirmYoureNotARobotPhoneAPILimit, confirmYoureNotARobotPhoneAPILimit: confirmYoureNotARobotPhoneAPILimit, resetCYNARPhoneAPILimit: resetCYNARPhoneAPILimit }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/enter-the-verification-code", element: react_1.default.createElement(EnterTheCodeContainer_1.EnterTheCodeContainer, { updateUser: updateUser, userData: userData, text: text }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/add-recovery-email", element: react_1.default.createElement(AddRecoveryEmailContainer_1.AddRecoveryEmailContainer, { updateUser: updateUser, text: text, userData: userData }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/review-account-info", element: react_1.default.createElement(ReviewYourAccountInfoContainer_1.ReviewYourAccountInfoContainer, { updateUser: updateUser, userData: userData, text: text }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/choose-your-settings", element: react_1.default.createElement(ChooseYourSettingsContainer_1.ChooseYourSettingsContainer, { updateUser: updateUser, text: text, userData: userData }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/express-choose-your-settings", element: react_1.default.createElement(ExpressChooseYourSettingsContainer_1.ExpressChooseYourSettingsContainer, { updateUser: updateUser, text: text, hidePrivacyRow: hidePrivacyRow, userData: userData }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/manual-choose-your-settings", element: react_1.default.createElement(ManualChooseYourSettingsContainer_1.ManualChooseYourSettingsContainer, { userData: userData, updateUser: updateUser, text: text }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/manual-choose-your-settings2", element: react_1.default.createElement(ManualChooseYourSettingsContainer2_1.ManualChooseYourSettingsContainer2, { userData: userData, updateUser: updateUser, text: text }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/manual-choose-your-settings3", element: react_1.default.createElement(ManualChooseYourSettingsContainer3_1.ManualChooseYourSettingsContainer3, { userData: userData, updateUser: updateUser, text: text }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/manual-choose-your-settings4", element: react_1.default.createElement(ManualChooseYourSettingsContainer4_1.ManualChooseYourSettingsContainer4, { userData: userData, updateUser: updateUser, text: text, makePrivacyRowVisible: makePrivacyRowVisible }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/confirm-your-settings", element: react_1.default.createElement(ConfirmYourSettingsContainer_1.ConfirmYourSettingsContainer, { text: text, userData: userData, updateUser: updateUser, showPrivacyRow: showPrivacyRow }) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/privacy-and-terms", element: react_1.default.createElement(PrivacyAndTermsContainer_1.PrivacyAndTermsContainer, { text: text, userData: userData, updateUser: updateUser, addUser: addUser, handleLogin: handleLogin, users: users, loggedIn: loggedIn }) }))));
}
exports.default = App;
