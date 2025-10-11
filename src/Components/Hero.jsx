// src/components/Hero.jsx
import React from "react";
import heroBg from "../images/HeroBg.jpg";

const Hero = ({ onGetStarted }) => {
  const handleGetStarted = () => {
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

  return (
    <div
      id="hero"
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Main heading with better typography */}
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your Financial
          <span className="block text-blue-400">Growth Partner</span>
        </h1>
        
        {/* Subtitle with improved spacing */}
        <p className="text-white text-xl md:text-2xl max-w-2xl mb-8 leading-relaxed">
          We help you build wealth with smart investment strategies and expert financial guidance.
        </p>
        
        {/* Enhanced CTA button */}
        <button
          onClick={handleGetStarted}
          className="mt-4 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Get Started Today
        </button>
        
        {/* Optional: Add a subtle scroll indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;