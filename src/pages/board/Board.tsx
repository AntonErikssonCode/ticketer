import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import BasicContainer from "../../basicComponents/BasicContainer";
import { AppContext } from "../../Context";
import "./board.css";
import { emptyProject } from "../../config/defaultTemplate";

function Board() {
  const { boardId } = useParams();
  const { data, handleSetData, addProject, renameProject } =
    useContext(AppContext);
  const [project, setProject] = useState<any>(emptyProject);

  useEffect(() => {
    if (!boardId) return;
    console.log(data.projects[parseInt(boardId)]);
    setProject(data.projects[parseInt(boardId)]);
  }, [data]);

  function nameChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (!boardId) return;
    const newName = event.target.value;
    renameProject(newName, parseInt(boardId));
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
      </div>
      <div className="board-container">
        <div className="board-section">
          <h2>Not Started</h2>
        </div>
        <div className="board-section">
          <h2>In Progress</h2>
        </div>

        <div className="board-section">
          <h2>Completed</h2>
        </div>
      </div>
    </BasicContainer>
  );
}

export default Board;
