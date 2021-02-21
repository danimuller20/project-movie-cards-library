import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <MovieCard movie={ movie[0] } key="1" />
        <MovieCard movie={ movie[1] } key="2" />
        <MovieCard movie={ movie[2] } key="3" />
        <MovieCard movie={ movie[3] } key="4" />
        <MovieCard movie={ movie[4] } key="5" />
      </div>
    );
  }
}

MovieList.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieList;
