import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Artists from '../../components/Artists/Artists.jsx';
import Header from '../../components/Header/Header.jsx';
import Home from '../../components/Home/Home.jsx';
import { fetchArtists } from '../../services/musicbrainzAPI.jsx';
import withPaging from '../../utils/withPaging.jsx';

const ArtistFinder = ({ page, setTotalPages }) => {
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

  return (
    <>
      <Header 
        onChange={handleChange} 
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

ArtistFinder.propTypes = {
  page: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired
};

export default withPaging(ArtistFinder);
