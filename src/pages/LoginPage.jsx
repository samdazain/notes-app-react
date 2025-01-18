import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import useAuth from '../hooks/useAuth';
import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { language } = useContext(LanguageContext);
  const { handleLogin, loading, error, isAuthenticated } = useAuth();
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await handleLogin(email, password);
      if (success) {
        window.location.reload();
      }
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        {translations[language].login}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder={translations[language].emailPlaceholder}
          required
          className="form-input"
          autoComplete="email"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder={translations[language].passwordPlaceholder}
          required
          className="form-input"
          autoComplete="current-password"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 
            dark:bg-blue-600 dark:hover:bg-blue-700
            transition-colors duration-200"
          disabled={loading}
        >
          {loading
            ? translations[language].inLogin
            : translations[language].login}
        </button>
        {error && <p className="text-red-500 dark:text-red-400">{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
