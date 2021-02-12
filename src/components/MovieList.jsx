import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  returnMovies() {
    return this.props.movies.map((movie) => {
      console.log(movie);
      return <MovieCard key={movie.title} movie={movie}/>
    })
  }

  render() {
    return (
      <div>{this.returnMovies()}</div>
    )
  }
}

export default MovieList;
