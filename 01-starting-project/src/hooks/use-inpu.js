import { useState } from "react";
const useInput = (validateValue) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredInputTouched, setEnteredInputTouched] = useState(false);
  const enteredInputIsValid = validateValue(enteredInput);
  const isError = enteredInputTouched && !enteredInputIsValid;

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setEnteredInputTouched(true);
  };

  const reset = () => {
    setEnteredInput("");
  };

  return {
    value: enteredInput,
    isValid: enteredInputIsValid,
    isError,
    inputBlurHandler,
    inputChangeHandler,
    reset
  };
};

export default useInput;
