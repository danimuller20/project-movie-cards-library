import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main className="movie-list-content">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </main>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes
    .arrayOf(PropTypes
      .objectOf([PropTypes.string, PropTypes.number]))
    .isRequired,
};
