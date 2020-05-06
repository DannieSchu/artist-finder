import React, { useState } from 'react';
import Artists from '../../components/Artists/Artists.jsx';
import Header from '../../components/Header/Header.jsx';
import Home from '../../components/Home/Home.jsx';
import { fetchArtists } from '../../services/musicbrainzAPI.jsx';

const ArtistFinder = () => {
  const [artistSearch, setArtistSearch] = useState('');
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const handleChange = ({ target }) => {
    setArtistSearch(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    fetchArtists(artistSearch)
      .then(res => setArtists(res))
      .then(() => setLoading(false));
  };

  return (
    <>
      <Header onChange={handleChange} 
        onSubmit={handleSubmit} 
        value={artistSearch} 
        placeholder="Find artist" 
        buttonText="Go!"
      />
      {artists.length === 0 && <Home />}
      {artists.length !== 0 && <Artists artists={artists} heading={artistSearch} loading={loading} />}
    </>
  );
};

export default ArtistFinder;
