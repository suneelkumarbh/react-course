import { useContext, useReducer } from "react";
import IssuesContext from "../../store/issues-context";
import AuthContext from "../../store/auth-context";
import Issues from "../Issues/Issues";
import Box from "../Wrappers/Box";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./Home.module.css";

const issueReducer = (state, issue) => {
  return { isValid: issue.includes("@"), issue: issue };
};
const Home = (props) => {
  const issuesCxt = useContext(IssuesContext);
  const currentUserCtx = useContext(AuthContext);

  const [addIssue, setAddIssue] = useReducer(issueReducer, {
    isValid: false,
    issue: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (addIssue.isValid) {
      let id=`i${issuesCxt.issues.length + 1}`
      issuesCxt.addIssue({
        id: id,
        title: addIssue.issue,
        user_id: currentUserCtx.currentUser.id,
        resolved: false,
      });
    }
  };

  const onChangeHandler = (event) => {
    setAddIssue(event.target.value);
  };

  return (
    <Box className={classes["input-box"]}>
      <div className={classes['issues-form']}>
        <form onSubmit={onSubmitHandler}>
          <Input
            type={{ type: "text" }}
            label="Add Issue"
            id="issue"
            className={addIssue.isValid ? "" : classes.invalid}
            onChange={onChangeHandler}
          />
          <Button type="submit">Add</Button>
        </form>
        <Issues />
      </div>
    </Box>
  );
};
export default Home;
