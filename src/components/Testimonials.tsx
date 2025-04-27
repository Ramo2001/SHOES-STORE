import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-peach bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif font-bold text-2xl md:text-3xl text-brown-dark text-center mb-10">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
              <TestimonialCard
                name={testimonial.name}
                image={testimonial.image}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;