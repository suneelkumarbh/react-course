import auth_classes from "./Auth.module.css";
import { Form, Link, useNavigation } from "react-router-dom";
import AuthWrapper from "../../Wrappers/Auth";

const Signup = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting"
  return (
    <AuthWrapper heading="Signup">
      <Form method="post" className={auth_classes.form}>
        <div className={auth_classes.inputs}>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </p>
          <p>
            <label htmlFor="first_name">First Name</label>
            <input type="first_name" name="first_name" />
          </p>
          <p>
            <label htmlFor="last_name">Last Name</label>
            <input type="last_name" name="last_name" />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </p>
          <p className={auth_classes.buttons}>
            <button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : 'Signup'}</button>
            <Link to="/login">Login</Link>
          </p>
        </div>
      </Form>
    </AuthWrapper>
  );
};
export default Signup;
