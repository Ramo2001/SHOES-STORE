import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, ShieldCheck, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-12 w-12 text-brown-medium" />,
      title: 'Comfort First',
      description: 'We believe that beautiful shoes should never compromise on comfort. Every design prioritizes how it feels on your feet.',
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-brown-medium" />,
      title: 'Quality Materials',
      description: 'We source only the finest materials that are both luxurious and durable, ensuring your footwear lasts for years to come.',
    },
    {
      icon: <Users className="h-12 w-12 text-brown-medium" />,
      title: 'Community Focus',
      description: 'As a local business, we\'re committed to serving our community with personalized service and building lasting relationships.',
    },
    {
      icon: <Award className="h-12 w-12 text-brown-medium" />,
      title: 'Craftsmanship',
      description: 'Each pair of shoes represents the perfect balance of traditional techniques and modern design innovations.',
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-brown-dark mb-4">
            Our Story
          </h1>
          <p className="font-sans text-brown-medium">
            We're a family-owned boutique dedicated to providing comfortable, elegant footwear for every occasion.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Our store interior"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="font-serif font-semibold text-2xl text-brown-dark mb-4">
              From Passion to Profession
            </h2>
            <p className="font-sans text-brown-medium mb-4">
              Footsy began in 2010 when Maria and David Thompson, both passionate about quality footwear, decided to create a shoe boutique that would prioritize comfort without sacrificing style.
            </p>
            <p className="font-sans text-brown-medium mb-4">
              What started as a small shop with a curated collection has grown into a beloved destination for footwear enthusiasts across the region. Our philosophy remains unchanged: we believe that everyone deserves shoes that feel as good as they look.
            </p>
            <p className="font-sans text-brown-medium">
              Today, we continue to handpick each design in our collection, working closely with skilled craftspeople and responsible manufacturers to bring you footwear that's beautiful, comfortable, and built to last.
            </p>
          </div>
        </div>

        <section className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="font-serif font-semibold text-2xl text-brown-dark text-center mb-10">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-cream animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-serif font-semibold text-xl text-brown-dark mb-2">
                  {value.title}
                </h3>
                <p className="font-sans text-brown-medium">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-lg shadow-md mb-16">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.pexels.com/photos/4277507/pexels-photo-4277507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Team background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-brown-dark opacity-75" />
          </div>
          
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h2 className="font-serif font-semibold text-2xl text-cream mb-6">
              Meet Our Team
            </h2>
            <p className="font-sans text-peach mb-8 max-w-2xl mx-auto">
              Our knowledgeable staff brings years of expertise in footwear. We're here to help you find the perfect fit for your lifestyle, needs, and personal style.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-peach text-brown-dark font-sans font-medium px-6 py-3 rounded-md hover:bg-cream transition duration-300 shadow-md"
            >
              Get In Touch
            </Link>
          </div>
        </section>

        <section className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif font-semibold text-2xl text-brown-dark mb-4">
            Visit Us Today
          </h2>
          <p className="font-sans text-brown-medium mb-6">
            We'd love to welcome you to our cozy boutique where you can experience our collection firsthand and find your perfect pair with the help of our friendly team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="bg-brown-medium hover:bg-brown-dark text-cream font-sans font-medium px-6 py-3 rounded-md transition duration-300 shadow-md"
            >
              Browse Our Collection
            </Link>
            <Link
              to="/contact"
              className="border-2 border-brown-medium text-brown-medium hover:bg-brown-medium hover:text-cream font-sans font-medium px-6 py-3 rounded-md transition duration-300"
            >
              Find Our Store
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;