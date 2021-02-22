import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const moviesArray = this.props;
    return moviesArray;
  }
}
MovieList.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
export default MovieList;
