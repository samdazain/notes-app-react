import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const NotFoundPage = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          404
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          {translations[language].pageNotFound}
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
            dark:bg-blue-600 dark:hover:bg-blue-700
            transition-colors duration-200"
        >
          {translations[language].backToHome}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
