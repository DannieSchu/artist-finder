import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Artists/Artist.jsx';

const Release = ({ title, date, url = '/music-icon.svg' }) => {
  return (
    <table className={styles.Artist}>
      <tr>
        <th>Release</th>
        <td>{title}</td>
      </tr>
      <tr>
        {date && <td>{date}</td>}
        {date && <th>Date</th>}
      </tr>
      <image src={url} alt={url ? name : 'Default image'} />
    </table>
  );
};

Release.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  url: PropTypes.string
};

export default Release;
