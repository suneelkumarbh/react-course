import { useRef } from "react";
import Box from "../Wrappers/Box";
import classes from "./Login.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Signup = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSignup(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    );
  };

  return (
    <Box className={classes["input-box"]}>
      <form className={classes["inputs"]} onSubmit={onSubmitHandler}>
        <Input
          type={{ type: "email" }}
          id="email"
          label="Email"
          ref={emailRef}
        />
        <Input type={{ type: "text" }} id="name" label="Name" ref={nameRef} />
        <Input
          type={{ type: "password" }}
          id="password"
          label="Password"
          ref={passwordRef}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </Box>
  );
};
export default Signup;
