import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PortfolioOverview from '@/components/portfolio/PortfolioOverview';

const PortfolioPage: React.FC = () => {
  return (
    <div className="h-screen bg-white font-sans">
      <Header title="Portfolio" />
      <main className="p-4 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
        <PortfolioOverview />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
