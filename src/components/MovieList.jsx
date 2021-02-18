import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((currentMovie, index) => <MovieCard movie={ currentMovie } key={ index } />) }
      </div>
    )}
}

MovieList.propTypes = {
  movies: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default MovieList;
