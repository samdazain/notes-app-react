import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';

import { FaArrowLeft } from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';
import NoteForm from '../components/Note/NoteForm';
import { addNote } from '../utils/network-data';
import { translations } from '../utils/translations';

const NewNotePage = () => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const handleAddNote = async (title, body) => {
    try {
      const response = await addNote({ title, body });
      if (!response.error) {
        navigate('/');
      }
    } catch (err) {
      console.error('Failed to add note:', err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <FaArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold ml-2 text-gray-900 dark:text-white">
          {translations[language].newNoteTitle}
        </h1>
      </div>
      <NoteForm onSubmit={handleAddNote} />
    </div>
  );
};

export default NewNotePage;
