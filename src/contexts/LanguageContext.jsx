import 'moment/locale/id';
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem('language') || 'id',
  );

  useEffect(() => {
    moment.locale(language);
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'id' ? 'en' : 'id'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
