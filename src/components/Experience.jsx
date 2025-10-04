import React, { useState } from 'react';
import {
  FaCode,
  FaUsers,
  FaGlobe,
  FaMobileAlt,
  FaCubes,
  FaCalendarAlt,
  FaFolderOpen,
  FaGithub,
} from 'react-icons/fa';

const Experience = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      company: "Nile Technologies",
      period: "Apr 2025 - Jul 2025",
      description: "Developed and optimized frontend interfaces for an Electronic Health Record (EHR) system using modern web technologies. Collaborated with backend engineers to improve usability, ensure responsive design, and enhance overall system performance.",
      type: "development",
      tags: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "UI/UX"],
      icon: <FaFolderOpen className="text-cyan-400 text-4xl" />,
      projectType: "Web Project",
      featured: true,
    },
    {
      id: 2,
      title: "Network Engineer and IT Support",
      company: "Sidama Science and Technology",
      period: "Sep 2024 - Jan 2025",
      description: "Supported ICT team in configuring and maintaining LAN/WAN infrastructure,troubleshooting networks, and providing technical support for hardware/software. Gained hands-on experience with TCP/IP diagnostics,secure system setup, and IT asset management.",
      type: "development",
      tags: ["Cisco", "Server", "System configuration", "Network Design"],
      icon: <FaGlobe className="text-cyan-400 text-4xl" />,
      projectType: "Web Project",
      featured: false,
    },
    {
      id: 3,
      title: "Software Developer",
      company: "Peak Craft Club",
      period: "2024 - 2025",
      description: "An educational technology platform providing interactive learning experiences with comprehensive features for online education.",
      type: "web",
      tags: ["React", "Tailwindcss", "Express.js", "MySql", "Node.js"],
      icon: <FaGlobe className="text-cyan-400 text-4xl" />,
      projectType: "Web Project",
      featured: true,
    },
    {
      id: 4,
      title: "AI Powered E-Learning platform",
      company: "Hawassa University",
      period: "2025",
      description: "Built a full-stack web platform with student dashboards, teacher tools, real-time chat, payment system and AI-generated learning materials using Gemini API.",
      type: "web",
      tags: ["Next.js", "Postgres", "Postman", "Chapa", "GeminiAPI"],
      icon: <FaFolderOpen className="text-cyan-400 text-4xl" />,
      projectType: "Web Project",
      featured: false,
    },
  
    {
      id: 6,
      title: "Herbal Medication Mobile App",
      company: "Research",
      period: "2024 - 2025",
      description: "Built a cross-platform Android app connecting users with traditional healers, featuring secure authentication, real-time chat, and multilanguage translation. Designed a searchable herbal medicine database with detailed usage insights to improve accessibility of traditional health support.",
      type: "mobile",
      tags: ["Java", "Firebase"],
      icon: <FaMobileAlt className="text-cyan-400 text-4xl" />,
      projectType: "Android Project",
      featured: false,
    },
    
    {
      id: 9,
      title: "Garage System",
      company: "Garage",
      period: "2025",
      description: "A full-stack Garage Management System for managing customers, employees, services, and orders. Built with Node.js, Express, MySQL, React, it helps streamline daily garage operations like bookings, registration, and inventory.",
      type: "freelance",
      tags: ["Node.js", "Tailwindcss", "React", "MySql", "Express.js"],
      icon: <FaCubes className="text-cyan-400 text-4xl" />,
      projectType: "development",
      featured: false,
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'development') return p.type === 'development';
    if (filter === 'freelance') return p.type === 'freelance';
    if (filter === 'web') return p.type === 'web';
    if (filter === 'mobile') return p.type === 'mobile';
    if (filter === 'npm') return p.type === 'npm';
    return true;
  });

  return (
    <div className="relative min-h-screen bg-[#0A0A12] flex flex-col items-center justify-center mt-32">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Professional Journey
        </h1>
        <p className="text-gray-400 mt-2">"Transforming ideas into digital reality, one project at a time"</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-8 px-4">
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
          onClick={() => setFilter('development')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === 'development'
              ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-white shadow-lg shadow-cyan-400/30'
              : 'bg-[#0E1018] text-white border border-[#2D2D44] hover:bg-[#334155]'
          }`}
        >
          <FaCode className="inline mr-1" /> Development
        </button>
        <button
          onClick={() => setFilter('freelance')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === 'freelance'
              ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-white shadow-lg shadow-cyan-400/30'
              : 'bg-[#0E1018] text-white border border-[#2D2D44] hover:bg-[#334155]'
          }`}
        >
          <FaUsers className="inline mr-1" /> Freelance
        </button>
        <button
          onClick={() => setFilter('web')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === 'web'
              ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-white shadow-lg shadow-cyan-400/30'
              : 'bg-[#0E1018] text-white border border-[#2D2D44] hover:bg-[#334155]'
          }`}
        >
          <FaGlobe className="inline mr-1" /> Web Projects
        </button>
        <button
          onClick={() => setFilter('mobile')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === 'mobile'
              ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-white shadow-lg shadow-cyan-400/30'
              : 'bg-[#0E1018] text-white border border-[#2D2D44] hover:bg-[#334155]'
          }`}
        >
          <FaMobileAlt className="inline mr-1" /> Mobile Projects
        </button>
        
      </div>

      {/* Project Cards — Wrapped in px-4 container */}
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0E1018] p-6 rounded-xl border border-[#2D2D44] shadow-lg 
                         hover:shadow-[#00C4FF]/40 hover:scale-105 transition-all duration-300 
                         relative overflow-hidden glow-blue glow-hover"
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

              {/* Icon */}
              <div className="mb-4">{project.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>

              {/* Company & Period */}
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#2D2D44] px-2 py-1 rounded-full text-xs text-gray-400 flex items-center gap-1">
                  <FaFolderOpen className="text-cyan-400 text-xs" /> {project.company}
                </span>
                <span className="bg-[#2D2D44] px-2 py-1 rounded-full text-xs text-gray-400 flex items-center gap-1">
                  <FaCalendarAlt className="text-cyan-400 text-xs" /> {project.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#2D2D44] px-2 py-1 rounded-full text-xs text-cyan-400">
                  {project.projectType}
                </span>
                {project.featured && (
                  <span className="bg-[#2D2D44] px-2 py-1 rounded-full text-xs text-green-400">
                    Featured Project
                  </span>
                )}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
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
                <button className="bg-[#2D2D44] p-1 rounded-full text-cyan-400 hover:bg-[#334155] transition-colors duration-200">
                  <FaCode />
                </button>
                <button className="bg-[#2D2D44] p-1 rounded-full text-cyan-400 hover:bg-[#334155] transition-colors duration-200">
                  <FaGithub />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;