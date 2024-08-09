import React from "react";
import { ArrowLeft, Settings } from "lucide-react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200">
      <button className="p-2 rounded-full hover:bg-gray-100">
        <ArrowLeft className="h-6 w-6 text-blue-500" />
      </button>
      <h1 className="text-lg font-bold text-blue-500">{title}</h1>
      <button className="p-2 rounded-full hover:bg-gray-100">
        <Settings className="h-6 w-6 text-blue-500" />
      </button>
    </header>
  );
};

export default Header;