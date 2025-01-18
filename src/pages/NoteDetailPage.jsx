import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';

import { FaArrowLeft } from 'react-icons/fa';
import { LanguageContext } from '../contexts/LanguageContext';
import LoadingIndicator from '../components/shared/LoadingIndicator';
import NoteDetail from '../components/Note/NoteDetail';
import { getNote } from '../utils/network-data';
import { translations } from '../utils/translations';
import useQuery from '../utils/useQuery';

const NoteDetailPage = () => {
  const { language } = useContext(LanguageContext);
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = useQuery();
  const id = query.get('id');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await getNote(id);
        if (!response.error) {
          setNote(response.data);
        } else {
          setError('Note not found');
          navigate('/');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <LoadingIndicator />
      </div>
    );
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  const backLink = note?.archived ? '/archive' : '/';

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <Link to={backLink} className="text-blue-500 hover:text-blue-700">
          <FaArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold ml-2">
          {translations[language].noteDetail}
        </h1>
      </div>

      {note && <NoteDetail note={note} />}
    </div>
  );
};

export default NoteDetailPage;
