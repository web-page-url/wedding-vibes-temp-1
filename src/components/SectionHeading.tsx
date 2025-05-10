import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`font-dancing text-4xl md:text-5xl lg:text-6xl mb-4 ${light ? 'text-ivory-100' : 'text-plum-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-quicksand text-lg md:text-xl max-w-3xl mx-auto ${light ? 'text-ivory-200' : 'text-plum-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1 ${centered ? 'mx-auto' : 'ml-0'} mt-6 ${light ? 'bg-gold-400' : 'bg-plum-300'}`}></div>
    </div>
  );
};

export default SectionHeading;