import { useContext } from "react";
import IssuesContext from "../../store/issues-context";
import Card from "../UI/Card";
import Issue from "./Issue";
import classes from './Issues.module.css'

const Issues = (props) => {
  const ctx = useContext(IssuesContext);
  const issues = ctx.issues.map((issue) => {
    return (
      <Card className={classes.issue} key={issue.id}>
        <Issue issue={issue}/>
      </Card>
    );
  });
  return <ul>{issues}</ul>;
};
export default Issues;
