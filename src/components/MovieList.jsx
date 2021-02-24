// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div>
        {this.props.movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}

export default MovieList;
