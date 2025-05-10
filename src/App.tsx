import React, { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Story from './sections/Story';
import Events from './sections/Events';
import Gallery from './sections/Gallery';
import RSVP from './sections/RSVP';
import Travel from './sections/Travel';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

function App() {
  // Refs for each section
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    story: useRef<HTMLDivElement>(null),
    events: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    rsvp: useRef<HTMLDivElement>(null),
    travel: useRef<HTMLDivElement>(null),
    faqs: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null)
  };

  // Function to handle navigation
  const navigateToSection = (sectionId: string) => {
    const sectionRef = document.getElementById(sectionId);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to About section
  const scrollToAbout = () => {
    navigateToSection('about');
  };

  return (
    <div className="relative min-h-screen font-quicksand text-plum-800">
      <Header onNavigate={navigateToSection} />
      
      <main>
        <Hero onScrollDown={scrollToAbout} />
        <About id="about" />
        <Story id="story" />
        <Events id="events" />
        <Gallery id="gallery" />
        <RSVP id="rsvp" />
        <Travel id="travel" />
        <FAQ id="faqs" />
        <Contact id="contact" />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;