import React from 'react';
import PropTypes from 'prop-types';
import styles from '../item.css';

const Recording = ({ title }) => (
  <section className={styles.Item}>
    <h3>{title}</h3>
  </section>
);

Recording.propTypes = {
  title: PropTypes.string.isRequired
};

export default Recording;
