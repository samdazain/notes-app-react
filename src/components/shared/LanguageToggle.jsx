import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { FaLanguage } from 'react-icons/fa';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className={`p-2 rounded-lg bg-gray-200 hover:bg-gray-300 
        dark:bg-gray-700 dark:hover:bg-gray-600 
        transition-colors duration-200 ml-2`}
      aria-label="Toggle language"
    >
      <div className="flex items-center">
        <FaLanguage className="text-gray-600 dark:text-gray-300" />
        <span
          className={`ml-1 text-sm font-medium 
          text-gray-700 dark:text-gray-200`}
        >
          {language.toUpperCase()}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;
