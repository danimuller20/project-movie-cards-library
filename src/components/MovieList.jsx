// implement MovieList component here
// import movies from '../data'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie) => <MovieCard movies={ movie } key={ movie.title } />)
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
};

export default MovieList;
