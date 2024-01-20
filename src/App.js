import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useUserIP } from './utils/userIPModule';
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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);
  const [nextUserId, setNextUserId] = useState(1);
  const [userData, setUserData] = useState({});
  const [hasSelectedCYNARCountry, setHasSelectedCYNARCountry] = useState(false);

// Test

useEffect(() => { 
  setUsers(prevUsers => [...prevUsers, { name: "Test Testerson", id: 0, email: 'tester@gmail.com', password: 'test', phoneNumber: "" }]);
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
              />
            </StaticElementContainer>
          } 
        />
        <Route path="/basic-information" element={
              <BirthdayAndGenderContainer
                updateUser={updateUser}
                userData={userData}
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