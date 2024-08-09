import React from 'react';
import { Upload, RefreshCcw, Download } from 'lucide-react';

interface Transaction {
    icon: React.ElementType;
    actionType: string;
    amount: string;
    time: string;
}

const transactions: Transaction[] = [
    { icon: Upload, actionType: 'Deposit', amount: '+100.00', time: '12:00 PM' },
    { icon: RefreshCcw, actionType: 'Swap', amount: '50.00', time: '11:00 AM' },
    { icon: Download, actionType: 'Withdrawal', amount: '-200.00', time: '10:00 AM' },
];

const TransactionHistory: React.FC = () => {
    return (
        <ul className="space-y-2">
            {transactions.map((transaction, index) => (
                <li key={index} className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                    <transaction.icon className="h-6 w-6 text-blue-500 mr-3" />
                    <div className="flex-grow">
                        <p className="text-sm font-semibold">{transaction.actionType}</p>
                        <p className="text-xs text-gray-500">{transaction.time}</p>
                    </div>
                    <p className={`text-sm font-bold ${transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {transaction.amount}
                    </p>
                </li>
            ))}
        </ul>
    );
};

export default TransactionHistory;
