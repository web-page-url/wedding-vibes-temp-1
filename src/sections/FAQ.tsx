import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { faqItems } from '../data/faqData';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  id: string;
}

const FAQ: React.FC<FAQProps> = ({ id }) => {
  const [openItemId, setOpenItemId] = useState<number | null>(1);
  
  const toggleItem = (itemId: number) => {
    if (openItemId === itemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };
  
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our celebration"
        />
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div 
              key={item.id}
              className="mb-4 bg-ivory-50 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className={`w-full text-left p-5 font-quicksand font-medium text-plum-800 flex justify-between items-center transition-colors ${openItemId === item.id ? 'bg-plum-100' : ''}`}
                onClick={() => toggleItem(item.id)}
              >
                {item.question}
                {openItemId === item.id ? (
                  <ChevronUp className="w-5 h-5 text-plum-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-plum-600" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItemId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 font-quicksand text-plum-700">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;