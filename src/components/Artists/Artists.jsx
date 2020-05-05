import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Artist from './Artist.jsx';
import styles from './Artists.css';

const Artists = ({ artists, loading }) => {
  const artistElements = artists.map(artist => (
    <Link key={artist.id} to={`/${artist.id}`}>
      <li>
        <Artist {...artist} />
      </li>
    </Link>
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
  loading: PropTypes.bool.isRequired
};

export default Artists;
