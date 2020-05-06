import React from 'react';
import PropTypes from 'prop-types';
import styles from '../detail.css';

const Lyrics = ({ lyrics = 'No lyrics available', recording, artist, loading }) => (
  <section className={styles.Detail}>
    <h2>Lyrics for '{recording}'</h2>
    <div>
      <h3>{artist}</h3>
      {loading && <p>Your lyrics are loading</p>}
      <p>{lyrics}</p><br />
    </div>
  </section>
);

Lyrics.propTypes = {
  lyrics: PropTypes.string,
  recording: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  loading: PropTypes.bool
};

export default Lyrics;

