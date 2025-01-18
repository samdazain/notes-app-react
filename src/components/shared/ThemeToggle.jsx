import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
