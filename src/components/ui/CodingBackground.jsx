import React, { useEffect, useRef } from 'react';

const CodingBackground = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Characters list: binary, hex, and programming braces
    const chars = "0101010101010101<>{}[]/\\+=;*&^%$#@!".split("");
    const fontSize = 10; // Smaller font for dense, refined texture
    const columns = Math.floor(width / fontSize);

    // Track vertical positions of drops
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Staggered drop start positions
    }

    const draw = () => {
      // Semi-transparent overlay to create fading trails
      ctx.fillStyle = theme === 'dark' ? 'rgba(3, 7, 18, 0.08)' : 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(0, 0, width, height);

      // Set monospaced styling
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Pick random character
        const char = chars[Math.floor(Math.random() * chars.length)];

        // Set colors dynamically based on theme
        if (theme === 'dark') {
          // Dark Mode: Deep indigo/violet code streams with glowing neon highlights
          const isHighlight = Math.random() > 0.98;
          ctx.fillStyle = isHighlight 
            ? 'rgba(129, 140, 248, 0.45)' // Glowing neon blue-indigo
            : 'rgba(99, 102, 241, 0.07)';  // Subtle background code trace
        } else {
          // Light Mode: Barely visible soft silver/gray code streams
          const isHighlight = Math.random() > 0.98;
          ctx.fillStyle = isHighlight
            ? 'rgba(156, 163, 175, 0.15)'
            : 'rgba(209, 213, 219, 0.03)';
        }

        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Update drop position
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      // Re-initialize drop columns on screen resize
      const newColumns = Math.floor(width / fontSize);
      while (drops.length < newColumns) {
        drops.push(Math.random() * -100);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-20 w-full h-full"
    />
  );
};

export default CodingBackground;
