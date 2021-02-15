import React from 'react';
import MovieCard from './MovieCard';
import Data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      Data.map((movie) => <MovieCard movies={ movie } />)
    );
  }
}

export default MovieList;
