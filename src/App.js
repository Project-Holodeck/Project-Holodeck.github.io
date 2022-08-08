import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import {
  FrontPage,
  TeamPage,
  ProjectPage,
  SignupPage,
} from "./components/pages/imports";

import Footer from './components/Footer/Footer.js';

import { HashRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <HashRouter hashType="noslash">
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </HashRouter>
  );
}

