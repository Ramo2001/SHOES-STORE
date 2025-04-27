import React from 'react';

interface WhatsAppButtonProps {
  productName?: string;
  productSize?: string;
  productColor?: string;
  variant?: 'primary' | 'outlined';
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  productName,
  productSize,
  productColor,
  variant = 'primary',
  className = '',
}) => {
  const generateWhatsAppLink = () => {
    // Phone number needs to be replaced with the store's actual WhatsApp number
    const phoneNumber = '5551234567';
    
    let message = 'Hi! I\'d like to inquire about';
    
    if (productName) {
      message += ` the ${productName}`;
      
      if (productSize || productColor) {
        message += ' (';
        
        if (productSize) {
          message += `Size: ${productSize}`;
        }
        
        if (productSize && productColor) {
          message += ', ';
        }
        
        if (productColor) {
          message += `Color: ${productColor}`;
        }
        
        message += ')';
      }
      
      message += '. Is it available?';
    } else {
      message += ' your products.';
    }
    
    // Encode the message for a URL
    const encodedMessage = encodeURIComponent(message);
    
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const baseClasses = "flex items-center justify-center font-sans font-medium rounded-md transition duration-300 py-3 px-4";
  
  const variantClasses = variant === 'primary'
    ? "bg-green-600 hover:bg-green-700 text-white shadow-sm"
    : "border-2 border-green-600 text-green-600 hover:bg-green-50";

  return (
    <a
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses} ${className}`}
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
      Order via WhatsApp
    </a>
  );
};

export default WhatsAppButton;