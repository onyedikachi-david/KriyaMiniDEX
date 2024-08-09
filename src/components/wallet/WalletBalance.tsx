import React from 'react';

interface WalletBalanceProps {
    balance: string;
}

const WalletBalance: React.FC<WalletBalanceProps> = ({ balance }) => {
    return (
        <div className="bg-gray-100 rounded-lg p-4 shadow-sm mb-4">
            <h2 className="text-sm font-semibold text-gray-500">Wallet Balance</h2>
            <p className="text-3xl font-bold text-blue-500">${balance}</p>
            <p className="text-xs text-gray-400">USD</p>
        </div>
    );
};

export default WalletBalance;