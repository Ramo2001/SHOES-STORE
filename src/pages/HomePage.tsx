import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import { Truck, Shield, RotateCcw, MessageCircle, ArrowRight, Star } from 'lucide-react';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Truck className="w-10 h-10 text-brown-medium" />,
      title: 'Free Delivery',
      description: 'On all orders over $100',
    },
    {
      icon: <Shield className="w-10 h-10 text-brown-medium" />,
      title: 'Quality Guarantee',
      description: 'Handcrafted with premium materials',
    },
    {
      icon: <RotateCcw className="w-10 h-10 text-brown-medium" />,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-brown-medium" />,
      title: 'WhatsApp Support',
      description: 'Real-time assistance and ordering',
    },
  ];

  const newArrivals = products.filter(product => product.isNew).slice(0, 4);
  const bestSellers = products
    .sort((a, b) => b.rating * b.reviews - a.rating * a.reviews)
    .slice(0, 4);

  return (
    <div>
      <Hero />
      
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 bg-cream rounded-lg shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mr-4">{feature.icon}</div>
                <div>
                  <h3 className="font-serif font-semibold text-brown-dark">{feature.title}</h3>
                  <p className="font-sans text-sm text-brown-light">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <FeaturedCategories />
      <FeaturedProducts />

      {/* New Arrivals Section */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brown-dark">
              New Arrivals
            </h2>
            <Link
              to="/shop"
              className="flex items-center text-brown-medium hover:text-brown-dark transition-colors"
            >
              View All
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to={`/shop/${product.id}`} className="block relative overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                  <span className="absolute top-2 right-2 bg-gold text-brown-dark px-3 py-1 text-xs font-semibold rounded">
                    NEW
                  </span>
                </Link>
                <div className="p-4">
                  <Link to={`/shop/${product.id}`}>
                    <h3 className="font-serif font-semibold text-lg text-brown-dark hover:text-brown-medium transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-brown-medium font-sans mt-2">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brown-dark">
              Best Sellers
            </h2>
            <Link
              to="/shop"
              className="flex items-center text-brown-medium hover:text-brown-dark transition-colors"
            >
              View All
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <div
                key={product.id}
                className="bg-cream rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to={`/shop/${product.id}`} className="block relative overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-brown-dark text-cream px-3 py-1 text-xs font-semibold rounded flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {product.rating}
                  </div>
                </Link>
                <div className="p-4">
                  <Link to={`/shop/${product.id}`}>
                    <h3 className="font-serif font-semibold text-lg text-brown-dark hover:text-brown-medium transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-brown-medium font-sans">${product.price.toFixed(2)}</p>
                    <span className="text-brown-light text-sm">{product.reviews} reviews</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-brown-dark text-cream relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif font-bold text-2xl md:text-3xl mb-4">Personalized Shopping Experience</h2>
            <p className="font-sans mb-8">
              Not sure about your size or have questions? Connect with us directly through WhatsApp for personalized assistance with your order.
            </p>
            <a 
              href="https://wa.me/5551234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-sans font-medium px-6 py-3 rounded-md transition duration-300 shadow-md"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm0 22.5c-4.539 0-8.43-2.785-10.065-6.735l-.477 1.715-1.692-1.692 1.692-1.692.47 1.691c1.225-4.015 4.89-6.916 9.172-6.916 5.314 0 9.63 4.316 9.63 9.63s-4.316 9.63-9.63 9.63z" />
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Background texture" 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>
      
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;