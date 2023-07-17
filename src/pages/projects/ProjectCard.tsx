import React, { useContext, useEffect, useState } from "react";
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
  const [barColor, setBar] = useState("var(--color-red)");
  const [percentDoneTickets, setPercentDoneTickets] = useState(0);

  useEffect(() => {
    const totalNumberOfTickets =
      data.projects[index].notStarted.length +
      data.projects[index].inProgress.length +
      data.projects[index].isDone.length;

    const doneTickets = data.projects[index].isDone.length;
    const doneTicketsInPercent = (doneTickets / totalNumberOfTickets) * 100;
    if (doneTicketsInPercent <= 30) {
      setBar("var(--color-red)");
    } else if (doneTicketsInPercent > 30 && doneTicketsInPercent <= 70) {
      setBar("var(--color-yellow)");
    } else {
      setBar("var(--color-green)");
    }
    setPercentDoneTickets(doneTicketsInPercent);
  }, [data, index]);

  return (
    <div onClick={handleNavigateToBoard} className="project-card">
      <div className="project-card-top">
        <h3 className="project-card-top-title">{title}</h3>
        <Priority priority={priority} />
      </div>
      <div className="project-card-tasks">
        {data.projects[index].inProgress?.map((item: any, index: number) => {
          if (index === 3)
            return <h3 key={"projekt-tasks" + index}> . . . . . </h3>;
          if (index > 3) return null;

          return <h3 key={"projekt-tasks" + index}>{item.name} </h3>;
        })}
      </div>
      <div className="project-card-progress">
        <div
          className="project-card-progress-bar"
          style={{ width: percentDoneTickets + "%", background: barColor }}
        ></div>
      </div>
    </div>
  );
}

export default ProjectCard;
