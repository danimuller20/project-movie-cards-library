import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (

      movies.map((movie, i) => {
        <MovieCard movie={movies} key={movie[i]} />;
      })
    );
  }
}

export default MovieList;