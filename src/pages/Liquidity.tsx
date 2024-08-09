import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AddLiquidity from '@/components/liquidity/AddLiquidity';
import RemoveLiquidity from '@/components/liquidity/RemoveLiquidity';

const LiquidityPage: React.FC = () => {
  return (
    <div className="h-screen bg-white font-sans">
      <Header title="Liquidity" />
      <main className="p-4 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
        <AddLiquidity />
        <RemoveLiquidity />
      </main>
      <Footer />
    </div>
  );
};

export default LiquidityPage;
