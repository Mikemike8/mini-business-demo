import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setMessage('Thank you for subscribing! You\'ll receive our debt collection insights and updates.');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const resetStatus = () => {
    setStatus('idle');
    setMessage('');
  };

  if (status === 'success') {
    return (
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Successfully Subscribed!</h3>
            <p className="text-gray-300 mb-6">{message}</p>
            <button
              onClick={resetStatus}
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 transition-colors"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <div className="text-center mb-8">
            <Mail className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Stay Informed on Debt Collection
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get exclusive insights, industry updates, and actionable debt recovery 
              strategies delivered to your inbox monthly.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold mb-2">Industry Insights</h4>
              <p className="text-gray-400 text-sm">
                Latest trends and statistics in commercial debt collection
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚖️</span>
              </div>
              <h4 className="font-semibold mb-2">Legal Updates</h4>
              <p className="text-gray-400 text-sm">
                Important changes in debt collection laws and regulations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="font-semibold mb-2">Best Practices</h4>
              <p className="text-gray-400 text-sm">
                Proven strategies to prevent and manage business debt issues
              </p>
            </div>
          </div>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors"
                  disabled={status === 'loading'}
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            
            {status === 'error' && (
              <div className="mt-4 flex items-center justify-center text-red-400">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span className="text-sm">{message}</span>
              </div>
            )}
            
            <p className="text-gray-400 text-xs text-center mt-4">
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </p>
          </form>

          {/* Social Proof */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Join 1,200+ business professionals who trust our insights
            </p>
            <div className="flex justify-center items-center mt-2 space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-900 flex items-center justify-center"
                  >
                    <span className="text-xs">👤</span>
                  </div>
                ))}
              </div>
              <span className="text-gray-400 text-sm">and many more...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
