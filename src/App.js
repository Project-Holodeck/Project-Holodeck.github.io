import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import {
  FrontPage,
  TeamPage,
  ProjectPage,
  SignupPage,
} from "./components/pages/imports";

import Footer from './components/Footer/Footer.js';

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
