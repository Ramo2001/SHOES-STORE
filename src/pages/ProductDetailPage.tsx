import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import WhatsAppButton from '../components/WhatsAppButton';
import { ChevronRight, Star, ArrowLeft } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeImage, setActiveImage] = useState('');
  
  // Related products - get 3 products of the same category
  const relatedProducts = products
    .filter(p => p.id !== id && p.category === product?.category)
    .slice(0, 3);

  useEffect(() => {
    if (product) {
      setActiveImage(product.imageUrl);
      setSelectedSize(product.availableSizes[0]);
      setSelectedColor(product.colors[0]);
      
      // Set page title
      document.title = `${product.name} - Footsy`;
    }
    
    // Scroll to top on product change
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="font-serif font-bold text-2xl text-brown-dark mb-4">
            Product Not Found
          </h2>
          <p className="font-sans text-brown-medium mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center bg-brown-medium hover:bg-brown-dark text-cream font-sans font-medium px-6 py-3 rounded-md transition duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm mb-6 font-sans">
          <Link to="/" className="text-brown-medium hover:text-brown-dark transition">
            Home
          </Link>
          <ChevronRight className="mx-2 h-4 w-4 text-brown-light" />
          <Link to="/shop" className="text-brown-medium hover:text-brown-dark transition">
            Shop
          </Link>
          <ChevronRight className="mx-2 h-4 w-4 text-brown-light" />
          <Link 
            to={`/shop?category=${product.category}`} 
            className="text-brown-medium hover:text-brown-dark transition"
          >
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <ChevronRight className="mx-2 h-4 w-4 text-brown-light" />
          <span className="text-brown-dark font-medium">{product.name}</span>
        </nav>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product Images */}
            <div className="md:w-1/2 p-6">
              <div className="relative rounded-lg overflow-hidden mb-4">
                <img
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-80 md:h-96 object-cover object-center"
                />
                {product.isNew && (
                  <span className="absolute top-4 right-4 bg-gold text-brown-dark px-3 py-1 text-xs font-semibold rounded">
                    NEW
                  </span>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveImage(product.imageUrl)}
                  className={`rounded-md overflow-hidden border-2 ${
                    activeImage === product.imageUrl ? 'border-brown-medium' : 'border-transparent'
                  }`}
                >
                  <img
                    src={product.imageUrl}
                    alt={`${product.name} view 1`}
                    className="w-full h-20 object-cover object-center"
                  />
                </button>
                {/* Additional images would be here in a real product */}
                <div className="rounded-md overflow-hidden border-2 border-transparent opacity-50">
                  <img
                    src={product.imageUrl}
                    alt={`${product.name} view 2`}
                    className="w-full h-20 object-cover object-center filter grayscale"
                  />
                </div>
                <div className="rounded-md overflow-hidden border-2 border-transparent opacity-50">
                  <img
                    src={product.imageUrl}
                    alt={`${product.name} view 3`}
                    className="w-full h-20 object-cover object-center filter grayscale"
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="flex items-center mb-2">
                <div className="flex items-center text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? 'fill-gold' : ''
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-brown-medium">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <h1 className="font-serif font-bold text-2xl md:text-3xl text-brown-dark mb-2">
                {product.name}
              </h1>
              
              <p className="font-sans text-2xl font-semibold text-brown-medium mb-4">
                ${product.price.toFixed(2)}
              </p>
              
              <p className="font-sans text-brown-medium mb-6">
                {product.description}
              </p>
              
              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-sans font-medium text-brown-dark mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-md font-sans font-medium transition ${
                        selectedSize === size
                          ? 'bg-brown-medium text-cream shadow-sm'
                          : 'bg-cream text-brown-medium hover:bg-brown-light hover:text-cream'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-sans font-medium text-brown-dark mb-2">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`relative flex items-center justify-center rounded-full w-8 h-8 ${
                        selectedColor === color
                          ? 'ring-2 ring-brown-medium ring-offset-2'
                          : ''
                      }`}
                      style={{
                        backgroundColor: color.toLowerCase(),
                        border: '1px solid #e0e0e0',
                      }}
                      aria-label={color}
                    >
                      <span className="sr-only">{color}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* WhatsApp Order Button */}
              <div className="mt-8">
                <WhatsAppButton
                  productName={product.name}
                  productSize={selectedSize}
                  productColor={selectedColor}
                  className="w-full md:w-auto"
                />
                
                <p className="font-sans text-sm text-brown-light mt-4">
                  Click the button above to order via WhatsApp. Our team will reply to confirm availability and process your order.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-12">
          <h2 className="font-serif font-bold text-2xl text-brown-dark mb-6">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <Link
                  to={`/shop/${relatedProduct.id}`}
                  className="block relative overflow-hidden"
                >
                  <img
                    src={relatedProduct.imageUrl}
                    alt={relatedProduct.name}
                    className="w-full h-56 object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                  {relatedProduct.isNew && (
                    <span className="absolute top-0 right-0 bg-gold text-brown-dark px-3 py-1 text-xs font-semibold">
                      NEW
                    </span>
                  )}
                </Link>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Link to={`/shop/${relatedProduct.id}`}>
                      <h3 className="font-serif font-semibold text-lg text-brown-dark hover:text-brown-medium transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <span className="font-sans font-semibold text-brown-medium">
                      ${relatedProduct.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <Link
                    to={`/shop/${relatedProduct.id}`}
                    className="font-sans text-brown-medium hover:text-brown-dark transition-colors text-sm inline-flex items-center mt-2"
                  >
                    View Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetailPage;