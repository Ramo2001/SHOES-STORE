import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shovel as Shoe, AlertCircle } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // TODO: Implement Supabase authentication
      console.log('Login attempt:', { email, password });
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shoe className="h-12 w-12 text-brown-dark" />
          </div>
          <h1 className="font-serif font-bold text-3xl text-brown-dark">
            Admin Login
          </h1>
          <p className="font-sans text-brown-medium mt-2">
            Sign in to manage your store
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block font-sans font-medium text-brown-dark mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-brown-light rounded-md py-2 px-3 focus:ring-2 focus:ring-brown-medium focus:border-brown-medium transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-sans font-medium text-brown-dark mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-brown-light rounded-md py-2 px-3 focus:ring-2 focus:ring-brown-medium focus:border-brown-medium transition"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-brown-medium hover:bg-brown-dark text-cream font-sans font-medium py-3 px-4 rounded-md transition duration-300 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;