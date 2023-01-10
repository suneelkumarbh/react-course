import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.error.title}</h2>
        </div>
        <div className={styles.content}>{props.error.message}</div>
        <div className={styles.actions}>
          <Button clickHandler={props.onOkay}>Okay</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
