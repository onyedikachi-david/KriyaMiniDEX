import React from 'react';
import { Home, FileText, Wallet, User } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <nav className="flex justify-around items-center p-4 border-t border-gray-200 bg-white">
            <button className="p-2 rounded-full hover:bg-gray-100">
                <Home className="h-6 w-6 text-blue-500" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
                <FileText className="h-6 w-6 text-gray-400" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
                <Wallet className="h-6 w-6 text-gray-400" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
                <User className="h-6 w-6 text-gray-400" />
            </button>
        </nav>
    );
};

export default Footer;
