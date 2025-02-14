import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.scss";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "light";
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center w-full py-4 px-6 backdrop-blur-md bg-white/30 dark:bg-gray-900/30">
        {/* Left: Theme Toggle */}
        <div className="absolute left-6">
          <DarkModeToggle onSwitch={toggleTheme} theme={theme} />
        </div>

        {/* Center: Avatar */}
        <div className="flex items-center justify-center w-full">
          <img
            className="rounded-full w-12 h-12 object-cover border-2 border-gray-300 dark:border-gray-600"
            src="avatar.png"
            alt="avatar"
          />
        </div>

        {/* Right: Menu Button */}
        <button
          className="absolute right-6 text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center w-full py-5">
        <div className={`navbar ${theme} rounded-xl w-[90%] max-w-7xl mx-auto flex items-center justify-between px-6`}>
          {/* Avatar on the left */}
          <img
            className="object-cover rounded-full w-12 h-12"
            src="avatar.png"
            alt="avatar"
          />
          
                <div className="flex items-center space-x-6">
                <ul className="flex justify-center space-x-4 md:space-x-6 lg:space-x-8">
                  <li>About</li>
                  <li>Experience</li>
                  <li>Skills</li>
                  <li>Projects</li>
                  <li>Contact</li>
                </ul>
                <div className="ml-6">
                  <DarkModeToggle onSwitch={toggleTheme} theme={theme} />
                </div>
                </div>
              </div>
              </div>

              {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={`fixed inset-0 md:hidden z-50 flex items-center justify-center
          ${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'}`}>
          <button
            className="absolute top-6 right-6 text-black dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
          <ul className="flex flex-col space-y-8 text-center text-xl">
            <li className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-300">About</li>
            <li className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-300">Experience</li>
            <li className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-300">Skills</li>
            <li className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-300">Projects</li>
            <li className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-300">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
