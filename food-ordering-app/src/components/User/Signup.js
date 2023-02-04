import auth_classes from "./Auth.module.css";
import { Link } from "react-router-dom";
import AuthWrapper from "../../Wrappers/Auth";

const Signup = () => {
  return (
    <AuthWrapper heading="Signup">
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
            <button>Signup</button>
            <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </AuthWrapper>
  );
};
export default Signup;
