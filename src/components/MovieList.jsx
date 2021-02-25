import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <span>
        { movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />)};
      </span>
    );
  }
}

export default MovieList;
