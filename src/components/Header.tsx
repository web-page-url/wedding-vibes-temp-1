import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time until wedding
  useEffect(() => {
    const weddingDate = new Date('February 14, 2026 09:00:00').getTime();
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (section: string) => {
    setIsMenuOpen(false);
    onNavigate(section);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Our Story', id: 'story' },
    { label: 'Events', id: 'events' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'RSVP', id: 'rsvp' },
    { label: 'Travel', id: 'travel' },
    { label: 'FAQs', id: 'faqs' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-ivory-50/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Heart className={`h-6 w-6 ${isScrolled ? 'text-plum-600' : 'text-ivory-100'} transition-colors duration-300`} fill="currentColor" />
          <span className={`font-dancing text-2xl ${isScrolled ? 'text-plum-600' : 'text-ivory-100'} transition-colors duration-300`}>
            A & M
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`font-quicksand text-sm font-medium ${isScrolled ? 'text-plum-700 hover:text-plum-900' : 'text-ivory-100 hover:text-white'} transition-colors duration-300`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Countdown Widget - Desktop */}
        <div className="hidden md:flex items-center">
          <div className={`font-quicksand text-sm font-medium ${isScrolled ? 'text-plum-700' : 'text-ivory-100'} transition-colors duration-300`}>
            <span className="mr-2">Counting down:</span>
            <span className="font-bold">{countdown.days}d {countdown.hours}h {countdown.minutes}m {countdown.seconds}s</span>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-plum-700' : 'text-ivory-100'} transition-colors duration-300`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-plum-700' : 'text-ivory-100'} transition-colors duration-300`} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-ivory-50/95 backdrop-blur-sm shadow-md py-4 animate-fade-in-down">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map(item => (
              <button 
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="font-quicksand text-plum-700 hover:text-plum-900 text-lg text-left py-2 border-b border-plum-100"
              >
                {item.label}
              </button>
            ))}
            
            {/* Countdown Widget - Mobile */}
            <div className="font-quicksand text-sm font-medium text-plum-700 py-4 border-t border-plum-100 mt-2">
              <span className="mr-2">Counting down:</span>
              <div className="font-bold mt-1">
                {countdown.days} days, {countdown.hours} hours, {countdown.minutes} min, {countdown.seconds} sec
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;