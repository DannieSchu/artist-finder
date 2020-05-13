import { useState, useEffect } from 'react';
import { fetchArtist, fetchReleases } from '../services/musicbrainzAPI';

export const useGetReleases = (match, page, setTotalPages) => {
  const [releases, setReleases] = useState([]);
  const [artist, setArtist] = useState('');
  const [loading, setLoading] = useState(false);
  const { artistId } = match.params;
  
  useEffect(() => {
    setLoading(true);
    fetchArtist(artistId)
      .then(fetchedArtist => setArtist(fetchedArtist));

    fetchReleases(artistId, page)
      .then(({ releases, totalPages }) => {
        setReleases(releases),
        setTotalPages(totalPages),
        setLoading(false);
      });
  }, [page]);

  return { releases, artist, loading };
};
