import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const FaqPage: React.FC = () => {
  // FAQ items by category
  const faqData = [
    {
      category: 'Orders & Shipping',
      items: [
        {
          question: 'How do I place an order through WhatsApp?',
          answer: 'Simply click the "Order via WhatsApp" button on any product page. This will open WhatsApp with a pre-filled message containing your selected product details. Our team will respond shortly to confirm availability and complete your order.'
        },
        {
          question: 'What information should I include when ordering?',
          answer: 'When ordering, please include your preferred size, color, delivery address, and any special instructions. If you\'re ordering multiple items, please list each one with the specific details.'
        },
        {
          question: 'How do I pay for my order?',
          answer: 'After confirming your order via WhatsApp, we\'ll provide payment options including credit/debit card, bank transfer, or cash on delivery. We\'ll send you secure payment links when applicable.'
        },
        {
          question: 'How long does shipping take?',
          answer: 'Local deliveries typically arrive within 1-3 business days. For other locations, delivery takes 3-7 business days depending on your address. We\'ll provide tracking information once your order ships.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      items: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for unworn shoes in original condition with all tags attached and original packaging. To initiate a return, contact us via WhatsApp or email.'
        },
        {
          question: 'How do I exchange for a different size?',
          answer: 'For size exchanges, message us on WhatsApp with your order details and the size you need. If the new size is available, we\'ll arrange the exchange. Please note that the item must be unworn and in original condition.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'Yes, refunds are processed within 7-10 business days after we receive and inspect the returned item. Refunds will be issued to the original payment method.'
        }
      ]
    },
    {
      category: 'Product Information',
      items: [
        {
          question: 'How do I find my correct shoe size?',
          answer: 'We recommend measuring your foot length in centimeters and referring to our size guide on each product page. If you\'re between sizes, we generally recommend sizing up. You can also message us on WhatsApp for personalized sizing advice.'
        },
        {
          question: 'Are your shoes true to size?',
          answer: 'Most of our shoes fit true to size, but some styles may vary slightly. Each product page includes specific fit notes. If you\'re unsure, please contact us for recommendations based on the specific style.'
        },
        {
          question: 'How do I care for my shoes?',
          answer: 'Care instructions vary by material. Generally, we recommend using a soft brush to remove dirt, wiping with a damp cloth, and allowing shoes to air dry away from direct heat. Specific care instructions are included with each purchase.'
        },
        {
          question: 'Where are your shoes made?',
          answer: 'Our shoes are crafted by skilled artisans in carefully selected workshops known for their quality and ethical standards. We partner with manufacturers who share our commitment to fair labor practices and sustainable production methods.'
        }
      ]
    },
    {
      category: 'WhatsApp Ordering',
      items: [
        {
          question: 'Is ordering via WhatsApp secure?',
          answer: 'Yes, WhatsApp uses end-to-end encryption for all messages. However, we never ask for sensitive information like full credit card details through WhatsApp. For payments, we use secure payment platforms and links.'
        },
        {
          question: 'What are your WhatsApp business hours?',
          answer: 'Our WhatsApp support is available Monday through Friday from 9am to 6pm, and Saturday from 10am to 4pm. Messages received outside these hours will be answered the next business day.'
        },
        {
          question: 'Can I track my order status through WhatsApp?',
          answer: 'Absolutely! Just message us with your order details, and we\'ll provide an update on your order status. Once shipped, we\'ll also send tracking information via WhatsApp.'
        }
      ]
    }
  ];

  // State to track which accordions are open
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});

  // Toggle accordion open/closed
  const toggleAccordion = (category: string, index: number) => {
    const key = `${category}-${index}`;
    setOpenAccordions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Check if an accordion is open
  const isAccordionOpen = (category: string, index: number) => {
    const key = `${category}-${index}`;
    return openAccordions[key];
  };

  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-brown-dark mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-sans text-brown-medium">
            Find answers to common questions about our products, ordering process, and policies.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h2 className="font-serif font-semibold text-2xl text-brown-dark mb-4">
                {category.category}
              </h2>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className={`border-b border-brown-light last:border-b-0 transition-colors ${
                      isAccordionOpen(category.category, itemIndex) ? 'bg-peach bg-opacity-20' : ''
                    }`}
                  >
                    <button
                      className="flex justify-between items-center w-full p-5 text-left font-sans font-medium text-brown-dark"
                      onClick={() => toggleAccordion(category.category, itemIndex)}
                      aria-expanded={isAccordionOpen(category.category, itemIndex)}
                    >
                      <span>{item.question}</span>
                      {isAccordionOpen(category.category, itemIndex) ? (
                        <ChevronUp className="h-5 w-5 text-brown-medium flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-brown-medium flex-shrink-0" />
                      )}
                    </button>
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isAccordionOpen(category.category, itemIndex)
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="p-5 pt-0 font-sans text-brown-medium">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bg-brown-medium text-cream rounded-lg shadow-md p-8 text-center mt-12">
            <h2 className="font-serif font-semibold text-2xl mb-4">
              Still Have Questions?
            </h2>
            <p className="font-sans mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer you were looking for, our team is ready to help. Reach out through WhatsApp for the fastest response.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppButton className="w-full sm:w-auto" />
              <a
                href="/contact"
                className="bg-cream text-brown-dark font-sans font-medium px-6 py-3 rounded-md hover:bg-peach transition duration-300 shadow-md w-full sm:w-auto inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;