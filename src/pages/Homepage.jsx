import React, { useContext, useEffect, useState } from 'react';

import { LanguageContext } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import LoadingIndicator from '../components/shared/LoadingIndicator';
import NoteList from '../components/Note/NoteList';
import SearchBar from '../components/shared/SearchBar';
import { getActiveNotes } from '../utils/network-data';
import { translations } from '../utils/translations';

const HomePage = () => {
  const { language } = useContext(LanguageContext);
  const [keyword, setKeyword] = useState('');
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await getActiveNotes();
      if (!response.error) {
        setNotes(response.data);
      }
      setLoading(false);
    };
    fetchNotes();
  }, []);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-between mb-4">
        <Link to="/notes/new" className="text-blue-500">
          {translations[language].addNote}
        </Link>
        <Link to="/archive" className="text-blue-500">
          {translations[language].archive}
        </Link>
      </nav>
      <SearchBar keyword={keyword} onKeywordChange={setKeyword} />
      <NoteList
        notes={filteredNotes}
        setNotes={setNotes}
        isArchivePage={false}
      />
    </div>
  );
};

export default HomePage;
