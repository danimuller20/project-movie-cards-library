import React from 'react';
import MovieCard from './MovieCard';
import Data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      Data.map((movie, index) => <MovieCard movies={ movie } key={ index } />)
    );
  }
}

export default MovieList;
