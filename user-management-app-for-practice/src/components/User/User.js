import React from "react";
import styles from "./User.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const User = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.length === 0) {
      setError({
        title: "Invalid Name",
        message: "Enter the name please",
      });
      return;
    } else if (enteredAge.length === 0) {
      setError({
        title: "Invalid Age",
        message: "Enter the age please",
      });
      return;
    } else if (+enteredAge <= 0) {
      setError({
        title: "Invalid Age",
        message: "Age can not be less or equal to 0",
      });
      return;
    }
    props.onSubmit({
      id: Math.random().toString(),
      username: enteredUserName,
      age: enteredAge,
    });
    setEnteredAge("");
    setEnteredUserName("");
  };

  const changeUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const changeNumberHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const cancelErrorModal = () => {
    setError(null);
  };

  return (
    <div>
      <Card className={styles.input}>
        <form onSubmit={onFormSubmitHandler}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              onChange={changeUserNameHandler}
              value={enteredUserName}
            />
          </div>
          <div>
            <label htmlFor="age">Age(years)</label>
            <input
              id="age"
              type="number"
              onChange={changeNumberHandler}
              value={enteredAge}
            />
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
      {error && <ErrorModal onOkay={cancelErrorModal} error={error} />}
    </div>
  );
};

export default User;
