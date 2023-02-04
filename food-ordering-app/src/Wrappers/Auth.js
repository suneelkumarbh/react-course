import common_classes from "../components/User/Common.module.css";
import auth_classes from "../components/User/Auth.module.css";
import Card from "../components/UI/Card";
const AuthWrapper = (props) => {
  return (
    <Card className={`${common_classes.card} ${auth_classes["auth-card"]}`}>
      <h1>{props.heading}</h1>
      {props.children}
    </Card>
  );
};
export default AuthWrapper;
