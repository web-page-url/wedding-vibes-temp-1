import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Instagram, Mail, Phone, MessageSquare } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-plum-100">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Contact Us"
          subtitle="Have questions? Reach out to us"
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-plum-100 flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-plum-600" />
                  </div>
                  <h3 className="font-dancing text-2xl text-plum-800 mb-2">Call Us</h3>
                  <p className="font-quicksand text-plum-700 mb-4">For urgent matters on the wedding day</p>
                  <a 
                    href="tel:+919876543210" 
                    className="font-quicksand text-plum-700 hover:text-plum-900 transition-colors"
                  >
                    +91 9876543210 (Rajiv - Best Man)
                  </a>
                </div>
              </div>
            </div>
            
            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-mint-100 flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-mint-600" />
                  </div>
                  <h3 className="font-dancing text-2xl text-plum-800 mb-2">Email Us</h3>
                  <p className="font-quicksand text-plum-700 mb-4">For general inquiries about the wedding</p>
                  <a 
                    href="mailto:wedding@aaravandmeher.com" 
                    className="font-quicksand text-plum-700 hover:text-plum-900 transition-colors"
                  >
                    wedding@aaravandmeher.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-blush-100 flex items-center justify-center mb-4">
                    <Instagram className="h-8 w-8 text-blush-600" />
                  </div>
                  <h3 className="font-dancing text-2xl text-plum-800 mb-2">Follow Us</h3>
                  <p className="font-quicksand text-plum-700 mb-4">Check out our wedding journey</p>
                  <a 
                    href="#" 
                    className="font-quicksand text-plum-700 hover:text-plum-900 transition-colors"
                  >
                    @AaravAndMeher
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="font-dancing text-3xl text-plum-800 text-center mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block font-quicksand text-plum-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-email" className="block font-quicksand text-plum-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="contact-subject" className="block font-quicksand text-plum-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="block font-quicksand text-plum-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    className="w-full px-4 py-2 border border-plum-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum-400"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <Button className="px-12 shadow-md">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-8 right-8 z-40">
          <a 
            href="https://wa.me/919876543210" 
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageSquare className="h-6 w-6 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;