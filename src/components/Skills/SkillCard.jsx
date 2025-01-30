"use client";

import React from "react";

export default function SkillCard({ skill }) {
  return (
    <div className="p-3 flex flex-col items-center">
<img src={skill.ImageURL} alt={skill.Name} class="w-15 h-15 object-cover sm:w-20 sm:h-20" />
<p className="text-sm font-bold ">{skill.Name}</p>
    </div>
  );
}