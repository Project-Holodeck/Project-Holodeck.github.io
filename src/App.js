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

export const domain = "/utfo-website-test";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={domain + "/"} element={<FrontPage />} />
        <Route path={domain + "/team"} element={<TeamPage />} />
        <Route path={domain + "/projects"} element={<ProjectPage />} />
        <Route path={domain + "/signup"} element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

