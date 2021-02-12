import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((movieData, index) => (
      <MovieCard movie={ movieData } key={ index } />
    ));
  }
}

export default MovieList;
