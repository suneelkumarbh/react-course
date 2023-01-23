import { useState } from "react";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    fieldIsInvalid: firstNameIsInvalid,
    fieldChangeHandler: firstNameChangeHandler,
    fieldBlurHandler: firstNameBlurHandler,
    resetFieldHandler: resetFirstName,
  } = useInput((value) => value !== "");

  const {
    value: lastName,
    fieldIsInvalid: lastNameIsInvalid,
    fieldChangeHandler: lastNameChangeHandler,
    fieldBlurHandler: lastNameBlurHandler,
    resetFieldHandler: resetLastName,
  } = useInput((value) => value !== "");

  const {
    value: email,
    fieldIsInvalid: emailIsInvalid,
    fieldChangeHandler: emailChangeHandler,
    fieldBlurHandler: emailBlurHandler,
    resetFieldHandler: resetEmail,
  } = useInput((value) => value.includes("@"));

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (firstNameIsInvalid || lastNameIsInvalid || emailIsInvalid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameHasError = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameHasError = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailHasError = emailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameHasError}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameIsInvalid && (
            <p className="error-text">First name must not be empty</p>
          )}
        </div>
        <div className={lastNameHasError}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameIsInvalid && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailHasError}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailIsInvalid && <p className="error-text">Email should be valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
