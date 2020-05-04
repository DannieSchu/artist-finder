import React, { useState, useEffect } from 'react';
import Controls from '../../components/Controls/Controls.jsx';
import { fetchArtists } from '../../services/fetchArtists.jsx';

const ArtistFinder = () => {
  const [artistSearch, setArtistSearch] = useState('');
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const handleChange = ({ target }) => {
    setArtistSearch(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault;
    setLoading(true);
    fetchArtists(artistSearch)
      .then(res => setArtists(res))
      .then(() => setLoading(false));
  };

  return (
    <>
      <Controls 
        onChange={handleChange} 
        onSubmit={handleSubmit} 
        value={artistSearch} 
        placeholder="Find artist" 
        buttonText="Go!" />
    </>
  );
};


export default ArtistFinder;
