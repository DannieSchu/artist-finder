import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Artist from './Artist.jsx';
import styles from './Artists.css';

const Artists = ({ artists, loading }) => {
  const artistElements = artists.map(artist => (
    <li key={artist.id}>
      <Link to={`/releases/${artist.id}`}>
        <Artist {...artist} />
      </Link>
    </li>
  ));

  return (
    <section className={styles.Artists}>
      {loading && <h2>Loading...</h2>}
      <h2>Artists</h2>
      <ul>
        {artistElements}
      </ul>
    </section>
  );
};

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    origin: PropTypes.string,
    birth: PropTypes.string,
    death: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool
};

export default Artists;
