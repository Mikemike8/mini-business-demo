import React, { useState } from 'react';

import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  DollarSign,
  Building,
  User,
  FileText
} from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  emailAddress: '',          // was `email`
  phoneNumber: '',           // was `phone`
  companyName: '',           // was `company`
  title: '',
  debtAmount: '',
  debtorCompanyName: '',     // was `debtorName`
  caseDescription: '',       // was `description`
  urgencyLevel: 'medium',    // was `urgency`
  hasSupportingDocumentation: false, 
});

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');


  const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value, type } = e.target;

  const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

  setFormData(prev => ({
    ...prev,
    [name]: val,
  }));
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('http://localhost:5010/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setMessage('Thank you for your submission! Our team will contact you within 24 hours to discuss your case.');
        setFormData({
          firstName: '',
  lastName: '',
  emailAddress: '',          // was `email`
  phoneNumber: '',           // was `phone`
  companyName: '',           // was `company`
  title: '',
  debtAmount: '',
  debtorCompanyName: '',     // was `debtorName`
  caseDescription: '',       // was `description`
  urgencyLevel: 'medium',    // was `urgency`
  hasSupportingDocumentation: false, 
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Something went wrong. Please try again or call us directly.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contact Our Debt Recovery Experts
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get a free consultation and case assessment. Our experienced team is ready 
              to help you recover your outstanding debts professionally and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Free Case Assessment
              </h2>
              
              {status === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Submission Received!
                  </h3>
                  <p className="text-gray-600 mb-6">{message}</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Submit Another Case
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
  type="tel"
  id="phone"
  name="phoneNumber"                // ✅ match your server field
  value={formData.phoneNumber}      // ✅ match your state key
  onChange={handleInputChange}
  required
  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
/>

                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
  type="text"
  id="company"
  name="companyName"                 // ✅ matches your server field
  value={formData.companyName}       // ✅ matches your state key
  onChange={handleInputChange}
  required
  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
/>

                    </div>
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  {/* Debt Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="debtAmount" className="block text-sm font-medium text-gray-700 mb-2">
                        Debt Amount (USD)
                      </label>
                      <input
                        type="number"
                        id="debtAmount"
                        name="debtAmount"
                        value={formData.debtAmount}
                        onChange={handleInputChange}
                        placeholder="e.g., 50000"
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="debtorName" className="block text-sm font-medium text-gray-700 mb-2">
                        Debtor Company Name
                      </label>
                      <input
  type="text"
  id="debtorName"
  name="debtorCompanyName"                 // ✅ match server field
  value={formData.debtorCompanyName}       // ✅ match state key
  onChange={handleInputChange}
  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
/>

                    </div>
                  </div>

                  {/* Case Details */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Case Description *
                    </label>
                    <textarea
                      id="description"
                      name="caseDescription"
                      value={formData.caseDescription}      // ✅ match state
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Please describe the nature of the debt, timeline, and any relevant details..."
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
                    ></textarea>
                  </div>

                  {/* Urgency Level */}
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
  id="urgency"
  name="urgencyLevel"                     // match backend
  value={formData.urgencyLevel}           // match state property
  onChange={handleInputChange}
  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
>

                      <option value="low">Low - No immediate timeline</option>
                      <option value="medium">Medium - Within 30-60 days</option>
                      <option value="high">High - Within 30 days</option>
                      <option value="urgent">Urgent - Immediate action needed</option>
                    </select>
                  </div>

                  {/* Documentation Checkbox */}
                  <div className="flex items-center">
                    <input
  type="checkbox"
  id="hasSupportingDocumentation"
  name="hasSupportingDocumentation"
  checked={formData.hasSupportingDocumentation}
  onChange={handleInputChange}
  className="h-4 w-4 text-black focus:ring-black border-gray-300"
/>

                    <label htmlFor="hasSupportingDocumentation" className="ml-2 block text-sm text-gray-700">
                      I have supporting documentation (invoices, contracts, etc.)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Case Assessment
                      </>
                    )}
                  </button>

                  {status === 'error' && (
                    <div className="flex items-center justify-center text-red-600">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm">{message}</span>
                    </div>
                  )}

                  <p className="text-xs text-gray-500 text-center">
                    * Required fields. All information is confidential and secure.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Our experienced debt recovery team is standing by to help you recover 
                  your outstanding debts. Contact us today for a free consultation.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Monday - Friday, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@reesorassociates.com</p>
                    <p className="text-gray-500 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Address</h3>
                    <p className="text-gray-600">
                      123 Business District<br />
                      Financial Center, Suite 456<br />
                      Business City, BC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Emergency Cases</h3>
                <p className="text-gray-600 text-sm mb-3">
                  For urgent debt recovery matters requiring immediate attention:
                </p>
                <p className="font-semibold text-gray-900">(555) 123-URGENT</p>
                <p className="text-gray-500 text-xs">Available 24/7 for qualifying cases</p>
              </div>

              {/* What to Expect */}
              <div className="bg-black text-white p-6 rounded-lg">
                <h3 className="font-semibold mb-4">What to Expect</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>Free case assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>Confidential consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>Custom recovery strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Contact Options
            </h2>
            <p className="text-lg text-gray-600">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <FileText className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Document Upload</h3>
              <p className="text-gray-600 mb-4">
                Upload your case documents securely through our platform
              </p>
              <a
                href="/#pdf-upload"
                className="inline-flex items-center px-4 py-2 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
              >
                Upload Documents
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <User className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Schedule Meeting</h3>
              <p className="text-gray-600 mb-4">
                Book a one-on-one consultation with our experts
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center px-4 py-2 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
              >
                Call to Schedule
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Building className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Office Visit</h3>
              <p className="text-gray-600 mb-4">
                Visit our office for an in-person consultation
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center px-4 py-2 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
              >
                Schedule Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
