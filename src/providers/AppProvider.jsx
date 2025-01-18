import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';

export const AppProvider = ({ children }) => (
  <LanguageProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </LanguageProvider>
);
