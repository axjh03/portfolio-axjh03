import React from "react";
import Card from "../components/Card/Card";
import { projects } from "../data/data";

function Projects() {
  return (
    <div className="h-full">
      <h1 className="text-4xl font-bold text-center">Projects</h1>
      <div className="flex flex-row items-center justify-center flex-wrap items-stretch">
        {projects.map((projectItem, Index) => {
          return <Card key={Index} {...projectItem} />;
        })}
      </div>

    </div>
  );
}

export default Projects;
