import React from 'react';
import PropTypes from 'prop-types';
import styles from '../detail.css';

const Lyrics = ({ lyrics = 'No lyrics available' }) => (
  <section className={styles.Detail}>
    <h3>Lyrics</h3>
    <p>{lyrics}</p>
  </section>
);

Lyrics.propTypes = {
  lyrics: PropTypes.string
};

export default Lyrics;

