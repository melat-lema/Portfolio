import React, { useEffect } from 'react';

const ShootingStar = ({ delay }) => {
  useEffect(() => {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${delay}s`;

    document.body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 4000);
  }, [delay]);

  return null;
};

export default ShootingStar;