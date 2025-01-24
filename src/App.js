import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, } from "react";
import textData from './data/textData';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { useUserIP } from './hooks/useGrabUsersIPHook';
import { filteredCountriesFromUtil } from './utils/countryDropDownOptions';
import { SignInFrontPageContainer } from "./containers/SignInFrontPageContainer";
import { MockMailContainer } from "./containers/MockMailContainer";
import { FindYourEmailContainer } from "./containers/FindYourEmailContainer";
import { WhatsYourNameContainer } from "./containers/WhatsYourNameContainer";
import { CreateAccountContainer } from "./containers/CreateAccountContainer";
import { BirthdayAndGenderContainer } from "./containers/BirthdayAndGenderContainer";
import { ChooseYourGmailAddressContainer } from "./containers/ChooseYourGmailAddressContainer";
import { CreatePasswordContainer } from "./containers/CreatePasswordContainer";
import { ConfirmYoureNotARobotContainer } from "./containers/ConfirmYoureNotARobotContainer";
import { EnterTheCodeContainer } from "./containers/EnterTheCodeContainer";
import { AddRecoveryEmailContainer } from "./containers/AddRecoveryEmailContainer";
import { ReviewYourAccountInfoContainer } from "./containers/ReviewYourAccountInfoContainer";
import { ChooseYourSettingsContainer } from "./containers/ChooseYourSettingsContainer";
import { ExpressChooseYourSettingsContainer } from "./containers/ExpressChooseYourSettingsContainer";
import { ConfirmYourSettingsContainer } from "./containers/ConfirmYourSettingsContainer";
import { ManualChooseYourSettingsContainer } from "./containers/ManualChooseYourSettingsContainer";
import { ManualChooseYourSettingsContainer2 } from "./containers/ManualChooseYourSettingsContainer2";
import { ManualChooseYourSettingsContainer3 } from "./containers/ManualChooseYourSettingsContainer3";
import { ManualChooseYourSettingsContainer4 } from "./containers/ManualChooseYourSettingsContainer4";
import { PrivacyAndTermsContainer } from "./containers/PrivacyAndTermsContainer";
import { GetAVerificationCodeEmailContainer } from "./containers/GetAVerificationCodeEmailContainer";
import { EnterTheFindCodeContainer } from "./containers/EnterTheFindCodeContainer";
import { GetAVerificationCodePhoneContainer } from "./containers/GetAVerificationCodePhoneContainer";
import { SelectAnAccountToSignInContainer } from "./containers/SelectAnAccountToSignInContainer";
import { VerifyWithPasswordContainer } from "./containers/VerifyWithPasswordContainer";
function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [users, setUsers] = useState([
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
    ]);
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(undefined);
    const [nextUserId, setNextUserId] = useState(1);
    const [userData, setUserData] = useState({
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
    const [findYourEmailCredentials, setFindYourEmailCredentials] = useState({
        phoneNumberOrEmail: '',
        firstName: '',
        lastName: '',
    });
    const [hasSelectedCYNARCountry, setHasSelectedCYNARCountry] = useState(false);
    const [text, setText] = useState(textData);
    const [translatedCountries, setTranslatedCountries] = useState(filteredCountriesFromUtil);
    const [showPrivacyRow, setShowPrivacyRow] = useState(false);
    const [isWrongCredentials, setIsWrongCredentials] = useState(false);
    const [userToVerifyWithPassword, setUserToVerifyWithPassword] = useState('');
    const [confirmYoureNotARobotPhoneAPILimit, setConfirmYoureNotARobotPhoneAPILimit] = useState(0);
    const [getAVerificationEmailAPILimit, setgetAVerificationEmailAPILimit] = useState(0);
    const [getAVerificationPhoneAPILimit, setGetAVerificationPhoneAPILimit] = useState(0);
    // Translation
    const googleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY;
    useEffect(() => {
        handleLanguageSelection();
        console.log('chosenLanguage:', userData.language);
    }, [userData.language]);
    const handleLanguageSelection = async () => {
        if (!userData.language)
            return;
        const chosenLanguage = userData.language;
        try {
            const newTranslatedCountries = await Promise.all(filteredCountriesFromUtil.map(async (country) => {
                const translatedName = await changeLanguageAndTranslate(country.name, chosenLanguage);
                return { ...country, name: translatedName };
            }));
            const sanitizedTranslatedCountries = sanitizeCountryNames(newTranslatedCountries);
            const orderedSanitizedTranslatedCountries = [...sanitizedTranslatedCountries].sort((a, b) => a.name.localeCompare(b.name));
            // Update the translatedCountries state with new translated countries
            setTranslatedCountries(orderedSanitizedTranslatedCountries);
        }
        catch (error) {
            console.error('Error translating text:', error);
        }
    };
    const changeLanguageAndTranslate = async (text, chosenLanguage) => {
        updateUser({ language: chosenLanguage });
        try {
            const res = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${googleAPIKey}`, {
                q: text,
                target: chosenLanguage,
            });
            return res.data.data.translations[0].translatedText;
        }
        catch (error) {
            console.error('Error translating text:', error);
            return null;
        }
    };
    const sanitizeCountryNames = countries => {
        const sanitizedCountries = countries.map(country => ({
            ...country,
            name: country.name.replace(/&#39;/g, "'")
        }));
        return sanitizedCountries;
    };
    // Grab User's IP
    const { userIP } = useUserIP();
    useEffect(() => {
        console.log('userIP', userIP);
    }, [userIP]);
    const IPGeoLocationAPIKey = process.env.REACT_APP_IP_GEOLOCATION_API_KEY || '';
    // Handle Log Ins
    const handleLogin = (email, password) => {
        console.log("Attempting login with:", email, password);
        const correctLoginCredentials = users.find((user) => user.email === email && user.password === password);
        if (correctLoginCredentials) {
            setLoggedIn(true);
            setCurrentLoggedInUser(correctLoginCredentials);
            console.log("Logged in as:", correctLoginCredentials.email);
        }
        else {
            console.log("Invalid credentials");
        }
    };
    const handleListItemLogIn = (emailClicked) => {
        setLoggedIn(true);
        const userForEmailClicked = users.find(user => user.email === emailClicked);
        setCurrentLoggedInUser(userForEmailClicked);
    };
    // Update User Data
    const updateUser = data => {
        setUserData(prevData => {
            // Check if the new data actually changes the user data
            const isDataChanged = Object.keys(data).some(key => data[key] !== prevData[key]);
            if (isDataChanged) {
                // If the data has changed, return the new data to update the state
                return { ...prevData, ...data };
            }
            else {
                // If the data hasn't changed, return the previous data to prevent a state update
                return prevData;
            }
        });
    };
    // Find Email
    const updateFindYourEmailCredentials = data => {
        setFindYourEmailCredentials(prevData => {
            // Check if the new data actually changes the user data
            const isDataChanged = Object.keys(data).some(key => data[key] !== prevData[key]);
            if (isDataChanged) {
                // If the data has changed, return the new data to update the state
                return { ...prevData, ...data };
            }
            else {
                // If the data hasn't changed, return the previous data to prevent a state update
                return prevData;
            }
        });
    };
    const handleIncorrectInfoSearch = () => setIsWrongCredentials(true);
    const handleCorrectInfoSearch = () => setIsWrongCredentials(false);
    // Add User
    const addUser = () => {
        const { id, ...restUserData } = userData;
        const newUser = {
            id: nextUserId,
            ...restUserData
        };
        setUsers(prevUsers => [...prevUsers, newUser]);
        setNextUserId(prevId => prevId + 1);
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
    const handleCYNARCountrySelect = () => setHasSelectedCYNARCountry(true);
    // Choose Your Settings No Privacy Row For Confirm Your Settings
    const makePrivacyRowVisible = () => setShowPrivacyRow(true);
    const hidePrivacyRow = () => setShowPrivacyRow(false);
    useEffect(() => {
        console.log('users', users);
    }, [users]);
    // Pass user Inputted Email to Verify with Password
    const passFoundUser = registeredUserProfile => setUserToVerifyWithPassword(registeredUserProfile);
    // Client Side API Throttle
    const handleConfirmYoureNotARobotPhoneAPILimit = () => setConfirmYoureNotARobotPhoneAPILimit(prevLimit => prevLimit + 1);
    const resetCYNARPhoneAPILimit = () => setTimeout(() => setConfirmYoureNotARobotPhoneAPILimit(0), 1800000);
    const handlegetAVerificationEmailAPILimit = () => setgetAVerificationEmailAPILimit(prevLimit => prevLimit + 1);
    const resetgetAVerificationEmailAPILimit = () => setTimeout(() => setgetAVerificationEmailAPILimit(0), 1800000);
    const handleGetAVerificationPhoneAPILimit = () => setGetAVerificationPhoneAPILimit(prevLimit => prevLimit + 1);
    const resetGetAVerificationPhoneAPILimit = () => setTimeout(() => setGetAVerificationPhoneAPILimit(0), 1800000);
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(SignInFrontPageContainer, { users: users, userIP: userIP, text: text, userData: userData, updateUser: updateUser, passFoundUser: passFoundUser }) }), _jsx(Route, { path: "/verify-with-password", element: _jsx(VerifyWithPasswordContainer, { text: text, userData: userData, updateUser: updateUser, handleLogin: handleLogin, users: users, loggedIn: loggedIn, userToVerifyWithPassword: userToVerifyWithPassword }) }), _jsx(Route, { path: "/mockmail", element: _jsx(MockMailContainer, { loggedIn: loggedIn, currentLoggedInUser: currentLoggedInUser }) }), _jsx(Route, { path: "/find-your-email", element: _jsx(FindYourEmailContainer, { updateUser: updateUser, userData: userData, text: text, updateFindYourEmailCredentials: updateFindYourEmailCredentials, isWrongCredentials: isWrongCredentials }) }), _jsx(Route, { path: "/whats-your-name", element: _jsx(WhatsYourNameContainer, { updateUser: updateUser, userData: userData, text: text, updateFindYourEmailCredentials: updateFindYourEmailCredentials, findYourEmailCredentials: findYourEmailCredentials, users: users, handleIncorrectInfoSearch: handleIncorrectInfoSearch, handleCorrectInfoSearch: handleCorrectInfoSearch }) }), _jsx(Route, { path: "/get-a-verification-code-email", element: _jsx(GetAVerificationCodeEmailContainer, { userData: userData, text: text, updateUser: updateUser, findYourEmailCredentials: findYourEmailCredentials, updateFindYourEmailCredentials: updateFindYourEmailCredentials, handlegetAVerificationEmailAPILimit: handlegetAVerificationEmailAPILimit, getAVerificationEmailAPILimit: getAVerificationEmailAPILimit, resetgetAVerificationEmailAPILimit: resetgetAVerificationEmailAPILimit }) }), _jsx(Route, { path: "/get-a-verification-code-phone", element: _jsx(GetAVerificationCodePhoneContainer, { userData: userData, text: text, updateUser: updateUser, findYourEmailCredentials: findYourEmailCredentials, updateFindYourEmailCredentials: updateFindYourEmailCredentials, getAVerificationPhoneAPILimit: getAVerificationPhoneAPILimit, handleGetAVerificationPhoneAPILimit: handleGetAVerificationPhoneAPILimit, resetGetAVerificationPhoneAPILimit: resetGetAVerificationPhoneAPILimit }) }), _jsx(Route, { path: "/select-an-account-to-sign-in", element: _jsx(SelectAnAccountToSignInContainer, { userData: userData, text: text, updateUser: updateUser, users: users, findYourEmailCredentials: findYourEmailCredentials, updateFindYourEmailCredentials: updateFindYourEmailCredentials, handleListItemLogIn: handleListItemLogIn }) }), _jsx(Route, { path: "/enter-the-find-code", element: _jsx(EnterTheFindCodeContainer, { userData: userData, text: text, updateUser: updateUser, findYourEmailCredentials: findYourEmailCredentials }) }), _jsx(Route, { path: "/create-account", element: _jsx(CreateAccountContainer, { updateUser: updateUser, userData: userData, text: text }) }), _jsx(Route, { path: "/basic-information", element: _jsx(BirthdayAndGenderContainer, { updateUser: updateUser, userData: userData, text: text }) }), _jsx(Route, { path: "/choose-your-gmail-address", element: _jsx(ChooseYourGmailAddressContainer, { updateUser: updateUser, users: users, text: text, userData: userData }) }), _jsx(Route, { path: "/create-password", element: _jsx(CreatePasswordContainer, { updateUser: updateUser, users: users, text: text, userData: userData }) }), _jsx(Route, { path: "/confirm-youre-not-a-robot", element: _jsx(ConfirmYoureNotARobotContainer, { updateUser: updateUser, userData: userData, userIP: userIP, users: users, handleCYNARCountrySelect: handleCYNARCountrySelect, hasSelectedCYNARCountry: hasSelectedCYNARCountry, text: text, translatedCountries: translatedCountries, IPGeoLocationAPIKey: IPGeoLocationAPIKey, handleConfirmYoureNotARobotPhoneAPILimit: handleConfirmYoureNotARobotPhoneAPILimit, confirmYoureNotARobotPhoneAPILimit: confirmYoureNotARobotPhoneAPILimit, resetCYNARPhoneAPILimit: resetCYNARPhoneAPILimit }) }), _jsx(Route, { path: "/enter-the-verification-code", element: _jsx(EnterTheCodeContainer, { updateUser: updateUser, userData: userData, text: text }) }), _jsx(Route, { path: "/add-recovery-email", element: _jsx(AddRecoveryEmailContainer, { updateUser: updateUser, text: text, userData: userData }) }), _jsx(Route, { path: "/review-account-info", element: _jsx(ReviewYourAccountInfoContainer, { updateUser: updateUser, userData: userData, text: text }) }), _jsx(Route, { path: "/choose-your-settings", element: _jsx(ChooseYourSettingsContainer, { updateUser: updateUser, text: text, userData: userData }) }), _jsx(Route, { path: "/express-choose-your-settings", element: _jsx(ExpressChooseYourSettingsContainer, { updateUser: updateUser, text: text, hidePrivacyRow: hidePrivacyRow, userData: userData }) }), _jsx(Route, { path: "/manual-choose-your-settings", element: _jsx(ManualChooseYourSettingsContainer, { userData: userData, updateUser: updateUser, text: text }) }), _jsx(Route, { path: "/manual-choose-your-settings2", element: _jsx(ManualChooseYourSettingsContainer2, { userData: userData, updateUser: updateUser, text: text }) }), _jsx(Route, { path: "/manual-choose-your-settings3", element: _jsx(ManualChooseYourSettingsContainer3, { userData: userData, updateUser: updateUser, text: text }) }), _jsx(Route, { path: "/manual-choose-your-settings4", element: _jsx(ManualChooseYourSettingsContainer4, { userData: userData, updateUser: updateUser, text: text, makePrivacyRowVisible: makePrivacyRowVisible }) }), _jsx(Route, { path: "/confirm-your-settings", element: _jsx(ConfirmYourSettingsContainer, { text: text, userData: userData, updateUser: updateUser, showPrivacyRow: showPrivacyRow }) }), _jsx(Route, { path: "/privacy-and-terms", element: _jsx(PrivacyAndTermsContainer, { text: text, userData: userData, updateUser: updateUser, addUser: addUser, handleLogin: handleLogin, users: users, loggedIn: loggedIn }) })] }) }));
}
export default App;
