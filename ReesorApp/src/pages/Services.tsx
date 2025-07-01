import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  FileText, 
  Search, 
  Scale, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  DollarSign,
  Phone,
  Mail
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [process, setProcess] = useState<ProcessStep[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/data/services.json');
        const data = await response.json();
        setServices(data.services);
        setProcess(data.process);
      } catch (error) {
        console.error('Error fetching services data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="h-8 w-8 text-white" />;
      case 'file-text':
        return <FileText className="h-8 w-8 text-white" />;
      case 'search':
        return <Search className="h-8 w-8 text-white" />;
      case 'scale':
        return <Scale className="h-8 w-8 text-white" />;
      default:
        return <Briefcase className="h-8 w-8 text-white" />;
    }
  };

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="animate-pulse text-center">
  //         <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
  //         <div className="h-4 bg-gray-300 rounded w-32 mx-auto"></div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Debt Recovery Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive commercial debt collection solutions designed to recover 
              your outstanding debts while preserving valuable business relationships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <div className="text-2xl font-bold">$4.2M+</div>
                <div className="text-gray-400">Recovered Annually</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <div className="text-2xl font-bold">89%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <div className="text-2xl font-bold">45 Days</div>
                <div className="text-gray-400">Average Recovery Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive debt recovery solutions tailored to your specific 
              business needs and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Recovery Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic, professional approach that maximizes recovery rates while 
              maintaining the integrity of your business relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-lg text-gray-600">
              We specialize in debt recovery across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🏭</div>
              <h4 className="font-semibold text-gray-900">Manufacturing</h4>
              <p className="text-gray-600 text-sm mt-2">Supply chain and equipment debts</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🏗️</div>
              <h4 className="font-semibold text-gray-900">Construction</h4>
              <p className="text-gray-600 text-sm mt-2">Contractor and materials disputes</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">💻</div>
              <h4 className="font-semibold text-gray-900">Technology</h4>
              <p className="text-gray-600 text-sm mt-2">Software and service agreements</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🏥</div>
              <h4 className="font-semibold text-gray-900">Healthcare</h4>
              <p className="text-gray-600 text-sm mt-2">Medical equipment and services</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🚛</div>
              <h4 className="font-semibold text-gray-900">Logistics</h4>
              <p className="text-gray-600 text-sm mt-2">Transportation and freight</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-semibold text-gray-900">Energy</h4>
              <p className="text-gray-600 text-sm mt-2">Utility and supply contracts</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🏪</div>
              <h4 className="font-semibold text-gray-900">Retail</h4>
              <p className="text-gray-600 text-sm mt-2">Product and service debts</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🏦</div>
              <h4 className="font-semibold text-gray-900">Financial</h4>
              <p className="text-gray-600 text-sm mt-2">Professional services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              No upfront fees - we only get paid when you get paid
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Standard Collection</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">25%</div>
              <p className="text-gray-600 mb-6">of amount recovered</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-600">Demand letters</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-600">Phone negotiations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-600">Settlement negotiations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-600">Regular reporting</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block text-center px-6 py-3 bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-black">
              <div className="text-center mb-4">
                <span className="bg-black text-white px-3 py-1 text-sm font-semibold">MOST POPULAR</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Collection</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">33%</div>
              <p className="text-gray-600 mb-6">of amount recovered</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-600">All standard features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-600">Legal proceedings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-600">Asset investigation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-600">Judgment enforcement</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block text-center px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complex Cases</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
              <p className="text-gray-600 mb-6">based on case complexity</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-600">Multi-jurisdictional cases</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-600">International collections</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-600">Bankruptcy proceedings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                  <span className="text-gray-600">Dedicated case manager</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="block text-center px-6 py-3 bg-gray-200 text-gray-900 font-semibold hover:bg-gray-300 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Debt Recovery?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and case assessment from our experienced team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-white font-semibold hover:bg-white hover:text-black transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: (555) 123-4567
            </a>
          </div>
          <div className="flex items-center justify-center space-x-6 text-gray-300">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@reesorassociates.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
