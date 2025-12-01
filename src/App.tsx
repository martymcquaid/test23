import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Services from './pages/Services'; 
import Gallery from './pages/Gallery'; 
import Contact from './pages/Contact'; 

// Get the base path from Vite's import.meta.env.BASE_URL
const basePath = import.meta.env.BASE_URL;

const App: React.FC = () => { 
  return ( 
    <Router basename={basePath}> 
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes> 
    </Router> 
  ); 
}; 

export default App;
import Home from './pages/Home'; 
import About from './pages/About'; 
import Services from './pages/Services'; 
import Gallery from './pages/Gallery'; 
import Contact from './pages/Contact'; 

// Get the base path from Vite's import.meta.env.BASE_URL
const basePath = import.meta.env.BASE_URL;

const App: React.FC = () => { 
  return ( 
    <Router basename={basePath}> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes> 
    </Router> 
  ); 
}; 

export default App;