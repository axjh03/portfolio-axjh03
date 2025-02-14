import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import "./pagesCSS/About.css";
import { ArrowRight, Instagram, Github, Linkedin, Code } from "lucide-react";

function About() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen pt-24 p-6 lg:p-12 justify-center items-center"
    >
      <div className="about flex flex-col lg:flex-row justify-center items-center lg:space-x-16">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col text-center lg:text-left items-center lg:items-start lg:max-w-xl"
        >
          <h1
            className={`text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text 
            transition-all duration-700 ease-in-out 
            bg-[length:200%_200%] animate-[gradient_5s_ease_infinite]
            ${
              theme === "dark"
                ? "bg-gradient-to-r from-[#1F5FFF] via-[#3A7BD5] to-[#0D1B2A]"
                : "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
            }`}
          >
            Aalok
          </h1>
          <h2 className={`mt-2 text-2xl font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            Full-Stack Developer | CS Junior
          </h2>
          <div className={`mt-6 space-y-4 text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            <p>
              👋 Hi there! I'm a Computer Science junior (Class of 2026) passionate about crafting efficient and scalable solutions.
            </p>
            <p>
              💻 My expertise spans full-stack development, system optimization, and robust architectures.
            </p>
            <p>
              🚀 From sleek frontends to powerful backends, I build experiences that are fast, secure, and ready to scale.
            </p>
            <p>
              🛠️ Armed with strong DevOps practices, I ensure every project meets the highest standards of quality and performance.
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group mt-8 px-6 py-3 rounded-full font-semibold text-white shadow-lg
              flex items-center space-x-2
              ${theme === 'dark' 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-purple-600 hover:bg-purple-700'} 
              transition duration-300 ease-in-out`}
          >
            <span>View Resume</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 lg:mt-0 flex flex-col items-center group"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
  className="relative w-80 h-120 rounded-full object-cover shadow-lg transition-all duration-300 transform group-hover:-translate-y-2"
  alt="Aalok's picture"
  src="about.webp"
/>
          </div>
          <div className="mt-4 flex space-x-4">
            <SocialButton icon={Instagram} link="https://www.instagram.com" />
            <SocialButton icon={Github} link="https://github.com" />
            <SocialButton icon={Code} link="https://leetcode.com" />
            <SocialButton icon={Linkedin} link="https://www.linkedin.com" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const SocialButton = ({ icon: Icon, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-300"
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

export default About;
