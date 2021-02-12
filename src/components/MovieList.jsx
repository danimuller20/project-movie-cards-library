import React, { Component } from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends Component {
  render() {
    return data.map((movie) => <MovieCard movie={ movie } key={ movie.title } />);
  }
}

export default MovieList;
