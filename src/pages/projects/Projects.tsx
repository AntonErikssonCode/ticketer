import React, { useContext } from "react";
import BasicContainer from "../../basicComponents/BasicContainer";
import "./projects.css";
import Slider from "../../basicComponents/Slider";
import ProjectCard from "./ProjectCard";
import { AppContext } from "../../Context";
function Projects({}) {
  const {data, handleSetData} = useContext(AppContext);


  const test = {
    projects: [
      { name: "Weather App", priority: "low" },
      { name: "Idle Game", priority: "moderate" },
      { name: "dasd", priority: "high" },
      { name: "asd App", priority: "low" },
      { name: "d Game", priority: "moderate" },
      { name: "Notion", priority: "high" },
    ],
  };

  function ontest(){
    handleSetData(test)

  }
  return (
    <BasicContainer>
      <div className="bar">
        <h1>Projects</h1>
        <button className="bar-add center" onClick={ontest}>+</button>
        <Slider firstState="All" secondState="Completed"></Slider>
      </div>
      <div className="project-container">
        {data.projects.map((project: any, index: number) => {
          return (
            <ProjectCard
              title={project.name}
              priority={project.priority}
              index={index+1}
            />
          );
        })}
      </div>
    </BasicContainer>
  );
}

export default Projects;
