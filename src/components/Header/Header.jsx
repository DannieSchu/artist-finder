import React from 'react';
import Controls from '../Controls/Controls.jsx';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Header = ({ onChange, onSubmit, artistSearch }) => {
  return (
    <div className={styles.Header}>
      <h1>Artist Finder</h1>
      <Controls
        onChange={onChange}
        onSubmit={onSubmit}
        value={artistSearch}
        placeholder="Find artist"
        buttonText="Go!" />
    </div>
  );
};

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string
};

export default Header;
