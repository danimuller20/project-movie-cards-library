import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props
    return (
      movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />)
    );
  }
}

export default MovieList;
