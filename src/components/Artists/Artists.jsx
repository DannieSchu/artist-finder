import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Artist from './Artist.jsx';

const Artists = ({ artists }) => {
  const artistElements = artists.map(artist => (
    <li key={artist.id}>
      <Link to={`/${artist.id}`}>
        <Artist {...artist} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {artistElements}
    </ul>
  );
};

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    birth: PropTypes.string.isRequired
  })).isRequired
};

export default Artists;
