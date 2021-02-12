import React from 'react';
import MovieCard from './MovieCard'
// import movies from '../data'

const MovieList = ({ movies }) => (
  <div>
  {movies.map((movie) => (
    <MovieCard key={movie.title} movie={movie} />
  ))}
  </div>);



export default MovieList;