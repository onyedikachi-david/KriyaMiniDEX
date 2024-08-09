import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet, BarChart2, RefreshCcw, Plus, Minus, Droplet, Upload, Download } from 'lucide-react';

const actionButtons = [
    { icon: Wallet, label: 'Wallet', path: '/wallet' },
    { icon: BarChart2, label: 'Portfolio', path: '/portfolio' },
    { icon: RefreshCcw, label: 'Swap', path: '/swap' },
    { icon: Plus, label: 'Add Liquidity', path: '/add-liquidity' },
    { icon: Minus, label: 'Remove Liquidity', path: '/remove-liquidity' },
    { icon: Droplet, label: 'Stake', path: '/staking' },
    { icon: Upload, label: 'Deposit', path: '/deposit' },
    { icon: Download, label: 'Withdraw', path: '/withdraw' },
];

const ActionButtons: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = (path: string) => {
        console.log('Navigating to:', path); 
        navigate(path);
    };

    return (
        <div className="grid grid-cols-2 gap-3 mb-4">
            {actionButtons.map((button, index) => (
                <button
                    key={index}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-sm flex flex-col items-center justify-center"
                    onClick={() => handleButtonClick(button.path)}
                >
                    <button.icon className="h-5 w-5 mb-1" />
                    <span className="text-xs">{button.label}</span>
                </button>
            ))}
        </div>
    );
};

export default ActionButtons;