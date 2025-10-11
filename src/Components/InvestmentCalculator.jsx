import { useState, useEffect } from 'react';

const InvestmentCalculator = () => {
  const [investmentType, setInvestmentType] = useState('sip'); // 'sip' or 'lumpsum'
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [investmentPeriod, setInvestmentPeriod] = useState(15);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [stepUpEnabled, setStepUpEnabled] = useState(false);
  const [stepUpPercentage, setStepUpPercentage] = useState(10);
  
  // Results state
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [estimatedReturn, setEstimatedReturn] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [yearlyBreakdown, setYearlyBreakdown] = useState([]);

  // Calculate investment results
  useEffect(() => {
    calculateInvestment();
  }, [investmentType, monthlyInvestment, investmentPeriod, expectedReturn, stepUpEnabled, stepUpPercentage]);

  const calculateInvestment = () => {
    if (investmentType === 'sip') {
      calculateSIP();
    } else {
      calculateLumpsum();
    }
  };

  const calculateSIP = () => {
    let totalInvested = 0;
    let currentValue = 0;
    const monthlyRate = expectedReturn / 100 / 12;
    const breakdown = [];
    
    let monthlyAmount = monthlyInvestment;
    
    for (let year = 1; year <= investmentPeriod; year++) {
      let yearInvestment = 0;
      
      for (let month = 1; month <= 12; month++) {
        // Add monthly investment
        totalInvested += monthlyAmount;
        currentValue += monthlyAmount;
        
        // Apply returns to entire portfolio
        currentValue *= (1 + monthlyRate);
        
        yearInvestment += monthlyAmount;
      }
      
      // Apply step-up if enabled
      if (stepUpEnabled && year < investmentPeriod) {
        monthlyAmount *= (1 + stepUpPercentage / 100);
      }
      
      breakdown.push({
        year,
        invested: yearInvestment,
        totalInvested: totalInvested,
        value: currentValue
      });
    }
    
    setTotalInvestment(totalInvested);
    setEstimatedReturn(currentValue - totalInvested);
    setTotalValue(currentValue);
    setYearlyBreakdown(breakdown);
  };

  const calculateLumpsum = () => {
    const invested = monthlyInvestment;
    const rate = expectedReturn / 100;
    const futureValue = invested * Math.pow(1 + rate, investmentPeriod);
    
    setTotalInvestment(invested);
    setEstimatedReturn(futureValue - invested);
    setTotalValue(futureValue);
    
    // Create yearly breakdown for lumpsum
    const breakdown = [];
    for (let year = 1; year <= investmentPeriod; year++) {
      const yearValue = invested * Math.pow(1 + rate, year);
      breakdown.push({
        year,
        invested: year === 1 ? invested : 0,
        totalInvested: invested,
        value: yearValue
      });
    }
    
    setYearlyBreakdown(breakdown);
  };

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return '₹' + (amount / 10000000).toFixed(2) + 'Cr';
    } else if (amount >= 100000) {
      return '₹' + (amount / 100000).toFixed(2) + 'L';
    } else if (amount >= 1000) {
      return '₹' + (amount / 1000).toFixed(1) + 'K';
    }
    return '₹' + Math.round(amount);
  };

  const getReturnColor = (returnRate) => {
    if (returnRate <= 8) return 'text-green-600';
    if (returnRate <= 15) return 'text-blue-600';
    if (returnRate <= 25) return 'text-orange-600';
    return 'text-red-600';
  };

  const getReturnRiskLevel = (returnRate) => {
    if (returnRate <= 8) return 'Low Risk';
    if (returnRate <= 15) return 'Moderate Risk';
    if (returnRate <= 25) return 'High Risk';
    return 'Very High Risk';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Wealth Growth Calculator</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how your investments could grow over time with our powerful projection tool.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Investment Preferences</h3>
              
              {/* Investment Type Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
                <button
                  className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
                    investmentType === 'sip'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setInvestmentType('sip')}
                >
                  Monthly SIP
                </button>
                <button
                  className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
                    investmentType === 'lumpsum'
                      ? 'bg-indigo-600 text-white shadow'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => setInvestmentType('lumpsum')}
                >
                  One-Time Investment
                </button>
              </div>
              
              {/* Investment Amount */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  {investmentType === 'sip' ? 'Monthly Investment' : 'Investment Amount'}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                  <input
                    type="number"
                    min="500"
                    max="10000000"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Min. ₹ 500</span>
                  <span>Max. ₹ 1,00,00,000</span>
                </div>
              </div>
              
              {/* Investment Period */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">Investment Period</label>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4 text-lg font-semibold text-indigo-600 min-w-20">
                    {investmentPeriod} {investmentPeriod === 1 ? 'Year' : 'Years'}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Min. 1 year</span>
                  <span>Max. 100 years</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span className="text-green-600">Short-term (1-5 yrs)</span>
                    <span className="text-blue-600">Medium-term (6-15 yrs)</span>
                    <span className="text-orange-600">Long-term (16-30 yrs)</span>
                    <span className="text-purple-600">Retirement (31-100 yrs)</span>
                  </div>
                </div>
              </div>
              
              {/* Expected Returns */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-gray-700 font-medium">Expected Annual Returns</label>
                  <span className={`text-sm font-semibold ${getReturnColor(expectedReturn)}`}>
                    {getReturnRiskLevel(expectedReturn)}
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="2"
                    max="50"
                    step="1"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="flex-1 h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="ml-4 text-lg font-semibold text-indigo-600 min-w-16">
                    {expectedReturn}%
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Min. 2%</span>
                  <span>Max. 50%</span>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span className="text-green-600">Conservative (2-8%)</span>
                    <span className="text-blue-600">Moderate (9-15%)</span>
                    <span className="text-orange-600">Aggressive (16-25%)</span>
                    <span className="text-red-600">High Risk (26-50%)</span>
                  </div>
                </div>
              </div>
              
              {/* Step-up Option */}
              {investmentType === 'sip' && (
                <div className="mb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-gray-700 font-medium">Annual Step-up</label>
                      <p className="text-sm text-gray-500">Increase your investment annually</p>
                    </div>
                    <div className="relative inline-block w-12 h-6">
                      <input
                        type="checkbox"
                        id="step-up-toggle"
                        checked={stepUpEnabled}
                        onChange={() => setStepUpEnabled(!stepUpEnabled)}
                        className="opacity-0 w-0 h-0"
                      />
                      <label
                        htmlFor="step-up-toggle"
                        className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors ${
                          stepUpEnabled ? 'bg-indigo-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute h-4 w-4 left-1 bottom-1 bg-white rounded-full transition-transform ${
                            stepUpEnabled ? 'transform translate-x-6' : ''
                          }`}
                        ></span>
                      </label>
                    </div>
                  </div>
                  
                  {stepUpEnabled && (
                    <div className="mt-4">
                      <label className="block text-gray-700 mb-2">Step-up Percentage</label>
                      <div className="flex items-center">
                        <input
                          type="range"
                          min="5"
                          max="30"
                          step="5"
                          value={stepUpPercentage}
                          onChange={(e) => setStepUpPercentage(Number(e.target.value))}
                          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="ml-4 text-lg font-semibold text-indigo-600 min-w-16">
                          {stepUpPercentage}%
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Investment Projection</h3>
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-indigo-50 rounded-xl p-4 text-center border-l-4 border-indigo-500">
                <p className="text-sm text-indigo-700 mb-1">Total Invested</p>
                <p className="text-xl font-bold text-indigo-900">{formatCurrency(totalInvestment)}</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center border-l-4 border-green-500">
                <p className="text-sm text-green-700 mb-1">Estimated Returns</p>
                <p className="text-xl font-bold text-green-900">+{formatCurrency(estimatedReturn)}</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center border-l-4 border-purple-500">
                <p className="text-sm text-purple-700 mb-1">Future Value</p>
                <p className="text-xl font-bold text-purple-900">{formatCurrency(totalValue)}</p>
              </div>
            </div>

            {/* Return Multiple */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white mb-6 text-center">
              <p className="text-sm opacity-90">Your Money Grows</p>
              <p className="text-2xl font-bold">
                {(totalValue / totalInvestment).toFixed(1)}x
              </p>
              <p className="text-sm opacity-90">in {investmentPeriod} years</p>
            </div>
            
            {/* Yearly Breakdown */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Yearly Growth</h4>
              <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {yearlyBreakdown.map((yearData) => (
                  <div key={yearData.year} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                        <span className="text-indigo-700 font-semibold text-sm">{yearData.year}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">Year {yearData.year}</p>
                        {investmentType === 'sip' && (
                          <p className="text-xs text-gray-500">Invested: {formatCurrency(yearData.invested)}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800 text-sm">{formatCurrency(yearData.value)}</p>
                      <p className="text-xs text-green-600">
                        +{formatCurrency(yearData.value - yearData.totalInvested)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-gray-500 max-w-3xl mx-auto">
          <p>
            This calculator provides estimated projections based on your inputs and assumed rate of return. 
            Returns above 15% are considered high-risk and may not be sustainable long-term. 
            Actual returns may vary based on market conditions and other factors. This is not financial advice.
            <br />
            <span className="font-semibold">Note:</span> 100-year projections are for illustrative purposes to show the power of long-term compounding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;