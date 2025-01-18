import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import useAuth from '../hooks/useAuth';
import useInput from '../hooks/useInput';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const { language } = useContext(LanguageContext);
  const { handleRegister, loading, error } = useAuth();
  const [name, handleNameChange] = useInput('');
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [confirmPassword, handleConfirmPasswordChange] = useInput('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(translations[language].passwordMismatch);
      return;
    }

    const success = await handleRegister(name, email, password);
    if (success) {
      alert(translations[language].registerSuccess);
      navigate('/login');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        {translations[language].register}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder={translations[language].namePlaceholder}
          required
          className="form-input"
          autoComplete="name"
        />
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
          autoComplete="new-password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder={translations[language].confirmPasswordPlaceholder}
          required
          className="form-input"
          autoComplete="new-password"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 
            dark:bg-blue-600 dark:hover:bg-blue-700
            transition-colors duration-200"
          disabled={loading}
        >
          {loading
            ? translations[language].registering
            : translations[language].register}
        </button>
        {error && <p className="text-red-500 dark:text-red-400">{error}</p>}
      </form>
    </div>
  );
};

export default RegisterPage;
