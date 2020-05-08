import React from 'react';
import PropTypes from 'prop-types';
import styles from './Paging.css';

const Paging = ({ incrementPage, page, totalPages }) => {
  return (
    <section className={styles.Paging}>
      <button onClick={() => incrementPage(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => incrementPage(1)} disabled={page >= totalPages}>&gt;</button>
    </section>
  );
};

Paging.propTypes = {
  incrementPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Paging;
