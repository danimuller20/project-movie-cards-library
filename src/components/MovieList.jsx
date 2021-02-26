import React from 'react';
import MovieCard from './MovieCard';
import { movies } from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        { movies.map((movie, index) => <MovieCard movie={movie} key={movie.title} />) }
      </section>
    );
  }
}

export default MovieList;
