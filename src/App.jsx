import React from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Layout from './components/Layout';
import { Route, Router, Routes } from 'react-router-dom';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
   
      <div className="overflow-x-hidden">
        <Navbar />
        <div className="h-20 md:hidden"></div> {/* Mobile spacer */}
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education/>} />
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
         
          <Route path="*" element={<div className="text-center mt-20 text-white">404 - Page Not Found</div>} />
          {/* Add more routes as needed */}
        </Routes>
        
      </div>
    
  );
}

export default App;