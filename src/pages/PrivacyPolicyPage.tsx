import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
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
            Privacy Policy
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
                At Footsy ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website, make a purchase, or contact us via WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                2. Information We Collect
              </h2>
              <p>
                We may collect the following types of information:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, shipping address, and payment information when you make a purchase.
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages, emails, and other communications you exchange with us, including through WhatsApp.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, device information, and cookies when you browse our website.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our website, which products you view, and your shopping preferences.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                3. How We Use Your Information
              </h2>
              <p>
                We use your information for the following purposes:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>To process and fulfill your orders</li>
                <li>To communicate with you about your order status</li>
                <li>To provide customer support via WhatsApp and other channels</li>
                <li>To improve our website and product offerings</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                4. WhatsApp Communication
              </h2>
              <p>
                When you contact us through WhatsApp:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>We store your messages and contact information to provide ongoing customer service</li>
                <li>We may use this information to process orders you place through this channel</li>
                <li>WhatsApp's own privacy policy also applies to your use of their service</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                5. Data Sharing and Third Parties
              </h2>
              <p>
                We may share your information with:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Payment processors to complete transactions</li>
                <li>Shipping companies to deliver your orders</li>
                <li>IT service providers who help maintain our website</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="mt-2">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                6. Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of your data.
              </p>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                7. Your Rights
              </h2>
              <p>
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Request transfer of your data</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif font-semibold text-xl text-brown-dark mb-3">
                8. Contact Us
              </h2>
              <p>
                If you have questions about this privacy policy or would like to exercise your rights, please contact us at:
              </p>
              <p className="mt-2">
                Email: privacy@footsy.com<br />
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

export default PrivacyPolicyPage;