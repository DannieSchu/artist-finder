import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../global-styles/item.css';

const Recording = ({ title }) => (
  <section className={styles.item}>
    <h3>{title}</h3>
  </section>
);

Recording.propTypes = {
  title: PropTypes.string.isRequired
};

export default Recording;
