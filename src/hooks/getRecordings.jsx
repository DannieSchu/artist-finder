import { useState, useEffect } from 'react';
import { fetchRelease, fetchRecordings } from '../services/musicbrainzAPI';

export const useGetRecordings = (releaseId) => {
  const [recordings, setRecordings] = useState([]);
  const [release, setRelease] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchRelease(releaseId)
      .then(fetchedRelease => setRelease(fetchedRelease));

    fetchRecordings(releaseId)
      .then(fetchedRecordings => setRecordings(fetchedRecordings))
      .then(() => setLoading(false));
  }, []);

  return { recordings, release, loading };
};

