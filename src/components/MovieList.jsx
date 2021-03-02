// implement MovieList component here
import React, { Component, createElement } from 'react';

import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      createElement('main', { className: 'movie-list' }, movies.map(
        (eachMovie) => <MovieCard movie={ eachMovie } key={ eachMovie.title } />,
      ))
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
