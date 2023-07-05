import React, { useState } from "react";
import { StaticElementContainer } from "./containers/StaticElementContainer";
import { LoginFormContainer } from "./containers/LoginFormContainer";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleLogin = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if(user) {
      setLoggedIn(true);
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
              addUser={addUser}
            />
          </StaticElementContainer>
    </div>
  );
}

export default App;
