import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();

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

  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";
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
        {!enteredNameIsValid && (
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
