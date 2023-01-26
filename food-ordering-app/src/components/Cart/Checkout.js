import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const isEmpty = (value) => value.trim() === "";
  const isFiveChars = (value) => value.trim().length === 5;
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreetName = streetRef.current.value;
    const enteredPostalCode = postalRef.current.value;
    const enteredCityName = cityRef.current.value;

    const enteredNameValid = !isEmpty(enteredName);
    const enteredStreetValid = !isEmpty(enteredStreetName);
    const enteredPostalCodeValid = isFiveChars(enteredPostalCode);
    const enteredCityValid = !isEmpty(enteredCityName);

    const formIsValid =
      enteredNameValid &&
      enteredStreetValid &&
      enteredPostalCodeValid &&
      enteredCityValid;

    if (!formIsValid) {
      setFormInputsValidity({
        name: enteredNameValid,
        street: enteredStreetValid,
        postalCode: enteredPostalCodeValid,
        city: enteredCityValid,
      });
      return;
    }

    props.onConfirm({
      name: enteredName,
      city: enteredCityName,
      street: enteredStreetName,
      postalCode: enteredPostalCode,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputsValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputsValidity.name && <p>Please enter the name</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputsValidity.street && <p>Please enter the street</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.postalCode ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter valid postal code</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputsValidity.city && <p>Please enter city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClick}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
