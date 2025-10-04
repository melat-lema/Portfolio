import React, { useState } from 'react';
import {
  HomeIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: <HomeIcon className="h-5 w-5" />, path: '/' },
    { name: 'Skills', icon: <CodeBracketIcon className="h-5 w-5" />, path: '/skills' },
    { name: 'Experience', icon: <BriefcaseIcon className="h-5 w-5" />, path: '/experience' },
    { name: 'Education', icon: <AcademicCapIcon className="h-5 w-5" />, path: '/education' },
    { name: 'Projects', icon: <ComputerDesktopIcon className="h-5 w-5" />, path: '/projects' },
    { name: 'Contact', icon: <EnvelopeIcon className="h-5 w-5" />, path: '/contact' },
  ];

  // Get active item based on current URL
  const activeItem = navItems.find(item => item.path === location.pathname) || navItems[0];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div
          className="rounded-full p-[2.5px]"
          style={{
            background: "linear-gradient(90deg, rgba(0,196,255,1) 0%, rgba(124,92,255,1) 100%)",
            boxShadow: "0 12px 30px rgba(2,8,23,0.55), 0 8px 40px rgba(0,196,255,0.06)",
          }}
        >
          <ul
            className="flex items-center gap-4 rounded-full px-6 py-2 text-white"
            style={{
              background: "linear-gradient(180deg, #071226 0%, #0f2030 100%)",
              minHeight: 56,
              boxShadow: "inset 0 -6px 18px rgba(2,8,23,0.6)",
            }}
          >
            {navItems.map((item) => {
              const isActive = item.path === location.pathname;
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer select-none transition-all duration-200"
                    style={
                      isActive
                        ? {
                            background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                            color: "#00C4FF",
                            boxShadow: "inset 0 3px 8px rgba(0,0,0,0.5), 0 8px 20px rgba(0,196,255,0.06)",
                          }
                        : {}
                    }
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="opacity-90">{item.icon}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* MOBILE NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 md:hidden">
        {/* Cyan top border */}
        <div className="h-1 bg-[#00C4FF]"></div>

        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b-2 border-[#00C4FF]"
          style={{ background: "#0A0A12" }}
        >
          <h1 className="text-white font-semibold text-lg">Portfolio</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: "#0A0A12" }}
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => {
              const isActive = item.path === location.pathname;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all ${
                    isActive ? "text-[#00C4FF] font-semibold" : "text-white/90"
                  }`}
                  style={
                    isActive
                      ? { background: "rgba(0, 196, 255, 0.1)" }
                      : { background: "transparent" }
                  }
                >
                  <span className={isActive ? "text-[#00C4FF]" : "text-white/80"}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Add space below mobile navbar */}
        <div className="h-16 bg-[#0A0A12]"></div>
      </nav>
    </>
  );
};

export default Navbar;