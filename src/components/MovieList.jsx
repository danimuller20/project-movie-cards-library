// implement MovieList component here
import React, { Component } from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((element) => <MovieCard key={element.title} movie={element} />)
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.object,
}

export default MovieList;