import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.movies.map(movie => {
      return <MovieCard />;
    });
  }
}

export default MovieList;
