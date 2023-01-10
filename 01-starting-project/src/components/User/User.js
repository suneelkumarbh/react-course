import React from "react";
import styles from "./User.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
const User = (props) => {
  const onFormSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={onFormSubmitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
        </div>
        <div>
          <label htmlFor="age">Age(years)</label>
          <input id="age" type="number" />
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default User;
