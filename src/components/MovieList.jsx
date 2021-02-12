import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const cards = movies.map((movie, index) => {
      return <MovieCard key={ index } movie={ movie } />;
    });

    return <div className="movie-list">{ cards }</div>;
  }
}

export default MovieList;
