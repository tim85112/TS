import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import BuildingSelection from './components/BuildingSelection';
import BuildingIntake from './components/BuildingIntake';
import HomePage from './components/HomePage';
import PrivacyNotice from './components/PrivacyNotice';
import { LINKS } from './constants';
import type { Page, PublicBuilding } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [buildings, setBuildings] = useState<PublicBuilding[]>([]);
  const [catalogError, setCatalogError] = useState<string | null>(null);
  const [isCatalogLoading, setIsCatalogLoading] = useState(true);

  const loadBuildingCatalog = useCallback(async () => {
    setIsCatalogLoading(true);
    setCatalogError(null);
    try {
      const response = await fetch(LINKS.buildingWishesApi);
      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.ok || !Array.isArray(data.buildings)) {
        throw new Error(data?.message || '大樓資料暫時無法讀取');
      }
      setBuildings(data.buildings);
    } catch (error) {
      setCatalogError(error instanceof Error ? error.message : '大樓資料暫時無法讀取');
    } finally {
      setIsCatalogLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadBuildingCatalog();
  }, [loadBuildingCatalog]);

  const activeBuilding = buildings.find((building) => building.status === 'open');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-red selection:text-white">
      <Navbar onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <HomePage
            buildings={buildings}
            isCatalogLoading={isCatalogLoading}
            activeBuilding={activeBuilding}
            onNavigate={setCurrentPage}
          />
        ) : currentPage === 'buildingSelection' ? (
          <BuildingSelection
            buildings={buildings}
            isLoading={isCatalogLoading}
            error={catalogError}
            onRetry={loadBuildingCatalog}
            onBack={() => setCurrentPage('home')}
            onOpenPrivacy={() => setCurrentPage('privacy')}
          />
        ) : currentPage === 'buildingIntake' ? (
          <BuildingIntake onBack={() => setCurrentPage('home')} />
        ) : (
          <PrivacyNotice onBack={() => setCurrentPage('home')} />
        )}
      </main>
    </div>
  );
};

export default App;
