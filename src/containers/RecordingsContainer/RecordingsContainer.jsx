import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Recordings from '../../components/Recordings/Recordings.jsx';
import { fetchRelease, fetchRecordings } from '../../services/musicbrainzAPI.jsx';

const RecordingsContainer = ({ match }) => {
  const [recordings, setRecordings] = useState([]);
  const [release, setRelease] = useState('');
  const [loading, setLoading] = useState(false);
  const { releaseId } = match.params;

  useEffect(() => {
    fetchRelease(releaseId)
      .then(fetchedRelease => setRelease(fetchedRelease));

    fetchRecordings(releaseId)
      .then(fetchedRecordings => setRecordings(fetchedRecordings))
      .then(() => setLoading(false));
  }, []);

  return (
    <Recordings 
      recordings={recordings} 
      heading={release} 
      loading={loading} />
  );
};

RecordingsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      releaseId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default RecordingsContainer;
