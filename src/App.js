import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useUserIP } from './utils/userIPModule';
import textData from './data/textData';
import { FrontPageStaticContainer } from './containers/FrontPageStaticContainer'
import { StaticElementContainer } from "./containers/StaticElementContainer";
import { CreatePasswordStaticElementContainer } from "./containers/CreatePasswordStaticElementContainer";
import { SignInFrontPageContainer } from "./containers/SignInFrontPageContainer";
import { MockMailContainer } from "./containers/MockMailContainer";
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
import axios from "axios";  

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);
  const [nextUserId, setNextUserId] = useState(1);
  const [userData, setUserData] = useState({});
  const [hasSelectedCYNARCountry, setHasSelectedCYNARCountry] = useState(false);
  const [text, setText] = useState(textData);

// Translation

  const googleAPIKey = 'AIzaSyAnvQnBbhJ9H6qMEnyo-i0yxoj1w_cmrWI';

  useEffect(() => {
    handleLanguageSelection();
    console.log('chosenLanguage:', userData.language)
  }, [userData.language]);

  const handleLanguageSelection = async () => {
    if (!userData.language) return;
  
    const chosenLanguage = userData.language;
  
    try {
      const translatedText = {};
      for (const topLevelKey in text) {
        const topLevelObject = text[topLevelKey];
        const translatedTopLevelObject = {};
  
        // Translate each key-value pair in the nested object
        for (const key in topLevelObject) {
          const translation = await changeLanguageAndTranslate(topLevelObject[key], chosenLanguage);
          translatedTopLevelObject[key] = translation;
        }
  
        translatedText[topLevelKey] = translatedTopLevelObject;
      }
  
      // Sanitize the translated text before setting it to state
      const sanitizedTranslatedText = sanitizeText(translatedText);
  
      // Update the 'text' state with sanitized translated text
      setText(sanitizedTranslatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  }; 

  const changeLanguageAndTranslate = async (text, chosenLanguage) => {
      updateUser({ language: chosenLanguage })
      try {
        const res = await axios.post(`https://translation.googleapis.com/language/translate/v2?key=${googleAPIKey}`, {
          q: text,
          target: chosenLanguage,
        });
        return res.data.data.translations[0].translatedText;
      } catch (error) {
        console.error('Error translating text:', error);
        return null;
      }
  };
  
  const sanitizeText = (translatedText) => {
    const sanitizedText = {};

    for (const topLevelKey in translatedText) {
      const topLevelObject = translatedText[topLevelKey];
      const sanitizedTopLevelObject = {};

      for (const key in topLevelObject) {
        const sanitizedValue = topLevelObject[key].replace("&#39;", "'");
        // Add more sanitization rules as needed

        sanitizedTopLevelObject[key] = sanitizedValue;
      }

      sanitizedText[topLevelKey] = sanitizedTopLevelObject;
    }

    return sanitizedText;
  };

// Test

useEffect(() => { 
  setUsers(prevUsers => [...prevUsers, { name: "Test Testerson", id: 0, email: 'tester@gmail.com', password: 'test', phoneNumber: "", language: "fr"}]);
}, []);

// Grab User's IP

const { userIP } = useUserIP()

// Handle Log Ins

  const handleLogin = (email, password) => {
    console.log("Attempting login with:", email, password);
    const correctLoginCredentials = users.find(
      (user) => user.email === email && user.password === password
    );

    if (correctLoginCredentials) {
      setLoggedIn(true);
      setCurrentLoggedInUser(correctLoginCredentials.email);
      console.log("Logged in as:", correctLoginCredentials.email);
    } else {
      console.log("Invalid credentials");
    }
  };

// Update User Data

  const updateUser = (data) => {
    setUserData(prevData => ({ ...prevData, ...data }));
  };

// Add User

  const addUser = () => {
    const newUser = {
      id: nextUserId,
      ...userData
    };
    setUsers(prevUsers => [...prevUsers, newUser]);
    setNextUserId(prevId => prevId + 1); // Increment nextUserId
  };

// Handle CYNAR Country Selection

  const handleCYNARCountrySelect = () => setHasSelectedCYNARCountry(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <FrontPageStaticContainer>
              <SignInFrontPageContainer 
                users={users}
                handleLogin={handleLogin}
                userIP={userIP}
              />
            </FrontPageStaticContainer>
          } />
        <Route 
          path="/mockmail" 
          element={<MockMailContainer   
                    loggedIn={loggedIn}
                    currentLoggedInUser={currentLoggedInUser}
                  />} 
        />
        <Route path="/create-account" element={
            <StaticElementContainer>
              <CreateAccountContainer 
                updateUser={updateUser}
                userData={userData}
                text={text}
              />
            </StaticElementContainer>
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
            <StaticElementContainer>
              <ChooseYourGmailAddressContainer
                updateUser={updateUser} 
                users={users}
              />
            </StaticElementContainer>
          } 
        />
        <Route path="/create-password" element={
            <CreatePasswordStaticElementContainer>
              <CreatePasswordContainer
                updateUser={updateUser} 
                users={users}
              />
            </CreatePasswordStaticElementContainer>
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
            />
          } 
        />
        <Route path="/enter-the-verification-code" element={
            <EnterTheCodeContainer
              updateUser={updateUser}
              userData={userData}
            />
          } 
        />
        <Route path="/add-recovery-email" element={
              <AddRecoveryEmailContainer
                updateUser={updateUser} 
              />
          } 
        />
        <Route path="/review-account-info" element={
              <ReviewYourAccountInfoContainer 
                updateUser={updateUser}
                userData={userData}
              />
          } 
        />
        <Route path="/choose-your-settings" element={
              <ChooseYourSettingsContainer
                updateUser={updateUser}
              />
          } 
        />
        <Route path="/express-choose-your-settings" element={
              <ExpressChooseYourSettingsContainer
                updateUser={updateUser}
              />
          } 
        />
        {/* <Route path="/manual-choose-your-settings" element={
              <ManualChooseYourSettingsContainer2
                updateUser={updateUser}
              />
          } 
        /> */}
      </Routes>
    </Router>
  );
}

export default App;