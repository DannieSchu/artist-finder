import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist.jsx';
import Header from '../Header/Header.jsx';
import Home from '../Home/Home.jsx';
import { useFindArtist } from '../../hooks/findArtist.jsx';
import withPaging from '../../utils/withPaging.jsx';
import withList from '../../utils/withList.jsx';

const ArtistFinder = ({ page, setTotalPages }) => {
  const { artists, loading, artistSearch, handleChange, handleSubmit } = useFindArtist({ page, setTotalPages });
  const Artists = withList(Artist, 'artists');

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
