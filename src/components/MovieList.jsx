import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />)
    );
  }
}

export default MovieList;
