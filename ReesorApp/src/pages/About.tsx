import React from 'react';
import { Scale, Users, Award, Building, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                About Reesor & Associates
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                For over 15 years, we have been the trusted partner for businesses 
                seeking professional debt recovery services. Our expertise in commercial 
                collections has helped thousands of companies recover millions in outstanding debts.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-gray-400">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$4.2M</div>
                  <div className="text-gray-400">Recovered Last Year</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">89%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/legal-team.jpg"
                alt="Professional Legal Team"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in recovering your debts while maintaining the integrity 
              and professionalism that your business relationships deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards of professionalism in every interaction, 
                ensuring your reputation remains intact throughout the recovery process.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Relationship Preservation</h3>
              <p className="text-gray-600">
                Our approach focuses on preserving valuable business relationships while 
                achieving successful debt recovery outcomes for our clients.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Results Driven</h3>
              <p className="text-gray-600">
                We are committed to delivering measurable results with transparency, 
                accountability, and a focus on maximizing recovery for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/office-building.jpg"
                alt="Professional Office Building"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010 by experienced legal professionals, Reesor & Associates 
                was established to address the growing need for specialized commercial 
                debt recovery services. We recognized that traditional collection methods 
                often damaged valuable business relationships.
              </p>
              <p className="text-gray-600 mb-6">
                Our innovative approach combines legal expertise with business acumen, 
                allowing us to recover debts while preserving the professional 
                relationships that are essential to your business success.
              </p>
              <p className="text-gray-600">
                Today, we are proud to be one of the leading commercial debt collection 
                agencies in the region, with a proven track record of success and a 
                commitment to excellence that sets us apart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600">
              Meet the experienced professionals leading our debt recovery efforts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/images/professional-portrait.jpeg"
                alt="James Reesor"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">James Reesor</h3>
              <p className="text-gray-600 mb-3">Founder & Managing Partner</p>
              <p className="text-gray-500 text-sm">
                15+ years in commercial law and debt recovery. J.D. from Harvard Law School, 
                specialized in business litigation and commercial collections.
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/professional-portrait.jpeg"
                alt="Sarah Mitchell"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Mitchell</h3>
              <p className="text-gray-600 mb-3">Senior Partner</p>
              <p className="text-gray-500 text-sm">
                12 years in commercial debt recovery and asset investigation. CPA and former 
                financial analyst with expertise in complex business disputes.
              </p>
            </div>

            <div className="text-center">
              <img
                src="/images/professional-portrait.jpeg"
                alt="Michael Chen"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Chen</h3>
              <p className="text-gray-600 mb-3">Director of Operations</p>
              <p className="text-gray-500 text-sm">
                10 years in operations management and client relations. MBA in Finance 
                with specialized training in negotiation and dispute resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Credentials & Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Our professional qualifications and industry recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Award className="h-12 w-12 text-black mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Licensed Attorneys</h4>
              <p className="text-gray-600 text-sm">
                State Bar certified legal professionals
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Building className="h-12 w-12 text-black mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">ACA Member</h4>
              <p className="text-gray-600 text-sm">
                American Collectors Association certified
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-black mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">FDCPA Compliant</h4>
              <p className="text-gray-600 text-sm">
                Fair Debt Collection Practices Act certified
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Scale className="h-12 w-12 text-black mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">BBB A+ Rating</h4>
              <p className="text-gray-600 text-sm">
                Better Business Bureau accredited
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Recover Your Outstanding Debts?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experienced team help you recover what you're owed while preserving 
            your valuable business relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-white font-semibold hover:bg-white hover:text-black transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
