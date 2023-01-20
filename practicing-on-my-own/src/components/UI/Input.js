import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {...props.type}
        id={props.id}
        ref={ref}
        className={props.className}
        onChange={props.onChange}
      />
    </div>
  );
});

export default Input;
