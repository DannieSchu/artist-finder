import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Releases from '../../components/Releases/Releases.jsx';
import { fetchArtist, fetchReleases } from '../../services/musicbrainzAPI.jsx';

const ReleasesContainer = ({ match }) => {
  const [releases, setReleases] = useState([]);
  const [artist, setArtist] = useState('');
  const [loading, setLoading] = useState(false);
  const { artistId } = match.params;

  useEffect(() => {
    fetchArtist(artistId)
      .then(fetchedArtist => setArtist(fetchedArtist));

    fetchReleases(artistId)
      .then(fetchedReleases => setReleases(fetchedReleases))
      .then(() => setLoading(false));
  }, []);

  return (
    <Releases 
      releases={releases} 
      heading={artist} 
      loading={loading} />
  );
};

ReleasesContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ReleasesContainer;
