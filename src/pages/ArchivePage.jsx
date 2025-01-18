import React, { useContext, useEffect, useState } from 'react';

import { FaHome } from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import LoadingIndicator from '../components/shared/LoadingIndicator';
import NoteList from '../components/Note/NoteList';
import SearchBar from '../components/shared/SearchBar';
import { getArchivedNotes } from '../utils/network-data';
import { translations } from '../utils/translations';

const ArchivePage = () => {
  const { language } = useContext(LanguageContext);
  const [keyword, setKeyword] = useState('');
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await getArchivedNotes();
      if (!response.error) {
        setNotes(response.data);
      }
      setLoading(false);
    };
    fetchNotes();
  }, []);

  const filteredNotes = notes.filter((note) => note.title.includes(keyword));

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">
          {' '}
          {translations[language].archivedNotes}
        </h1>
        <Link to="/">
          <FaHome size={24} className="text-blue-500 hover:text-blue-700" />
        </Link>
      </div>

      <SearchBar keyword={keyword} onKeywordChange={setKeyword} />
      <NoteList
        notes={filteredNotes}
        setNotes={setNotes}
        isArchivePage={true}
      />
    </div>
  );
};

export default ArchivePage;
