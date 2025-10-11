import { useState } from 'react';

const QuickLinks = ({ onQuickLinkSelect }) => {
  const [activeLink, setActiveLink] = useState(null);

  const quickLinks = [
    {
      id: 1,
      title: 'Total Expense Ratio',
      description: 'Understand fund management costs',
      icon: '📊',
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:from-blue-600 hover:to-cyan-600',
      type: 'expense-ratio'
    },
    {
      id: 2,
      title: 'Fact Sheet',
      description: 'Detailed fund performance & portfolio',
      icon: '📄',
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'hover:from-green-600 hover:to-emerald-600',
      type: 'fact-sheet'
    },
    {
      id: 3,
      title: 'New Fund Offer',
      description: 'Explore latest investment opportunities',
      icon: '🎯',
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600',
      type: 'nfo'
    },
    {
      id: 4,
      title: 'Calculator',
      description: 'Plan your financial goals',
      icon: '🧮',
      color: 'from-orange-500 to-red-500',
      hoverColor: 'hover:from-orange-600 hover:to-red-600',
      type: 'calculator'
    },
    {
      id: 5,
      title: 'SIP Pause',
      description: 'Temporarily halt your investments',
      icon: '⏸️',
      color: 'from-yellow-500 to-amber-500',
      hoverColor: 'hover:from-yellow-600 hover:to-amber-600',
      type: 'sip-pause'
    },
    {
      id: 6,
      title: 'SIP Cancel',
      description: 'Stop your systematic investments',
      icon: '⏹️',
      color: 'from-gray-500 to-slate-500',
      hoverColor: 'hover:from-gray-600 hover:to-slate-600',
      type: 'sip-cancel'
    }
  ];

  const handleQuickLinkClick = (linkType) => {
    if (onQuickLinkSelect) {
      onQuickLinkSelect(linkType);
    }
  };

  const handleTalkToExpert = () => {
    if (onQuickLinkSelect) {
      onQuickLinkSelect('expert-consultation');
    }
  };

  const handleScheduleCall = () => {
    if (onQuickLinkSelect) {
      onQuickLinkSelect('schedule-call');
    }
  };

  return (
    <div id="quick-links" className="w-full py-12 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-sm border border-gray-200 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700">Quick Access</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financial Tools & Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your investments effectively
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link) => (
            <div
              key={link.id}
              className="group cursor-pointer"
              onMouseEnter={() => setActiveLink(link.id)}
              onMouseLeave={() => setActiveLink(null)}
              onClick={() => handleQuickLinkClick(link.type)}
            >
              <div className={`
                relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 
                transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl
                ${activeLink === link.id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
              `}>
                {/* Background Gradient Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 
                  rounded-2xl transition-opacity duration-300
                `}></div>
                
                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-br ${link.color} 
                  flex items-center justify-center text-2xl text-white mb-4 
                  transform group-hover:scale-110 transition-transform duration-300
                  shadow-lg
                `}>
                  {link.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {link.description}
                </p>
                
                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <span className={`
                    text-sm font-semibold bg-gradient-to-r ${link.color} bg-clip-text text-transparent
                    group-hover:scale-105 transform transition-transform duration-200
                  `}>
                    Explore Now
                  </span>
                  <div className={`
                    w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center
                    group-hover:bg-gradient-to-r ${link.color} group-hover:text-white
                    transition-all duration-300 transform group-hover:scale-110
                  `}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Personalized Assistance?
            </h3>
            <p className="text-blue-100 text-lg mb-6 opacity-90">
              Our financial experts are here to help you make informed decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleTalkToExpert}
                className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg"
              >
                Talk to an Expert
              </button>
              <button 
                onClick={handleScheduleCall}
                className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;