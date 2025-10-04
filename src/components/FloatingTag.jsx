import React, { useState, useEffect } from 'react';

const FloatingTag = ({ children, color, initialX, initialY, delay = 0 }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const animate = () => {
      // Gentle drift within a small range
      const dx = (Math.random() - 0.5) * 2; // ±1px
      const dy = (Math.random() - 0.5) * 2;

      setPosition(prev => {
        // Keep within reasonable bounds (optional)
        const newX = Math.max(50, Math.min(window.innerWidth - 150, prev.x + dx));
        const newY = Math.max(50, Math.min(250, prev.y + dy)); // Stay in top area
        return { x: newX, y: newY };
      });
    };

    const interval = setInterval(animate, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: 'rgba(30, 30, 46, 0.7)',
        color: color,
        border: `1px solid ${color}`,
        boxShadow: `0 0 10px ${color}40`,
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        pointerEvents: 'auto',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default FloatingTag;