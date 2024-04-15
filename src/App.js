import React, { useState, useEffect } from "react";
import textData from './data/textData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { ConfirmYoureNotARobotContainer } from "./containers/ConfirmYoureNotARobotContainer"
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([{ id: 0, email: 'jacmatthews7@gmail.com', firstName: 'Jacob', lastName: 'Matthews', phoneNumber: '07720761143', profileCircleColor: 'blue', day: '28', month: 'April', year:'1993', gender: 'Male', countryDetails: 'England', },{ id: 0, email: 'titanfx@gmail.com', firstName: 'Jacob', lastName: 'Matthews', phoneNumber: '07720761143', profileCircleColor: 'red',},]);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);
  const [nextUserId, setNextUserId] = useState(1);
  const [userData, setUserData] = useState({ language: 'en-GB', id: 0, email: 'jacmatthews7@gmail.com', firstName: 'Jacob', lastName: 'Matthews', phoneNumber: '07720761143', profileCircleColor: 'blue', });
  const [findYourEmailCredentials, setFindYourEmailCredentials] = useState({});
  const [hasSelectedCYNARCountry, setHasSelectedCYNARCountry] = useState(false);
  const [text, setText] = useState(textData);
  const [translatedCountries, setTranslatedCountries] = useState(filteredCountriesFromUtil);
  const [showPrivacyRow, setShowPrivacyRow] = useState(false);
  const [isWrongCredentials, setIsWrongCredentials] = useState(null);

// Grab User's IP

const { userIP } = useUserIP()

useEffect(() => {
  console.log('userIP', userIP);
}, [userIP]);

const IPGeoLocationAPIKey = process.env.REACT_APP_IP_GEO_LOCATION_API_KEY;

// Handle Log Ins

  const handleLogin = (email, password) => {
    console.log("Attempting login with:", email, password);
    const correctLoginCredentials = users.find(
      (user) => user.email === email && user.password === password
    );

    if (correctLoginCredentials) {
      setLoggedIn(true);
      setCurrentLoggedInUser(correctLoginCredentials);
      console.log("Logged in as:", correctLoginCredentials.email);
    } else {
      console.log("Invalid credentials");
    }
  };

  const handleListItemLogIn = emailClicked => {
    setLoggedIn(true);
    const userForEmailClicked = users.find(user => user.email === emailClicked);
    setCurrentLoggedInUser(userForEmailClicked);
  }

// Update User Data

  const updateUser = data => {
    setUserData(prevData => {
      // Check if the new data actually changes the user data
      const isDataChanged = Object.keys(data).some(key => data[key] !== prevData[key]);
      if (isDataChanged) {
        // If the data has changed, return the new data to update the state
        return { ...prevData, ...data };
      } else {
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
      } else {
        // If the data hasn't changed, return the previous data to prevent a state update
        return prevData;
      }
    });
  }

  const handleIncorrectInfoSearch = () => {
    setIsWrongCredentials(true);
  }

  const handleCorrectInfoSearch = () => {
    setIsWrongCredentials(false);
  }

// Add User

  const addUser = () => {
    const newUser = {
      id: nextUserId,
      ...userData
    };
    setUsers(prevUsers => [...prevUsers, newUser]);
    setNextUserId(prevId => prevId + 1);
    setUserData({});
  };

// Handle CYNAR Country Selection

  const handleCYNARCountrySelect = () => setHasSelectedCYNARCountry(true);

