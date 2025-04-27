import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center font-sans text-brown-medium hover:text-brown-dark mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="font-serif font-bold text-3xl text-brown-dark mb-6">
            Terms of Service
          </h1>

          <div className="font-sans text-brown-medium space-y-6">
            <p>
              Last updated: January 1, 2025
            </p>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                1. Introduction
              </h2>
              <p>
                Welcome to Footsy. These Terms of Service govern your use of our website and the purchase of products from our store, including orders placed via WhatsApp. By accessing our website or placing an order, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                2. Ordering & Payment
              </h2>
              <p>
                When placing an order through our website or WhatsApp:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>All orders are subject to acceptance and product availability</li>
                <li>We reserve the right to refuse any order</li>
                <li>Payment is required at the time of purchase or according to terms agreed upon during WhatsApp ordering</li>
                <li>Prices are in USD and include applicable taxes</li>
                <li>We accept credit/debit cards, bank transfers, and other payment methods as specified during checkout</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                3. WhatsApp Ordering Process
              </h2>
              <p>
                For orders placed through WhatsApp:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Order confirmation occurs when we send you a confirmation message</li>
                <li>Payment instructions will be provided after order confirmation</li>
                <li>Orders are not finalized until payment is received</li>
                <li>We may request additional information to verify your identity</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                4. Shipping & Delivery
              </h2>
              <p>
                Our shipping and delivery terms:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Delivery timeframes are estimates and not guaranteed</li>
                <li>Shipping fees vary by location and will be communicated before order confirmation</li>
                <li>Risk of loss transfers to you upon delivery</li>
                <li>You are responsible for providing accurate shipping information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                5. Returns & Exchanges
              </h2>
              <p>
                Our return policy:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Returns accepted within 30 days of delivery</li>
                <li>Items must be unworn, in original condition with all tags and packaging</li>
                <li>Refunds will be issued to the original payment method</li>
                <li>Exchanges are subject to product availability</li>
                <li>Contact us via WhatsApp or email to initiate a return or exchange</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                6. Product Information
              </h2>
              <p>
                Regarding our products:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>We strive to display products accurately, but cannot guarantee color accuracy due to screen variations</li>
                <li>Product information is provided for reference only</li>
                <li>We reserve the right to modify product specifications without notice</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                7. Intellectual Property
              </h2>
              <p>
                All content on our website, including text, graphics, logos, images, and software, is the property of Footsy and protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Footsy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                9. Changes to Terms
              </h2>
              <p>
                We may update these Terms of Service from time to time. The most current version will be posted on our website with the effective date.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                10. Contact Information
              </h2>
              <p>
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                Email: legal@footsy.com<br />
                Address: 123 Cozy Lane, Comfort City, CC 12345<br />
                WhatsApp: (555) 123-4567
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;