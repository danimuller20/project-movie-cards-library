// implement MovieList component here
import React, { Component, createElement } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      createElement('main', null, movies.map((eachMovie) => <MovieCard movie={ eachMovie } key={ eachMovie.title } />))
    );
  }
}

export default MovieList;
