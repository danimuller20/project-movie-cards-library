import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  returnMovies() {
    const { movies } = this.props;
    return movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />));
  }

  render() {
    return (
      <div>{this.returnMovies()}</div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieList;
