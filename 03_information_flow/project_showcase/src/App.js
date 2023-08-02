
import React, { useState } from "react";
import Header from "./components/Header";
import ProjectContainer from "./components/ProjectContainer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const onToggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header 
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
      />
      <ProjectContainer />
    </div>
  );
};

export default App;
