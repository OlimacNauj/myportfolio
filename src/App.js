import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ToggleTheme from "./components/ToggleTheme";

import "./styles.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar />
      <ToggleTheme toggleTheme={toggleTheme} darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects />
      <Education />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
