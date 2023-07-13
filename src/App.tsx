import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Projects from "./pages/projects/Projects";
import Board from "./pages/board/Board";
import Layout from "./basicComponents/Layout";
function App() {
  return (
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
  );
}

export default App;
