import { translations } from './translations';

export const showFormattedDate = (date, language) => {
    const dateObj = new Date(date);
    const month = translations[language].months[dateObj.getMonth()];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    return `${day} ${month} ${year}`;
};