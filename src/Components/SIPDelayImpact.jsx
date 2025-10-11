import { useState, useMemo } from 'react';

const SIPDelayImpact = () => {
  const [investment, setInvestment] = useState(500);
  const [years, setYears] = useState(5);
  const [returns, setReturns] = useState(8);
  const [delay, setDelay] = useState(1);

  const calculateImpact = useMemo(() => {
    const monthlyRate = returns / 100 / 12;
    const totalMonths = years * 12;
    
    // Calculate future value without delay
    const futureValueNoDelay = investment * 
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * 
      (1 + monthlyRate);
    
    // Calculate future value with delay
    const effectiveMonths = totalMonths - delay;
    const futureValueWithDelay = effectiveMonths > 0 ? 
      investment * 
      ((Math.pow(1 + monthlyRate, effectiveMonths) - 1) / monthlyRate) * 
      (1 + monthlyRate) : 0;
    
    const loss = futureValueNoDelay - futureValueWithDelay;
    const lossPercentage = futureValueNoDelay > 0 ? (loss / futureValueNoDelay) * 100 : 0;

    return {
      futureValueNoDelay,
      futureValueWithDelay,
      loss,
      lossPercentage
    };
  }, [investment, years, returns, delay]);

  const formatCurrency = (amount) => {
    if (!amount || amount === 0) return '₹0';
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)}Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
    return `₹${Math.round(amount)}`;
  };

  const getDelayText = (months) => {
    if (months === 0) return 'Immediately';
    if (months === 1) return '1 month';
    if (months < 12) return `${months} months`;
    if (months === 12) return '1 year';
    const years = months / 12;
    return `${years} year${years > 1 ? 's' : ''}`;
  };

  // Generate year options with better distribution for 1-100 years
  const generateYearOptions = () => {
    const options = [];
    
    // Early years (1-10)
    for (let i = 1; i <= 10; i++) {
      options.push(i);
    }
    
    // Then add key milestones
    const milestones = [15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100];
    milestones.forEach(year => {
      if (year <= 100) {
        options.push(year);
      }
    });
    
    return [...new Set(options)].sort((a, b) => a - b);
  };

  const yearOptions = generateYearOptions();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-blue-100 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-600 font-semibold">Live Calculator</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Investment Timing Analyzer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover how timing affects your wealth journey. Every moment counts in compounding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Input Panel */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">Configure Your Plan</h2>
            </div>

            {/* Monthly Investment */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-700">Monthly Contribution</label>
                <span className="text-2xl font-bold text-blue-600">{formatCurrency(investment)}</span>
              </div>
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-purple-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>₹500</span>
                <span>₹1L</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {[500, 1000, 5000, 10000, 25000, 50000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setInvestment(amount)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      investment === amount
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {formatCurrency(amount)}
                  </button>
                ))}
              </div>
            </div>

            {/* Investment Period */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-700">Investment Horizon</label>
                <span className="text-2xl font-bold text-purple-600">{years} Years</span>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-3 max-h-60 overflow-y-auto p-2">
                {yearOptions.map((year) => (
                  <button
                    key={year}
                    onClick={() => setYears(year)}
                    className={`py-3 rounded-lg font-semibold transition-all ${
                      years === year
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {year}Y
                  </button>
                ))}
              </div>
              <div className="text-xs text-gray-500 text-center mt-2">
                Scroll to see more options up to 100 years
              </div>
            </div>

            {/* Expected Returns */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-700">Expected Returns</label>
                <span className="text-2xl font-bold text-green-600">{returns}% p.a.</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[6, 8, 10, 12, 14, 16, 18, 20].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setReturns(rate)}
                    className={`py-3 rounded-xl font-semibold transition-all ${
                      returns === rate
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {rate}%
                  </button>
                ))}
              </div>
            </div>

            {/* Delay Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <label className="text-lg font-semibold text-gray-700">Start After</label>
                <span className="text-xl font-bold text-orange-600">{getDelayText(delay)}</span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[0, 3, 6, 12, 24, 36, 60].map((months) => (
                  <button
                    key={months}
                    onClick={() => setDelay(months)}
                    className={`py-3 rounded-xl font-semibold transition-all ${
                      delay === months
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {months === 0 ? 'Now' : months < 12 ? `${months}M` : months === 12 ? '1Y' : `${months/12}Y`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-8">
            {/* Impact Visualization */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-800">Timing Impact Analysis</h2>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                  <div className="text-sm text-gray-600 mb-2">Starting Now</div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {formatCurrency(calculateImpact.futureValueNoDelay)}
                  </div>
                  <div className="text-xs text-green-600 font-semibold">Optimal Path</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200">
                  <div className="text-sm text-gray-600 mb-2">After Delay</div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    {formatCurrency(calculateImpact.futureValueWithDelay)}
                  </div>
                  <div className="text-xs text-red-600 font-semibold">Delayed Start</div>
                </div>
              </div>

              {/* Loss Meter */}
              <div className="bg-gradient-to-r from-gray-50 to-slate-100 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-semibold text-gray-700">Opportunity Cost</span>
                  <span className="text-2xl font-bold text-red-600">
                    {formatCurrency(calculateImpact.loss)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                  <div
                    className="bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${Math.min(calculateImpact.lossPercentage, 100)}%`
                    }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 text-center">
                  That's {calculateImpact.lossPercentage.toFixed(1)}% of potential growth lost
                </div>
              </div>
            </div>

            {/* Action Card */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-center">
                <div className="text-2xl font-bold mb-3">Ready to Begin Your Journey?</div>
                <p className="text-blue-100 mb-6 opacity-90">
                  Don't let time slip away. Start building your wealth today.
                </p>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transform transition-all duration-200 shadow-2xl">
                  Begin Investing Now →
                </button>
              </div>
            </div>

            {/* Key Insight */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl p-6 text-white shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="text-3xl">💡</div>
                <div>
                  <div className="font-bold text-lg mb-1">Compounding Insight</div>
                  <div className="text-emerald-100 text-sm">
                    Starting {delay > 0 ? getDelayText(delay) + ' earlier' : 'today'} could increase your portfolio by {formatCurrency(calculateImpact.loss)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 mb-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h2 className="text-2xl font-bold text-gray-800">Wealth Growth Timeline</h2>
          </div>
          
          <div className="flex items-center justify-between relative">
            <div className="text-center z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-2 shadow-lg">
                Now
              </div>
              <div className="text-sm font-semibold text-gray-700">Today</div>
            </div>
            
            <div className="flex-1 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-4 relative">
              {delay > 0 && (
                <div 
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                  style={{ width: `${(delay / (years * 12)) * 100}%` }}
                ></div>
              )}
            </div>
            
            <div className="text-center z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-2 shadow-lg">
                Goal
              </div>
              <div className="text-sm font-semibold text-gray-700">Year {years}</div>
            </div>
          </div>
          
          {delay > 0 && (
            <div className="text-center mt-4 p-4 bg-orange-50 rounded-2xl border border-orange-200">
              <div className="text-orange-600 font-semibold">
                Delay Period: {getDelayText(delay)} of missed growth opportunity
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SIPDelayImpact;