import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-black to-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-background.jpg"
          alt="Professional Business Office"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border border-gray-600">
              <Shield className="h-4 w-4 mr-2" />
              Professional Debt Recovery Specialists
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Recover Your
              <span className="block text-gray-300">Outstanding Debts</span>
              <span className="block text-2xl lg:text-3xl font-normal text-gray-400 mt-2">
                with Professional Excellence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Specialized in business-to-business debt collection. We recover your money 
              while preserving your valuable business relationships.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">89%</div>
                <div className="text-sm text-gray-400">Recovery Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$4.2M</div>
                <div className="text-sm text-gray-400">Recovered Last Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">45</div>
                <div className="text-sm text-gray-400">Avg. Days to Recovery</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-colors group"
              >
                Start Recovery Process
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-white font-semibold hover:bg-white hover:text-black transition-colors"
              >
                View Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                500+ Satisfied Clients
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                15+ Years Experience
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/images/business-handshake.jpg"
              alt="Professional Business Agreement"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-2xl"
            />
            {/* Overlay Card */}
            <div className="absolute -bottom-6 -left-6 bg-white text-black p-6 rounded-lg shadow-xl max-w-xs">
              <div className="text-2xl font-bold text-green-600">$890K</div>
              <div className="text-sm text-gray-600">Largest Single Recovery</div>
              <div className="text-xs text-gray-500 mt-1">Energy Company Contract Dispute</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-800 to-transparent rounded-full transform translate-x-48 -translate-y-48 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gray-700 to-transparent rounded-full transform -translate-x-32 translate-y-32 opacity-20"></div>
    </section>
  );
};

export default HeroSection;
