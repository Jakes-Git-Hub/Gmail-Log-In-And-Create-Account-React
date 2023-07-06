import React, { useState } from "react";
import { StaticElementContainer } from "./containers/StaticElementContainer";
import { LoginFormContainer } from "./containers/LoginFormContainer";
import { MockMailContainer } from "./containers/MockMailContainer";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);

  const handleLogin = (username, password) => {
    const correctLoginCredentials = users.find(
      (user) => user.username === username && user.password === password
    );

    if(correctLoginCredentials) {
      setLoggedIn(true);
      setCurrentLoggedInUser(correctLoginCredentials.username);
    }
  }

  const addUser = (username, password, email, phone) => {
    const newUser = {
      id: users.length + 1,
      username: username,
      password: password,
      email: email,
      phone: phone
    };
    setUsers([...users, newUser])
  }

  return (
    <div className="App">
          <StaticElementContainer>
            <LoginFormContainer
              users={users}
              handleLogin={handleLogin}
            />
          </StaticElementContainer>
          <MockMailContainer
            loggedIn={loggedIn}
            currentLoggedInUser={currentLoggedInUser}
          />
    </div>
  );
}

export default App;
