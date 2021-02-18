import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((currentMovie, index) => <MovieCard movie={ currentMovie } key={ index } />) }
      </div>
    )}
}

export default MovieList;
