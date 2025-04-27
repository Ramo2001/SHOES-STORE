import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';
import { Product } from '../types/product';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, product.availableSizes[0], product.colors[0]);
  };

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in">
      <Link to={`/shop/${product.id}`} className="block relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-0 right-0 bg-gold text-brown-dark px-3 py-1 text-xs font-semibold">
            NEW
          </span>
        )}
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/shop/${product.id}`}>
            <h3 className="font-serif font-semibold text-lg text-brown-dark hover:text-brown-medium transition-colors">
              {product.name}
            </h3>
          </Link>
          <span className="font-sans font-semibold text-brown-medium">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="text-brown-light text-sm mb-3">{product.category}</p>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center bg-brown-medium hover:bg-brown-dark text-cream font-sans font-medium py-2 px-4 rounded-md transition duration-300"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </button>
            <WhatsAppButton
              productName={product.name}
              variant="outlined"
              className="text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;