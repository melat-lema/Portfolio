import React, { useState, useEffect } from 'react';
import FloatingTag from './FloatingTag';
import useTypewriter from '../hooks/useTypewriter';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
  'Full-Stack Developer & UI/UX Enthusiast',
    'React Developer',
    'Network Engineer and It Support',
    'Java based mobile app developer',
    'Computer Engineer',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Create shooting stars
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';

      // Random direction (bottom-right quadrant)
      const angle = Math.random() * Math.PI / 2 + Math.PI / 4; // 45° to 135°
      const distance = 800 + Math.random() * 400;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      star.style.setProperty('--tx', `${tx}px`);
      star.style.setProperty('--ty', `${ty}px`);

      // Random start position (top-left area)
      star.style.left = `${-50 + Math.random() * 100}px`;
      star.style.top = `${-50 + Math.random() * 100}px`;

      // Random duration (2–5 seconds)
      const duration = 2 + Math.random() * 3;
      star.style.animation = `shoot ${duration}s linear forwards`;

      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    };

    const interval = setInterval(createShootingStar, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 py-12 md:py-20 gap-12">
      {/* Left Side */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Welcome Tag */}
        <div className="flex items-center gap-2 bg-[#1E1E2E] px-4 py-2 rounded-full text-sm">
          <div className="w-3 h-3 bg-[#00C4FF] rounded-full"></div>
          <span>Welcome to my world</span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-6xl">Hello</span>
            <span className="block gradient-text">I'm Melat Lema</span>
            {/* <span className="animate-pulse text-[#00C4FF]">|</span> */}
          </h1>
        </div>

        {/* Dynamic Title */}
        {/* Typewriter Title */}
<div className="dynamic-title">
  <span>{useTypewriter([
    'Full-Stack Developer & UI/UX Enthusiast',
    'React Developer',
    'Network Engineer and It Support',
    'Java based mobile developer',
    'Learning Flutter',
  ], 80, 40)}</span>
  <span className="cursor">|</span>
</div>
        {/* Tags */}
        {/* Floating Tags */}
{/* Floating Tags - Upper Part */}
<div className="absolute top-0 left-0 w-full h-[30vh] pointer-events-none">
  <FloatingTag color="#B36CFE" initialX={100} initialY={80} delay={0}>
    Engineer
  </FloatingTag>
  <FloatingTag color="#FFC700" initialX={600} initialY={220} delay={1}>
    Innovation
  </FloatingTag>
  <FloatingTag color="#00C4FF" initialX={500} initialY={60} delay={2}>
    Clean Code
  </FloatingTag>
</div>

        {/* Subtitle */}
        <p className="text-lg mt-4">
          Software Developer 🚀 | Computer Engineer 🔧 | Problem Solver and Tech Enthusiatic 💻✨
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="btn btn-primary">
            <Link to ="https://github.com/melat-lema"> Learn More</Link>
            
          </button>
          <button className="btn btn-secondary">
            <Link to ="https://drive.google.com/file/d/1oATN5yN7pmx5m6Rnb7fqrDbd_kRxldqF/view?usp=drivesdk">
            Get Resume</Link>
            
          </button>
        </div>
      </div>

      {/* Right Side - Code Block */}
      <div className="w-full md:w-1/2 relative">
        <div className="bg-code-bg p-6 rounded-xl border-2 border-[#00C4FF] shadow-lg relative overflow-hidden glow-blue">
          {/* Window Controls */}
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-sm space-y-1">
            <div><span className="code-keyword">const</span> <span className="code-comment">profile</span> = &#123;</div>
            <div className="pl-4"><span className="code-property">name</span>: <span className="code-string">'Melat Lema'</span>,</div>
            <div className="pl-4"><span className="code-property">title</span>: <span className="code-string">'{titles[currentTitle]}'</span>,</div>
            <div className="pl-4"><span className="code-property">skills</span>: [</div>
            <div className="pl-8"><span className="code-string">'React'</span>, <span className="code-string">'NextJS'</span>, <span className="code-string">'Postgres'</span>, <span className="code-string">'Express'</span>, <span className="code-string">'Firebase'</span>,</div>
            <div className="pl-8"><span className="code-string">'Node.js'</span>, <span className="code-string">'MongoDB'</span>, <span className="code-string">'MySQL'</span>, <span className="code-string">'Tailwindcss'</span>, <span className="code-string">'Prisma'</span>, <span className="code-string">'Postman'</span>,</div>
            <div className="pl-8"><span className="code-string">'Git'</span>, <span className="code-string">'Javascript'</span></div>
            <div className="pl-4">],</div>
            <div className="pl-4"><span className="code-property">hardWorker</span>: <span className="code-number">true</span>,</div>
            <div className="pl-4"><span className="code-property">quickLearner</span>: <span className="code-number">true</span>,</div>
            <div className="pl-4"><span className="code-property">problemSolver</span>: <span className="code-number">true</span>,</div>
            <div className="pl-4"><span className="code-property">yearsOfExperience</span>: <span className="code-number">2</span>,</div>
            <div className="pl-4"><span className="code-property">hireable</span>: <span className="code-function">function</span>() &#123;</div>
            <div className="pl-8"><span className="code-function">return</span> (</div>
            <div className="pl-12"><span className="code-property">this.hardWorker</span> &amp;&amp;</div>
            <div className="pl-12"><span className="code-property">this.problemSolver</span> &amp;&amp;</div>
            <div className="pl-12"><span className="code-property">this.skills.length</span> &gt;= <span className="code-number">2</span> &amp;&amp;</div>
            <div className="pl-12"><span className="code-property">this.yearsOfExperience</span> &gt;= <span className="code-number">1</span></div>
            <div className="pl-8">);</div>
            <div className="pl-4">&#125;</div>
            <div>&#125;;</div>
          </div>
        </div>
      </div>

      {/* Static Stars */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#00C4FF] rounded-full opacity-70 animate-twinkle"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Hero;