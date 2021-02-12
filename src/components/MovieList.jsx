import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        {movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />)}
      </section>
    )
  }
}

export default MovieList;
