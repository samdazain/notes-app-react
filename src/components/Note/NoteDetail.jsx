import React, { useContext, useMemo } from 'react';

import { LanguageContext } from '../../contexts/LanguageContext';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils/formattedDate';

const NoteDetail = ({ note }) => {
  const { language } = useContext(LanguageContext);

  const formattedDate = useMemo(() => {
    return showFormattedDate(note.createdAt, language);
  }, [note.createdAt, language]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-colors duration-200">
      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        {note.title}
      </h2>
      <p className="text-gray-500 dark:text-gray-300 mb-4">{formattedDate}</p>
      <div className="prose max-w-none text-gray-700 dark:text-gray-200">
        {note.body}
      </div>
    </div>
  );
};

NoteDetail.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
  }).isRequired,
};

export default NoteDetail;
