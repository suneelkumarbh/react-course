import auth_classes from "./Auth.module.css";
import { Form, Link } from "react-router-dom";
import AuthWrapper from "../../Wrappers/Auth";

const Login = () => {
  return (
    <AuthWrapper heading="Login">
      <Form method="post" action="/login" className={auth_classes.form}>
        <div className={auth_classes.inputs}>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </p>
          <p className={auth_classes.buttons}>
            <button>Login</button>
            <Link to="/signup">Create new user</Link>
          </p>
        </div>
      </Form>
    </AuthWrapper>
  );
};
export default Login;
