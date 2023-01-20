import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AuthContext from "./store/auth-context";
import Login from "./components/User/Login";
import Signup from "./components/User/SignUp";
import Home from "./components/Home/Home";
import IssuesContextProvider from './store/IssuesContextProvider'

const INITIAL_USERS = [
  {
    id: "u1",
    name: "Admin",
    email: "admin@example.test",
    password: "111111",
  },
];
function App() {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [currentUser, setCurrentUser] = useState(null);
  const [login, setLogin] = useState(true);

  useEffect(() => {
    const stored_user_id = localStorage.getItem("current_user_id");
    if (stored_user_id) {
      const user = users.filter((user) => user.id === stored_user_id);
      setCurrentUser(user);
    }
  }, [users]);

  const onLoginHandler = (email, password) => {
    const user = users.filter(
      (user) => user.email === email && user.password === password
    );
    if (user.length === 1) {
      setCurrentUser(user);
      localStorage.setItem("current_user_id", user[0].id);
    }
  };

  const onSignupHandler = (name, email, password) => {
    let id = `u${users.length + 1}`;
    setUsers((prevState) => {
      return [
        ...prevState,
        { id: id, name: name, email: email, password: password },
      ];
    });
    setCurrentUser({ id: id, name: name, email: email, password: password });
    localStorage.setItem("current_user_id", id);
  };

  const onSignupButtonClickHandler = () => {
    setLogin(false);
  };

  const onLogoutHandler = (id) => {
    setCurrentUser(null);
    setLogin(true);
    localStorage.removeItem("current_user_id");
  };

  const onLoginClickHandler = () => {
    setLogin(true);
  };

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      <Header
        onLogout={onLogoutHandler}
        onSignupClick={onSignupButtonClickHandler}
        onLoginClick={onLoginClickHandler}
      />
      <main>
        <section className="login-signup">
          {!currentUser && login && <Login onLogin={onLoginHandler} />}
          {!currentUser && !login && <Signup onSignup={onSignupHandler} />}
          <IssuesContextProvider>
            {currentUser && <Home />}
          </IssuesContextProvider>
        </section>
      </main>
    </AuthContext.Provider>
  );
}

export default App;
