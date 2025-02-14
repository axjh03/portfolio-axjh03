import React from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import "./pagesCSS/About.css";
import { Brush } from "lucide-react";

function About() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen pt-24 p-6 lg:p-12 justify-center items-center"
    >
      <div className="about flex flex-col lg:flex-row justify-center items-center lg:space-x-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col text-center lg:text-left items-center lg:items-start lg:max-w-xl"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
            transition-all duration-700 ease-in-out 
            bg-[length:200%_200%] animate-[gradient_5s_ease_infinite]
            ${
              theme === "dark"
                ? "bg-gradient-to-r from-[#1F5FFF] via-[#3A7BD5] to-[#0D1B2A]"
                : "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
            }`}
          >
            About Me
          </h1>
          <p
            className={`mt-6 text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Hi, I'm Aalok!
            <br></br>I'm a Computer Science junior (Class of 2026) specializing
            in full-stack development, scalable architectures, and system
            optimization.
            <br></br>I build efficient backend systems, smooth frontend
            experiences, and high-performance APIs—all secured with industry
            best practices. With strong DevOps workflows and a focus on quality,
            I create solutions that are fast, reliable, and ready to scale.
            <br></br>
            <br></br>Scroll to see my work!
          </p>

          {/* Button with dark mode and light mode.. animations */}
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"> Resume </button>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 lg:mt-0"
        >
          <img
            className="w-64 sm:w-80 md:w-96 h-auto rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            alt="Aalok's picture"
            src="about.webp"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
