// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';
// import data from '../data';

class MovieList extends Component {
  render() {
    return (
      <div>
        <p>movielist: oi eu aqui</p>
        <MovieCard />
      </div>);
  }
}

export default MovieList;
