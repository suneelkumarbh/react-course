import { useRef } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Box from "../Wrappers/Box";
import classes from "./Login.module.css";
const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <Box className={classes["input-box"]}>
      <form className={classes["inputs"]} onSubmit={onSubmitHandler}>
        <Input
          type={{ type: "text" }}
          id="email"
          label="Email"
          ref={emailRef}
        />
        <Input
          type={{ type: "password" }}
          id="password"
          label="Password"
          ref={passwordRef}
        />
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
};
export default Login;
