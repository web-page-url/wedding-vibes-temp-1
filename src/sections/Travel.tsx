import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Plane, Train, Car, Home, Coffee, Download } from 'lucide-react';
import Button from '../components/Button';

interface TravelProps {
  id: string;
}

const Travel: React.FC<TravelProps> = ({ id }) => {
  const hotels = [
    {
      name: "Royal Heritage Resort",
      description: "Our wedding venue with special rates for guests. Use code 'AARAVMEHER2026' when booking.",
      price: "₹12,000 - ₹20,000 per night",
      distance: "Venue",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "City Plaza Hotel",
      description: "Modern hotel with city views, 3km from the venue.",
      price: "₹8,000 - ₹12,000 per night",
      distance: "3 km from venue",
      image: "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Beachside Resort",
      description: "Luxury beachfront property with spa services.",
      price: "₹15,000 - ₹25,000 per night",
      distance: "5 km from venue",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const attractions = [
    {
      name: "Gateway of India",
      description: "Historic arch monument with beautiful ocean views.",
      image: "https://images.pexels.com/photos/4259856/pexels-photo-4259856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Marine Drive",
      description: "Scenic promenade along the coastline of Mumbai.",
      image: "https://images.pexels.com/photos/4201659/pexels-photo-4201659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Elephanta Caves",
      description: "Ancient cave temples dedicated to Lord Shiva.",
      image: "https://images.pexels.com/photos/5608818/pexels-photo-5608818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  return (
    <section id={id} className="py-20 bg-ivory-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Travel Guide"
          subtitle="Everything you need to know about getting here"
        />
        
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="font-dancing text-3xl text-plum-800 mb-6">Getting Here</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-ivory-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Plane className="w-6 h-6 text-plum-600 mr-3" />
                    <h4 className="font-quicksand font-semibold text-lg text-plum-800">By Air</h4>
                  </div>
                  <p className="font-quicksand text-plum-700 mb-3">
                    <strong>Chhatrapati Shivaji International Airport (BOM)</strong> is the nearest airport, approximately 20km from the venue.
                  </p>
                  <p className="font-quicksand text-plum-700">
                    Uber, Ola, and pre-paid taxis are available at the airport.
                  </p>
                </div>
                
                <div className="bg-ivory-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Train className="w-6 h-6 text-plum-600 mr-3" />
                    <h4 className="font-quicksand font-semibold text-lg text-plum-800">By Train</h4>
                  </div>
                  <p className="font-quicksand text-plum-700 mb-3">
                    <strong>Mumbai CST</strong> and <strong>Mumbai Central</strong> are the major railway stations serving the city.
                  </p>
                  <p className="font-quicksand text-plum-700">
                    Local trains and taxis connect the stations to the venue.
                  </p>
                </div>
                
                <div className="bg-ivory-100 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Car className="w-6 h-6 text-plum-600 mr-3" />
                    <h4 className="font-quicksand font-semibold text-lg text-plum-800">By Road</h4>
                  </div>
                  <p className="font-quicksand text-plum-700 mb-3">
                    <strong>Mumbai</strong> is well-connected by highways to all major cities.
                  </p>
                  <p className="font-quicksand text-plum-700">
                    The venue offers complimentary valet parking for all guests.
                  </p>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-10">
                <h4 className="font-quicksand font-semibold text-lg text-plum-800 mb-4">Location Map</h4>
                <div className="w-full h-80 bg-ivory-200 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2883509/pexels-photo-2883509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Map location"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <p className="font-quicksand text-sm text-plum-600 mt-2 text-center">
                  Royal Heritage Resort, Mumbai - The exact location will be shared in your invitation.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Accommodations */}
        <div className="mb-16">
          <h3 className="font-dancing text-3xl text-plum-800 text-center mb-8">Where to Stay</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-quicksand font-semibold text-lg text-plum-800">{hotel.name}</h4>
                    <span className="bg-plum-100 text-plum-600 text-xs py-1 px-2 rounded-full">
                      {hotel.distance}
                    </span>
                  </div>
                  <p className="font-quicksand text-plum-700 text-sm mb-3">{hotel.description}</p>
                  <p className="font-quicksand text-plum-700 font-medium">{hotel.price}</p>
                  <div className="mt-4">
                    <Button primary={false} className="w-full text-sm">
                      Check Availability
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Local Attractions */}
        <div className="mb-16">
          <h3 className="font-dancing text-3xl text-plum-800 text-center mb-8">Things to Do</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-quicksand font-semibold text-lg text-plum-800 mb-2">{attraction.name}</h4>
                  <p className="font-quicksand text-plum-700 text-sm">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Download Guide */}
        <div className="text-center">
          <Button className="px-8 flex items-center mx-auto">
            <Download className="mr-2 h-5 w-5" />
            Download Wedding Guest Guide PDF
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Travel;