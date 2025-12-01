import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Navbar: React.FC = () => { 
  return ( 
    <nav className="sticky top-0 bg-white shadow-md"> 
      <div className="container mx-auto flex justify-between items-center p-4"> 
        <div className="text-xl font-bold">Pluimmers</div> 
        <div className="flex space-x-4"> 
          <Link to="/" className="hover:underline">Home</Link> 
          <Link to="/about" className="hover:underline">About</Link> 
          <Link to="/services" className="hover:underline">Services</Link> 
          <Link to="/gallery" className="hover:underline">Gallery</Link> 
          <Link to="/contact" className="hover:underline">Contact</Link> 
          <Link to="/contact" className="bg-blue-500 text-white rounded-full px-4 py-2 hover:scale-105 transition-all">Get in Touch</Link> 
        </div> 
      </div> 
    </nav> 
  ); 
}; 

export default Navbar;