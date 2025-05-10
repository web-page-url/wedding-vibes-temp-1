import React, { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

export const ConfettiExplosion: React.FC = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  
  useEffect(() => {
    const colors = ['#F9385B', '#E6E6D9', '#5D3979', '#27B89D', '#F4A612'];
    const totalConfetti = 200;
    const newConfetti: Confetti[] = [];
    
    for (let i = 0; i < totalConfetti; i++) {
      newConfetti.push({
        id: i,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 15,
        speedY: (Math.random() - 0.5) * 15,
        opacity: 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      });
    }
    
    setConfetti(newConfetti);
    
    // Animation
    let animationFrameId: number;
    let startTime = Date.now();
    
    const updateConfetti = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000; // seconds
      
      setConfetti(prev => 
        prev.map(c => {
          // Apply gravity
          const newSpeedY = c.speedY + 0.2;
          
          // Update positions
          const newX = c.x + c.speedX;
          const newY = c.y + newSpeedY;
          
          // Fade out over time
          const newOpacity = Math.max(0, c.opacity - 0.005);
          
          return {
            ...c,
            x: newX,
            y: newY,
            speedY: newSpeedY,
            opacity: newOpacity,
            rotation: c.rotation + c.rotationSpeed
          };
        }).filter(c => c.opacity > 0) // Remove invisible confetti
      );
      
      // Stop animation when all confetti are gone or after a certain time
      if (elapsed < 5) {
        animationFrameId = requestAnimationFrame(updateConfetti);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateConfetti);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map(c => (
        <div
          key={c.id}
          className="absolute"
          style={{
            left: `${c.x}px`,
            top: `${c.y}px`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            backgroundColor: c.color,
            opacity: c.opacity,
            transform: `rotate(${c.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}
    </div>
  );
};