import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, icon, features }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform hover:translate-y-[-8px] overflow-hidden group">
      <div className="p-6">
        <div className="w-14 h-14 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 dark:group-hover:bg-red-700 transition-colors">
          <div className="text-red-600 dark:text-red-300 group-hover:text-white transition-colors">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6">
          {price}
        </div>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <ChevronRight size={18} className="text-red-600 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 text-gray-900 dark:text-white rounded-lg transition-colors font-medium">
          Request Service
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;