import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../global-styles/item.css';

const Artist = ({ name, origin, birth, death }) => (
  <section className={styles.item}>
    <tr>
      <th>Artist</th>
      <td>{name}</td>
    </tr>
    <tr>
      {origin && <td>{origin}</td>}
      {origin && <th>Origin</th>}
    </tr>
    <tr>
      {birth && <th>DOB</th>}
      {birth && <td>{birth.slice(0, 4)}</td>}
    </tr>
    <tr>
      {death && <td>{death.slice(0, 4)}</td>}
      {death && <th>Death</th>}
    </tr>
  </section>
);

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string,
  birth: PropTypes.string,
  death: PropTypes.string
};

export default Artist;
