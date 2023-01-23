import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR'){
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET'){
    return {value: '', isTouched: false}
  }
  return initialInputState;
};
const useInput = (validateInput) => {
  const [inputState, dispatchInputState] = useReducer(
    inputStateReducer,
    initialInputState
  );
  const fieldIsValid = validateInput(inputState.value);
  const fieldIsInvalid = !fieldIsValid && inputState.isTouched;

  const fieldChangeHandler = (event) => {
    dispatchInputState({value: event.target.value, type: 'CHANGE'})
  };

  const fieldBlurHandler = (event) => {
    dispatchInputState({type: 'BLUR'})
  };

  const resetFieldHandler = () => {
    dispatchInputState({
      type: 'RESET'
    })
  };

  return {
    value: inputState.value,
    fieldIsInvalid,
    fieldIsValid,
    fieldChangeHandler,
    fieldBlurHandler,
    resetFieldHandler,
  };
};

export default useInput;
