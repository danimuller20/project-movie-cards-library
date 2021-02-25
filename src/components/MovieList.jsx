import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovierCard from './MovieCard';

class MovieList extends Component {
  render() {

    const { movies } = this.props;

    return (
      <div>
        {movies.map((movie) => <MovierCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.proTypes = {
  movies: PropTypes.arrayOf(),
};

export default MovieList;
