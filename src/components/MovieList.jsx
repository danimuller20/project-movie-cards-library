// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (prop) => (
  <div className="movie-list">
    { prop.movies.map((movie, index) => (
      <MovieCard movie={ movie } key={ `Movie Title ${index + 1}` } />))}
  </div>
);

export default MovieList;
