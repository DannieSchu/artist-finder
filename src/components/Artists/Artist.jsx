import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name, origin, birth, death }) => {
  return (
    <>
      <tr>
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
      </tr>
    </>
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
