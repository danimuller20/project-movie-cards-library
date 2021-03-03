import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.movies.map((each, index) => (
      <MovieCard movie={each} key={`Movie Title ${index + 1}`} />
    ));
  }
}

export default MovieList;
