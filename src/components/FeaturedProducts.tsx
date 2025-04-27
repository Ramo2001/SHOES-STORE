import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProducts: React.FC = () => {
  // Get 4 featured products
  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 4);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-brown-dark mb-4 md:mb-0">
            Featured Collection
          </h2>
          <p className="font-sans text-brown-light">
            Discover our most popular styles of the season
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;