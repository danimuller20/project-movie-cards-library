import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moviecard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      this.props.movies.map((movie) => <Moviecard movie={ movie } key={ movie.title } />)
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
