import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const cards = this.props.movies.map((movie, index) => (
      <MovieCard key={ `Movie Title ${(index + 1)}` } movie={ movie } />
    ));

    return <div className="movie-list">{ cards }</div>;
  }
}

export default MovieList;
