import React, { useState } from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = (e) => {
    setIsDarkMode(!isDarkMode)
    console.log(isDarkMode)
  }

  const buttonText = isDarkMode ? "Dark Mode" : "Light Mode"

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <nav>
        <button onClick={toggleDarkMode}>{buttonText}</button>
      </nav>
    </header>
  );
}

export default Header;
