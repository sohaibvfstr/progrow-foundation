import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CsrModal } from './components/CsrModal';
import { QuickSearch } from './components/QuickSearch';
import { MotionControl, usePageMotion } from './components/MotionLayer';

// Pages
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { FocusAreas } from './pages/FocusAreas';
import { Initiatives } from './pages/Initiatives';
import { YouthEmpowerment } from './pages/YouthEmpowerment';
import { CsrPartnerships } from './pages/CsrPartnerships';
import { ImpactStories } from './pages/ImpactStories';
import { GetInvolved } from './pages/GetInvolved';
import { MediaResources } from './pages/MediaResources';
import { ContactUs } from './pages/ContactUs';

// ScrollToTop component
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: document.documentElement.dataset.motion === 'reduced' ? 'instant' : 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

const PageExperience: React.FC = () => {
  const { pathname } = useLocation();
  const [motionEnabled, setMotionEnabled] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  usePageMotion(motionEnabled, pathname);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setMotionEnabled(!preference.matches);
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);
  return <MotionControl enabled={motionEnabled} onToggle={() => setMotionEnabled(value => !value)} />;
};

export const App: React.FC = () => {
  const [csrModalOpen, setCsrModalOpen] = useState(false);
  const [csrInitialFocus, setCsrInitialFocus] = useState<string | undefined>(undefined);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleOpenCsrModal = (initialFocus?: string) => {
    setCsrInitialFocus(initialFocus);
    setCsrModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <PageExperience />
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-body antialiased">
        
        {/* Sticky Header */}
        <Navbar 
          onOpenCsrModal={() => handleOpenCsrModal()} 
          onOpenSearch={() => setSearchOpen(true)} 
        />

        {/* Main Content Area */}
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home onOpenCsrModal={() => handleOpenCsrModal()} />} />
            <Route path="/about" element={<AboutUs onOpenCsrModal={() => handleOpenCsrModal()} />} />
            <Route path="/focus-areas" element={<FocusAreas onOpenCsrModal={() => handleOpenCsrModal()} />} />
            <Route path="/initiatives" element={<Initiatives onOpenCsrModal={(name) => handleOpenCsrModal(name)} />} />
            <Route path="/youth-empowerment" element={<YouthEmpowerment onOpenCsrModal={() => handleOpenCsrModal()} />} />
            <Route path="/csr-partnerships" element={<CsrPartnerships onOpenCsrModal={() => handleOpenCsrModal()} />} />
            <Route path="/impact-stories" element={<ImpactStories onOpenCsrModal={() => handleOpenCsrModal()} />} />
            <Route path="/get-involved" element={<GetInvolved onOpenCsrModal={() => handleOpenCsrModal()} />} />
            <Route path="/media-resources" element={<MediaResources onOpenCsrModal={() => handleOpenCsrModal()} />} />
            <Route path="/contact" element={<ContactUs onOpenCsrModal={() => handleOpenCsrModal()} />} />
            
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Home onOpenCsrModal={() => handleOpenCsrModal()} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global CSR Co-Creation Modal */}
        <CsrModal 
          isOpen={csrModalOpen} 
          onClose={() => setCsrModalOpen(false)} 
          initialFocusArea={csrInitialFocus}
        />

        {/* Global Quick Search (Cmd+K) */}
        <QuickSearch 
          isOpen={searchOpen} 
          onClose={() => setSearchOpen(false)} 
          onOpen={() => setSearchOpen(true)}
        />

      </div>
    </Router>
  );
};

export default App;

