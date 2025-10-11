import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  PieChart, TrendingUp, Landmark, Shield, Heart, 
  FileText, Calculator, PiggyBank, Target, Users,
  ArrowRight, ChevronLeft, ChevronRight, Star, Clock,
  BarChart3
} from "lucide-react";

const FinancialProducts = ({ onProductSelect }) => {
  const products = [
    {
      id: "mutual-funds",
      title: "Mutual Funds",
      description: "Professionally managed diversified portfolios for all investors",
      icon: PieChart,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      risk: "Medium to High",
      returns: "10-15%",
      duration: "3+ years"
    },
    {
      id: "sip",
      title: "SIP",
      description: "Disciplined investing with rupee cost averaging benefits",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      risk: "Medium to High",
      returns: "12-18%",
      duration: "5+ years"
    },
    {
      id: "bonds",
      title: "Bonds",
      description: "Fixed income instruments with capital protection",
      icon: Landmark,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
      risk: "Low to Medium",
      returns: "6-9%",
      duration: "1-30 years"
    },
    {
      id: "shares",
      title: "Stocks & Equity",
      description: "Direct ownership in companies for high growth potential",
      icon: BarChart3,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      risk: "High",
      returns: "12-20%",
      duration: "5+ years"
    },
    {
      id: "life-health-insurance",
      title: "Insurance",
      description: "Comprehensive life and health protection plans",
      icon: Heart,
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50",
      risk: "Low",
      returns: "Protection",
      duration: "Renewable"
    },
    {
      id: "ulip",
      title: "ULIP",
      description: "Combines insurance coverage with investment growth",
      icon: Shield,
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-50 to-blue-50",
      risk: "Medium",
      returns: "8-12%",
      duration: "5-30 years"
    },
    {
      id: "term-plan",
      title: "Term Insurance",
      description: "Pure life protection at affordable premiums",
      icon: FileText,
      gradient: "from-gray-600 to-slate-700",
      bgGradient: "from-gray-50 to-slate-100",
      risk: "Low",
      returns: "Protection",
      duration: "10-40 years"
    },
    {
      id: "loans",
      title: "Loans",
      description: "Personal, home and business financing solutions",
      icon: Calculator,
      gradient: "from-yellow-500 to-amber-500",
      bgGradient: "from-yellow-50 to-amber-50",
      risk: "NA",
      returns: "NA",
      duration: "1-30 years"
    },
    {
      id: "fixed-deposit",
      title: "Fixed Deposit",
      description: "Guaranteed returns with capital safety",
      icon: PiggyBank,
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      risk: "Very Low",
      returns: "5-7%",
      duration: "7 days-10 years"
    },
    {
      id: "tax-saving",
      title: "Tax Saving",
      description: "ELSS, PPF, NPS for efficient tax planning",
      icon: Target,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      risk: "Low to High",
      returns: "8-12%",
      duration: "3-15 years"
    },
    {
      id: "retirement-plans",
      title: "Retirement",
      description: "Build corpus for financial independence post-retirement",
      icon: Users,
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50",
      risk: "Low to Medium",
      returns: "8-10%",
      duration: "Until retirement"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const navigate = useNavigate();

  const nextProduct = () => {
    setAutoPlay(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setAutoPlay(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToProduct = (index) => {
    setAutoPlay(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleProductSelect = (productId) => {
    if (onProductSelect) {
      onProductSelect(productId);
    } else {
      // Default navigation if no prop provided
      navigate(`/products/${productId}`);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, products.length]);

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    })
  };

  const currentProduct = products[currentIndex];
  const IconComponent = currentProduct.icon;

  return (
    <section id="financial-products" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-gray-100 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-600 font-semibold text-sm">Financial Products</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Financial Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of financial products for all your investment needs
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-2xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevProduct}
            onMouseEnter={() => setAutoPlay(false)}
            className="hidden md:flex absolute left-4 z-20 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group -translate-y-1/2 top-1/2"
          >
            <ChevronLeft size={20} className="text-gray-600 group-hover:text-blue-600" />
          </button>

          <button
            onClick={nextProduct}
            onMouseEnter={() => setAutoPlay(false)}
            className="hidden md:flex absolute right-4 z-20 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group -translate-y-1/2 top-1/2"
          >
            <ChevronRight size={20} className="text-gray-600 group-hover:text-blue-600" />
          </button>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-center items-center gap-4 mb-6">
            <button
              onClick={prevProduct}
              className="p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg transform hover:scale-110 transition-all"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <div className="text-sm font-medium text-gray-600 bg-white/80 px-4 py-2 rounded-2xl border border-gray-200">
              {currentIndex + 1} / {products.length}
            </div>
            <button
              onClick={nextProduct}
              className="p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg transform hover:scale-110 transition-all"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Main Card with Fixed Height */}
          <div className="relative h-[420px] md:h-[400px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className={`bg-gradient-to-br ${currentProduct.bgGradient} rounded-3xl p-1 shadow-2xl h-full`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 h-full flex flex-col">
                    
                    {/* Icon & Title - Fixed Height Section */}
                    <div className="flex-shrink-0 text-center mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentProduct.gradient} flex items-center justify-center text-white mb-4 mx-auto shadow-lg`}>
                        <IconComponent size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {currentProduct.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed min-h-[40px] flex items-center justify-center">
                        {currentProduct.description}
                      </p>
                    </div>

                    {/* Stats - Fixed Height Section */}
                    <div className="flex-shrink-0 grid grid-cols-3 gap-3 mb-6">
                      <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                        <Star size={16} className="text-yellow-500 mx-auto mb-1" />
                        <div className="text-xs text-gray-600 mb-1">Risk</div>
                        <div className={`font-bold text-sm ${
                          currentProduct.risk === 'High' ? 'text-red-600' :
                          currentProduct.risk === 'Medium' ? 'text-orange-600' :
                          currentProduct.risk === 'Low' ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          {currentProduct.risk}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                        <TrendingUp size={16} className="text-green-500 mx-auto mb-1" />
                        <div className="text-xs text-gray-600 mb-1">Returns</div>
                        <div className="font-bold text-green-600 text-sm">
                          {currentProduct.returns}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                        <Clock size={16} className="text-blue-500 mx-auto mb-1" />
                        <div className="text-xs text-gray-600 mb-1">Duration</div>
                        <div className="font-bold text-blue-600 text-sm">
                          {currentProduct.duration}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button - Fixed at Bottom */}
                    <div className="flex-shrink-0 mt-auto pt-4">
                      <button 
                        onClick={() => handleProductSelect(currentProduct.id)}
                        className={`w-full py-3 rounded-2xl bg-gradient-to-r ${currentProduct.gradient} text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                      >
                        Learn More
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProduct(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? `bg-gradient-to-r ${currentProduct.gradient} w-6` 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Product Counter - Desktop */}
          <div className="hidden md:block text-center mt-3">
            <span className="text-gray-500 font-medium text-sm">
              {currentIndex + 1} of {products.length} Products
            </span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Need Help Choosing?
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Get personalized advice from our financial experts
            </p>
            <button 
              onClick={() => navigate('/get-started')}
              className="px-6 py-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
            >
              Talk to Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialProducts;