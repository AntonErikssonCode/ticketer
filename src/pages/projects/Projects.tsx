import React, { useContext } from "react";
import BasicContainer from "../../basicComponents/BasicContainer";
import "./projects.css";
import Slider from "../../basicComponents/Slider";
import ProjectCard from "./ProjectCard";
import { AppContext } from "../../Context";
import { emptyProject } from "../../config/defaultTemplate";

function Projects({}) {
  const {data, handleSetData, addProject} = useContext(AppContext);



  const handleAddProject = () => {
    addProject(emptyProject);
  };
  return (
    <BasicContainer>
      <div className="bar">
        <h1>Projects</h1>
        <button className="bar-add center" onClick={handleAddProject}>+</button>
        <Slider firstState="All" secondState="Completed"></Slider>
      </div>
      <div className="project-container">
        {data.projects.map((project: any, index: number) => {
          return (
            <ProjectCard
            key={"porjects" + index}
              title={project.name}
              priority={project.priority}
              index={index}
            />
          );
        })}
      </div>
    </BasicContainer>
  );
}

export default Projects;
