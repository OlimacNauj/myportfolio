import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Footer from "./components/Footer";

import "./styles.css";

const App = () => {
  return (
    <div className="dark">
      <Navbar />
      <About />
      <Projects />
      <Education />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
