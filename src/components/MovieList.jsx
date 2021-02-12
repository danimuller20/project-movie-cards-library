import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies;

    return (
      <section className="movieListContainer">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes
    .arrayOf(PropTypes
      .objectOf([PropTypes.string, PropTypes.number]))
    .isRequired,
};

export default MovieList;
