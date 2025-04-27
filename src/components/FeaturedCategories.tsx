import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedCategories: React.FC = () => {
  const categories = [
    {
      name: "Men's Collection",
      image: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/shop?category=men",
    },
    {
      name: "Women's Collection",
      image: "https://images.pexels.com/photos/3782788/pexels-photo-3782788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/shop?category=women",
    },
    {
      name: "Kids' Collection",
      image: "https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/shop?category=kids",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="font-serif font-bold text-2xl md:text-3xl text-brown-dark text-center mb-10">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group relative overflow-hidden rounded-lg shadow-md h-80 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark to-transparent opacity-70" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif font-semibold text-xl text-cream mb-2">{category.name}</h3>
                <span className="inline-block font-sans text-peach text-sm group-hover:underline">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;