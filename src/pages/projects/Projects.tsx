import React from "react";
import BasicContainer from "../../basicComponents/BasicContainer";
import "./projects.css"
import Slider from "../../basicComponents/Slider";
import ProjectCard from "./ProjectCard";
function Projects({}) {
  return (
    <BasicContainer>
      <div className="bar">
        
        <h1>Projects</h1>
        <button className="bar-add center">+</button>
        <Slider firstState="All" secondState="Completed"></Slider>
      </div>
      <div className="project-container">
<ProjectCard index={1}/>
<ProjectCard index={2}/>
<ProjectCard index={1}/>
<ProjectCard index={2}/>
<ProjectCard index={1}/>
<ProjectCard index={2}/>
<ProjectCard index={1}/>
<ProjectCard index={2}/>
<ProjectCard index={1}/>
<ProjectCard index={2}/>
<ProjectCard index={1}/>
<ProjectCard index={2}/>
<ProjectCard index={1}/>
<ProjectCard index={2}/>
<ProjectCard index={1}/>
<ProjectCard index={2}/>
<ProjectCard index={1}/>
<ProjectCard index={2}/>
<ProjectCard index={1}/>
<ProjectCard index={2}/>


      </div>
    </BasicContainer>
  );
}

export default Projects;
