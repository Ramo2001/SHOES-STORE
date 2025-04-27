import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import TestimonialCard from '../components/TestimonialCard';
import { Send } from 'lucide-react';

const ReviewsPage: React.FC = () => {
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: 5,
    review: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (newRating: number) => {
    setReviewForm(prev => ({ ...prev, rating: newRating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', reviewForm);
    setFormSubmitted(true);
    setReviewForm({
      name: '',
      email: '',
      rating: 5,
      review: '',
    });
  };

  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-brown-dark mb-4">
            Customer Reviews
          </h1>
          <p className="font-sans text-brown-medium">
            Don't just take our word for it — see what our customers have to say about their Footsy experience.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
              <TestimonialCard
                name={testimonial.name}
                image={testimonial.image}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="font-serif font-semibold text-2xl text-brown-dark text-center mb-8">
              Share Your Experience
            </h2>
            
            {formSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-800 rounded-md p-4 max-w-md mx-auto text-center animate-fade-in">
                <p className="font-sans mb-2 font-medium">Thank you for your review!</p>
                <p className="font-sans text-sm">
                  We appreciate you taking the time to share your experience with us.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
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
                      value={reviewForm.name}
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
                      value={reviewForm.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-brown-light rounded-md py-3 px-4 focus:ring-2 focus:ring-brown-medium focus:border-brown-medium transition"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <span className="block font-sans font-medium text-brown-dark mb-2">
                    Your Rating
                  </span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className="text-2xl focus:outline-none transition-colors"
                      >
                        <span
                          className={`text-3xl ${
                            star <= reviewForm.rating ? 'text-gold' : 'text-brown-light'
                          }`}
                        >
                          ★
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label
                    htmlFor="review"
                    className="block font-sans font-medium text-brown-dark mb-2"
                  >
                    Your Review
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    value={reviewForm.review}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your experience with our products or service..."
                    className="w-full border border-brown-light rounded-md py-3 px-4 focus:ring-2 focus:ring-brown-medium focus:border-brown-medium transition"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center bg-brown-medium hover:bg-brown-dark text-cream font-sans font-medium px-6 py-3 rounded-md transition duration-300 shadow-md"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="bg-peach bg-opacity-30 rounded-lg p-8 text-center">
          <h2 className="font-serif font-semibold text-2xl text-brown-dark mb-4">
            Love Your Footsy Shoes?
          </h2>
          <p className="font-sans text-brown-medium mb-6 max-w-xl mx-auto">
            Follow us on social media and tag us in your photos for a chance to be featured on our website and social channels!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="bg-brown-medium text-cream hover:bg-brown-dark w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-brown-medium text-cream hover:bg-brown-dark w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="#"
              className="bg-brown-medium text-cream hover:bg-brown-dark w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;