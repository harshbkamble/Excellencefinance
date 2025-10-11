// src/components/QuickLinkDetailPage.jsx
import React, { useState } from 'react';
import { ArrowLeft, Calculator, Download, Share2, Bookmark } from 'lucide-react';

const QuickLinkDetailPage = ({ linkType, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Content data for each link type
  const contentData = {
    'expense-ratio': {
      title: 'Total Expense Ratio (TER)',
      subtitle: 'Understanding Mutual Fund Costs',
      icon: '📊',
      color: 'from-blue-500 to-cyan-500',
      overview: {
        description: 'Total Expense Ratio (TER) is the annual fee charged by mutual funds to cover operational expenses. It includes management fees, administrative costs, and other operational expenses.',
        keyPoints: [
          'Expressed as a percentage of the fund\'s average assets',
          'Deducted from the fund\'s returns',
          'Lower TER generally means higher returns for investors',
          'Regulated by SEBI with upper limits'
        ],
        calculation: 'TER = Total Fund Expenses / Average Assets Under Management'
      },
      details: {
        components: [
          { name: 'Management Fee', percentage: '0.5% - 1.5%', description: 'Fee paid to the fund manager' },
          { name: 'Administrative Costs', percentage: '0.1% - 0.3%', description: 'Office expenses, audit fees, etc.' },
          { name: 'Marketing Expenses', percentage: '0.2% - 0.5%', description: 'Advertising and distribution costs' },
          { name: 'Other Charges', percentage: '0.05% - 0.2%', description: 'Custodian fees, legal charges, etc.' }
        ],
        limits: [
          'Equity Funds: Maximum 2.25%',
          'Debt Funds: Maximum 2.00%',
          'Index Funds: Maximum 1.50%',
          'ETF: Maximum 1.00%'
        ]
      },
      calculator: {
        title: 'TER Impact Calculator',
        inputs: [
          { label: 'Investment Amount (₹)', type: 'number', placeholder: '100000' },
          { label: 'Expected Return (%)', type: 'number', placeholder: '12' },
          { label: 'TER (%)', type: 'number', placeholder: '2.0' },
          { label: 'Investment Period (Years)', type: 'number', placeholder: '10' }
        ]
      }
    },
    'fact-sheet': {
      title: 'Fund Fact Sheet',
      subtitle: 'Comprehensive Fund Analysis',
      icon: '📄',
      color: 'from-green-500 to-emerald-500',
      overview: {
        description: 'A fact sheet provides detailed information about a mutual fund scheme including performance, portfolio composition, risk metrics, and fund manager details.',
        keyPoints: [
          'Updated monthly by Asset Management Companies',
          'Shows historical performance and portfolio allocation',
          'Includes risk indicators and benchmark comparisons',
          'Essential for informed investment decisions'
        ]
      },
      sections: [
        {
          title: 'Performance Metrics',
          items: ['1-year return', '3-year return', '5-year return', 'Since inception', 'Benchmark comparison']
        },
        {
          title: 'Portfolio Composition',
          items: ['Sector allocation', 'Top holdings', 'Asset allocation', 'Market cap distribution']
        },
        {
          title: 'Risk Analysis',
          items: ['Standard deviation', 'Beta', 'Sharpe ratio', 'Sortino ratio', 'Portfolio turnover']
        }
      ]
    },
    'nfo': {
      title: 'New Fund Offer (NFO)',
      subtitle: 'Latest Investment Opportunities',
      icon: '🎯',
      color: 'from-purple-500 to-pink-500',
      overview: {
        description: 'New Fund Offer is the launch of a new mutual fund scheme for subscription. It allows investors to get in at the ground level of a new investment strategy.',
        keyPoints: [
          'Limited subscription period (usually 15-30 days)',
          'Fixed NAV of ₹10 per unit during NFO period',
          'Opportunity to invest in new themes and strategies',
          'No track record available for performance evaluation'
        ]
      },
      currentNFOs: [
        {
          name: 'Blue Chip Equity Fund',
          type: 'Equity',
          category: 'Large Cap',
          period: 'Jan 15 - Jan 30, 2024',
          minInvestment: '₹5000'
        },
        {
          name: 'Digital India Fund',
          type: 'Sectoral',
          category: 'Technology',
          period: 'Jan 20 - Feb 5, 2024',
          minInvestment: '₹1000'
        }
      ]
    },
    'calculator': {
      title: 'Financial Calculators',
      subtitle: 'Plan Your Investment Goals',
      icon: '🧮',
      color: 'from-orange-500 to-red-500',
      calculators: [
        {
          name: 'SIP Calculator',
          description: 'Calculate returns on your monthly investments',
          route: 'sip-calculator'
        },
        {
          name: 'Lumpsum Calculator',
          description: 'Calculate returns on one-time investments',
          route: 'lumpsum-calculator'
        },
        {
          name: 'Retirement Planner',
          description: 'Plan your retirement corpus',
          route: 'retirement-calculator'
        },
        {
          name: 'EMI Calculator',
          description: 'Calculate loan EMIs and interest',
          route: 'emi-calculator'
        }
      ]
    },
    'sip-pause': {
      title: 'SIP Pause Facility',
      subtitle: 'Temporarily Halt Your Investments',
      icon: '⏸️',
      color: 'from-yellow-500 to-amber-500',
      overview: {
        description: 'SIP Pause allows you to temporarily stop your Systematic Investment Plan without cancelling it. Useful during financial constraints or market uncertainty.',
        keyPoints: [
          'Pause duration: 1 to 6 months',
          'No penalty charges for pausing',
          'Auto-resume after pause period',
          'Can be activated online instantly'
        ]
      },
      process: [
        'Login to your investment account',
        'Navigate to SIP management section',
        'Select "Pause SIP" option',
        'Choose pause duration',
        'Confirm and submit request'
      ]
    },
    'sip-cancel': {
      title: 'SIP Cancellation',
      subtitle: 'Stop Systematic Investments',
      icon: '⏹️',
      color: 'from-gray-500 to-slate-500',
      overview: {
        description: 'SIP Cancellation permanently stops your Systematic Investment Plan. All future instalments will be cancelled while existing units remain invested.',
        keyPoints: [
          'Takes effect from the next due date',
          'No impact on existing investments',
          'No exit load for cancellation',
          'Can be restarted anytime as new SIP'
        ]
      },
      considerations: [
        'Check for any exit loads applicable',
        'Review your financial goals before cancelling',
        'Consider pausing instead of cancelling',
        'Consult financial advisor if unsure'
      ]
    }
  };

  const data = contentData[linkType] || contentData['expense-ratio'];

  const renderContent = () => {
    switch (linkType) {
      case 'expense-ratio':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">TER Components</h3>
                {data.details.components.map((component, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <p className="font-semibold">{component.name}</p>
                      <p className="text-sm text-gray-600">{component.description}</p>
                    </div>
                    <span className="text-blue-600 font-bold">{component.percentage}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">SEBI TER Limits</h3>
                {data.details.limits.map((limit, index) => (
                  <div key={index} className="py-3 border-b border-gray-100">
                    <p className="text-gray-700">{limit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TER Calculator */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">{data.calculator.title}</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {data.calculator.inputs.map((input, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {input.label}
                    </label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Calculate Impact
              </button>
            </div>
          </div>
        );

      case 'fact-sheet':
        return (
          <div className="space-y-6">
            {data.sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3 py-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'nfo':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Current NFOs</h3>
              {data.currentNFOs.map((nfo, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">{nfo.name}</h4>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {nfo.type}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>Category: {nfo.category}</div>
                    <div>Subscription: {nfo.period}</div>
                    <div>Min Investment: {nfo.minInvestment}</div>
                  </div>
                  <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'calculator':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {data.calculators.map((calculator, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{calculator.name}</h3>
                <p className="text-gray-600 mb-4">{calculator.description}</p>
                <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  Use Calculator →
                </button>
              </div>
            ))}
          </div>
        );

      case 'sip-pause':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Pause Process</h3>
              <ol className="space-y-3">
                {data.process.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        );

      case 'sip-cancel':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Important Considerations</h3>
              <ul className="space-y-3">
                {data.considerations.map((consideration, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{consideration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      default:
        return <div>Content not available</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Quick Links
          </button>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${data.color} flex items-center justify-center text-2xl text-white`}>
                {data.icon}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
                <p className="text-xl text-gray-600">{data.subtitle}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                <Download size={16} />
                Download Guide
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 size={16} />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Bookmark size={16} />
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            {data.overview.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {data.overview.keyPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>

          {data.overview.calculation && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-mono text-sm">{data.overview.calculation}</p>
            </div>
          )}
        </div>

        {/* Detailed Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default QuickLinkDetailPage;