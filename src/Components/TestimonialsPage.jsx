// src/components/TestimonialsPage.jsx
import React from 'react';
import { Star, Quote, ArrowLeft } from 'lucide-react';

const TestimonialsPage = ({ onBack }) => {
  const allTestimonials = [
    // Add more testimonials here for the dedicated page
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      company: "Tech Solutions Inc.",
      feedback: "The investment strategies helped me grow my portfolio by 40% in just 2 years. Highly recommended for beginners!",
      rating: 5,
      avatar: "RS",
      color: "from-blue-500 to-cyan-500",
      duration: "2 years"
    },
    // Add 10-15 more testimonials...
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read inspiring stories from our investors who achieved their financial goals
          </p>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-gray-300 mb-4" />
              <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.feedback}"</p>
              <div className="mb-4">{renderStars(testimonial.rating)}</div>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-semibold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                  <p className="text-xs text-blue-600 mt-1">{testimonial.duration} with us</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;