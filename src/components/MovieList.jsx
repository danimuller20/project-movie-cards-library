import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  const { movies } = this.props;

  render() {
    return (
      <main>
        { movies.map((movie) => <MovieCard movie={ movie }/>) }
      </main>
    );
  }
}

export default MovieList;
