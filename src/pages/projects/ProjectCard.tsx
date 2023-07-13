import React from "react";
import { useNavigate } from "react-router-dom";
import "./projectCard.css";
interface ProjectCard {
  name?: string;
  priority?: string;
  tasks?: string[];
  tasksComplete?: string;
  index: number;
}
function ProjectCard({ index }: ProjectCard) {
  const navigate = useNavigate();
  const handleNavigateToBoard = () => {
    navigate(`/board/${index}`);
  };
  return (
    <div onClick={handleNavigateToBoard} className="project-card">
      <div className="project-card-top">
        <h3 className="project-card-top-title">TO Board</h3>
        <h4 className="project-card-top-priority">Low</h4>
      </div>
      <div className="project-card-tasks">
        <h3>Task 1 </h3>
        <h3>Task 2 </h3>
        <h3>Task 3 </h3>
      </div>
      <div className="project-card-progress">
        <div className="project-card-progress-bar"></div>
      </div>
    </div>
  );
}

export default ProjectCard;
