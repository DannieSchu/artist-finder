import PropTypes from 'prop-types';
import Release from './Release.jsx';
import withList from '../../utils/withList.jsx';

const Releases = withList(Release, 'releases');

Releases.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
  })).isRequired
};

export default Releases;
