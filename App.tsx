import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import Partners from './components/Partners';
import Footer from './components/Footer';
import BuildingSelection from './components/BuildingSelection';
import DeliveryShowcase from './components/DeliveryShowcase';
import BuildingIntake from './components/BuildingIntake';
import type { Page } from './types';

const PAGE_PATHS: Record<Page, string> = {
  home: '/',
  buildingSelection: '/buildings',
  buildingIntake: '/apply',
};

const pathToPage = (pathname: string): Page => {
  const match = (Object.entries(PAGE_PATHS) as [Page, string][]).find(([, path]) => path === pathname);
  return match ? match[0] : 'home';
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(() => pathToPage(window.location.pathname));

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    const path = PAGE_PATHS[page];
    if (window.location.pathname !== path) {
      window.history.pushState({ page }, '', path);
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onPopState = () => setCurrentPage(pathToPage(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-red selection:text-white">
      <Navbar onNavigate={navigate} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={navigate} />
            <Comparison />
            <HowItWorks onNavigate={navigate} />
            <DeliveryShowcase />
            <Partners />
            <Footer onNavigate={navigate} />
          </>
        ) : currentPage === 'buildingSelection' ? (
          <BuildingSelection onBack={() => navigate('home')} />
        ) : (
          <BuildingIntake onBack={() => navigate('home')} />
        )}
      </main>
    </div>
  );
};

export default App;
