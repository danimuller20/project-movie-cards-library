import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list">
        { movies.map((movie) => (
          <MovieCard movie={ movie } key={ movie.title } />
        )) }
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
