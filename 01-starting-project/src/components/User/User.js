import React from "react";
import styles from "./User.module.css";
const User = (props) => {
  const onFormSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className={styles.input} onSubmit={onFormSubmitHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="age">Age(years)</label>
        <input id="age" type="number" />
      </div>
      <div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default User;
