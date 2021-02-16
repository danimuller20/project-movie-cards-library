import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return movies.map((movie, index) => <MovieCard movie={ movie }  key={`${index}-${movie.title}`} />);
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default MovieList;
