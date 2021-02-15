import React from 'react';
import MovieCard from './MovieCard';
import Data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
      <MovieCard Data={Data[0]}/>
      <MovieCard Data={Data[1]}/>
      <MovieCard Data={Data[2]}/>
      <MovieCard Data={Data[3]}/>
      <MovieCard Data={Data[4]}/>
      </div>
    );
  }
}

export default MovieList;
