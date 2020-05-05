import React from 'react';
import PropTypes from 'prop-types';
import styles from './Artist.css';

const Artist = ({ name, origin, birth, death }) => {
  return (
    <table className={styles.Artist}>
      <>
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
      </>
    </table>
  );
};

Artist.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  origin: PropTypes.string,
  birth: PropTypes.string,
  death: PropTypes.string
};

export default Artist;

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
