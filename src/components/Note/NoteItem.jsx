import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../contexts/LanguageContext';
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  unarchiveNote,
} from '../../utils/network-data';
import { showFormattedDate } from '../../utils/formattedDate';
import ArchiveButton from '../Buttons/ArchiveButton';
import DeleteButton from '../Buttons/DeleteButton';
import UnarchiveButton from '../Buttons/UnarchiveButton';

const NoteItem = ({ note, setNotes, isArchivePage }) => {
  const { language } = useContext(LanguageContext);

  const updateNotes = async () => {
    const response = isArchivePage
      ? await getArchivedNotes()
      : await getActiveNotes();
    if (!response.error) {
      setNotes(response.data);
    }
  };

  const handleDelete = async () => {
    await deleteNote(note.id);
    updateNotes();
  };

  const handleToggleArchive = async () => {
    if (note.archived) {
      await unarchiveNote(note.id);
    } else {
      await archiveNote(note.id);
    }
    updateNotes();
  };

  return (
    <div className="p-4 border rounded shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        {note.title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300">{note.body}</p>
      <p className="text-gray-500 dark:text-gray-400">
        {showFormattedDate(note.createdAt, language)}
      </p>
      <div className="flex justify-between mt-4">
        <Link
          to={`/notes/note?id=${note.id}`}
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Detail
        </Link>
        <div className="flex space-x-2">
          <DeleteButton onDelete={handleDelete} />
          {note.archived ? (
            <UnarchiveButton onUnarchive={handleToggleArchive} />
          ) : (
            <ArchiveButton onArchive={handleToggleArchive} />
          )}
        </div>
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  setNotes: PropTypes.func.isRequired,
  isArchivePage: PropTypes.bool.isRequired,
};

export default NoteItem;
