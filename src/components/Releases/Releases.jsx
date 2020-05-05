import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Release from './Release.jsx';
import styles from '../Artists/Artists.css';

const Releases = ({ releases }) => {
  const releaseElements = releases.map(release => (
    <li key={release.id}>
      <Link to={`/${release.id}`}>
        <Release {...release} />
      </Link>
    </li>
  ));

  return (
    <section className={styles.Releases}>
      <h2>Releases</h2>
      <ul>
        {releaseElements}
      </ul>
    </section>
  );
};

Releases.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
  })).isRequired
};

export default Releases;
