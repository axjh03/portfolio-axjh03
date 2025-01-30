import React from "react";
import SkillSliderRenderer from "../components/Skills/SkillSliderRenderer";

function Skills() {
  return (
    <>
    <div className="h-lvh justify-center items-center">
      <h2 class="text-center text-4xl font-manrope font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-red-600 ">
        Skills
      </h2>
      <SkillSliderRenderer />
    </div>
    </>
  );
}

export default Skills;
