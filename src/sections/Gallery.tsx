import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { galleryImages } from '../data/galleryData';
import { X } from 'lucide-react';

interface GalleryProps {
  id: string;
}

const Gallery: React.FC<GalleryProps> = ({ id }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];
  
  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);
  
  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  const getNextImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex].id);
  };
  
  const getPrevImage = () => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex].id);
  };
  
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Magic Moments"
          subtitle="Snapshots of our journey together"
        />
        
        {/* Category Filters */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="flex space-x-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-plum-600 text-white font-medium shadow-md'
                    : 'bg-ivory-100 text-plum-700 hover:bg-plum-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className={`overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer ${
                image.width > image.height ? 'row-span-1' : 'row-span-2'
              }`}
              onClick={() => openLightbox(image.id)}
            >
              <div className="group relative h-64 sm:h-full bg-plum-100">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-plum-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-quicksand text-white bg-plum-800/70 px-4 py-2 rounded-full backdrop-blur-sm">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="absolute top-6 right-6">
              <button 
                onClick={closeLightbox}
                className="text-white hover:text-gold-400 transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="max-w-5xl w-full mx-auto relative">
              {/* Navigation arrows */}
              <button
                onClick={getPrevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 lg:-ml-20 text-white hover:text-gold-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={getNextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 lg:-mr-20 text-white hover:text-gold-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image */}
              {selectedImage && (
                <div className="bg-black">
                  <img
                    src={galleryImages.find(img => img.id === selectedImage)?.src}
                    alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                    className="max-h-[80vh] max-w-full mx-auto object-contain"
                  />
                  
                  <div className="p-4 text-white text-center">
                    <p className="font-quicksand">
                      {galleryImages.find(img => img.id === selectedImage)?.alt}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;