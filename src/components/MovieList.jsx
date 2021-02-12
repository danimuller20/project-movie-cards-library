import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    const cards = movies.map((movie, index) => (
      <MovieCard key={ `Movie Title ${(index + 1)}` } movie={ movie } />
    ));

    return <div className="movie-list">{ cards }</div>;
  }
}

MovieList.propType = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
