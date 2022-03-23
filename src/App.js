import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import {
  FrontPage,
  TeamPage,
  ProjectPage,
  SignupPage,
} from "./components/pages/imports";

import Footer from './components/Footer/Footer.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/utfo-website-test" element={<FrontPage />} />
        <Route path="/utfo-website-test/team" element={<TeamPage />} />
        <Route path="/utfo-website-test/projects" element={<ProjectPage />} />
        <Route path="/utfo-website-test/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
