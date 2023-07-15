import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./projectCard.css";
import Priority from "../../basicComponents/Priority";
import { AppContext } from "../../Context";

interface ProjectCard {
  title: string;
  priority: string;
  tasks?: string[];
  tasksComplete?: string;
  index: number;
}
function ProjectCard({
  title,
  priority,
  tasks,
  tasksComplete,
  index,
}: ProjectCard) {
  const navigate = useNavigate();
  const handleNavigateToBoard = () => {
    navigate(`/board/${index}`);
  };
  const { data, handleSetData } = useContext(AppContext);

  return (
    <div onClick={handleNavigateToBoard} className="project-card">
      <div className="project-card-top">
        <h3 className="project-card-top-title">{title}</h3>
        <Priority priority={priority} />
      </div>
      <div className="project-card-tasks">
        {data.projects[index - 1].inProgress?.map((item:any, index: number) => {
          return <h3 key={"projekt-tasks" + index}>{item.name} </h3>;
        })}
      </div>
      <div className="project-card-progress">
        <div className="project-card-progress-bar"></div>
      </div>
    </div>
  );
}

export default ProjectCard;
