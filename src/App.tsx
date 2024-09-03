import React from "react";
import "./App.css";
import GlobalStyles from "./GlobalStyled";
import Button1 from "./components/Button/Button1";
import TutorialCard from "./components/Card/TutorialCard";

function App() {
  const handleStartClick = () => {
    console.log("Start button clicked!");
  };

  return (
    <div className="App">
      <GlobalStyles />
      <TutorialCard
        imageUrl="https://via.placeholder.com/300x160"
        title="How to use the app"
        subtitle="Tutorial 1 of 4"
        description="5m practice"
        buttonText="Start"
        onClick={handleStartClick}
      />
    </div>
  );
}

export default App;
