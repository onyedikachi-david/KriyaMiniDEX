import React from 'react';
import WalletBalance from '@/components/wallet/WalletBalance';
import TransactionHistory from '@/components/wallet/TransactionHistory';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ActionButtons from '@/components/wallet/ActionButtons';

const DeFiMiniApp: React.FC = () => {
    return (
        <div className="h-screen bg-white font-sans">
            <Header title="DeFi Mini" />
            <main className="p-4 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
                <WalletBalance />
                <ActionButtons />
                <TransactionHistory />
            </main>
            <Footer />
        </div>
    );
};

export default DeFiMiniApp;
