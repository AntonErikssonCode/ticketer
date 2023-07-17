import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Projects from "./pages/projects/Projects";
import Board from "./pages/board/Board";
import Layout from "./basicComponents/Layout";
import { AppContext } from "./Context";
import { emptyTemplate } from "./config/defaultTemplate";

function App() {
  const [data, setData] = useState(emptyTemplate);

  function handleSetData(data: any) {
    setData(data);
  }
  function addProject(newProject: any) {
    setData((prevData) => {
      const updatedProjects = [...prevData.projects, newProject];
      return { ...prevData, projects: updatedProjects };
    });
  }

  function renameProject(newName: string, index: number) {
    setData((prevData) => {
      const updatedProjects = [...prevData.projects];
      updatedProjects[index].name = newName;
      return { ...prevData, projects: updatedProjects };
    });
  }

  function removeProject(index: number) {
    setData((prevData) => {
      const updatedProjects = prevData.projects.filter((_, i) => i !== index);
      return { ...prevData, projects: updatedProjects };
    });
  }
  function addTicket(newTicket: any, projectIndex: number, type: string) {
    setData((prevData: any) => {
      const updatedProjects = [...prevData.projects];
      const targetProject = updatedProjects[projectIndex];
  
      switch (type) {
        case "notStarted":
          targetProject.notStarted = [...targetProject.notStarted, newTicket];
          break;
  
        case "inProgress":
          targetProject.inProgress = [...targetProject.inProgress, newTicket];
          break;
  
        case "isDone":
          targetProject.isDone = [...targetProject.isDone, newTicket];
          break;
  
        default:
          break;
      }
  
      return { ...prevData, projects: updatedProjects };
    });
  }
  function deleteTicket(projectIndex: number, type: string, ticketIndex: number) {
    setData((prevData: any) => {
      const updatedProjects = [...prevData.projects];
      const targetProject = updatedProjects[projectIndex];
  
      switch (type) {
        case "notStarted":
          targetProject.notStarted = targetProject.notStarted.filter(
            (_:any, index:any) => index !== ticketIndex
          );
          break;
  
        case "inProgress":
          targetProject.inProgress = targetProject.inProgress.filter(
            (_:any, index:any) => index !== ticketIndex
          );
          break;
  
        case "isDone":
          targetProject.isDone = targetProject.isDone.filter(
            (_:any, index:any) => index !== ticketIndex
          );
          break;
  
        default:
          break;
      }
  
      return { ...prevData, projects: updatedProjects };
    });
  }
  
  

  return (
    <AppContext.Provider
      value={{ data, handleSetData, addProject, renameProject, removeProject, addTicket, deleteTicket}}
    >
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/board" element={<Navigate to="/board/0" />} />
            <Route path="/board/:boardId" element={<Board />} />
          </Routes>
        </Router>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
