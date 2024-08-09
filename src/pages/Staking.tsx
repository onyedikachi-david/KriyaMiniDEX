import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StakeInterface from '@/components/staking/StakeInterface';
import UnstakeInterface from '@/components/staking/UnstakeInterface';

const StakingPage: React.FC = () => {
  return (
    <div className="h-screen bg-white font-sans">
      <Header title="Staking" />
      <main className="p-4 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
        <StakeInterface />
        <UnstakeInterface />
      </main>
      <Footer />
    </div>
  );
};

export default StakingPage;
