import React from 'react';
import { Link } from 'react-router-dom';
import { Shovel as Shoe, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-dark text-cream">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Shoe className="h-8 w-8" />
              <span className="font-serif font-bold text-2xl">Footsy</span>
            </Link>
            <p className="font-sans text-sm">
              Cozy, elegant shoes for every step of your journey. Quality craftsmanship since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-peach transition duration-150">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-peach transition duration-150">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-peach transition duration-150">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="font-sans text-sm hover:text-peach transition duration-150">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/shop?category=men" className="font-sans text-sm hover:text-peach transition duration-150">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/shop?category=women" className="font-sans text-sm hover:text-peach transition duration-150">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/shop?category=kids" className="font-sans text-sm hover:text-peach transition duration-150">
                  Kids' Collection
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="font-sans text-sm hover:text-peach transition duration-150">
                  Customer Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="font-sans text-sm hover:text-peach transition duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-sans text-sm hover:text-peach transition duration-150">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="font-sans text-sm hover:text-peach transition duration-150">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="font-sans text-sm hover:text-peach transition duration-150">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="font-sans text-sm hover:text-peach transition duration-150">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="font-sans text-sm">123 Cozy Lane, Comfort City, CC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="font-sans text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="font-sans text-sm">hello@footsy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-light mt-8 pt-8 text-center">
          <p className="font-sans text-sm">
            &copy; {new Date().getFullYear()} Footsy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;