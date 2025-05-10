import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Fallback to ensure content is visible after 1 second, even if animation doesn't trigger
    const timeout = setTimeout(() => {
      const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
      elements?.forEach((el) => {
        if (!el.classList.contains('animate-fade-in-up')) {
          el.classList.add('animate-fade-in-up');
        }
      });
    }, 1000);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearTimeout(timeout);
    };
  }, []);
  
  const funFacts = [
    { title: "Favorite Movie", aarav: "The Shawshank Redemption", meher: "Amélie" },
    { title: "First Meal Together", aarav: "Street food at Juhu Beach", meher: "Masala Chai & Samosas" },
    { title: "Hidden Talents", aarav: "Playing the guitar", meher: "Painting watercolors" },
    { title: "Love Languages", aarav: "Acts of Service", meher: "Quality Time" }
  ];
  
  return (
    <section id={id} ref={sectionRef} className="py-20 bg-ivory-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Aarav & Meher"
          subtitle="Two souls, one beautiful journey"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Aarav's Profile */}
          <div className="animate-on-scroll opacity-0 transition-opacity duration-500">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Aarav" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-dancing text-3xl text-plum-800 mb-4">Aarav Sharma</h3>
                <p className="font-quicksand text-plum-600 mb-6">
                  A passionate architect with a love for travel and music. When not designing buildings, Aarav can be found exploring hidden corners of the city, strumming his guitar, or trying out new recipes in the kitchen. His infectious laugh and ability to find joy in the smallest things won Meher's heart.
                </p>
                <div className="flex justify-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Signature_example.svg/1200px-Signature_example.svg.png" 
                    alt="Aarav's signature" 
                    className="h-12 opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Meher's Profile */}
          <div className="animate-on-scroll opacity-0 transition-opacity duration-500">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Meher" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-dancing text-3xl text-plum-800 mb-4">Meher Patel</h3>
                <p className="font-quicksand text-plum-600 mb-6">
                  A dedicated pediatrician with a heart of gold. Meher finds magic in everyday life - whether it's through painting, writing poetry, or spending time with children at the hospital. Her warm smile and compassionate nature are what first caught Aarav's attention, making him realize she was the one.
                </p>
                <div className="flex justify-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Hillary_Rodham_Clinton_signature.svg" 
                    alt="Meher's signature" 
                    className="h-12 opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Fun Facts Carousel */}
        <div className="max-w-4xl mx-auto animate-on-scroll opacity-0 transition-opacity duration-500">
          <h3 className="font-dancing text-3xl text-plum-800 text-center mb-8">Fun Facts About Us</h3>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {funFacts.map((fact, index) => (
                <div key={index} className="p-4 border border-plum-100 rounded-lg">
                  <h4 className="font-quicksand font-semibold text-plum-700 text-lg mb-3">{fact.title}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-blush-50 rounded-lg">
                      <p className="font-quicksand text-sm text-plum-800 font-semibold mb-1">Aarav</p>
                      <p className="font-quicksand text-plum-700">{fact.aarav}</p>
                    </div>
                    <div className="p-3 bg-mint-50 rounded-lg">
                      <p className="font-quicksand text-sm text-plum-800 font-semibold mb-1">Meher</p>
                      <p className="font-quicksand text-plum-700">{fact.meher}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;