import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { useContext } from 'react';

export const useTranslation = () => {
    const { language } = useContext(LanguageContext);

    const t = (key) => translations[language][key] || key;

    return { t };
};