import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal, getItemCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6">
            <ShoppingBag className="h-16 w-16 text-brown-light mx-auto" />
          </div>
          <h1 className="font-serif font-bold text-2xl text-brown-dark mb-4">
            Your Cart is Empty
          </h1>
          <p className="font-sans text-brown-medium mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center bg-brown-medium hover:bg-brown-dark text-cream font-sans font-medium px-6 py-3 rounded-md transition duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-serif font-bold text-2xl md:text-3xl text-brown-dark mb-8">
        Shopping Cart ({getItemCount()} items)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}`}
                className="flex flex-col sm:flex-row items-center p-4 border-b border-brown-light last:border-b-0"
              >
                <Link
                  to={`/shop/${item.product.id}`}
                  className="w-24 h-24 flex-shrink-0 mb-4 sm:mb-0"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-full h-full object-cover object-center rounded-md"
                  />
                </Link>

                <div className="sm:ml-6 flex-grow">
                  <Link
                    to={`/shop/${item.product.id}`}
                    className="font-serif font-semibold text-lg text-brown-dark hover:text-brown-medium"
                  >
                    {item.product.name}
                  </Link>
                  
                  <div className="text-sm text-brown-medium mt-1">
                    <span>Size: {item.size}</span>
                    <span className="mx-2">•</span>
                    <span>Color: {item.color}</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <div className="flex items-center border border-brown-light rounded-md">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-brown-light hover:text-cream transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-brown-light hover:text-cream transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="flex items-center text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </button>
                    
                    <div className="font-semibold text-brown-dark ml-auto">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-serif font-semibold text-xl text-brown-dark mb-4">
              Order Summary
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-brown-medium">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              
              <div className="border-t border-brown-light pt-4">
                <div className="flex justify-between font-semibold text-brown-dark mb-6">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                
                <WhatsAppButton className="w-full mb-4" />
                
                <Link
                  to="/shop"
                  className="flex items-center justify-center font-sans font-medium text-brown-medium hover:text-brown-dark"
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;