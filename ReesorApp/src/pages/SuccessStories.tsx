import React, { useState, useEffect } from 'react';
import { Star, DollarSign, Clock, CheckCircle, TrendingUp, Award, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  text: string;
  rating: number;
  recoveredAmount: number;
}

const SuccessStories: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/data/testimonials.json');
        const data = await response.json();
        setTestimonials(data.testimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
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

  const totalRecovered = testimonials.reduce((sum, t) => sum + t.recoveredAmount, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="h-16 w-16 text-gray-300 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real results from real clients. See how we've helped businesses across 
              various industries recover their outstanding debts while maintaining 
              professional relationships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <div className="text-2xl font-bold">{formatCurrency(totalRecovered)}</div>
                <div className="text-gray-400">Featured Recoveries</div>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <div className="text-2xl font-bold">90%</div>
                <div className="text-gray-400">Avg Recovery Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Track Record
            </h2>
            <p className="text-lg text-gray-600">
              Our success is measured by the results we deliver for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-gray-900 mb-2">89%</div>
              <div className="text-gray-600">Average Recovery Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-gray-900 mb-2">45</div>
              <div className="text-gray-600">Days Average Resolution</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-gray-900 mb-2">$4.2M</div>
              <div className="text-gray-600">Recovered Last Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear directly from business leaders who have experienced our professional debt recovery services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="flex items-start mb-6">
                  <Quote className="h-8 w-8 text-gray-400 mr-4 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.title}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        {formatCurrency(testimonial.recoveredAmount)}
                      </div>
                      <div className="text-gray-500 text-sm">Recovered</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-gray-600">
              Detailed examples of our successful debt recovery cases
            </p>
          </div>

          <div className="space-y-12">
            {/* Case Study 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="bg-black text-white px-3 py-1 text-sm font-semibold mr-4">
                      CASE STUDY
                    </div>
                    <span className="text-gray-500">Manufacturing Industry</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    $425,000 Manufacturing Supply Chain Recovery
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A major manufacturing company faced a significant debt from a long-term 
                    supplier who defaulted on a large equipment order. The relationship was 
                    valuable, but the debt was seriously impacting cash flow. Our team developed 
                    a strategic approach that preserved the business relationship while successfully 
                    recovering the full amount.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-semibold">45 Days</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Recovery Rate</div>
                      <div className="font-semibold">87.6%</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    $425,000
                  </div>
                  <div className="text-gray-500 mb-4">Successfully Recovered</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 text-sm font-semibold rounded-full">
                    RELATIONSHIP PRESERVED
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="bg-black text-white px-3 py-1 text-sm font-semibold mr-4">
                      CASE STUDY
                    </div>
                    <span className="text-gray-500">Technology Sector</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    $295,000 Software Licensing Dispute Resolution
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A technology company faced a complex dispute over software licensing fees 
                    with a client who claimed the software didn't meet specifications. Through 
                    careful analysis of the contract terms and professional negotiation, we 
                    achieved an excellent recovery outcome.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-semibold">38 Days</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Recovery Rate</div>
                      <div className="font-semibold">92.2%</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    $295,000
                  </div>
                  <div className="text-gray-500 mb-4">Successfully Recovered</div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-semibold rounded-full">
                    CONTRACT DISPUTE
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="bg-black text-white px-3 py-1 text-sm font-semibold mr-4">
                      CASE STUDY
                    </div>
                    <span className="text-gray-500">Retail Industry</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    $225,000 Retail Chain Perfect Recovery
                  </h3>
                  <p className="text-gray-600 mb-6">
                    A retail chain needed to recover payment for goods supplied to a franchisee 
                    who was experiencing financial difficulties. Our team worked quickly to 
                    secure payment before the situation deteriorated further, achieving a 
                    remarkable 100% recovery rate.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-semibold">28 Days</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Recovery Rate</div>
                      <div className="font-semibold">100%</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    $225,000
                  </div>
                  <div className="text-gray-500 mb-4">Successfully Recovered</div>
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-semibold rounded-full">
                    PERFECT RECOVERY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Success */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Across Industries
            </h2>
            <p className="text-lg text-gray-600">
              We've helped businesses in every major industry recover their debts
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🏭</div>
              <h4 className="font-semibold text-gray-900 mb-2">Manufacturing</h4>
              <p className="text-2xl font-bold text-green-600">$1.2M</p>
              <p className="text-gray-500 text-sm">Recovered</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">💻</div>
              <h4 className="font-semibold text-gray-900 mb-2">Technology</h4>
              <p className="text-2xl font-bold text-green-600">$890K</p>
              <p className="text-gray-500 text-sm">Recovered</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🏗️</div>
              <h4 className="font-semibold text-gray-900 mb-2">Construction</h4>
              <p className="text-2xl font-bold text-green-600">$750K</p>
              <p className="text-gray-500 text-sm">Recovered</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🏥</div>
              <h4 className="font-semibold text-gray-900 mb-2">Healthcare</h4>
              <p className="text-2xl font-bold text-green-600">$650K</p>
              <p className="text-gray-500 text-sm">Recovered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of satisfied clients who have successfully recovered their 
            outstanding debts with our professional services.
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

export default SuccessStories;
