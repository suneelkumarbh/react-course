import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import IssuesContext from '../../store/issues-context';
import Button from '../UI/Button';
import classes from './Issue.module.css';
const Issue = (props) => {
  const currentUserCtx = useContext(AuthContext)
  const issuesCxt = useContext(IssuesContext)
  const resolveHandler = () => {
    issuesCxt.resolveIssue(props.issue.id)
  }

  const removeIssueHandler = () => {
    issuesCxt.removeIssue(props.issue.id)
  }
  return (
    <li className={classes.issue}>
      <div>
        <span>{props.issue.title}</span>
      </div>
      <div className={classes.actions}>
        <span className={classes.name}>{currentUserCtx.currentUser[0].name}</span>
      </div>
      <div>
        <Button onClick={resolveHandler}>Resolve</Button>
        <Button onClick={removeIssueHandler}>Remove</Button>
      </div>
    </li>
  );
};
export default Issue;
