import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName === "") {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    console.log(enteredName);
    console.log(nameInputRef.current.value);

    // nameInputRef.current. value  => Do not do this, as this changes the real DOM and its a vanila javascript
    setEnteredName("");
  };

  const enteretedNameIsInvalid = enteredNameTouched && !enteredNameIsValid;
  const nameInputClasses = enteretedNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          ref={nameInputRef}
          value={enteredName}
        />
        {enteretedNameIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
