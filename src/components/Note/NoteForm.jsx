import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

const NoteForm = ({ onSubmit }) => {
  const { language } = useContext(LanguageContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, body);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={translations[language].titlePlaceholder}
        required
        className="form-input"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={translations[language].bodyPlaceholder}
        required
        rows="6"
        className="form-input"
      />
      <button type="submit" className="btn-primary">
        {translations[language].addNoteButton}
      </button>
    </form>
  );
};

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NoteForm;
