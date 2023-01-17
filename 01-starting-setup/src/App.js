import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log("App Running");
  const btcClickHandler = () => {
    setShowParagraph(() => !showParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is the paragraph</p>}
      <Button onClick={btcClickHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
