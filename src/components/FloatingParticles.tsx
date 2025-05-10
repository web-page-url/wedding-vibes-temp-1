import React, { useEffect } from 'react';

interface Particle {
  element: HTMLDivElement;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

const FloatingParticles: React.FC = () => {
  useEffect(() => {
    const particleContainer = document.getElementById('particle-container');
    const particles: Particle[] = [];
    const numParticles = 15; // Adjust based on screen size
    
    if (!particleContainer) return;
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
      const size = Math.random() * 20 + 10;
      const particle = document.createElement('div');
      
      particle.className = 'absolute rounded-full bg-ivory-100/30 backdrop-blur-sm';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Randomly decide if this will be a heart or a circle
      if (Math.random() > 0.6) {
        particle.innerHTML = '❤️';
        particle.className = 'absolute text-center flex items-center justify-center';
        particle.style.fontSize = `${size}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
      }
      
      particleContainer.appendChild(particle);
      
      particles.push({
        element: particle,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * -1 - 0.5, // Negative to move upward
        opacity: Math.random() * 0.5 + 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2
      });
    }
    
    // Update particles
    const updateParticles = () => {
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        
        // Reset if out of view
        if (p.y < -p.size * 2) {
          p.y = window.innerHeight + p.size;
          p.x = Math.random() * window.innerWidth;
        }
        
        // Apply position
        p.element.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg)`;
        p.element.style.opacity = p.opacity.toString();
      });
      
      requestAnimationFrame(updateParticles);
    };
    
    updateParticles();
    
    // Cleanup
    return () => {
      particles.forEach(p => p.element.remove());
    };
  }, []);
  
  return (
    <div id="particle-container" className="absolute inset-0 pointer-events-none overflow-hidden" />
  );
};

export default FloatingParticles;