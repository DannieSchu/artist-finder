import React from 'react';
import PropTypes from 'prop-types';
import buttonStyle from '../../global-styles/button.css';

const Controls = ({ onChange, onSubmit, value, placeholder, buttonText = 'Submit' }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder} />
    <button className={buttonStyle.button}>{buttonText}</button>
  </form>
);

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  buttonText: PropTypes.string
};

export default Controls;
