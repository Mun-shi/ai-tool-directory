import React from 'react';
import { Grid, List } from 'lucide-react';

interface ViewToggleProps {
  currentView: 'detail' | 'quick';
  onViewChange: (view: 'detail' | 'quick') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="flex items-center space-x-1 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => onViewChange('quick')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
          currentView === 'quick'
            ? 'bg-blue-500 text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        <Grid className="w-4 h-4" />
        <span className="font-medium">Quick View</span>
      </button>
      
      <button
        onClick={() => onViewChange('detail')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
          currentView === 'detail'
            ? 'bg-blue-500 text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        <List className="w-4 h-4" />
        <span className="font-medium">Detail View</span>
      </button>
    </div>
  );
};

export default ViewToggle;