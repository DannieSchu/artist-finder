import React, { useState } from 'react';
import Controls from '../../components/Controls/Controls.jsx';
import { fetchArtists } from '../../services/fetchArtists.jsx';
import Artists from '../../components/Artists/Artists.jsx';

const ArtistFinder = () => {
  const [artistSearch, setArtistSearch] = useState('');
  const [artists, setArtists] = useState([]);
  
  const handleChange = ({ target }) => {
    setArtistSearch(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetchArtists(artistSearch)
      .then(res => setArtists(res))
      .then(result => console.log(result))
  };

  return (
    <>
      <Controls 
        onChange={handleChange} 
        onSubmit={handleSubmit} 
        value={artistSearch} 
        placeholder="Find artist" 
        buttonText="Go!" />
      <Artists artists={artists} />
    </>
  );
};

export default ArtistFinder;
