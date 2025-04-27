import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types/product';
import { Search, Filter } from 'lucide-react';

const ShopPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setCategoryFilter(category);
    }
  }, [searchParams]);

  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (categoryFilter !== 'all') {
      result = result.filter(product => product.category === categoryFilter);
    }

    // Apply type filter
    if (typeFilter !== 'all') {
      result = result.filter(product => product.type === typeFilter);
    }

    // Apply search term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        product =>
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term)
      );
    }

    setFilteredProducts(result);
  }, [categoryFilter, typeFilter, searchTerm]);

  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="font-serif font-bold text-3xl text-brown-dark mb-4">Our Collection</h1>
          <p className="font-sans text-brown-medium max-w-2xl">
            Browse our handcrafted selection of comfortable, elegant footwear for men, women, and children.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Mobile */}
          <div className="lg:hidden flex items-center justify-between mb-4 bg-white p-4 rounded-lg shadow-sm">
            <h2 className="font-serif font-semibold text-lg text-brown-dark">Filters</h2>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center text-brown-medium hover:text-brown-dark"
            >
              <Filter className="h-5 w-5 mr-1" />
              {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Filters sidebar - Desktop and Mobile (when open) */}
          <aside
            className={`lg:w-1/4 bg-white p-6 rounded-lg shadow-sm ${
              isFilterOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <h2 className="font-serif font-semibold text-lg text-brown-dark mb-4 hidden lg:block">
              Filters
            </h2>

            <div className="mb-6">
              <label htmlFor="search" className="font-sans font-medium text-brown-dark block mb-2">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products..."
                  className="w-full border border-brown-light rounded-md py-2 pl-10 pr-3 focus:ring-2 focus:ring-brown-medium focus:border-brown-medium transition"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-brown-light" />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-sans font-medium text-brown-dark mb-2">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="all"
                    checked={categoryFilter === 'all'}
                    onChange={() => setCategoryFilter('all')}
                    className="mr-2"
                  />
                  <span className="font-sans text-brown-medium">All Categories</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="men"
                    checked={categoryFilter === 'men'}
                    onChange={() => setCategoryFilter('men')}
                    className="mr-2"
                  />
                  <span className="font-sans text-brown-medium">Men</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="women"
                    checked={categoryFilter === 'women'}
                    onChange={() => setCategoryFilter('women')}
                    className="mr-2"
                  />
                  <span className="font-sans text-brown-medium">Women</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value="kids"
                    checked={categoryFilter === 'kids'}
                    onChange={() => setCategoryFilter('kids')}
                    className="mr-2"
                  />
                  <span className="font-sans text-brown-medium">Kids</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-sans font-medium text-brown-dark mb-2">Type</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="all"
                    checked={typeFilter === 'all'}
                    onChange={() => setTypeFilter('all')}
                    className="mr-2"
                  />
                  <span className="font-sans text-brown-medium">All Types</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="sneakers"
                    checked={typeFilter === 'sneakers'}
                    onChange={() => setTypeFilter('sneakers')}
                    className="mr-2"
                  />
                  <span className="font-sans text-brown-medium">Sneakers</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="boots"
                    checked={typeFilter === 'boots'}
                    onChange={() => setTypeFilter('boots')}
                    className="mr-2"
                  />
                  <span className="font-sans text-brown-medium">Boots</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="sandals"
                    checked={typeFilter === 'sandals'}
                    onChange={() => setTypeFilter('sandals')}
                    className="mr-2"
                  />
                  <span className="font-sans text-brown-medium">Sandals</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="formal"
                    checked={typeFilter === 'formal'}
                    onChange={() => setTypeFilter('formal')}
                    className="mr-2"
                  />
                  <span className="font-sans text-brown-medium">Formal</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Products grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="font-serif font-semibold text-lg text-brown-dark mb-2">
                  No products found
                </h3>
                <p className="font-sans text-brown-medium">
                  Try adjusting your filters or search term.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;