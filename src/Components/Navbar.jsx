import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ scrollToSection, currentPath = '/', onLogoClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Only update active section if we're on the home page
      if (location.pathname === '/') {
        const sections = ['home', 'financial-products', 'calculator', 'sip-calculator', 'advantages', 'quick-links', 'feedback', 'contact'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        
        if (current) {
          setActiveSection(current);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      // If not on home page, navigate to home
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        scrollToSection('home');
      }
    }
  };

  const handleNavClick = (sectionId) => {
    // If we're not on home page, navigate to home first with hash
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      // Wait for navigation then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // We're already on home page, just scroll
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  const isHomePage = location.pathname === '/';
  const isHomePageScrolled = isHomePage && !scrolled;

  const navItems = [
    { 
      name: "Home", 
      id: "home",
      isActive: activeSection === "home" && isHomePage
    },
    { 
      name: "Financial Products", 
      id: "financial-products",
      isActive: activeSection === "financial-products" && isHomePage
    },
    { 
      name: "Calculators", 
      id: "calculators",
      dropdown: [
        { name: "Investment Calculator", id: "calculator" },
        { name: "SIP Delay Impact", id: "sip-calculator" }
      ],
      isActive: (activeSection === "calculator" || activeSection === "sip-calculator") && isHomePage
    },
    { 
      name: "Advantages", 
      id: "advantages",
      isActive: activeSection === "advantages" && isHomePage
    },
    { 
      name: "Quick Links", 
      id: "quick-links",
      isActive: activeSection === "quick-links" && isHomePage
    },
    { 
      name: "Feedback", 
      id: "feedback",
      isActive: activeSection === "feedback" && isHomePage
    }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-gray-200/50" 
        : isHomePage
          ? "bg-gradient-to-r from-blue-600/95 to-purple-600/95 backdrop-blur-xl"
          : "bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-gray-200/50"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className={`relative p-2 rounded-2xl ${
              isHomePageScrolled 
                ? "bg-white/10 backdrop-blur-sm" 
                : "bg-gradient-to-r from-blue-600 to-purple-600"
            }`}>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className={`text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
                  isHomePageScrolled ? "text-black" : ""
                }`}>
                  E
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <span className={`text-2xl font-bold ${
              isHomePageScrolled ? "text-white" : "text-gray-900"
            }`}>
              Excellence<span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Finance</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 relative ${
                        item.isActive
                          ? isHomePageScrolled
                            ? "text-white bg-white/20"
                            : "text-blue-600 bg-blue-50"
                          : isHomePageScrolled
                            ? "text-white/90 hover:text-white hover:bg-white/10"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        } ${isHomePageScrolled ? "text-white" : "text-gray-600"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {item.isActive && (
                        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 rounded-full ${
                          isHomePageScrolled ? "bg-white" : "bg-blue-500"
                        }`}></div>
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-500/20 border border-gray-200/50 transition-all duration-300 transform origin-top ${
                      isDropdownOpen 
                        ? "scale-100 opacity-100 visible" 
                        : "scale-95 opacity-0 invisible"
                    }`}>
                      <div className="p-2">
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.name}
                            onClick={() => handleNavClick(dropdownItem.id)}
                            className="flex items-center w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 group/item"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-200"></div>
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 relative ${
                      item.isActive
                        ? isHomePageScrolled
                          ? "text-white bg-white/20"
                          : "text-blue-600 bg-blue-50"
                        : isHomePageScrolled
                          ? "text-white/90 hover:text-white hover:bg-white/10"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {item.name}
                    {item.isActive && (
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 rounded-full ${
                        isHomePageScrolled ? "bg-white" : "bg-blue-500"
                      }`}></div>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* <button className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
              isHomePageScrolled
                ? "text-white/90 hover:text-white hover:bg-white/10"
                : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            }`}>
              Login
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isHomePageScrolled
                ? "text-white hover:bg-white/10"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? "rotate-45" : "-translate-y-2"
              } ${isHomePageScrolled ? "bg-white" : "bg-gray-700"}`}></span>
              <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              } ${isHomePageScrolled ? "bg-white" : "bg-gray-700"}`}></span>
              <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45" : "translate-y-2"
              } ${isHomePageScrolled ? "bg-white" : "bg-gray-700"}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="py-4 space-y-2 border-t border-gray-200/50 mt-2 max-h-[70vh] overflow-y-auto mobile-menu-scroll">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        item.isActive
                          ? isHomePageScrolled
                            ? "text-white bg-white/20"
                            : "text-blue-600 bg-blue-50"
                          : isHomePageScrolled
                            ? "text-white hover:bg-white/10"
                            : "text-gray-700 hover:bg-blue-50"
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileDropdownOpen ? "rotate-180" : ""
                        } ${isHomePageScrolled ? "text-white" : "text-gray-600"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileDropdownOpen && (
                      <div className={`ml-4 space-y-1 rounded-xl p-2 ${
                        isHomePageScrolled 
                          ? "bg-white/10 backdrop-blur-sm" 
                          : "bg-gray-50"
                      }`}>
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.name}
                            onClick={() => {
                              handleNavClick(dropdownItem.id);
                              setMobileDropdownOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                              isHomePageScrolled
                                ? "text-white/80 hover:text-white hover:bg-white/10"
                                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                            }`}
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      item.isActive
                        ? isHomePageScrolled
                          ? "text-white bg-white/20"
                          : "text-blue-600 bg-blue-50"
                        : isHomePageScrolled
                          ? "text-white hover:bg-white/10"
                          : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200/50 space-y-2">
              {/* <button className={`w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isHomePageScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-gray-700 hover:bg-gray-100"
              }`}>
                Login
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mobile-menu-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
        }
        
        .mobile-menu-scroll::-webkit-scrollbar {
          width: 4px;
        }
        
        .mobile-menu-scroll::-webkit-scrollbar-track {
          background: transparent;
          margin: 8px 0;
        }
        
        .mobile-menu-scroll::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 20px;
        }
        
        .mobile-menu-scroll::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.8);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;