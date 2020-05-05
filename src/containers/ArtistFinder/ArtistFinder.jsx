import React, { useState } from 'react';
import Controls from '../../components/Controls/Controls.jsx';
import { fetchArtists } from '../../services/fetchArtists.jsx';
import Artists from '../../components/Artists/Artists.jsx';
import Header from '../../components/Header/Header.jsx';
import Home from '../../components/Home/Home.jsx';

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
      .then(result => console.log(result))
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
      {artists.length !== 0 && <Artists artists={artists} />}
    </>
  );
};

export default ArtistFinder;
