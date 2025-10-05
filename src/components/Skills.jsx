import React, { useEffect, useRef } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaAws,
  FaLinux,
  FaNetworkWired, FaServer, FaCloud,FaLaptopCode 
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiVercel,
  SiVite,
  SiRedux,
  SiHtml5,
  SiCss3,
   SiNextdotjs ,
  SiWebpack,
  SiFigma,
 
  SiJavascript,
  SiPostgresql,
  SiSwagger,
  SiNetlify,
  SiDocker,
  SiCisco
} from 'react-icons/si';

const Skills = () => {
  const sphereRef = useRef(null);

  useEffect(() => {
    let angleY = 0;
    let angleX = 20;

    const animate = () => {
      angleY += 0.3;
      sphereRef.current.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const skills = [
    <FaReact className="text-[#61DAFB] text-4xl" />,
    <FaNodeJs className="text-[#339933] text-4xl" />,
    <SiTypescript className="text-[#3178C6] text-4xl" />,
    <SiTailwindcss className="text-[#06B6D4] text-4xl" />,
    <FaPython className="text-[#3776AB] text-4xl" />,
    <SiMongodb className="text-[#47A248] text-4xl" />,
    <SiExpress className="text-white text-4xl" />,
    <FaAws className="text-[#FF9900] text-4xl" />,
    <FaGitAlt className="text-[#F05032] text-4xl" />,
    <FaLinux className="text-[#FCC624] text-4xl" />,
    <SiFirebase className="text-[#FFCA28] text-4xl" />,
    <SiVercel className="text-white text-4xl" />,
    <SiVite className="text-[#646CFF] text-4xl" />,
    <SiRedux className="text-[#764ABC] text-4xl" />,
  ];

  const radius = 180;
  const iconElements = skills.map((icon, i) => {
    const phi = Math.acos(-1 + (2 * i) / skills.length);
    const theta = Math.sqrt(skills.length * Math.PI) * phi;
    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);
    return (
      <div
        key={i}
        className="absolute"
        style={{ transform: `translate3d(${x}px, ${y}px, ${z}px)` }}
      >
        {icon}
      </div>
    );
  });

  return (
    <div className="relative min-h-screen bg-[#0A0A12] flex flex-col items-center justify-center">
      {/* Sphere */}
      <div
        ref={sphereRef}
        className="relative h-[200px] w-[500px] preserve-3d lg:mt-80 md:mt-80 sm:mt-80 mt-60"
        style={{ transformStyle: "preserve-3d" }}
      >
        {iconElements}
      </div>

      {/* Skill Cards */}
      <div className="px-8 py-12 md:py-20 gap-12 bg-[#0A0A12] mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend Development */}
          <div className="bg-[#0E1018] p-6 rounded-xl border border-[#00C4FF] shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
  <FaLaptopCode className="text-blue-400 text-2xl" />
  <h3 className="text-xl font-semibold text-white">Frontend Development</h3>
</div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-blue-400 flex items-center gap-1 border border-[#00C4FF]/30">
                <FaReact className="text-[#61DAFB] text-xs" /> React
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-blue-400 flex items-center gap-1 border border-[#00C4FF]/30">
                < SiNextdotjs  className="text-[#000000] text-xs" /> Next.js
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-blue-400 flex items-center gap-1 border border-[#00C4FF]/30">
                <SiJavascript className="text-[#3178C6] text-xs" /> JavaScript
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-blue-400 flex items-center gap-1 border border-[#00C4FF]/30">
                <SiTailwindcss className="text-[#06B6D4] text-xs" /> Tailwind CSS
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-blue-400 flex items-center gap-1 border border-[#00C4FF]/30">
                <SiHtml5 className="text-[#E44D26] text-xs" /> HTML5
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-blue-400 flex items-center gap-1 border border-[#00C4FF]/30">
                <SiCss3 className="text-[#1572B6] text-xs" /> CSS3
              </span>
            </div>
          </div>

          {/* Backend Development */}
          <div className="bg-[#0E1018] p-6 rounded-xl border border-[#339933] shadow-lg hover:shadow-green-500/30 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
  <FaServer className="text-blue-400 text-2xl" />
  <h3 className="text-xl font-semibold text-white">Backend Development</h3>
</div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-green-400 flex items-center gap-1 border border-[#339933]/30">
                <FaNodeJs className="text-[#339933] text-xs" /> Node.js
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-green-400 flex items-center gap-1 border border-[#339933]/30">
                <FaPython className="text-[#3776AB] text-xs" /> Python
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-green-400 flex items-center gap-1 border border-[#339933]/30">
                <SiMongodb className="text-[#47A248] text-xs" /> MongoDB
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-green-400 flex items-center gap-1 border border-[#339933]/30">
                <SiExpress className="text-white text-xs" /> Express.js
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-green-400 flex items-center gap-1 border border-[#339933]/30">
                <SiSwagger className="text-[#FF9900] text-xs" /> REST APIs
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-green-400 flex items-center gap-1 border border-[#339933]/30">
                <SiPostgresql className="text-[#339933] text-xs" /> Postgres
              </span>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="bg-[#0E1018] p-6 rounded-xl border border-[#764ABC] shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#0E1018] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">UI/UX Design</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-purple-400 flex items-center gap-1 border border-[#764ABC]/30">
                <SiFigma className="text-[#F24E1E] text-xs" /> Figma
              </span>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="bg-[#0E1018] p-6 rounded-xl border border-[#F05032] shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#0E1018] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Cloud & DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-orange-400 flex items-center gap-1 border border-[#F05032]/30">
                <FaGitAlt className="text-[#F05032] text-xs" /> Git
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-orange-400 flex items-center gap-1 border border-[#F05032]/30">
                <FaAws className="text-[#FCC624] text-xs" /> Aws
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-orange-400 flex items-center gap-1 border border-[#F05032]/30">
                <SiNetlify className="text-[#FCC624] text-xs" /> Netlify
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-orange-400 flex items-center gap-1 border border-[#F05032]/30">
                <SiDocker className="text-[#FCC624] text-xs" /> Docker
              </span>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-[#0E1018] p-6 rounded-xl border border-[#FFCA28] shadow-lg hover:shadow-yellow-500/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#0E1018] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Tools & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {/* <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-yellow-400 flex items-center gap-1 border border-[#FFCA28]/30">
                <SiVscode className="text-[#007ACC] text-xs" /> VS Code
              </span> */}
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-yellow-400 flex items-center gap-1 border border-[#FFCA28]/30">
                <FaAws className="text-[#C21325] text-xs" /> AWS
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-yellow-400 flex items-center gap-1 border border-[#FFCA28]/30">
                <SiWebpack className="text-[#8DD6F9] text-xs" /> Webpack
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-yellow-400 flex items-center gap-1 border border-[#FFCA28]/30">
                <SiRedux className="text-[#764ABC] text-xs" /> Redux
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-yellow-400 flex items-center gap-1 border border-[#FFCA28]/30">
                <SiFirebase className="text-[#FFCA28] text-xs" /> Firebase
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-yellow-400 flex items-center gap-1 border border-[#FFCA28]/30">
                <SiVercel className="text-white text-xs" /> Vercel
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-yellow-400 flex items-center gap-1 border border-[#FFCA28]/30">
                <SiVite className="text-[#646CFF] text-xs" /> Vite
              </span>
            </div>
          </div>

          {/* Creative Skills */}
          <div className="bg-[#0E1018] p-6 rounded-xl border border-[#4ECDC4] shadow-lg hover:shadow-teal-500/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#0E1018] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Network Engineering</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-teal-400 flex items-center gap-1 border border-[#4ECDC4]/30">
                <FaNetworkWired className="text-[#F24E1E] text-xs" /> Networking
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-teal-400 flex items-center gap-1 border border-[#4ECDC4]/30">
                <FaServer className="text-[#4ECDC4] text-xs" /> Servers
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-teal-400 flex items-center gap-1 border border-[#4ECDC4]/30">
                <SiCisco className="text-[#96CEB4] text-xs" /> Cisco
              </span>
              <span className="bg-[#2D2D44] px-3 py-1 rounded-full text-xs text-teal-400 flex items-center gap-1 border border-[#4ECDC4]/30">
                <FaCloud className="text-[#96CEB4] text-xs" /> Clouds
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;