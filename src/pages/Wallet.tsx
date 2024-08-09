import React, { useState, useEffect } from 'react';
import WalletBalance from '@/components/wallet/WalletBalance';
import TransactionHistory from '@/components/wallet/TransactionHistory';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { beginZkLogin, completeZkLogin, AccountData } from '@/services/suiZKLogin';
import { useMiniApp } from "@telegram-apps/sdk-react";

const WalletPage: React.FC = () => {
    const [accountData, setAccountData] = useState<AccountData | null>(null);
    const miniApp = useMiniApp();

    useEffect(() => {
        const initializeWallet = async () => {
            try {
                const setupData = await beginZkLogin('Google');
                
                // Listen for the JWT from the Telegram Mini App
                miniApp.onEvent('message', async (message) => {
                    if (message.data) {
                        const { jwt } = JSON.parse(message.data);
                        if (jwt) {
                            const account = await completeZkLogin(jwt, setupData);
                            setAccountData(account);
                        }
                    }
                });
            } catch (error) {
                console.error('Error initializing wallet:', error);
            }
        };

        initializeWallet();
    }, []);

    return (
        <div className="h-screen bg-white font-sans">
            <Header title="Wallet" />
            <main className="p-4 overflow-y-auto" style={{ height: 'calc(100% - 120px)' }}>
                <WalletBalance balance={accountData?.userAddr ? '1000.00' : '0.00'} />
                {accountData ? (
                    <TransactionHistory />
                ) : (
                    <p className="text-center text-gray-500">Please complete ZK login to view your wallet.</p>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default WalletPage;