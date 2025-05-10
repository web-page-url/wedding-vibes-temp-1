import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { weddingEvents } from '../data/eventsData';
import { ConfettiExplosion } from '../components/ConfettiExplosion';

interface RSVPProps {
  id: string;
}

const RSVP: React.FC<RSVPProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: 'yes',
    events: [] as string[],
    songRequest: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, events: [...prev.events, value] };
      } else {
        return { ...prev, events: prev.events.filter(event => event !== value) };
      }
    });
  };
  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setShowConfetti(true);
    
    // Reset confetti after a few seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };
  
  return (
    <section id={id} className="py-20 bg-gradient-to-b from-plum-50 to-ivory-50 relative overflow-hidden">
      {showConfetti && <ConfettiExplosion />}
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="RSVP"
          subtitle="We can't wait to celebrate with you"
        />
        
        {submitted ? (
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center animate-fade-in-up">
            <h3 className="font-dancing text-3xl text-plum-800 mb-4">Thank You!</h3>
            <p className="font-quicksand text-lg text-plum-600 mb-6">
              We can't wait to celebrate with you, Love – Aarav & Meher 💐
            </p>
            <div className="text-4xl mb-6">🎉💖</div>
            <Button onClick={() => setSubmitted(false)}>
              Make Another Response
            </Button>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-quicksand text-plum-700 mb-1">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-quicksand text-plum-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block font-quicksand text-plum-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                  />
                </div>
                
                <div>
                  <span className="block font-quicksand text-plum-700 mb-1">
                    Will you be attending?*
                  </span>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={formData.attending === 'yes'}
                        onChange={handleRadioChange}
                        className="mr-2 text-plum-600 focus:ring-plum-400"
                      />
                      <span className="font-quicksand text-plum-700">Yes, I'll be there!</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={formData.attending === 'no'}
                        onChange={handleRadioChange}
                        className="mr-2 text-plum-600 focus:ring-plum-400"
                      />
                      <span className="font-quicksand text-plum-700">Unfortunately, no</span>
                    </label>
                  </div>
                </div>
              </div>
              
              {formData.attending === 'yes' && (
                <div>
                  <span className="block font-quicksand text-plum-700 mb-3">
                    Which events will you attend?*
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {weddingEvents.map(event => (
                      <label 
                        key={event.id} 
                        className="flex items-start space-x-2 p-3 border border-plum-200 rounded-lg hover:bg-plum-50 transition-colors cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="events"
                          value={event.name}
                          checked={formData.events.includes(event.name)}
                          onChange={handleCheckboxChange}
                          className="mt-1 text-plum-600 focus:ring-plum-400"
                        />
                        <div>
                          <span className="font-quicksand font-medium text-plum-800">{event.name}</span>
                          <p className="text-xs text-plum-600">{event.date}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="songRequest" className="block font-quicksand text-plum-700 mb-1">
                  Song Request (Optional)
                </label>
                <input
                  type="text"
                  id="songRequest"
                  name="songRequest"
                  value={formData.songRequest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                  placeholder="What song will get you on the dance floor?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-quicksand text-plum-700 mb-1">
                  Message to the Couple (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                  placeholder="Share your wishes, memories, or advice..."
                ></textarea>
              </div>
              
              <div className="text-center pt-2">
                <Button type="submit" className="px-10 shadow-md">
                  Submit RSVP
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVP;