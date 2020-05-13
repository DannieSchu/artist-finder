import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release.jsx';
import withPaging from '../../utils/withPaging.jsx';
import withList from '../../utils/withList.jsx';
import { useGetReleases } from '../../hooks/getReleases.jsx';

const ReleasesFinder = ({ match, page, setTotalPages }) => {
  const { releases, artist, loading } = useGetReleases(match, page, setTotalPages);
  const Releases = withList(Release, 'releases');

  return (
    <Releases 
      releases={releases} 
      heading={artist} 
      loading={loading} 
    />
  );
};

ReleasesFinder.propTypes = {
  page: PropTypes.number.isRequired,
  setTotalPages: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      artistId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default withPaging(ReleasesFinder);
