import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <MovieCard movie={ movie[0] } key="1" />
        <MovieCard movie={ movie[1] } key="2" />
        <MovieCard movie={ movie[2] } key="3" />
        <MovieCard movie={ movie[3] } key="4" />
        <MovieCard movie={ movie[4] } key="5" />

      {/* <MovieList movie={ movies[0] } key="1" />
      <MovieList movie={ movies[1] } key="2" />
      <MovieList movie={ movies[2] } key="3" />
      <MovieList movie={ movies[3] } key="4" />
      <MovieList movie={ movies[4] } key="5" /> */}
      </div>
    );
  }
}

export default MovieList;
