import React, {useState} from "react";
import ErrorModal from "./components/UI/ErrorModal";
import User from "./components/User/User";
import UsersList from "./components/User/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false)

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
