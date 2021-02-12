import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((movieData) => (
      <MovieCard movie={ movieData } key={ movieData.title } />
    ));
  }
}

MovieList.propTypes = {
  movies: PropTypes.array, 
}

export default MovieList;
