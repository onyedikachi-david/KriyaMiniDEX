import React from "react";
import { ArrowLeft, Settings } from "lucide-react";
import { useBackButton } from "@telegram-apps/sdk-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  const handleBackButton = () => {
    console.log('Navigating to:', "somewhere");

    navigate('/');
  };

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200">
      <button className="p-2 rounded-full hover:bg-gray-100" onClick={handleBackButton}>
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