import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FrontPageStaticContainer } from './containers/FrontPageStaticContainer'
import { StaticElementContainer } from "./containers/StaticElementContainer";
import { CreatePasswordStaticElementContainer } from "./containers/CreatePasswordStaticElementContainer";
import { LoginFormContainer } from "./containers/LoginFormContainer";
import { MockMailContainer } from "./containers/MockMailContainer";
import { CreateAccountContainer } from "./containers/CreateAccountContainer";
import { BirthdayAndGenderContainer } from "./containers/BirthdayAndGenderContainer";
import { ChooseYourGmailAddressContainer } from "./containers/ChooseYourGmailAddressContainer";
import { CreatePasswordContainer } from "./containers/CreatePasswordContainer";
import { ConfirmYoureNotARobotContainer } from "./containers/ConfirmYou'reNotARobotContainer"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);
  const [nextUserId, setNextUserId] = useState(1);
  const [userData, setUserData] = useState({});

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

  const updateUser = (data) => {
    setUserData(prevData => ({ ...prevData, ...data }));
  };

  const addUser = () => {
    const newUser = {
      id: nextUserId,
      ...userData
    };
    setUsers(prevUsers => [...prevUsers, newUser]);
    setUserData({}); // Clear temporary user data
    setNextUserId(prevId => prevId + 1); // Increment nextUserId
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <FrontPageStaticContainer>
              <LoginFormContainer 
                users={users}
                handleLogin={handleLogin}
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
            <StaticElementContainer>
              <BirthdayAndGenderContainer
                updateUser={updateUser} 
              />
            </StaticElementContainer>
          } 
        />
        <Route path="/choose-your-gmail-address" element={
            <StaticElementContainer>
              <ChooseYourGmailAddressContainer
                updateUser={updateUser} 
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
            <StaticElementContainer>
              <ConfirmYoureNotARobotContainer
                updateUser={updateUser} 
                users={users}
              />
            </StaticElementContainer>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
