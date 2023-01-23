import { useState } from "react";
const useInput = (validateInput) => {
  const [field, setField] = useState("");
  const [fieldIsTouched, setFieldIsTouched] = useState(false);
  const fieldIsValid = validateInput(field);
  const fieldIsInvalid = !fieldIsValid && fieldIsTouched;

  const fieldChangeHandler = (event) => {
    setFieldIsTouched(true);
    setField(event.target.value);
  };

  const fieldBlurHandler = (event) => {
    setFieldIsTouched(true);
  };

  const resetFieldHandler = () => {
    setFieldIsTouched(false);
    setField("");
  };

  return {
    value: field,
    fieldIsInvalid,
    fieldChangeHandler,
    fieldBlurHandler,
    resetFieldHandler
  };
};

export default useInput;
