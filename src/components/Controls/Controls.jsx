import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onChange, onSubmit, value, placeholder, buttonText = 'Submit' }) => {
  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} />
      <button>{buttonText}</button>
    </form>
  );
};

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string
};

export default Controls;
