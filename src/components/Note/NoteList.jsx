import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../contexts/LanguageContext';
import NoteItem from './NoteItem';
import { translations } from '../../utils/translations';

const NoteList = ({ notes, setNotes, isArchivePage }) => {
  const { language } = useContext(LanguageContext);

  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-500">
        {isArchivePage
          ? translations[language].emptyArchive
          : translations[language].emptyNotes}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          setNotes={setNotes}
          isArchivePage={isArchivePage}
        />
      ))}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setNotes: PropTypes.func.isRequired,
  isArchivePage: PropTypes.bool.isRequired,
};

export default NoteList;
