import React, { useState, useEffect, useRef } from 'react';
import myImage from "../assets/img.jpg";

const About = () => {
  // Observe the whole section
   const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef} // ← Apply ref to the root div
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 py-12 md:py-20 gap-12 bg-[#0A0A12]"
    >
      {/* Left Side - Image & Heading */}
      <div className="w-full md:w-1/2 space-y-12 gap-12">
        {/* Heading */}
        <h2 className={`text-3xl md:text-4xl font-bold text-white transition-opacity duration-700 justify-center text-center
          ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          Developer, Creator,<br />Problem Solver!
        </h2>

        <div
          className="flex justify-center "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
          <img
            src={myImage}
            alt="Melat Lema"
            className="rounded-lg max-w-full h-auto shadow-2xl object-cover"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(0, 196, 255, 0.3))',
              maxHeight: '450px',
              width: 'auto',
            }}
          />
         

          {/* Hover Overlay - Only on Image */}
          <div
            className={`absolute inset-0 rounded-lg bg-black transition-opacity duration-300 ${
              isHovered ? 'opacity-50' : 'opacity-0'
            }`}
          ></div>

          {/* Name Overlay - At Bottom of Image */}
          <div
            className={`absolute bottom-4 left-4 right-4 text-white font-bold text-lg text-center transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
           Melat Lema
          </div>
           </div>
        </div>
      </div>

      

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 space-y-6 ">
        <div className="space-y-4 text-sm md:text-base max-w-2xl">
          <p>
  Hello! I’m Melat Lema, a full-stack developer specializing in building modern, responsive web applications with <strong>React, Node.js, and robust backend technologies</strong>. I’m passionate about crafting intuitive user interfaces and seamless user experiences.
</p>
<p>
  My focus is on making web development faster, efficient, and accessible. I enjoy creating dynamic frontend components, managing APIs and databases, and building scalable backend solutions to deliver robust and user-friendly applications.
</p>
<blockquote className="border-l-4 border-[#00C4FF] pl-4 mt-6 italic text-sm md:text-base">
  I’m a lifelong learner and innovator, driven by a desire to contribute to the developer community with tools and ideas that make development easier and impactful. I strive to push the boundaries of modern web development to empower developers worldwide.
</blockquote>

          <div className="mt-6">
            <p className="font-medium text-sm md:text-base">Melat Lema, </p>
            <div className="flex items-center gap-2 mt-2">
             
             <span className="text-[#00FF9D] text-sm md:text-base">Software Developer & Computer Engineer</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;