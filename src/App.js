import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
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

      <Footer/>
    </BrowserRouter>
  );
}

export default App;