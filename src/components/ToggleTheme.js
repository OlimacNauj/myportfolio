import React from "react";

const ToggleTheme = ({ toggleTheme, darkMode }) => {
  return (
    <button onClick={toggleTheme} className="toggle-btn">
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleTheme;
