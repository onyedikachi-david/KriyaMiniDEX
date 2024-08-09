import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SwapInterface from '@/components/swap/SwapInterface';

const SwapPage: React.FC = () => {
  return (
    <div className="h-screen bg-white font-sans">
      <Header title="Swap" />
      <main className="p-4 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
        <SwapInterface />
      </main>
      <Footer />
    </div>
  );
};

export default SwapPage;
