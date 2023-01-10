import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";
const UsersList = (props) => {
  return (
    <Card>
      <div className={styles.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>{`Name is ${user.username} and ${user.age} years old`}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
export default UsersList;
