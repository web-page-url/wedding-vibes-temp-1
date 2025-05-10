import React, { useEffect, useRef, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { storyChapters } from '../data/storyData';

interface StoryProps {
  id: string;
}

const Story: React.FC<StoryProps> = ({ id }) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  
  // Set up timeline refs
  useEffect(() => {
    timelineRefs.current = timelineRefs.current.slice(0, storyChapters.length);
  }, []);
  
  // Scroll observation for timeline points and update line height
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = timelineRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveChapter(index);
              
              // Update timeline line height based on active chapter
              if (timelineLineRef.current) {
                const dots = timelineRefs.current.slice(0, index + 1).filter(Boolean);
                if (dots.length) {
                  const lastDot = dots[dots.length - 1];
                  if (lastDot) {
                    const lineRect = timelineLineRef.current.getBoundingClientRect();
                    const dotRect = lastDot.getBoundingClientRect();
                    
                    // Calculate the relative position
                    const lineTop = lineRect.top;
                    const dotTop = dotRect.top;
                    const relativePosition = dotTop - lineTop;
                    
                    // Set height to reach only the current active dot
                    timelineLineRef.current.style.height = `${relativePosition}px`;
                  }
                }
              }
            }
          }
        });
      },
      { threshold: 0.7, rootMargin: '-100px 0px -100px 0px' }
    );
    
    timelineRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      timelineRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section id={id} ref={sectionRef} className="py-20 bg-plum-800 text-ivory-100">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Storybook"
          subtitle="The chapters of our love story"
          light
        />
        
        <div className="relative mt-16">
          {/* Desktop Timeline line - with gradient effect - only shows to active point */}
          <div 
            ref={timelineLineRef} 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-gold-300 via-gold-400 to-gold-300 hidden md:block"
            style={{ height: '0%', transition: 'height 0.8s ease-out' }}
          ></div>
          
          {/* Timeline chapters */}
          <div className="timeline-container">
            {storyChapters.map((chapter, index) => {
              const isEven = index % 2 === 0;
              const isActive = index <= activeChapter;
              
              return (
                <div 
                  key={chapter.id}
                  ref={el => timelineRefs.current[index] = el}
                  className={`relative mb-32 last:mb-0 md:mb-36 timeline-item ${isActive ? 'timeline-active' : 'timeline-inactive'}`}
                >
                  {/* Animated timeline dot - Desktop only */}
                  <div 
                    className={`
                      absolute left-1/2 transform -translate-x-1/2 
                      w-8 h-8 rounded-full 
                      border-[3px] ${isActive ? 'border-gold-400' : 'border-gray-500'} 
                      shadow-[0_0_15px_rgba(244,166,18,0.5)]
                      ${isActive ? 'bg-plum-900' : 'bg-plum-800'}
                      hidden md:flex items-center justify-center
                      z-20 transition-all duration-700
                      ${activeChapter === index ? 'scale-125 border-gold-300' : ''}
                    `}
                  >
                    {/* Inner pulse effect */}
                    <div className={`
                      absolute w-3 h-3 rounded-full 
                      ${isActive ? 'bg-gold-300' : 'bg-gray-400'} 
                      ${activeChapter === index ? 'animate-pulse' : ''}
                    `}></div>
                  </div>
                  
                  {/* Date bubble - Desktop only */}
                  <div 
                    className={`
                      absolute top-0 
                      ${isEven ? 'left-[calc(50%+2rem)]' : 'right-[calc(50%+2rem)]'} 
                      hidden md:block
                      transform ${isEven ? 'translate-x-2' : '-translate-x-2'} -translate-y-1/2
                      ${isActive ? 'bg-gold-400/90' : 'bg-gray-400/80'} backdrop-blur-sm py-2 px-4 rounded-full
                      shadow-md z-10 transition-colors duration-500
                    `}
                  >
                    <p className={`text-sm font-quicksand font-medium ${isActive ? 'text-plum-900' : 'text-plum-700'}`}>{chapter.date}</p>
                  </div>
                  
                  {/* Content */}
                  <div className={`
                    flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} 
                    items-center gap-6 md:gap-16 
                    ${isEven ? 'md:pr-0' : 'md:pl-0'}
                    ${isActive ? 'opacity-100' : 'opacity-60'} transition-opacity duration-500
                  `}>
                    {/* Image */}
                    <div className={`
                      w-full md:w-5/12 
                      ${isEven ? 'md:pr-16' : 'md:pl-16'}
                    `}>
                      <div className="relative group">
                        <div className={`absolute inset-0 ${isEven ? 'bg-blush-400/20' : 'bg-mint-400/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
                        <img 
                          src={chapter.imageUrl} 
                          alt={chapter.title} 
                          className={`w-full h-64 md:h-80 object-cover rounded-lg shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500 ${isActive ? '' : 'grayscale-[30%]'}`}
                        />
                        {/* Mobile date bubble */}
                        <div className={`
                          absolute top-4 ${isEven ? 'right-4' : 'left-4'} 
                          ${isActive ? 'bg-gold-400/90' : 'bg-gray-400/80'} backdrop-blur-sm py-2 px-4 rounded-full 
                          md:hidden shadow-md transition-colors duration-500
                        `}>
                          <p className={`text-sm font-quicksand font-medium ${isActive ? 'text-plum-900' : 'text-plum-700'}`}>{chapter.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Text content - with improved spacing and background for legibility */}
                    <div className={`
                      w-full md:w-5/12 
                      ${isEven ? 'md:pl-16' : 'md:pr-16'} 
                      md:z-10
                    `}>
                      <div className={`
                        ${isEven ? 'md:text-left' : 'md:text-right'}
                        bg-plum-900/70 backdrop-blur-sm p-6 rounded-lg shadow-md md:bg-plum-800/60
                      `}>
                        <h3 className="font-dancing text-3xl text-gold-300 mb-2">{chapter.title}</h3>
                        <h4 className="font-quicksand font-semibold text-xl text-ivory-200 mb-4">{chapter.subtitle}</h4>
                        <p className="font-quicksand text-ivory-300 leading-relaxed">{chapter.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;