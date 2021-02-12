// implement MovieList component here
// import movies from '../data'
import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const movies = this.props.movies
    return (
      movies.map((movie) => {
        return <MovieCard movies={movie} key={movie.title}/>
      })
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
}

export default MovieList;
