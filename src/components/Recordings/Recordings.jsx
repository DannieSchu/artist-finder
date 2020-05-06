import PropTypes from 'prop-types';
import Recording from './Recording.jsx';
import withList from '../../utils/withList.jsx';

const Recordings = withList(Recording, 'recordings');

Recordings.propTypes = {
  recordings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default Recordings;
