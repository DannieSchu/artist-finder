import PropTypes from 'prop-types';
import Artist from './Artist.jsx';
import withList from '../../utils/withList.jsx';

const Artists = withList(Artist, 'artists');

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    origin: PropTypes.string,
    birth: PropTypes.string,
    death: PropTypes.string,
  })).isRequired,
  loading: PropTypes.bool
};

export default Artists;
