import React, { useState, useCallback } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING!");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);
  // closure / allowToggle을 저장해줘, 하지만 allowToggle이 변경되면
  // 최신값을 반영해줘(함수를 재실행해줘)

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="App">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <button onClick={allowToggleHandler}>Allow Toggling!</button>
      <button onClick={toggleParagraphHandler}>Click me!</button>
    </div>
  );
}

export default App;
