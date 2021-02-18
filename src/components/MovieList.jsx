import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        <MovieCard key={ movie.title } movie={ movie } />
      </section>
    );
  }
}

export default MovieList;
