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
import emptyTemplate from "./config/defaultTemplate";

function App() {
  const [data, setData] = useState(emptyTemplate);

  function handleSetData(data:any) {
    setData(data);
  }

  return (
    <AppContext.Provider value={{ data, handleSetData }}>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/board" element={<Navigate to="/board/1" />} />
            <Route path="/board/:boardId" element={<Board />} />
          </Routes>
        </Router>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
