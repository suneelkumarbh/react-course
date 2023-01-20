import React from "react";
const IssuesContext = React.createContext({
  issues: [],
  addIssue: () => {},
  removeIssue: () => {},
  resolveIssue: () => {},
});

export default IssuesContext;
