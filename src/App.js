import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import {
  FrontPage,
  TeamPage,
  ProjectPage,
  SignupPage,
} from './components/pages/imports';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/projects' element={<ProjectPage />}/>
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;