import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StaticElementContainer } from "./containers/StaticElementContainer";
import { LoginFormContainer } from "./containers/LoginFormContainer";
import { MockMailContainer } from "./containers/MockMailContainer";
import { CreateAccountContainer } from "./containers/CreateAccountContainer";
import { BirthdayAndGenderContainer } from "./containers/BirthdayAndGenderContainer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, phone: '', firstName: '', lastName: '', dob: '', gender: '', email: 'user', password: 'pass'}
  ]);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);
  const [nextUserId, setNextUserId] = useState(2);

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

  const updateNameDetails = (id, firstName, lastName) => {
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex] = {
        ...updatedUsers[userIndex],
        firstName: firstName,
        lastName: lastName
      };
      setUsers(updatedUsers);
    }
  };

  const addUser = (user) => {
    const newUser = { ...user, id: nextUserId };
    setNextUserId(prevId => prevId + 1); // Increment nextUserId
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <StaticElementContainer>
              <LoginFormContainer 
                users={users}
                handleLogin={handleLogin}
              />
            </StaticElementContainer>
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
                updateNameDetails={updateNameDetails}
                addUser={addUser}
                nextUserId={nextUserId}
              />
            </StaticElementContainer>
          } 
        />
        <Route path="/birthday-and-gender" element={
            <StaticElementContainer>
              <BirthdayAndGenderContainer
                updateNameDetails={updateNameDetails}
                addUser={addUser}
                nextUserId={nextUserId}
              />
            </StaticElementContainer>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
