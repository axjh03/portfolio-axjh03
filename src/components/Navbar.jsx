import React, { useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.scss";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "light";
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full py-5">
      <div className={`navbar ${theme} rounded-xl w-[90%] max-w-7xl mx-auto`}>
        <img
          className="w-14 h-14 object-cover rounded-full"
          src="avatar.png"
          alt="avatar"
        />
        <ul className="flex justify-center space-x-4 md:space-x-6 lg:space-x-8">
          <li>About</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
        <DarkModeToggle onSwitch={toggleTheme} theme={theme} />
      </div>
    </nav>
  );
}

export default Navbar;
