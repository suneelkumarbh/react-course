import useInput from "../hooks/use-inpu";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    isError: nameHasError,
    inputBlurHandler: nameInputBlurHandler,
    inputChangeHandler: nameInputChangeHandler,
    reset: resetNameHandler,
  } = useInput((value) => value !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    isError: emailHasError,
    inputBlurHandler: emailInputBlurHandler,
    inputChangeHandler: emailInputChangeHandler,
    reset: resetEmailHandler,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (nameHasError || emailHasError) {
      return;
    }

    resetNameHandler();
    resetEmailHandler();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
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
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameHasError && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">
            Email must not be empty and should include @
          </p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
