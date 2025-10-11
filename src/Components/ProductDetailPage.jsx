import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Download, Calendar, TrendingUp, Shield, Heart, 
  FileText, Calculator, PiggyBank, Target, PieChart, Landmark, 
  Users, Star, CheckCircle, Clock, AlertCircle, BookOpen, 
  Phone, MessageCircle, BarChart3, DollarSign, ShieldCheck,
  Zap, Target as TargetIcon, Users as UsersIcon, Home,
  CreditCard, Building, Scale, HeartPulse
} from 'lucide-react';

const ProductDetailPage = ({ productId, onBack }) => {
  const params = useParams();
  const navigate = useNavigate();
  
  // Get productId from URL params if not passed as prop
  const actualProductId = productId || params.productId;

  const productData = {
    'mutual-funds': {
      title: 'Mutual Funds',
      icon: PieChart,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Professionally managed investment funds that pool money from multiple investors',
      detailedDescription: 'Mutual funds offer a convenient way to invest in diversified portfolios without requiring large capital. They are managed by professional fund managers who make investment decisions based on extensive research and market analysis. With various categories like equity, debt, hybrid, and solution-oriented funds, investors can choose according to their risk appetite and financial goals.',
      keyFeatures: [
        'Professional Fund Management by experts',
        'Diversification Across Multiple Assets and sectors',
        'High Liquidity with Easy Exit Options',
        'Systematic Investment Plans (SIP) available',
        'Transparent NAV Pricing updated daily',
        'Various Categories: Equity, Debt, Hybrid, ELSS'
      ],
      benefits: [
        'Suitable for all risk profiles - conservative to aggressive',
        'Start with small investments as low as ₹500',
        'Tax benefits under ELSS category (Section 80C)',
        'Long-term wealth creation potential',
        'Professional management without active involvement',
        'Regular monitoring and rebalancing'
      ],
      minimumInvestment: '₹500',
      lockInPeriod: '3 years for ELSS, None for others',
      riskLevel: 'Low to High (depending on category)',
      expectedReturns: '10-15% annually',
      taxBenefits: 'ELSS offers tax deduction under Section 80C up to ₹1.5 lakh',
      suitability: 'Ideal for all investors looking for professional management and diversification',
      process: ['KYC Registration', 'Choose Fund Category', 'Select Fund House', 'Invest through SIP/Lump Sum'],
      documentsRequired: ['PAN Card', 'Aadhar Card', 'Bank Details', 'Cancelled Cheque']
    },
    'sip': {
      title: 'Systematic Investment Plan (SIP)',
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Invest fixed amounts regularly to benefit from rupee cost averaging',
      detailedDescription: 'SIP is a disciplined investment approach where you invest a fixed amount at regular intervals (monthly, quarterly) in mutual funds. This strategy helps in rupee cost averaging - you buy more units when prices are low and fewer units when prices are high, thus averaging your purchase cost over time. It eliminates the need for market timing and instills financial discipline.',
      keyFeatures: [
        'Rupee Cost Averaging benefits',
        'Disciplined Investing Approach',
        'Flexible Investment Amounts from ₹500',
        'Auto-debit Facility for convenience',
        'Power of Compounding over long term',
        'Flexible to pause or stop anytime'
      ],
      benefits: [
        'Eliminates market timing risk',
        'Power of compounding benefits over long term',
        'Flexible to increase/decrease SIP amount',
        'Convenient auto-debit option',
        'Financial discipline cultivation',
        'Small regular investments lead to big corpus'
      ],
      minimumInvestment: '₹500 per month',
      lockInPeriod: '3 years for ELSS, None for others',
      riskLevel: 'Medium to High',
      expectedReturns: '12-18% annually (equity funds)',
      taxBenefits: 'ELSS SIPs qualify for Section 80C deductions',
      suitability: 'Perfect for salaried individuals and regular investors',
      process: ['Complete KYC', 'Choose SIP Amount & Date', 'Set Auto-debit', 'Monitor & Review'],
      documentsRequired: ['PAN Card', 'Aadhar Card', 'Bank Account', 'KYC Documents']
    },
    'bonds': {
      title: 'Bonds',
      icon: Landmark,
      gradient: 'from-purple-500 to-indigo-500',
      description: 'Fixed income instruments providing regular interest and capital protection',
      detailedDescription: 'Bonds are debt instruments where you lend money to governments or corporations for a fixed period at a predetermined interest rate. They offer stable returns and are considered safer than equities, making them ideal for conservative investors seeking regular income. Government bonds are virtually risk-free while corporate bonds offer higher returns with slightly higher risk.',
      keyFeatures: [
        'Fixed Interest Income payments',
        'Capital Preservation focus',
        'Regular Coupon Payments semi-annually',
        'Government and Corporate Bonds available',
        'Tax-free Bonds Available for certain categories',
        'Tradable in Secondary Market'
      ],
      benefits: [
        'Predictable returns with fixed interest',
        'Lower risk than equities',
        'Portfolio diversification benefits',
        'Regular income stream',
        'Capital protection at maturity',
        'Inflation-beating returns in some cases'
      ],
      minimumInvestment: '₹10,000',
      lockInPeriod: '1-30 years',
      riskLevel: 'Low to Medium',
      expectedReturns: '6-9% annually',
      taxBenefits: 'Tax-free bonds offer completely tax-free returns',
      suitability: 'Best for conservative investors and retirees seeking regular income',
      process: ['Open Demat Account', 'Choose Bond Type', 'Invest through Primary/Secondary Market', 'Receive Regular Interest'],
      documentsRequired: ['PAN Card', 'Demat Account', 'Bank Details', 'KYC Documents']
    },
    'shares': {
      title: 'Stocks & Equity',
      icon: BarChart3,
      gradient: 'from-orange-500 to-red-500',
      description: 'Direct ownership in publicly traded companies with potential for high returns',
      detailedDescription: 'Shares represent ownership in publicly traded companies. When you buy shares, you become a shareholder and participate in the company success through capital appreciation and dividends. Equity investing offers high return potential but comes with higher risk compared to other investment options. It requires research and understanding of market dynamics.',
      keyFeatures: [
        'Direct Company Ownership rights',
        'Capital Appreciation Potential',
        'Dividend Income quarterly/annually',
        'High Liquidity in stock markets',
        'Demat Account Required for trading',
        'Intraday and Delivery Trading options'
      ],
      benefits: [
        'High return potential over long term',
        'Ownership in leading companies',
        'Dividend income regular payouts',
        'High liquidity easy to buy/sell',
        'Portfolio diversification across sectors',
        'Voting rights in company decisions'
      ],
      minimumInvestment: 'No minimum',
      lockInPeriod: 'None',
      riskLevel: 'High',
      expectedReturns: '12-20% annually (long-term)',
      taxBenefits: 'Long-term capital gains tax benefits available',
      suitability: 'Suitable for high-risk investors with long-term horizon',
      process: ['Open Trading Account', 'Research Stocks', 'Place Order', 'Monitor Portfolio'],
      documentsRequired: ['PAN Card', 'Aadhar Card', 'Demat Account', 'Trading Account']
    },
    'life-health-insurance': {
      title: 'Life & Health Insurance',
      icon: HeartPulse,
      gradient: 'from-pink-500 to-rose-500',
      description: 'Comprehensive protection for life and health emergencies',
      detailedDescription: 'Insurance plans provide financial protection against life uncertainties. Life insurance ensures your family financial security in your absence, while health insurance covers medical expenses during health emergencies. These plans offer peace of mind and financial stability during challenging times.',
      keyFeatures: [
        'Life Coverage financial protection',
        'Health Emergency Coverage',
        'Critical Illness Cover included',
        'Tax Benefits under Section 80D',
        'Family Floater Options available',
        'Cashless Hospitalization network'
      ],
      benefits: [
        'Financial security for family',
        'Medical expense coverage',
        'Tax savings benefits',
        'Peace of mind',
        'Emergency fund protection',
        'Cashless treatment facilities'
      ],
      minimumInvestment: '₹10,000 annually',
      lockInPeriod: '1 year renewable',
      riskLevel: 'Low',
      expectedReturns: 'NA (Protection focused)',
      taxBenefits: 'Premium paid qualifies for deduction under Section 80D',
      suitability: 'Essential for every individual and family',
      process: ['Need Analysis', 'Choose Plan', 'Medical Checkup', 'Policy Issuance'],
      documentsRequired: ['ID Proof', 'Address Proof', 'Income Proof', 'Medical Reports']
    },
    'ulip': {
      title: 'ULIP Plans',
      icon: Shield,
      gradient: 'from-teal-500 to-blue-500',
      description: 'Unit Linked Insurance Plans combining insurance with investment',
      detailedDescription: 'ULIPs combine insurance coverage with investment opportunities. A portion of your premium goes towards life cover, while the rest is invested in funds of your choice, allowing you to participate in market growth while being insured. They offer flexibility in choosing investment funds and switching between them.',
      keyFeatures: [
        'Insurance + Investment combo',
        'Multiple Fund Options available',
        'Flexible Premium Payment terms',
        'Partial Withdrawal facility',
        'Top-up Options for additional investment',
        'Switching Between Funds allowed'
      ],
      benefits: [
        'Dual benefit of protection and wealth',
        'Market-linked returns potential',
        'Tax benefits under Section 80C and 10(10D)',
        'Flexibility in fund management',
        'Transparency in charges and allocations',
        'Goal-based investment planning'
      ],
      minimumInvestment: '₹1,500 monthly',
      lockInPeriod: '5 years',
      riskLevel: 'Medium',
      expectedReturns: '8-12% annually',
      taxBenefits: 'Dual tax benefits under Section 80C and 10(10D)',
      suitability: 'Ideal for those wanting insurance with investment growth',
      process: ['Need Analysis', 'Choose Fund', 'Pay Premium', 'Track Performance'],
      documentsRequired: ['PAN Card', 'Aadhar Card', 'Income Proof', 'Bank Details']
    },
    'term-plan': {
      title: 'Term Insurance',
      icon: FileText,
      gradient: 'from-gray-600 to-slate-700',
      description: 'Pure life insurance protection at affordable premiums',
      detailedDescription: 'Term insurance is the purest form of life insurance that provides high life cover at affordable premiums. It ensures your family financial stability in case of your untimely demise, without any maturity benefits if you survive the policy term. It is the most cost-effective way to get substantial life cover.',
      keyFeatures: [
        'High Life Cover affordable premiums',
        'Pure Risk Coverage only',
        'Critical Illness Riders available',
        'Accidental Death Benefit options',
        'Flexible Policy Terms 10-40 years',
        'Premium Return Options available'
      ],
      benefits: [
        'High coverage at low cost',
        'Financial security for dependents',
        'Tax benefits under Section 80C',
        'Peace of mind',
        'Additional rider benefits',
        'Simple and transparent structure'
      ],
      minimumInvestment: '₹500 monthly',
      lockInPeriod: '10-40 years',
      riskLevel: 'Low',
      expectedReturns: 'NA (Pure protection)',
      taxBenefits: 'Premium paid qualifies for Section 80C deduction',
      suitability: 'Must-have for every earning family member',
      process: ['Cover Calculation', 'Choose Plan', 'Medical Test', 'Policy Start'],
      documentsRequired: ['ID Proof', 'Address Proof', 'Income Proof', 'Nominee Details']
    },
    'loans': {
      title: 'Loan Services',
      icon: CreditCard,
      gradient: 'from-yellow-500 to-amber-500',
      description: 'Personal, home, and business loans with flexible repayment',
      detailedDescription: 'We offer various loan products including personal loans for immediate needs, home loans for property purchase, and business loans for entrepreneurial ventures, all with competitive interest rates and flexible repayment terms. Our loan solutions are designed to meet diverse financial requirements.',
      keyFeatures: [
        'Competitive Interest Rates',
        'Flexible Repayment Tenure',
        'Quick Approval Process',
        'Minimal Documentation required',
        'Online Application facility',
        'Top-up Loan Options available'
      ],
      benefits: [
        'Meet financial needs immediately',
        'Flexible repayment options',
        'Quick disbursal process',
        'Transparent charges',
        'No hidden costs',
        'Customized loan solutions'
      ],
      minimumInvestment: 'NA',
      lockInPeriod: '6 months to 1 year (prepayment)',
      riskLevel: 'NA',
      expectedReturns: 'NA',
      taxBenefits: 'Home loan interest qualifies for Section 24 and 80C benefits',
      suitability: 'For individuals and businesses needing financial assistance',
      process: ['Application', 'Documentation', 'Verification', 'Disbursal'],
      documentsRequired: ['ID Proof', 'Address Proof', 'Income Proof', 'Bank Statements']
    },
    'fixed-deposit': {
      title: 'Fixed Deposits',
      icon: PiggyBank,
      gradient: 'from-indigo-500 to-blue-500',
      description: 'Safe and guaranteed returns with fixed interest rates',
      detailedDescription: 'Fixed deposits offer guaranteed returns with capital protection. They are ideal for conservative investors seeking stable returns without market risks, with flexible tenure options from 7 days to 10 years. Senior citizens enjoy additional interest rates making it attractive for retirement planning.',
      keyFeatures: [
        'Guaranteed Returns assured',
        'Capital Protection secure',
        'Flexible Tenure Options 7 days-10 years',
        'Quarterly Interest Payouts',
        'Loan Against FD facility',
        'Senior Citizen Extra Benefits'
      ],
      benefits: [
        'Zero market risk',
        'Predictable returns',
        'Liquidity through loans',
        'Flexible tenure options',
        'Higher rates for seniors',
        'Emergency fund option'
      ],
      minimumInvestment: '₹1,000',
      lockInPeriod: '7 days to 10 years',
      riskLevel: 'Very Low',
      expectedReturns: '5-7% annually',
      taxBenefits: 'Tax-saving FDs available with 5-year lock-in',
      suitability: 'Perfect for conservative investors and emergency funds',
      process: ['Application', 'Deposit Amount', 'Receive Certificate', 'Maturity Payout'],
      documentsRequired: ['PAN Card', 'Aadhar Card', 'Bank Account']
    },
    'tax-saving': {
      title: 'Tax Saving Instruments',
      icon: Target,
      gradient: 'from-red-500 to-pink-500',
      description: 'ELSS, PPF, NPS and other tax-efficient investment options',
      detailedDescription: 'Tax-saving investments help you reduce your tax liability while building wealth. Options include ELSS mutual funds, Public Provident Fund, National Pension System, and other instruments that offer tax benefits under Sections 80C, 80CCD, and 80D. These help in efficient tax planning and wealth creation.',
      keyFeatures: [
        'ELSS Funds equity-linked',
        'PPF Government-backed',
        'NPS Pension planning',
        'Tax Benefits multiple sections',
        'Long-term Wealth Creation',
        'Diversified Options available'
      ],
      benefits: [
        'Tax savings up to ₹1.5 lakhs',
        'Wealth creation potential',
        'Retirement planning benefits',
        'Diversified investment options',
        'Government-backed security for some',
        'Disciplined savings approach'
      ],
      minimumInvestment: '₹500 for ELSS',
      lockInPeriod: '3-15 years',
      riskLevel: 'Low to High',
      expectedReturns: '8-12% annually',
      taxBenefits: 'Multiple sections covered: 80C, 80CCD, 80D',
      suitability: 'Ideal for tax-paying individuals seeking tax efficiency',
      process: ['Choose Instrument', 'Invest', 'Claim Deduction', 'Track Growth'],
      documentsRequired: ['PAN Card', 'Aadhar Card', 'Bank Details']
    },
    'retirement-plans': {
      title: 'Retirement Planning',
      icon: Users,
      gradient: 'from-violet-500 to-purple-500',
      description: 'Build corpus for financial independence post-retirement',
      detailedDescription: 'Retirement plans help you build a substantial corpus to maintain your lifestyle after retirement. These plans involve regular contributions during your working years that grow over time and provide financial independence during retirement. They offer tax benefits and ensure you dont outlive your savings.',
      keyFeatures: [
        'Regular Income Post-retirement',
        'Systematic Contribution planning',
        'Tax Benefits under multiple sections',
        'Annuity Options for lifetime income',
        'Flexible Contribution Amounts',
        'Withdrawal Options available'
      ],
      benefits: [
        'Financial independence post-retirement',
        'Regular pension income',
        'Tax benefits during contribution and withdrawal',
        'Inflation-protected returns',
        'Peace of mind for future',
        'Professional fund management'
      ],
      minimumInvestment: '₹1,000 monthly',
      lockInPeriod: 'Until retirement age',
      riskLevel: 'Low to Medium',
      expectedReturns: '8-10% annually',
      taxBenefits: 'Deductions under Section 80C and 80CCD',
      suitability: 'Essential for every working professional',
      process: ['Retirement Planning', 'Choose Plan', 'Regular Contributions', 'Receive Pension'],
      documentsRequired: ['PAN Card', 'Aadhar Card', 'Income Proof', 'Bank Details']
    }
  };

  const product = productData[actualProductId];

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1); // Go back to previous page using React Router
    }
  };

  const handleInvestNow = () => {
    // Navigate to get-started page or show investment form
    navigate('/get-started');
  };

  const handleTalkToExpert = () => {
    // Navigate to contact page or open chat
    navigate('/get-started');
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button 
            onClick={handleBack}
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = product.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="relative bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Products</span>
          </button>
          
          <div className="text-center mb-8">
            <div className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${product.gradient} flex items-center justify-center text-white mx-auto mb-6 shadow-xl`}>
              <IconComponent size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-blue-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Product Overview</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.detailedDescription}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-yellow-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {product.keyFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <Star className="text-green-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Benefits</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Star size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process & Documents */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="text-purple-500" size={20} />
                  <h3 className="text-lg font-semibold text-gray-900">Process</h3>
                </div>
                <ol className="space-y-3">
                  {product.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-md transition-all">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 pt-0.5 font-medium">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* Documents Required */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Documents Required</h3>
                <ul className="space-y-2">
                  {product.documentsRequired.map((doc, index) => (
                    <li key={index} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-4 justify-center">
                <DollarSign className="text-blue-500" size={20} />
                <h3 className="text-xl font-bold text-gray-900">Quick Facts</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                  <span className="text-gray-600 font-medium">Min. Investment</span>
                  <span className="font-semibold text-gray-900 bg-white px-3 py-1 rounded-lg shadow-sm">{product.minimumInvestment}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border border-gray-200">
                  <span className="text-gray-600 font-medium">Lock-in Period</span>
                  <span className="font-semibold text-gray-900 bg-white px-3 py-1 rounded-lg shadow-sm">{product.lockInPeriod}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl border border-gray-200">
                  <span className="text-gray-600 font-medium">Risk Level</span>
                  <span className="font-semibold text-gray-900 bg-white px-3 py-1 rounded-lg shadow-sm">{product.riskLevel}</span>
                </div>
                {product.expectedReturns !== 'NA' && (
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl border border-gray-200">
                    <span className="text-gray-600 font-medium">Expected Returns</span>
                    <span className="font-semibold text-gray-900 bg-white px-3 py-1 rounded-lg shadow-sm">{product.expectedReturns}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Investment Insights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 shadow-lg border border-blue-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Insights</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <UsersIcon size={16} className="text-blue-500" />
                    <span className="font-medium text-gray-700">Suitable For</span>
                  </div>
                  <p className="text-sm text-gray-600 bg-white/50 p-3 rounded-lg">{product.suitability}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TargetIcon size={16} className="text-green-500" />
                    <span className="font-medium text-gray-700">Tax Benefits</span>
                  </div>
                  <p className="text-sm text-gray-600 bg-white/50 p-3 rounded-lg">{product.taxBenefits}</p>
                </div>
              </div>
            </motion.div>

            {/* Important Note */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-3xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="text-yellow-600" size={20} />
                <h3 className="text-lg font-semibold text-yellow-800">Important Note</h3>
              </div>
              <p className="text-yellow-700 text-sm leading-relaxed">
                All investments in market-linked instruments are subject to market risks. 
                Please read all scheme related documents carefully before investing. 
                Past performance is not indicative of future returns. 
                Insurance is subject to policy terms and conditions.
                Consult with your financial advisor before making any investment decisions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-6 shadow-lg border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Ready to Invest?</h3>
              <div className="space-y-3">
                <button 
                  onClick={handleInvestNow}
                  className={`w-full py-3 rounded-2xl bg-gradient-to-r ${product.gradient} text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}
                >
                  <Target size={18} />
                  Invest Now
                </button>
                <button className="w-full py-3 rounded-2xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download Brochure
                </button>
                <button 
                  onClick={handleTalkToExpert}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Talk to Expert
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;