import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import FloatingParticles from '../components/FloatingParticles';

interface HeroProps {
  onScrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  const [showContent, setShowContent] = useState(false);
  
  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-plum-900/60 via-plum-800/40 to-plum-900/60"></div>
      </div>
      
      {/* Floating particles overlay */}
      <FloatingParticles />
      
      {/* Hero content */}
      <div className={`container mx-auto px-4 relative z-10 text-center transition-opacity duration-1000 ease-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-dancing text-5xl md:text-7xl lg:text-8xl text-ivory-100 mb-6 animate-fade-in">
            Aarav & Meher
          </h1>
          
          <div className="w-24 h-1 bg-gold-400 mx-auto my-6 animate-fade-in-down"></div>
          
          <h2 className="font-quicksand text-2xl md:text-3xl text-ivory-100 mb-8 animate-fade-in-down" style={{ animationDelay: '0.3s' }}>
            A Tale of Forever
          </h2>
          
          <p className="font-quicksand text-xl md:text-2xl text-ivory-200 mb-10 animate-fade-in-down" style={{ animationDelay: '0.6s' }}>
            February 14, 2026 – Royal Heritage Resort, Mumbai
          </p>
          
          <div className="animate-fade-in-down" style={{ animationDelay: '0.9s' }}>
            <Button 
              onClick={onScrollDown} 
              className="animate-bounce-slow shadow-lg shadow-plum-900/20"
            >
              Save The Date
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;