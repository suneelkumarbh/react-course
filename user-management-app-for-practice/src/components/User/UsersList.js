import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";
const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <div>
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
