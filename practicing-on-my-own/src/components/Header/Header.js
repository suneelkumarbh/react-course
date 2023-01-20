import classes from "./Header.module.css";
import Button from "../UI/Button";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
const Header = (props) => {
  const ctx = useContext(AuthContext);
  let btnsSections = (
    <div>
      <Button onClick={props.onLoginClick}>Login</Button>
      <Button onClick={props.onSignupClick}>Sign Up</Button>
    </div>
  );

  if (ctx.currentUser) {
    btnsSections = (
      <div>
        <Button>My Pending Issues</Button>
        <Button>My Resolved Issues</Button>
        <Button onClick={props.onLogout}>Logout</Button>
      </div>
    );
  }
  return (
    <header className={classes.header}>
      <h2>PracticeApplication</h2>
      {btnsSections}
    </header>
  );
};

export default Header;
