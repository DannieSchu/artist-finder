import React, { useState, useEffect} from 'react';
import Header from '../../components/Header/Header.jsx';

const ReleasesContainer = props => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect
  // fetch releases list from api
    // set url equal to image
  // render on load

  return (
    <>
      {releases.length !== 0 && <Releases releases={releases} loading={loading} />}
    </>
  );
};

export default ReleasesContainer;
