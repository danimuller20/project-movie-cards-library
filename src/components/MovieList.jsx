import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => (
  <header>
    <h1>Movie Cards Library</h1>
    {movies.map((movie) => <MovieCard key={movie} movie={ movie } />)}
  </header>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
