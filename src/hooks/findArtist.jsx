import { useState, useEffect } from 'react';
import { fetchArtists } from '../services/musicbrainzAPI.jsx';

export const useFindArtist = ({ page, setTotalPages }) => {
  const [artistSearch, setArtistSearch] = useState('');
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target }) => {
    setArtistSearch(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    fetchArtists(artistSearch, page)
      .then(({ artists, totalPages }) => {
        setArtists(artists),
        setTotalPages(totalPages),
        setLoading(false);
      });
  };

  useEffect(() => {
    if(artistSearch) handleSubmit(event);
  }, [page]);

  return { artists, loading, artistSearch, handleChange, handleSubmit };
};
