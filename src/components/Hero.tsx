import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-brown-dark text-cream">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Cozy shoes display"
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-dark to-transparent opacity-90" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-xl animate-slide-up">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            Step into Comfort & Style
          </h1>
          <p className="font-sans text-lg mb-8 text-peach">
            Discover our handcrafted collection of cozy, elegant footwear for the whole family.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="bg-peach text-brown-dark font-sans font-medium px-6 py-3 rounded-md hover:bg-cream transition duration-300 shadow-md"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-peach text-peach font-sans font-medium px-6 py-3 rounded-md hover:bg-brown-medium transition duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;