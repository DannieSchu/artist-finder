import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Releases from '../../components/Releases/Releases.jsx';
import { fetchArtist, fetchReleases } from '../../services/musicbrainzAPI.jsx';
import withPaging from '../../utils/withPaging.jsx';

const ReleasesContainer = ({ match, page, setTotalPages }) => {
  const [releases, setReleases] = useState([]);
  const [artist, setArtist] = useState('');
  const [loading, setLoading] = useState(false);
  const { artistId } = match.params;

  useEffect(() => {
    setLoading(true);
    fetchArtist(artistId)
      .then(fetchedArtist => setArtist(fetchedArtist));

    fetchReleases(artistId, page)
      .then(({ releases, totalPages }) => {
        setReleases(releases),
        setTotalPages(totalPages),
        setLoading(false);
      });
  }, [page]);

  return (
    <Releases 
      releases={releases} 
      heading={artist} 
      loading={loading} />
  );
};

ReleasesContainer.propTypes = {
  page: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default withPaging(ReleasesContainer);
