import React from 'react';
import MovieCard from './MovieCard'
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map( movie => <MovieCard key={ movie.title } movie={ movie } />)}
      </section>
    );
  }
}

MovieList.PropTypes = {
  movies: PropTypes
  .arrayOf(PropTypes
    .objectOf([PropTypes.string, PropTypes.number]))
    .isRequired,
};

export default MovieList;
