import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </section>
    );
  }
}

export default MovieList;
