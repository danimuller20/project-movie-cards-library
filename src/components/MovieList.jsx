import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
  return (
    <section className="movie-list">
      { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
    </section>
  );
}

MovieList.propTypes = { movies: PropTypes.arrayOf().isRequired };
