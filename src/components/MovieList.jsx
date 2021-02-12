import React, { Component } from 'react';
import PropTypes from 'prop-types'
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const cards = this.props.movies.map((movie, index) => (
      <MovieCard key={ `Movie Title ${(index + 1)}` } movie={ movie } />
    ));

    return <div className="movie-list">{ cards }</div>;
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default MovieList;
