import React from 'react';
import PropTypes from 'prop-types';
import styles from '../item.css';

const Release = ({ title, date, url }) => (
  <section className={styles.Item}>
    <tr>
      <th>Release</th>
      <td>{title}</td>
    </tr>
    <tr>
      {date && <td>{date}</td>}
      {date && <th>Date</th>}
    </tr>
    <img src={url} alt={url ? name : 'Default image'} />
  </section>
);

Release.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  url: PropTypes.string
};

export default Release;