// Choose Your Settings No Privacy Row For Confirm Your Settings

  const makePrivacyRowVisible = () => setShowPrivacyRow(true);

  const hidePrivacyRow = () => setShowPrivacyRow(false);

  useEffect(() => {
    console.log('users', users);
  }, [users]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <SignInFrontPageContainer 
              users={users}
              handleLogin={handleLogin}
              userIP={userIP}
              text={text}
              userData={userData}
              updateUser={updateUser}
            />
          } 
        />
        <Route path="/mockmail" element={
            <MockMailContainer   
              loggedIn={loggedIn}
              currentLoggedInUser={currentLoggedInUser}
              text={text}
              userData={userData}
            />
          } 
        />
        <Route path="/find-your-email" element={
            <FindYourEmailContainer 
              updateUser={updateUser}
              userData={userData}
              text={text}
              updateFindYourEmailCredentials={updateFindYourEmailCredentials}
              isWrongCredentials={isWrongCredentials}
            />
          } 
        />
        <Route path="/whats-your-name" element={
            <WhatsYourNameContainer 
              updateUser={updateUser}
              userData={userData}
              text={text}
              updateFindYourEmailCredentials={updateFindYourEmailCredentials}
              findYourEmailCredentials={findYourEmailCredentials}
              users={users}
              handleIncorrectInfoSearch={handleIncorrectInfoSearch}
              handleCorrectInfoSearch={handleCorrectInfoSearch}
            />
          } 
        />
        <Route path="/get-a-verification-code-email" element={
            <GetAVerificationCodeEmailContainer 
              userData={userData}
              text={text}
              updateUser={updateUser}
              findYourEmailCredentials={findYourEmailCredentials}
              updateFindYourEmailCredentials={updateFindYourEmailCredentials}
            />
          } 
        />
        <Route path="/get-a-verification-code-phone" element={
            <GetAVerificationCodePhoneContainer 
              userData={userData}
              text={text}
              updateUser={updateUser}
              findYourEmailCredentials={findYourEmailCredentials}
              updateFindYourEmailCredentials={updateFindYourEmailCredentials}
            />
          } 
        />
        <Route path="/select-an-account-to-sign-in" element={
            <SelectAnAccountToSignInContainer
              userData={userData}
              text={text}
              updateUser={updateUser}
              users={users}
              findYourEmailCredentials={findYourEmailCredentials}
              updateFindYourEmailCredentials={updateFindYourEmailCredentials}
              handleListItemLogIn={handleListItemLogIn}
            />
          } 
        />
        <Route path="/enter-the-find-code" element={
            <EnterTheFindCodeContainer 
              userData={userData}
              text={text}
              updateUser={updateUser}
              findYourEmailCredentials={findYourEmailCredentials}
            />
          } 
        />
        <Route path="/create-account" element={
            <CreateAccountContainer 
              updateUser={updateUser}
              userData={userData}
              text={text}
            />
          } 
        />
        <Route path="/basic-information" element={
            <BirthdayAndGenderContainer
              updateUser={updateUser}
              userData={userData}
              text={text}
            />
          } 
        />
        <Route path="/choose-your-gmail-address" element={
            <ChooseYourGmailAddressContainer
              updateUser={updateUser} 
              users={users}
              text={text}
              userData={userData}
            />
          } 
        />
        <Route path="/create-password" element={
            <CreatePasswordContainer
              updateUser={updateUser} 
              users={users}
              text={text}
              userData={userData}
            />
          } 
        />
        <Route path="/confirm-youre-not-a-robot" element={
            <ConfirmYoureNotARobotContainer
              updateUser={updateUser}
              userData={userData}
              userIP={userIP}
              users={users}
              handleCYNARCountrySelect={handleCYNARCountrySelect}
              hasSelectedCYNARCountry={hasSelectedCYNARCountry}
              text={text}
              translatedCountries={translatedCountries}
              IPGeoLocationAPIKey={IPGeoLocationAPIKey}
            />
          } 
        />
        <Route path="/enter-the-verification-code" element={
            <EnterTheCodeContainer
              updateUser={updateUser}
              userData={userData}
              text={text}
            />
          } 
        />
        <Route path="/add-recovery-email" element={
            <AddRecoveryEmailContainer
              updateUser={updateUser} 
              text={text}
              userData={userData}
            />
          } 
        />
        <Route path="/review-account-info" element={
            <ReviewYourAccountInfoContainer 
              updateUser={updateUser}
              userData={userData}
              text={text}
            />
          } 
        />
        <Route path="/choose-your-settings" element={
            <ChooseYourSettingsContainer
              updateUser={updateUser}
              text={text}
              userData={userData}
            />
          } 
        />
        <Route path="/express-choose-your-settings" element={
            <ExpressChooseYourSettingsContainer
              updateUser={updateUser}
              text={text}
              hidePrivacyRow={hidePrivacyRow}  
              userData={userData}
            />
          } 
        />
        
        <Route path="/manual-choose-your-settings" element={
            <ManualChooseYourSettingsContainer
              userData={userData}
              updateUser={updateUser}
              text={text}
            />
          } 
        />

        <Route path="/manual-choose-your-settings2" element={
            <ManualChooseYourSettingsContainer2
              userData={userData}
              updateUser={updateUser}
              text={text}
            />
          } 
        />

        <Route path="/manual-choose-your-settings3" element={
            <ManualChooseYourSettingsContainer3
              userData={userData}
              updateUser={updateUser}
              text={text}
            />
          } 
        />

        <Route path="/manual-choose-your-settings4" element={
            <ManualChooseYourSettingsContainer4
              userData={userData}
              updateUser={updateUser}
              text={text}
              makePrivacyRowVisible={makePrivacyRowVisible}
            />
          } 
        />

        <Route path="/confirm-your-settings" element={
            <ConfirmYourSettingsContainer
              text={text}
              userData={userData}
              updateUser={updateUser}
              showPrivacyRow={showPrivacyRow}
            />
          } 
        />

        <Route path="/privacy-and-terms" element={
            <PrivacyAndTermsContainer
              text={text}
              userData={userData}
              updateUser={updateUser}
              addUser={addUser}
              handleLogin={handleLogin}
              users={users}
              loggedIn={loggedIn}
            />
          } 
        />

      </Routes>
    </Router>
  );
}

export default App;