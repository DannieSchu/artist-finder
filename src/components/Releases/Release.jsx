import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Artists/Artist.jsx';

const Release = ({ title, date, url = 'music-icon.svg' }) => {
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

{/* <>
<tr>
  <th>Artist</th>
  <td>{name}</td>
</tr>
<tr>
  {origin && <th>Origin</th>}
  {origin && <td>{origin}</td>}
</tr>
<tr>
  {birth && <th>Birth</th>}
  {birth && <td>{birth.slice(0, 4)}</td>}
</tr>
<tr>
  {death && <th>Death</th>}
  {death && <td>{death.slice(0, 4)}</td>}
</tr>
</> */}

{/* <tr>
        <th>Artist</th>
      </tr>
      <tr>
        <td>{name}</td>
      </tr>
      <tr>
        {origin && <th>Origin</th>}
      </tr>
      <tr>
        {origin && <td>{origin}</td>}
      </tr>
      <tr>
        {birth && <th>Birth</th>}
        {death && <th>Death</th>}
      </tr>
      <tr>
        {birth && <td>{birth.slice(0, 4)}</td>}
        {death && <td>{death.slice(0, 4)}</td>}
      </tr> */}
