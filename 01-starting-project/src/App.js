import React, {useState} from "react";
import User from "./components/User/User";
import UsersList from "./components/User/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const onSubmitHandler = (enteredUser) => {
    setUsers((prev => {
      return [
        enteredUser,
        ...prev
      ]
    }))
  };
  return (
    <div>
      <User onSubmit={onSubmitHandler} />
      <UsersList users={users}/>
    </div>
  );
}

export default App;
