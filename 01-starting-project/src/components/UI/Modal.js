import React from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";
import classes from "./Modal.module.css";
import Card from "./Card";
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <div className={classes.context}>
        {props.children}
      </div>
    </Card>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default Modal;
