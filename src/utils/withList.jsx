import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/List.css';

const withList = (ListItemComponent, propName = 'list') => {
  function WithListHOC(props) {
    const listItems = props[propName].map(item => (
      <li key={item.id}>
        <Link to={`/releases/${item.id}`}>
          <ListItemComponent {...item} />
        </Link>
      </li>
    ));

    return (
      <section className={styles.List}>
        {props.loading && <h2>Loading...</h2>}
        <h2>{ListItemComponent.name + 's'}</h2>
        <ul>
          {listItems}
        </ul>
      </section>
    );
  }

  WithListHOC.displayName = `withList(${ListItemComponent.name})`;

  return WithListHOC;
};

export default withList;
