import React from 'react';
import { Star, Quote } from 'lucide-react';

const Feedback = ({ onGetStarted, onReadMoreStories }) => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer",
      company: "Tech Solutions Inc.",
      feedback: "The investment strategies helped me grow my portfolio by 40% in just 2 years. Highly recommended for beginners!",
      rating: 5,
      avatar: "RS",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Priya Patel",
      role: "Business Owner",
      company: "Fashion Boutique",
      feedback: "As a small business owner, the financial planning guidance has been invaluable for my retirement goals.",
      rating: 5,
      avatar: "PP",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Amit Kumar",
      role: "Doctor",
      company: "City Hospital",
      feedback: "Professional advice and transparent processes. My investments have been growing steadily without any stress.",
      rating: 4,
      avatar: "AK",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Neha Gupta",
      role: "Teacher",
      company: "Delhi Public School",
      feedback: "Started with small SIPs and now I have a substantial corpus for my daughter's education. Thank you!",
      rating: 5,
      avatar: "NG",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Sanjay Mehta",
      role: "Retired Banker",
      company: "Former SBI Manager",
      feedback: "Even with my banking background, I learned new investment strategies. The personalized approach is excellent.",
      rating: 5,
      avatar: "SM",
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Ananya Singh",
      role: "Marketing Manager",
      company: "Digital Marketing Pro",
      feedback: "The goal-based investment approach helped me plan for my dream vacation. Everything was perfectly executed.",
      rating: 4,
      avatar: "AS",
      color: "from-teal-500 to-green-500"
    }
  ];

  const handleStartInvesting = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      // Fallback: scroll to contact section
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleReadMoreStories = () => {
    if (onReadMoreStories) {
      onReadMoreStories();
    } else {
      // Fallback: show all testimonials or navigate to a testimonials page
      console.log('Show more testimonials');
    }
  };

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
    <section id="feedback" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Client Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Investors Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our investment strategies have helped people achieve their financial dreams
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-gray-300 group-hover:text-blue-300 transition-colors duration-300" />
              </div>

              {/* Feedback Text */}
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                "{testimonial.feedback}"
              </p>

              {/* Rating */}
              <div className="mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-semibold text-sm group-hover:scale-110 transition-transform duration-300`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied investors who have achieved their financial goals with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleStartInvesting}
                className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Investing Today
              </button>
              <button 
                onClick={handleReadMoreStories}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                Read More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;