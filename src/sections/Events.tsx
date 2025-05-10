import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { weddingEvents } from '../data/eventsData';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventsProps {
  id: string;
}

const Events: React.FC<EventsProps> = ({ id }) => {
  const [activeEvent, setActiveEvent] = useState(0);
  const [flipped, setFlipped] = useState<number | null>(null);
  
  // Toggle flip for card
  const toggleFlip = (index: number) => {
    if (flipped === index) {
      setFlipped(null);
    } else {
      setFlipped(index);
    }
  };
  
  return (
    <section id={id} className="py-20 bg-ivory-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Wedding Events"
          subtitle="Join us in celebrating our special moments"
        />
        
        {/* Event Navigation */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-4 mx-auto">
            {weddingEvents.map((event, index) => (
              <button
                key={event.id}
                onClick={() => setActiveEvent(index)}
                className={`whitespace-nowrap px-6 py-3 rounded-full font-quicksand font-medium transition-all duration-300 ${
                  activeEvent === index
                    ? 'bg-plum-600 text-white shadow-md'
                    : 'bg-white text-plum-800 hover:bg-plum-100'
                }`}
              >
                {event.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Event Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Event Card */}
          <div className="lg:col-span-2">
            <div 
              className={`bg-gradient-to-br ${weddingEvents[activeEvent].bgColor} rounded-xl shadow-lg overflow-hidden h-full relative`}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={weddingEvents[activeEvent].imageUrl} 
                  alt={weddingEvents[activeEvent].name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="font-dancing text-4xl text-plum-800 mb-4">{weddingEvents[activeEvent].name}</h3>
                
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-plum-600 mr-2" />
                    <span className="font-quicksand text-plum-700">{weddingEvents[activeEvent].date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-plum-600 mr-2" />
                    <span className="font-quicksand text-plum-700">{weddingEvents[activeEvent].time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-plum-600 mr-2" />
                    <span className="font-quicksand text-plum-700">{weddingEvents[activeEvent].venue}</span>
                  </div>
                </div>
                
                <p className="font-quicksand text-plum-700 mb-6">{weddingEvents[activeEvent].description}</p>
                
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg inline-block">
                  <h4 className="font-quicksand font-semibold text-plum-800 mb-2">Attire</h4>
                  <p className="font-quicksand text-plum-700">{weddingEvents[activeEvent].attire}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* RSVP Card */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
              <div className="p-8">
                <h3 className="font-dancing text-3xl text-plum-800 mb-6">RSVP for this Event</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block font-quicksand text-plum-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-quicksand text-plum-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block font-quicksand text-plum-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                    />
                  </div>
                  
                  <div>
                    <span className="block font-quicksand text-plum-700 mb-1">Will you attend?</span>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="attending"
                          value="yes"
                          className="mr-2 text-plum-600 focus:ring-plum-400"
                        />
                        <span className="font-quicksand text-plum-700">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="attending"
                          value="no"
                          className="mr-2 text-plum-600 focus:ring-plum-400"
                        />
                        <span className="font-quicksand text-plum-700">No</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-quicksand text-plum-700 mb-1">Message (Optional)</label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <Button type="submit" className="w-full shadow-md">
                      Submit RSVP
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* All Events Cards */}
        <div className="mt-16">
          <h3 className="font-dancing text-3xl text-plum-800 text-center mb-8">All Celebrations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingEvents.map((event, index) => (
              <div 
                key={event.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden h-[32rem] cursor-pointer relative ${
                  flipped === index ? 'flipped' : ''
                }`}
                onClick={() => toggleFlip(index)}
              >
                <div className={`w-full h-full transition-all duration-500 transform ${
                  flipped === index ? 'rotate-y-180 absolute' : ''
                } backface-hidden`}>
                  {/* Front of card */}
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={event.imageUrl} 
                      alt={event.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-dancing text-3xl text-plum-800 mb-2">{event.name}</h4>
                    
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-plum-600 mr-2" />
                        <span className="font-quicksand text-sm text-plum-700">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-plum-600 mr-2" />
                        <span className="font-quicksand text-sm text-plum-700">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-plum-600 mr-2" />
                        <span className="font-quicksand text-sm text-plum-700">{event.venue}</span>
                      </div>
                    </div>
                    
                    <p className="font-quicksand text-sm text-plum-700 line-clamp-3 mb-4">{event.description}</p>
                    
                    <p className="text-center font-quicksand text-plum-600 text-sm italic">
                      Click to see more details
                    </p>
                  </div>
                </div>
                
                {/* Back of card (only shown when flipped) */}
                {flipped === index && (
                  <div className={`w-full h-full bg-gradient-to-br ${event.bgColor} p-6 flex flex-col justify-between absolute top-0 left-0`}>
                    <div>
                      <h4 className="font-dancing text-3xl text-plum-800 mb-4">{event.name} Details</h4>
                      <p className="font-quicksand text-plum-700 mb-4">{event.description}</p>
                      
                      <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg mb-6">
                        <h5 className="font-quicksand font-semibold text-plum-800 mb-2">Attire</h5>
                        <p className="font-quicksand text-plum-700">{event.attire}</p>
                      </div>
                      
                      <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg">
                        <h5 className="font-quicksand font-semibold text-plum-800 mb-2">Location</h5>
                        <p className="font-quicksand text-plum-700 mb-2">{event.venue}</p>
                      </div>
                    </div>
                    
                    <p className="text-center font-quicksand text-plum-600 text-sm italic">
                      Click to go back
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;