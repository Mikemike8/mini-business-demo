import React from 'react';
import HeroSection from '../components/HeroSection';
import TopDebtorsLeaderboard from '../components/TopDebtorsLeaderboard';
import NewsletterSubscription from '../components/NewsletterSubscription';
import PDFUploadSystem from '../components/PDFUploadSystem';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Clock, Target } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Reesor & Associates?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in commercial debt recovery with a proven track record 
              of success while maintaining your business relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                89% average recovery rate with over $4.2M recovered for our clients last year.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Recovery</h3>
              <p className="text-gray-600">
                Average 45-day resolution time using our proven debt collection strategies.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Relationship Focused</h3>
              <p className="text-gray-600">
                Professional approach that preserves your valuable business relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Debtors Leaderboard */}
      <TopDebtorsLeaderboard />

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Recovery Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to debt recovery that maximizes results while 
              maintaining professionalism throughout the process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-700">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Case Assessment</h3>
              <p className="text-gray-600 text-sm">
                We review your documentation and assess recovery viability
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-700">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy Development</h3>
              <p className="text-gray-600 text-sm">
                Custom recovery plan based on debtor analysis and asset investigation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-700">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Execute recovery through negotiation, legal action, or mediation
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-700">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recovery & Reporting</h3>
              <p className="text-gray-600 text-sm">
                Successful recovery with detailed reporting and transparent fees
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Learn More About Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* PDF Upload System */}
      <PDFUploadSystem />

      {/* Testimonials Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how we've helped businesses recover their outstanding debts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <span className="font-semibold text-gray-900">$425,000 Recovered</span>
              </div>
              <p className="text-gray-600 mb-4">
                "Reesor & Associates recovered $425,000 from a stubborn debtor in just 45 days. 
                Their professional approach and legal expertise made all the difference."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Michael R. Thompson</p>
                <p className="text-gray-500 text-sm">CEO, Thompson Manufacturing</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <span className="font-semibold text-gray-900">92% Recovery Rate</span>
              </div>
              <p className="text-gray-600 mb-4">
                "We had given up on recovering $295,000 from a defaulted client. 
                Reesor & Associates achieved a 92% recovery rate in under 40 days."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-gray-500 text-sm">CFO, TechFlow Solutions</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/success-stories"
              className="inline-flex items-center px-6 py-3 border border-black text-black font-semibold hover:bg-black hover:text-white transition-colors"
            >
              View All Success Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <NewsletterSubscription />
    </div>
  );
};

export default Home;
