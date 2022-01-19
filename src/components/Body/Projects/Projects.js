import "./Projects.css";
import React from "react";
import { ProjectsData } from "../../data/ProjectsData";
import ProjectCard from "./ProjectCard";
import Separator from "../../../Common/Separator/Separator";

function Projects() {
  const Data = ProjectsData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {Data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
