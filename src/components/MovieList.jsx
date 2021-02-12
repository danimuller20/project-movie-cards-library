import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map((movie, i) =>
        <MovieCard movie={movie} key={i} />
      )
    );
  }
}

export default MovieList;