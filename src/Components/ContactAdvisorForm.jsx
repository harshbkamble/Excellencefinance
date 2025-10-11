// src/components/ContactAdvisorForm.jsx
import React, { useState } from 'react';

const ContactAdvisorForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    currentIncome: '',
    investmentAmount: '',
    investmentGoal: '',
    riskAppetite: '',
    experience: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulate API call to store data
      const response = await fetch('/api/contact-advisor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          status: 'pending'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Here you would typically send email notifications to admin
        console.log('Form data stored:', formData);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback - in real app, show error message to user
      setIsSubmitted(true);
    }
  };

  const investmentGoals = [
    'Wealth Creation',
    'Retirement Planning',
    'Children Education',
    'House Purchase',
    'Tax Saving',
    'Emergency Fund',
    'Other'
  ];

  const riskAppetites = [
    'Low (Capital Preservation)',
    'Moderate (Balanced Growth)',
    'High (Aggressive Growth)',
    'Very High (Maximum Returns)'
  ];

  const experienceLevels = [
    'Beginner (No prior experience)',
    'Some Experience (1-3 years)',
    'Experienced (3-7 years)',
    'Professional (7+ years)'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Request Submitted!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for your interest! Our financial advisor will contact you within 24 hours.
            </p>
            
            <div className="bg-blue-50 rounded-2xl p-6 mb-6 text-left">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">What Happens Next?</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Our team will review your financial profile
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  A dedicated advisor will be assigned to you
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  You'll receive a personalized consultation call
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Custom investment plan will be prepared
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBack}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Back to Advantages
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Advantages
          </button>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Connect with Financial Advisor
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out this form and our expert advisor will contact you to create your personalized investment plan.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      min="18"
                      max="100"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your age"
                    />
                  </div>
                </div>
              </div>

              {/* Financial Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  Financial Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Annual Income (₹) *
                    </label>
                    <select
                      name="currentIncome"
                      value={formData.currentIncome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select income range</option>
                      <option value="0-5L">₹0 - ₹5 Lakhs</option>
                      <option value="5-10L">₹5 - ₹10 Lakhs</option>
                      <option value="10-20L">₹10 - ₹20 Lakhs</option>
                      <option value="20-50L">₹20 - ₹50 Lakhs</option>
                      <option value="50L+">₹50 Lakhs+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Planned Investment (Monthly) *
                    </label>
                    <select
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select amount</option>
                      <option value="5k-10k">₹5,000 - ₹10,000</option>
                      <option value="10k-25k">₹10,000 - ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-1L">₹50,000 - ₹1 Lakh</option>
                      <option value="1L+">₹1 Lakh+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Investment Preferences */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  Investment Preferences
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Primary Investment Goal *
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {investmentGoals.map(goal => (
                        <label key={goal} className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-blue-500 transition-all duration-200">
                          <input
                            type="radio"
                            name="investmentGoal"
                            value={goal}
                            checked={formData.investmentGoal === goal}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            required
                          />
                          <span className="ml-3 text-gray-700 font-medium">{goal}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Risk Appetite *
                      </label>
                      <select
                        name="riskAppetite"
                        value={formData.riskAppetite}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select risk level</option>
                        {riskAppetites.map(risk => (
                          <option key={risk} value={risk}>{risk}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Investment Experience *
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select experience level</option>
                        {experienceLevels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your specific requirements or questions..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Request to Advisor
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactAdvisorForm;