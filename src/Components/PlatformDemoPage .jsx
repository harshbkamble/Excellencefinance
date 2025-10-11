// src/components/PlatformDemoPage.jsx
import React, { useState } from 'react';
import { ArrowLeft, Play, Pause, Volume2, Maximize } from 'lucide-react';

const PlatformDemoPage = ({ onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      title: 'AI Portfolio Builder',
      description: 'Watch how our AI analyzes your risk profile and builds a personalized investment portfolio',
      duration: '2:30',
      benefits: ['Automated Risk Assessment', 'Personalized Asset Allocation', 'Real-time Optimization']
    },
    {
      title: 'Smart Rebalancing',
      description: 'See how our system automatically rebalances your portfolio to maintain optimal performance',
      duration: '1:45',
      benefits: ['Auto-Rebalancing', 'Tax-Loss Harvesting', 'Market Trend Adaptation']
    },
    {
      title: 'Goal Tracking',
      description: 'Monitor your progress towards financial goals with interactive dashboards and projections',
      duration: '2:15',
      benefits: ['Visual Progress Tracking', 'Milestone Alerts', 'Adjustable Goal Planning']
    },
    {
      title: 'Security Features',
      description: 'Explore our enterprise-grade security measures that protect your investments 24/7',
      duration: '1:30',
      benefits: ['Bank-Level Encryption', 'Real-time Monitoring', 'Insurance Protection']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Advantages
          </button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Platform Demo
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how our cutting-edge platform transforms your investment experience
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Video Player */}
          <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl">
            <div className="bg-black rounded-2xl aspect-video mb-4 flex items-center justify-center relative">
              {/* Demo Video Placeholder */}
              <div 
                className="text-center cursor-pointer"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-700 transition-colors">
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </div>
                <p className="text-gray-400">Click to {isPlaying ? 'pause' : 'play'} demo</p>
              </div>
              
              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-1 bg-gray-600 rounded-full mb-2">
                  <div className="h-1 bg-blue-500 rounded-full w-1/3"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">1:15 / {features[currentFeature].duration}</span>
                  <div className="flex gap-3">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Volume2 size={16} />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Maximize size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Info */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {features[currentFeature].title}
              </h3>
              <p className="text-gray-300 mb-4">
                {features[currentFeature].description}
              </p>
              
              {/* Feature Navigation */}
              <div className="flex justify-center gap-2 mb-4">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentFeature === index 
                        ? 'bg-blue-500 w-8' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  currentFeature === index 
                    ? 'ring-2 ring-blue-500 transform scale-105' 
                    : 'hover:bg-gray-700'
                }`}
                onClick={() => setCurrentFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    currentFeature === index ? 'bg-blue-500' : 'bg-gray-700'
                  } transition-colors`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-3">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>Duration: {feature.duration}</span>
                      <span>•</span>
                      <span>Click to preview</span>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mt-3 space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience It Yourself?
          </h2>
          <p className="text-blue-100 text-xl mb-6">
            Join thousands of investors who are already growing their wealth with our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformDemoPage;