import { useState } from "react";
import IssuesContext from "./issues-context";

const IssuesContextProvider = (props) => {
  const [issues, setIssues] = useState([]);
  const removeIssueHandler = (id) => {
    const rest_issues = issues.filter((issue) => {
      return issue.id !== id;
    });
    setIssues(rest_issues)
  };
  
  const addIssueHandler = (issue) => {
    setIssues((prevState) => {
      return [...prevState, issue];
    });
  };

  const resolveIssueHandler = (id) => {
    const issue = issues.filter((issue) => {
      return issue.id === id;
    });
    issue[0].resolved = true
    debugger
    const rest_issues = issues.filter((issue) => {
      return issue.id !== id;
    });
    rest_issues.push(issue)
    setIssues(rest_issues)
  };

  return (
    <IssuesContext.Provider
      value={{
        issues: issues,
        addIssue: addIssueHandler,
        removeIssue: removeIssueHandler,
        resolveIssue: resolveIssueHandler,
      }}
    >
      {props.children}
    </IssuesContext.Provider>
  );
};

export default IssuesContextProvider;
