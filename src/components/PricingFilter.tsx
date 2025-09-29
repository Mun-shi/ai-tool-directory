import React, { useState } from 'react';
import { ChevronDown, DollarSign } from 'lucide-react';

interface PricingFilterProps {
  selectedPricing: string[];
  onPricingChange: (pricing: string[]) => void;
}

const PricingFilter: React.FC<PricingFilterProps> = ({ selectedPricing, onPricingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const pricingOptions = [
    { value: 'free', label: 'Free', color: 'text-green-600 dark:text-green-400' },
    { value: 'freemium', label: 'Freemium', color: 'text-blue-600 dark:text-blue-400' },
    { value: 'paid', label: 'Paid', color: 'text-orange-600 dark:text-orange-400' }
  ];

  const togglePricing = (pricingType: string) => {
    if (selectedPricing.includes(pricingType)) {
      onPricingChange(selectedPricing.filter(p => p !== pricingType));
    } else {
      onPricingChange([...selectedPricing, pricingType]);
    }
  };

  const clearAll = () => {
    onPricingChange([]);
  };

  const selectAll = () => {
    onPricingChange(pricingOptions.map(option => option.value));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <DollarSign className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        <span className="text-gray-700 dark:text-gray-300">
          {selectedPricing.length === 0 
            ? 'All Pricing' 
            : selectedPricing.length === pricingOptions.length
            ? 'All Pricing'
            : `${selectedPricing.length} selected`
          }
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          <div className="p-2">
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Pricing Types</span>
              <div className="flex space-x-2">
                <button
                  onClick={selectAll}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  All
                </button>
                <button
                  onClick={clearAll}
                  className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
                >
                  Clear
                </button>
              </div>
            </div>
            
            {pricingOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center space-x-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedPricing.includes(option.value)}
                  onChange={() => togglePricing(option.value)}
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span className={`text-sm font-medium ${option.color}`}>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default PricingFilter;