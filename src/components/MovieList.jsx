// implement MovieList component here
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props; // Isto esta certo?
    return (
      <section>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieList;
