import React, { useState } from 'react';
import {
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaCubes,
  FaGithub,
  FaExternalLinkAlt,
    FaAward
} from 'react-icons/fa';
import myImage from "../assets/img.jpg";
import img1 from "../assets/img 1.png"
import img2 from "../assets/img 2.png"
import img3 from "../assets/img 3.png"
import img7 from "../assets/img 7.png"
import img5 from "../assets/img 5.png"
import img6 from "../assets/img 6.png"
import img8 from "../assets/img 8.png"
import imgg from "../assets/imgg.png"
import imggg from "../assets/imggg.png"
const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Herbal Medication Mobile App",
      description: "Cross-platform Android app connecting users with traditional healers, featuring secure auth, real-time chat, multi-language support, payment system and a searchable herbal medicine database",
      type: "mobile",
      tags: ["Next.js", "Node.js", "MongoDB", "Chapa"],
      projectType: "Android App",
      featured: true,
      github: "https://github.com/melat-lema",
      live: "https://github.com/melat-lema",
        image: img6,
    },
    {
      id: 2,
      title: "AI powered E-learning Platform",
      description: "Built a full-stack web platform with student dashboards, teacher tools, real-time chat, payment system and AI-generated learning materials using Gemini API.",
      type: "web",
      tags: ["Next.js", "Tailwindcss", "Postman", "Postgres", "Prisma", "Gemini API", "Chapa"],
      projectType: "Web App",
      featured: false,
      github: "https://github.com/melat-lema/thesis",
      live: "https://github.com/melat-lema/thesis",
      image: img7,
    },
    {
      id: 3,
      title: "Garage Management System",
      description: "A full-stack Garage Management System for managing customers, employees, services, and orders.",
      type: "web",
      tags: ["React", "Tailwindcss", "Node.js", "Express", "Postman", "MySQL", "JWT"],
      projectType: "Web App",
      featured: false,
      github: "https://github.com/melat-lema/garage-system",
      live: "https://garage-system-frontend.onrender.com/",
        image: img2,
    },
    {
      id: 4,
      title: "Nive",
      description: "Nive is a life tracker web app for managing notes, goals, expenses, and activities with tags, insights, and productivity monitoring.",
      type: "web",
      tags: ["React", "Node.js", "Postgres", "Express"],
      projectType: "Web App",
      featured: false,
      github: "https://github.com/melat-lema/nive-frontend",
      live: "https://nive-client.vercel.app/",
        image: img3,
    },
    {
      id: 5,
      title: "Amazon-Clone",
      description: "Amazon Clone",
      type: "web",
      tags: ["React", "Firebase", "Express", "Node.js"],
      projectType: "web App",
      featured: true,
      github: "https://github.com/melat-lema/amazon-clone",
      live: "https://amazon-clone-2-7m6u.onrender.com/",
        image: img5,
    },
    {
      id: 6,
      title: "Netflix-Clone",
      description: "Netflix-Clone.",
      type: "web",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      projectType: "web App",
      featured: false,
      github: "https://github.com/melat-lema/Netflix-Clone-2024",
      live: "https://melat-lema.github.io/Netflix-Clone-2024/",
        image: imgg,
    },
    {
      id: 7,
      title: "Nola-dev",
      description: "Nola-dev is a web app that connects users with the tech community to ask questions, share knowledge, and solve problems collaboratively.",
      type: "web",
      tags: ["React", "JWT", "Node.js", "Express", "MySQL"],
      projectType: "web App",
      featured: false,
      github: "https://github.com/melat-lema/Nola-Dev-client",
      live: "https://nola-dev-client.onrender.com/",
        image: img1,
    },
    {
      id: 8,
      title: "BUNA",
      description: "A coffee shop reservation system with user authentication, real-time booking, and admin management features.",
      type: "web",
      tags: ["React", "JWT", "Express", "Node.js", "MySQL"],
      projectType: "web App",
      featured: false,
      github: "https://github.com/melat-lema/Reservation_System",
      live: "https://github.com/melat-lema/Reservation_System",
      image: img8,
    },
    
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'web') return p.type === 'web';
    if (filter === 'android') return p.type === 'mobile';
    
    return true;
  });

  return (
    <div className="relative min-h-screen bg-[#0A0A12] flex flex-col items-center justify-center mt-32">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-gray-400 mt-2">Explore my creative journey through code and design</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === 'all'
              ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-white shadow-lg shadow-cyan-400/30'
              : 'bg-[#0E1018] text-white border border-[#2D2D44] hover:bg-[#334155]'
          }`}
        >
          <FaCode className="inline mr-1" /> All
        </button>
        <button
          onClick={() => setFilter('web')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === 'web'
              ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-white shadow-lg shadow-cyan-400/30'
              : 'bg-[#0E1018] text-white border border-[#2D2D44] hover:bg-[#334155]'
          }`}
        >
          <FaGlobe className="inline mr-1" /> Web
        </button>
        <button
          onClick={() => setFilter('android')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === 'android'
              ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-white shadow-lg shadow-cyan-400/30'
              : 'bg-[#0E1018] text-white border border-[#2D2D44] hover:bg-[#334155]'
          }`}
        >
          <FaMobileAlt className="inline mr-1" /> Android
        </button>
        
      </div>

      {/* Project Cards */}
      <div className="w-full px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
  key={project.id}
  className="group relative bg-[#0E1018] p-5 rounded-xl border border-[#2D2D44] shadow-lg 
             hover:shadow-[#00C4FF]/40 hover:scale-105 transition-all duration-300 
             overflow-hidden glow-blue glow-hover"
  style={{ minHeight: '200px' }}
>
  {/* Corner Decorations */}
  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

  {/* Gradient Background on Hover */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>

  {/* Vertical Line */}
  <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400"></div>

  {/* Project Type & Featured Tag */}
  <div className="flex items-center gap-2 mb-2">
    <span className="bg-[#2D2D44] px-2 py-1 rounded-full text-xs text-cyan-400 flex items-center gap-1">
      <FaGlobe className="text-cyan-400 text-xs" /> {project.projectType}
    </span>
    {project.featured && (
      <span className="bg-[#2D2D44] px-2 py-1 rounded-full text-xs text-green-400 flex items-center gap-1">
        <FaAward className="text-green-400 text-xs" /> Featured Project
      </span>
    )}
  </div>

  {/* Title */}
  <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>

  {/* Screenshot */}
  {project.image ? (
 <img
  src={project.image || myImage}
  alt={project.title}
  className="w-full max-h-60 object-contain rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
/>

) : (
  <img
    src={myImage}
    alt={project.title}
    className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300 opacity-60"
  />
)}


  {/* Description */}
  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

  {/* Tech Stack */}
  <div className="flex flex-wrap gap-2 mb-4">
    {project.tags.map((tag, i) => (
      <span
        key={i}
        className="bg-[#2D2D44] px-2 py-1 rounded-full text-xs text-gray-400"
      >
        {tag}
      </span>
    ))}
  </div>

  {/* Link Icons */}
  <div className="absolute bottom-4 right-4 flex gap-2">
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#2D2D44] p-1 rounded-full text-cyan-400 hover:bg-[#334155] transition-colors duration-200"
    >
      <FaGithub />
    </a>
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#2D2D44] p-1 rounded-full text-cyan-400 hover:bg-[#334155] transition-colors duration-200"
    >
      <FaExternalLinkAlt />
    </a>
  </div>
</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;