import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import {
  FrontPage,
  TeamPage,
  ProjectPage,
  SignupPage,
} from './components/pages/imports';

import project_info from './components/pages/ProjectPage/project_info';
import arcade from './components/pages/ProjectPage/images/arcade.jpg';
import leapmotion from './components/pages/ProjectPage/images/leapmotion.jpeg';
import roomscanner from './components/pages/ProjectPage/images/roomscanner.jpg';
import shoes from './components/pages/ProjectPage/images/shoes.jpg';
import treadmill from './components/pages/ProjectPage/images/treadmill.jpg';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/team' element={<TeamPage />} />

        <Route
          path='/projects/treadmill'
          element={<ProjectPage project={project_info[0]} imgSrc={treadmill} />}
        />

        <Route
          path='/projects/arcade'
          element={<ProjectPage project={project_info[1]} imgSrc={arcade} />}
        />

        <Route
          path='/projects/shoes'
          element={<ProjectPage project={project_info[2]} imgSrc={shoes} />}
        />

        <Route
          path='/projects/room-scanner'
          element={
            <ProjectPage project={project_info[3]} imgSrc={roomscanner} />
          }
        />

        <Route
          path='/projects/leap-motion'
          element={
            <ProjectPage project={project_info[4]} imgSrc={leapmotion} />
          }
        />

        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
