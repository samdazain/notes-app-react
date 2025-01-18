import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import useAuth from '../hooks/useAuth';
import ThemeToggle from './shared/ThemeToggle';
import LanguageToggle from './shared/LanguageToggle';

const Navigation = () => {
  const { language } = useContext(LanguageContext);
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    if (!user) {
      e.preventDefault();
      alert(translations[language].loginRequired);
    }
  };

  const onLogout = () => {
    handleLogout();
    navigate('/login');
  };

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white dark:bg-gray-900">
      <div>
        <Link to="/" className="mr-4" onClick={handleHomeClick}>
          {translations[language].home}
        </Link>
        {user && (
          <button onClick={onLogout} className="mr-4">
            {translations[language].logout}
          </button>
        )}
        <ThemeToggle />
        <LanguageToggle />
      </div>
      {!user && (
        <div>
          <Link to="/login" className="mr-4">
            {translations[language].login}
          </Link>
          <Link to="/register" className="mr-4">
            {translations[language].register}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
