// src/App.jsx
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Feedback from './Components/Feedback'
import InvestmentCalculator from './Components/InvestmentCalculator'
import SIPDelayImpact from './Components/SIPDelayImpact'
import QuickLinks from './Components/QuickLinks'
import InvestmentAdvantages from './Components/InvestmentAdvantages'
import GetStartedPage from './Components/GetStartedPage'
import TestimonialsPage from './Components/TestimonialsPage'
import QuickLinkDetailPage from './Components/QuickLinkDetailPage'
import FinancialProducts from './Components/FinancialProducts'
import ProductDetailPage from './Components/ProductDetailPage'

// Home Page Component
function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  const handleReadMoreStories = () => {
    navigate('/testimonials');
  };

  const handleQuickLinkSelect = (linkType) => {
    navigate(`/quick-links/${linkType}`);
  };

  const handleProductSelect = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleWatchDemo = () => {
    navigate('/platform-demo');
  };

  // Scroll to section when hash changes or on page load
  useEffect(() => {
    const handleScrollToSection = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      } else if (location.pathname === '/') {
        // Scroll to top when on home page without hash
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleScrollToSection();
  }, [location]);

  return (
    <>
      <section id="home">
        <Hero onGetStarted={handleGetStarted} />
      </section>

      <section id="financial-products">
        <FinancialProducts onProductSelect={handleProductSelect} />
      </section>
      
      <section id="calculator">
        <InvestmentCalculator />
      </section>
      
      <section id="sip-calculator">
        <SIPDelayImpact />
      </section>
      
      <section id="advantages">
        <InvestmentAdvantages 
          onGetStarted={handleGetStarted} 
          onWatchDemo={handleWatchDemo} 
        />
      </section>
      
      <section id="quick-links">
        <QuickLinks onQuickLinkSelect={handleQuickLinkSelect} />
      </section>
      
      <section id="feedback">
        <Feedback 
          onGetStarted={handleGetStarted} 
          onReadMoreStories={handleReadMoreStories} 
        />
      </section>
      
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

// Router-enabled Navbar
function RouterNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home with hash
      navigate(`/#${sectionId}`);
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update URL without reload
        window.history.pushState(null, '', `/#${sectionId}`);
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection('home');
    }
  };

  return (
    <Navbar 
      scrollToSection={scrollToSection}
      currentPath={location.pathname}
      onLogoClick={handleLogoClick}
    />
  );
}

// Wrapper components for pages with back navigation
function GetStartedPageWrapper() {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return <GetStartedPage onBack={handleBack} />;
}

function TestimonialsPageWrapper() {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate(-1);
  };

  return <TestimonialsPage onBack={handleBack} />;
}

function QuickLinkDetailPageWrapper() {
  const navigate = useNavigate();
  const { linkType } = useParams();
  
  const handleBack = () => {
    navigate(-1);
  };

  return <QuickLinkDetailPage linkType={linkType} onBack={handleBack} />;
}

function ProductDetailPageWrapper() {
  const navigate = useNavigate();
  const { productId } = useParams();
  
  const handleBack = () => {
    navigate(-1);
  };

  return <ProductDetailPage productId={productId} onBack={handleBack} />;
}

// Import useParams
import { useParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <RouterNavbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/get-started" element={<GetStartedPageWrapper />} />
            <Route path="/testimonials" element={<TestimonialsPageWrapper />} />
            <Route path="/quick-links/:linkType" element={<QuickLinkDetailPageWrapper />} />
            <Route path="/products/:productId" element={<ProductDetailPageWrapper />} />
            {/* Add a catch-all route to redirect to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;