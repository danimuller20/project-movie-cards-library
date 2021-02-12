import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies
    return(
      <section className='movieListContainer'>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </section>
    )
  }
}

export default MovieList;
