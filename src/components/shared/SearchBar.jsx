import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

const SearchBar = ({ keyword, onKeywordChange }) => {
  const { language } = useContext(LanguageContext);

  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => onKeywordChange(e.target.value)}
      placeholder={translations[language].searchPlaceholder}
      className="form-search-bar"
    />
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
