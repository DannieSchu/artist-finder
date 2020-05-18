import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../global-styles/detail.css';
import { useGetLyrics } from '../../hooks/getLyrics';

const Lyrics = ({ match }) => {
  const { recordingId } = match.params;
  const { lyrics, recording, artist, loading } = useGetLyrics(recordingId);

  return (
    <section className={styles.detail}>
      <h2>Lyrics for '{recording}'</h2>
      <div>
        <h3>{artist}</h3>
        {loading && <p>Your lyrics are loading</p>}
        <p>{lyrics || 'No lyrics available'}</p><br />
      </div>
    </section>
  );
};

Lyrics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recordingId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Lyrics;

