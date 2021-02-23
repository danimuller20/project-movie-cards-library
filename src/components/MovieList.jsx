import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <span>
        {movies.map((movie, index) => <MovieCard key={ index } />)}
      </span>
    );
  }
}

export default MovieList;
