import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Subscribing email:', email);
    setSubscribed(true);
  };

  return (
    <section className="py-12 md:py-16 bg-brown-medium text-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif font-bold text-2xl md:text-3xl mb-4">
          Join Our Cozy Community
        </h2>
        <p className="font-sans max-w-2xl mx-auto mb-8">
          Subscribe to our newsletter for early access to new collections, exclusive offers, and styling tips.
        </p>

        {subscribed ? (
          <div className="bg-green-700 max-w-md mx-auto rounded-md p-4 animate-fade-in">
            <p className="font-sans">
              Thank you for subscribing! Check your email for a welcome message.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow rounded-md border-0 bg-brown-dark text-cream placeholder-brown-light focus:ring-2 focus:ring-peach px-4 py-3"
              />
              <button
                type="submit"
                className="bg-peach text-brown-dark font-sans font-medium px-6 py-3 rounded-md hover:bg-cream transition duration-300 shadow-md"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;