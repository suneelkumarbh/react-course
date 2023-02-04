import Card from "../UI/Card";
import common_classes from "./Common.module.css";
import auth_classes from "./Auth.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Card className={`${common_classes.card} ${auth_classes["auth-card"]}`}>
      <h1>Login</h1>
      <form className={auth_classes.form}>
        <div className={auth_classes.inputs}>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" />
          </p>

          <p>
            <label htmlFor="password">Password</label>
            <input type="password" />
          </p>
          <p className={auth_classes.buttons}>
            <button>Login</button>
            <Link to="/signup">Create new user</Link>
          </p>
        </div>
      </form>
    </Card>
  );
};
export default Login;
