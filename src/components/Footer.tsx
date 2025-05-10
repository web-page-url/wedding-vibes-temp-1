import React from 'react';
import { Heart, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-plum-900 to-plum-800 text-ivory-100 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300"></div>
      <div className="absolute top-1 left-0 right-0 h-0.5 bg-gold-300/30"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blush-500/5 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-mint-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo and Quote Section */}
          <div className="mb-12">
            <h2 className="font-dancing text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-400">Aarav & Meher</h2>
            <div className="w-20 h-1 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-4"></div>
            <p className="italic font-quicksand mb-0 max-w-lg text-ivory-200">
              "Every love story is beautiful, but ours is my favorite."
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-8 mb-12">
            <a href="#" className="group flex flex-col items-center">
              <div className="p-3 rounded-full bg-plum-700/50 hover:bg-gold-400/20 transition-all duration-300 mb-1 group-hover:scale-110">
                <Instagram size={20} className="text-ivory-100 group-hover:text-gold-300 transition-colors"/>
              </div>
              <span className="text-xs text-ivory-300 group-hover:text-gold-300 transition-colors">Instagram</span>
            </a>
            <a href="#" className="group flex flex-col items-center">
              <div className="p-3 rounded-full bg-plum-700/50 hover:bg-gold-400/20 transition-all duration-300 mb-1 group-hover:scale-110">
                <Youtube size={20} className="text-ivory-100 group-hover:text-gold-300 transition-colors"/>
              </div>
              <span className="text-xs text-ivory-300 group-hover:text-gold-300 transition-colors">YouTube</span>
            </a>
            <a href="#" className="group flex flex-col items-center">
              <div className="p-3 rounded-full bg-plum-700/50 hover:bg-gold-400/20 transition-all duration-300 mb-1 group-hover:scale-110">
                <MessageCircle size={20} className="text-ivory-100 group-hover:text-gold-300 transition-colors"/>
              </div>
              <span className="text-xs text-ivory-300 group-hover:text-gold-300 transition-colors">Threads</span>
            </a>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-12 gap-y-8 text-sm mb-16 w-full max-w-md mx-auto">
            <div className="bg-plum-700/20 backdrop-blur-sm rounded-lg p-4 transform transition-transform hover:scale-105">
              <h4 className="font-semibold mb-3 text-gold-300 border-b border-plum-600/50 pb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="hover:text-gold-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></span>Home</a></li>
                <li><a href="#story" className="hover:text-gold-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></span>Our Story</a></li>
                <li><a href="#events" className="hover:text-gold-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></span>Events</a></li>
                <li><a href="#gallery" className="hover:text-gold-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></span>Gallery</a></li>
              </ul>
            </div>
            <div className="bg-plum-700/20 backdrop-blur-sm rounded-lg p-4 transform transition-transform hover:scale-105">
              <h4 className="font-semibold mb-3 text-gold-300 border-b border-plum-600/50 pb-2">Information</h4>
              <ul className="space-y-2">
                <li><a href="#rsvp" className="hover:text-gold-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></span>RSVP</a></li>
                <li><a href="#travel" className="hover:text-gold-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></span>Travel</a></li>
                <li><a href="#faqs" className="hover:text-gold-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></span>FAQs</a></li>
                <li><a href="#contact" className="hover:text-gold-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2"></span>Contact</a></li>
              </ul>
            </div>
          </div>
          
          {/* Footer Credits */}
          <div className="text-sm text-ivory-300">
            <p className="flex items-center justify-center mb-3">
              Copyright &copy; 2026 Aarav & Meher
            </p>
            <p className="flex items-center justify-center mb-4">
              Site designed with <Heart className="h-4 w-4 mx-1.5 text-blush-400 animate-pulse" fill="currentColor" /> by <span className="ml-1.5 font-medium text-gold-300">Wedding-vibes team</span>
            </p>
          </div>
          
          {/* Designer Credits Card */}
          <div className="max-w-md w-full mx-auto mt-2">
            <div className="bg-gradient-to-r from-plum-800/90 via-plum-700/90 to-plum-800/90 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-plum-600/30">
              <div className="flex flex-col items-center">
                <div className="w-28 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-3"></div>
                <h3 className="font-dancing font-medium text-xl text-gold-300 mb-3">Wedding-vibes Design Team</h3>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent mb-3"></div>
                <p className="mb-2.5 text-ivory-200 text-center">
                  Anubhav <span className="text-gold-400">(IIT Mandi)</span>, 
                  Arpit <span className="text-gold-400">(IIT Delhi)</span>, 
                  Akriti <span className="text-gold-400">(IIT Mandi)</span>
                </p>
                <a href="tel:+919736211316" className="text-gold-300 hover:text-gold-400 flex items-center justify-center gap-1.5 group transition-colors py-2 px-4 bg-plum-900/40 rounded-full hover:bg-plum-800/50 mt-1">
                  <MessageCircle size={14} className="group-hover:scale-110 transition-transform"/>
                  <span>+91 97362 11316</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;