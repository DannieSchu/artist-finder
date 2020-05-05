import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Releases from '../../components/Releases/Releases.jsx';
import { fetchReleases } from '../../services/musicbrainzAPI.jsx';

const ReleasesContainer = ({ match }) => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchReleases(match.params.id)
      .then(fetchedReleases => setReleases(fetchedReleases))
      .then(() => setLoading(false));
  }, []);

  return (
    <Releases releases={releases} loading={loading} />
  );
};

ReleasesContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ReleasesContainer;
