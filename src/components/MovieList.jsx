// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((element) => <MovieCard key={element.title} movie={element} />)
    );
  }
}


export default MovieList;