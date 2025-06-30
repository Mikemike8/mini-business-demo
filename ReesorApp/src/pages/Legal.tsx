import React from 'react';
import { Scale, Shield, Eye, Lock, FileText, AlertTriangle } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Scale className="h-16 w-16 text-gray-300 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Legal Information & Policies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to transparency, compliance, and protecting your rights 
              throughout the debt recovery process.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center space-x-8">
            <a href="#privacy-policy" className="text-gray-700 hover:text-black font-medium">
              Privacy Policy
            </a>
            <a href="#terms-of-service" className="text-gray-700 hover:text-black font-medium">
              Terms of Service
            </a>
            <a href="#legal-disclaimer" className="text-gray-700 hover:text-black font-medium">
              Legal Disclaimer
            </a>
            <a href="#compliance" className="text-gray-700 hover:text-black font-medium">
              Compliance
            </a>
            <a href="#rights" className="text-gray-700 hover:text-black font-medium">
              Your Rights
            </a>
          </nav>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy-policy" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Shield className="h-8 w-8 text-black mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> July 1, 2025
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect</h3>
            <p className="text-gray-600 mb-4">
              At Reesor & Associates, we collect information necessary to provide professional 
              debt recovery services. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Contact information (name, email, phone number, business address)</li>
              <li>Business and financial information related to debt recovery cases</li>
              <li>Documentation provided to support debt collection efforts</li>
              <li>Communication records and case progress information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">How We Use Your Information</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>To provide debt recovery and collection services</li>
              <li>To communicate case updates and progress reports</li>
              <li>To comply with legal and regulatory requirements</li>
              <li>To improve our services and client experience</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Information Security</h3>
            <p className="text-gray-600 mb-6">
              We implement industry-standard security measures to protect your confidential 
              information, including encryption, secure data storage, and limited access protocols. 
              All staff members are bound by confidentiality agreements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Information Sharing</h3>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or share your personal information with third parties 
              except as necessary to provide our services, comply with legal requirements, 
              or with your explicit consent.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service */}
      <section id="terms-of-service" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <FileText className="h-8 w-8 text-black mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Terms of Service</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> July 1, 2025
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Agreement</h3>
            <p className="text-gray-600 mb-6">
              By engaging Reesor & Associates for debt recovery services, you agree to these 
              terms and conditions. Our services are provided on a contingency basis unless 
              otherwise agreed in writing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Provide accurate and complete information about debts and debtors</li>
              <li>Supply necessary documentation to support collection efforts</li>
              <li>Notify us immediately of any payments received directly from debtors</li>
              <li>Cooperate with our collection efforts and requests for information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fee Structure</h3>
            <p className="text-gray-600 mb-6">
              Our fees are based on a percentage of amounts successfully recovered. No upfront 
              fees are required for standard collection services. Detailed fee schedules are 
              provided in individual service agreements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
            <p className="text-gray-600 mb-6">
              While we use professional care and diligence in our services, we cannot guarantee 
              specific outcomes. Our liability is limited to the fees paid for our services.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section id="legal-disclaimer" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <AlertTriangle className="h-8 w-8 text-black mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Legal Disclaimer</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-600">
                <strong>Important Notice:</strong> The information provided on this website 
                is for general informational purposes only and does not constitute legal advice. 
                Each debt recovery case is unique and requires individual assessment.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Services</h3>
            <p className="text-gray-600 mb-6">
              Reesor & Associates provides professional debt collection services in accordance 
              with applicable federal, state, and local laws. We are not a law firm, but we 
              work with qualified legal professionals when necessary.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">No Guarantee of Results</h3>
            <p className="text-gray-600 mb-6">
              While we have a strong track record of successful debt recovery, we cannot 
              guarantee specific outcomes for any individual case. Success depends on 
              various factors including debtor's financial condition and available assets.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Links</h3>
            <p className="text-gray-600 mb-6">
              Our website may contain links to third-party websites. We are not responsible 
              for the content, privacy policies, or practices of these external sites.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Eye className="h-8 w-8 text-black mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Regulatory Compliance</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Reesor & Associates is committed to operating in full compliance with all 
              applicable laws and regulations governing debt collection practices.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Federal Compliance</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Fair Debt Collection Practices Act (FDCPA):</strong> We strictly adhere to FDCPA guidelines</li>
              <li><strong>Fair Credit Reporting Act (FCRA):</strong> Compliant with credit reporting requirements</li>
              <li><strong>Telephone Consumer Protection Act (TCPA):</strong> Following all communication regulations</li>
              <li><strong>Gramm-Leach-Bliley Act:</strong> Protecting financial information privacy</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">State and Local Compliance</h3>
            <p className="text-gray-600 mb-6">
              We maintain current knowledge of and compliance with state and local debt 
              collection laws, licensing requirements, and professional standards in all 
              jurisdictions where we operate.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Standards</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>American Collectors Association (ACA) member</li>
              <li>Better Business Bureau A+ rating</li>
              <li>Regular compliance training for all staff</li>
              <li>Ongoing legal education and certification maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Consumer Rights */}
      <section id="rights" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Lock className="h-8 w-8 text-black mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Your Rights</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Both clients and debtors have specific rights during the debt collection process. 
              We are committed to respecting and protecting these rights.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Client Rights</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Regular updates on case progress and status</li>
              <li>Transparent reporting of all recovery efforts</li>
              <li>Professional and ethical representation</li>
              <li>Confidential handling of all case information</li>
              <li>Right to terminate services with written notice</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Debtor Rights (Under FDCPA)</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Right to validation of debt within 30 days of initial contact</li>
              <li>Right to dispute debt accuracy</li>
              <li>Protection from harassment, abuse, or deceptive practices</li>
              <li>Right to request cessation of communication</li>
              <li>Right to legal representation</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-6">
              If you have questions about your rights or wish to file a complaint about 
              our services, please contact us immediately:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600">
                <strong>Compliance Officer</strong><br />
                Reesor & Associates<br />
                123 Business District, Suite 456<br />
                Business City, BC 12345<br />
                Phone: (555) 123-4567<br />
                Email: compliance@reesorassociates.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Questions About Our Legal Policies?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our compliance team is available to answer any questions about our legal 
            policies, procedures, or your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Compliance Team
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-white font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Call: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
