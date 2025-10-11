// src/components/InvestmentAdvantages.jsx
import React, { useState } from 'react';
import ContactAdvisorForm from './ContactAdvisorForm';

const InvestmentAdvantages = ({ onBack }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const advantages = [
    {
      icon: '📈',
      title: 'Expert Portfolio Management',
      description: 'Our team of certified financial advisors with 10+ years of experience manages your portfolio using proven investment strategies and market analysis.',
      features: ['Professional fund management', 'Regular portfolio rebalancing', 'Risk-adjusted returns']
    },
    {
      icon: '🛡️',
      title: 'Comprehensive Risk Management',
      description: 'Advanced risk assessment tools and diversification strategies to protect your investments while maximizing growth potential.',
      features: ['Risk profiling', 'Asset diversification', 'Stop-loss mechanisms']
    },
    {
      icon: '💸',
      title: 'Tax Optimization Strategies',
      description: 'Smart tax planning and investment vehicles that help you save significantly on taxes while building your wealth.',
      features: ['Tax-efficient investing', 'ELSS opportunities', 'Long-term capital gains planning']
    },
    {
      icon: '🎯',
      title: 'Goal-Based Investment Planning',
      description: 'Customized investment plans tailored to your specific financial goals - whether for retirement, education, or wealth creation.',
      features: ['Personalized goal mapping', 'Milestone tracking', 'Flexible investment options']
    },
    {
      icon: '📊',
      title: 'Advanced Analytics & Reporting',
      description: 'Comprehensive dashboards and regular performance reports to keep you informed about your investment growth.',
      features: ['Real-time portfolio tracking', 'Performance analytics', 'Quarterly detailed reports']
    },
    {
      icon: '👨‍💼',
      title: 'Dedicated Financial Advisor',
      description: 'Your personal financial advisor who understands your needs and provides continuous support throughout your investment journey.',
      features: ['One-on-one consultations', 'Regular portfolio reviews', '24/7 customer support']
    }
  ];

  const statistics = [
    { value: '15+', label: 'Years Experience' },
    { value: '50,000+', label: 'Happy Investors' },
    { value: '₹500Cr+', label: 'Assets Managed' },
    { value: '12-18%', label: 'Average Annual Returns' }
  ];

  const handleContactAdvisor = () => {
    setShowContactForm(true);
  };

  const handleBackFromForm = () => {
    setShowContactForm(false);
  };

  // Show contact form if user clicked on Contact Advisor
  if (showContactForm) {
    return <ContactAdvisorForm onBack={handleBackFromForm} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Why Choose Our Investment Services?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our comprehensive investment solutions can help you achieve your financial goals 
            with confidence and security.
          </p>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
              <p className="text-gray-600 mb-4">{advantage.description}</p>
              <ul className="space-y-2">
                {advantage.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Investment Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Investment Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Financial Assessment</h3>
              <p className="text-sm text-gray-600">Comprehensive analysis of your financial situation and goals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Risk Profiling</h3>
              <p className="text-sm text-gray-600">Evaluate your risk tolerance and investment preferences</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Portfolio Creation</h3>
              <p className="text-sm text-gray-600">Design personalized investment portfolio strategy</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Monitoring & Review</h3>
              <p className="text-sm text-gray-600">Continuous monitoring and regular portfolio rebalancing</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Investment Journey?</h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of investors who trust us with their financial future. 
            Get personalized investment advice tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBack}
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Learn More
            </button>
            <button 
              onClick={handleContactAdvisor}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Contact Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAdvantages;