import React from "react";
import styles from "./User.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
const User = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.length === 0){
      console.log('please enter the name')
      return;
    }
    else if(enteredAge.length === 0){
      console.log('please enter the age')
      return;
    }
    else if(+enteredAge <= 0){
      console.log('age should be greater than 0')
      return;
    }
    setEnteredAge('');
    setEnteredUserName('');
  };

  const changeUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const changeNumberHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
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
  );
};

export default User;
