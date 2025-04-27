import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="font-serif font-bold text-5xl text-brown-dark mb-4">404</h1>
        <h2 className="font-serif font-semibold text-2xl text-brown-dark mb-6">
          Page Not Found
        </h2>
        <p className="font-sans text-brown-medium mb-8">
          Oops! We can't seem to find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-brown-medium hover:bg-brown-dark text-cream font-sans font-medium px-6 py-3 rounded-md transition duration-300 shadow-md"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center border-2 border-brown-medium text-brown-medium hover:bg-brown-medium hover:text-cream font-sans font-medium px-6 py-3 rounded-md transition duration-300"
          >
            <Search className="mr-2 h-5 w-5" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;