import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BasicContainer from "../../basicComponents/BasicContainer";
import { AppContext } from "../../Context";
import "./board.css";
import { emptyProject, emptyTicket } from "../../config/defaultTemplate";
import Ticket from "./Ticket";
function Board() {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const [projectIndex, setProjectIndex] = useState<any>(0);

  const {
    data,
    handleSetData,
    addProject,
    renameProject,
    removeProject,
    addTicket,
  } = useContext(AppContext);
  const [project, setProject] = useState<any>(emptyProject);

  useEffect(() => {
    if (!boardId) return;
    setProjectIndex(boardId);
    setProject(data.projects[parseInt(boardId)]);
  }, [data]);

  function nameChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (!boardId) return;
    const newName = event.target.value;
    renameProject(newName, parseInt(boardId));
  }

  function handleRemoveProject() {
    if (!boardId) return;
    removeProject(parseInt(boardId));
    navigate(`/projects`);
  }
  function navigateToProjects() {
    navigate(`/projects`);
  }

  function addNotStartedTicket() {
    if (!boardId) return;
    addTicket(emptyTicket, parseInt(boardId), "notStarted");
  }
  function addInProgressTicket() {
    if (!boardId) return;
    addTicket(emptyTicket, parseInt(boardId), "inProgress");
  }

  function addIsDoneTicket() {
    if (!boardId) return;
    addTicket(emptyTicket, parseInt(boardId), "isDone");
  }

  return (
    <BasicContainer>
      <div className="bar">
        <h1>
          <input
            className="project-input-name"
            type="text"
            placeholder={project.name}
            value={project.name}
            onChange={nameChangeHandler}
          />
        </h1>
        <button className="delete-button" onClick={handleRemoveProject}>
          DELETE PROJECT
        </button>
      </div>
      <div className="board-container">
        <div className="board-section">
          <h2>Not Started</h2>
          <button className="add-ticket" onClick={addNotStartedTicket}>
            {" "}
            + Add
          </button>
          {project.notStarted.map((ticket: any, index: number) => {
            return (
              <Ticket
                key={"notStarted" + index}
                type={"notStarted"}
                ticket={ticket}
                index={index}
                projectIndex={projectIndex}
              />
            );
          })}
        </div>
        <div className="board-section">
          <h2>In Progress</h2>
          <button className="add-ticket" onClick={addInProgressTicket}>
            + Add
          </button>
          {project.inProgress.map((ticket: any, index: number) => {
            return (
              <Ticket
                key={"inProgress" + index}
                type={"inProgress"}
                ticket={ticket}
                index={index}
                projectIndex={projectIndex}
              />
            );
          })}
        </div>

        <div className="board-section">
          <h2>Completed</h2>
          <button className="add-ticket" onClick={addIsDoneTicket}>
            + Add
          </button>
          {project.isDone.map((ticket: any, index: number) => {
            return (
              <Ticket
                key={"isDone" + index}
                type={"isDone"}
                ticket={ticket}
                index={index}
                projectIndex={projectIndex}
              />
            );
          })}
        </div>
      </div>
      <button onClick={navigateToProjects} className="back-button">
       Back
      </button>
    </BasicContainer>
  );
}

export default Board;
