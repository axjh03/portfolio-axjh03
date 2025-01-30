"use client";

import React from "react";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Experience from "./pages/Experience";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : "light"}>
      {/* <Navbar /> */}
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;