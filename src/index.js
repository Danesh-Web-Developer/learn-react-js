import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Termcond from './pages/Termcond';
import Privacy from './pages/Privacy';
import { BrowserRouter, Routes, Route } from 'react-router';
import Project from './pages/Project';
import About from './compounts/About';
import Service from './compounts/Service';
import Contact from './compounts/Contact';
import { Home } from 'lucide-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Termcond" element={<Termcond />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
