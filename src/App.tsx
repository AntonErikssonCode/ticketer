import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Route path="/board" element={<Board />} />
       
      </Routes>
    </Router>
    </Layout>
  );
}

export default App;
