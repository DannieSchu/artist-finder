import React from 'react';
import PropTypes from 'prop-types';
import Recording from './Recording.jsx';
import withList from '../../utils/withList.jsx';
import { useGetRecordings } from '../../hooks/getRecordings.jsx';

const RecordingsFinder = ({ match }) => {
  const { releaseId } = match.params;
  const { recordings, release, loading } = useGetRecordings(releaseId);
  const Recordings = withList(Recording, 'recordings');

  return (
    <Recordings 
      recordings={recordings} 
      heading={release} 
      loading={loading} 
    />
  );
};

RecordingsFinder.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      releaseId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default RecordingsFinder;
