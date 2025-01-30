import React, { useState } from "react"
import { Sun, Moon } from "lucide-react"

const DarkModeToggle = (props) => {

  return (
    <button
      onClick={props.onSwitch}
      className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
        props.theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-yellow-300 text-yellow-600 hover:bg-yellow-400"
      }`}
    >
      {props.theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}

export default DarkModeToggle

