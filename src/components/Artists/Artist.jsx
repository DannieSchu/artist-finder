import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name, origin, birth }) => {
  const birthYear = birth.slice(0, 4);
  return (
    <>
      <h3>Artist: {name}</h3>
      <p>Origin: {origin}</p>
      <p>Born: {birthYear}</p>
    </>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired
};

export default Artist;
