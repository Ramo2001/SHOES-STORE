import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset the status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1000);
  };

  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-brown-dark mb-4">
            Contact Us
          </h1>
          <p className="font-sans text-brown-medium">
            We're here to help! Reach out with any questions about our products or services.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="p-6">
                <h2 className="font-serif font-semibold text-2xl text-brown-dark mb-6">
                  Get In Touch
                </h2>
                
                <ul className="space-y-6">
                  <li className="flex">
                    <MapPin className="h-6 w-6 text-brown-medium mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-sans font-medium text-brown-dark mb-1">
                        Address
                      </h3>
                      <address className="font-sans text-brown-medium not-italic">
                        123 Cozy Lane<br />
                        Comfort City, CC 12345<br />
                        United States
                      </address>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <Phone className="h-6 w-6 text-brown-medium mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-sans font-medium text-brown-dark mb-1">
                        Phone
                      </h3>
                      <p className="font-sans text-brown-medium">
                        <a
                          href="tel:+15551234567"
                          className="hover:text-brown-dark transition-colors"
                        >
                          (555) 123-4567
                        </a>
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <Mail className="h-6 w-6 text-brown-medium mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-sans font-medium text-brown-dark mb-1">
                        Email
                      </h3>
                      <p className="font-sans text-brown-medium">
                        <a
                          href="mailto:hello@footsy.com"
                          className="hover:text-brown-dark transition-colors"
                        >
                          hello@footsy.com
                        </a>
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <Clock className="h-6 w-6 text-brown-medium mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-sans font-medium text-brown-dark mb-1">
                        Hours
                      </h3>
                      <p className="font-sans text-brown-medium">
                        Monday - Friday: 10am - 7pm<br />
                        Saturday: 10am - 5pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <WhatsAppButton className="w-full" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="font-serif font-semibold text-2xl text-brown-dark mb-6">
                  Send Us a Message
                </h2>
                
                {formStatus === 'success' ? (
                  <div className="bg-green-100 border border-green-400 text-green-800 rounded-md p-4 mb-6 animate-fade-in">
                    <p className="font-sans">
                      Thank you for your message! We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : formStatus === 'error' ? (
                  <div className="bg-red-100 border border-red-400 text-red-800 rounded-md p-4 mb-6 animate-fade-in">
                    <p className="font-sans">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-sans font-medium text-brown-dark mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-brown-light rounded-md py-3 px-4 focus:ring-2 focus:ring-brown-medium focus:border-brown-medium transition"
                      />
                    </div>
                    
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-sans font-medium text-brown-dark mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-brown-light rounded-md py-3 px-4 focus:ring-2 focus:ring-brown-medium focus:border-brown-medium transition"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block font-sans font-medium text-brown-dark mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-brown-light rounded-md py-3 px-4 focus:ring-2 focus:ring-brown-medium focus:border-brown-medium transition"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Returns & Exchanges">Returns & Exchanges</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block font-sans font-medium text-brown-dark mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full border border-brown-light rounded-md py-3 px-4 focus:ring-2 focus:ring-brown-medium focus:border-brown-medium transition"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-brown-medium hover:bg-brown-dark text-cream font-sans font-medium px-6 py-3 rounded-md transition duration-300 shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <h2 className="font-serif font-semibold text-2xl text-brown-dark p-6 border-b border-brown-light">
            Visit Our Store
          </h2>
          <div className="aspect-w-16 aspect-h-9 md:aspect-h-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1619709241456!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Store location"
            ></iframe>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif font-semibold text-2xl text-brown-dark mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="font-sans text-brown-medium mb-6">
            For the fastest response, reach out to us on WhatsApp. Our team is ready to help with any questions about our products or orders.
          </p>
          <WhatsAppButton className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;