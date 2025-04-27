import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  image: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  image,
  testimonial,
  rating,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full animate-fade-in">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-serif font-semibold text-brown-dark">{name}</h4>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'text-gold fill-gold' : 'text-brown-light'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="font-sans text-brown-medium italic flex-grow">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;