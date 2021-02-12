import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  returnMovies() {
    const { movies } = this.props;
    return movies.map((movie) => {
      return <MovieCard key={ movie.title } movie={ movie } />
    });
  }

  render() {
    return (
      <div>{this.returnMovies()}</div>
    );
  }
}

export default MovieList;
